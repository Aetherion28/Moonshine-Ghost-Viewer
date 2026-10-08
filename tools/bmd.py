#!/usr/bin/env python3
"""Decode Nintendo J3D models (.bmd/.bdl) from Super Mario Sunshine into glTF meshes.

Reads INF1 (scene graph), VTX1 (vertex arrays), EVP1/DRW1 (skinning), JNT1 (joints),
SHP1 (display lists), MAT3 (materials) and TEX1 (textures). Geometry is posed at its
bind pose in model space. Materials are approximated for a WebGL viewer: the first TEV
texture, vertex or register colour, alpha test/blend, and a second texture layer blended
by vertex alpha (Sunshine's terrain blends). Layout references: noclip.website's
J3DLoader (MIT) and the doldecomp/sms J3D loader.
"""
from __future__ import annotations

import math
import struct
from dataclasses import dataclass, field

import numpy as np

import gx_texture

# GX vertex attributes
PNMTXIDX, TEX0MTXIDX, POS, NRM, CLR0, CLR1, TEX0, NBT, NULL = 0, 1, 9, 10, 11, 12, 13, 25, 0xFF
VTX_ARRAYS = [POS, NRM, NBT, CLR0, CLR1] + [TEX0 + i for i in range(8)]
COMP_SIZE = {0: 1, 1: 1, 2: 2, 3: 2, 4: 4}
COMP_FMT = {0: "B", 1: "b", 2: ">u2", 3: ">i2", 4: ">f4"}
CLR_SIZE = {0: 2, 1: 3, 2: 4, 3: 2, 4: 3, 5: 4}
WRAP = {0: 33071, 1: 10497, 2: 33648}  # GX clamp/repeat/mirror -> GL


def u8(b, o): return b[o]
def u16(b, o): return struct.unpack_from(">H", b, o)[0]
def s16(b, o): return struct.unpack_from(">h", b, o)[0]
def u32(b, o): return struct.unpack_from(">I", b, o)[0]
def f32(b, o): return struct.unpack_from(">f", b, o)[0]


def string_table(b, off):
    n = u16(b, off)
    out = []
    for i in range(n):
        so = u16(b, off + 4 + i * 4 + 2)
        e = b.index(b"\0", off + so)
        out.append(b[off + so:e].decode("shift_jis", "replace"))
    return out


def euler_matrix(x, y, z):
    cx, sx, cy, sy, cz, sz = math.cos(x), math.sin(x), math.cos(y), math.sin(y), math.cos(z), math.sin(z)
    rx = np.array([[1, 0, 0], [0, cx, -sx], [0, sx, cx]])
    ry = np.array([[cy, 0, sy], [0, 1, 0], [-sy, 0, cy]])
    rz = np.array([[cz, -sz, 0], [sz, cz, 0], [0, 0, 1]])
    return rz @ ry @ rx


@dataclass
class Material:
    name: str
    translucent: bool
    alpha_ref: float | None        # alpha test threshold 0..1 or None
    blend: bool
    use_vertex_color: bool
    mat_color: tuple
    base: tuple | None = None      # (tex1 index, texcoord attr, texmtx 2x3 or None)
    layer: tuple | None = None     # second texture blended by vertex alpha
    cull: int = 0
    used: list = field(default_factory=list)  # every distinct texture the TEV stages sample
    tev: dict | None = None        # TEV stages and colour registers (for baking NPC colours)


@dataclass
class Model:
    joints_world: list = field(default_factory=list)
    joint_names: list = field(default_factory=list)
    joint_parent: list = field(default_factory=list)
    joint_trs: list = field(default_factory=list)     # (scale xyz, euler radians xyz, translation xyz)
    draw_weights: list = field(default_factory=list)  # per draw matrix: [(joint, weight), ...]
    materials: list = field(default_factory=list)
    textures: list = field(default_factory=list)   # (name, rgba ndarray, wrapS, wrapT)
    meshes: list = field(default_factory=list)     # dicts: material, pos, uv{attr:..}, color, tris


def read_chunks(data: bytes) -> dict:
    assert data[:3] == b"J3D", "not a J3D file"
    chunks = {}
    off = 0x20
    for _ in range(u32(data, 0x0C)):
        cid = data[off:off + 4].decode()
        size = u32(data, off + 4)
        chunks[cid] = data[off:off + size]
        off += size
    return chunks


def parse(data: bytes, decode_textures: bool = True, bmt: bytes | None = None,
          pose: dict | None = None) -> Model:
    """bmt: optional material/texture file (.bmt) that overrides the model's MAT3/TEX1.
    pose: optional {joint index: 4x4 local matrix} to bake the model in an animated pose."""
    chunks = read_chunks(data)
    if bmt is not None:
        chunks.update(read_chunks(bmt))
    m = Model()
    inf, vtx, evp, drw, jnt, shp = (chunks[k] for k in ("INF1", "VTX1", "EVP1", "DRW1", "JNT1", "SHP1"))
    mat = chunks.get("MAT3") or chunks.get("MAT2")
    tex = chunks.get("TEX1")

    # --- JNT1
    jcount = u16(jnt, 8)
    jdata, jremap = u32(jnt, 0x0C), u32(jnt, 0x10)
    m.joint_names = string_table(jnt, u32(jnt, 0x14))
    local = []
    for i in range(jcount):
        o = jdata + u16(jnt, jremap + i * 2) * 0x40
        sc = [f32(jnt, o + 4 + k * 4) for k in range(3)]
        rot = [s16(jnt, o + 0x10 + k * 2) / 0x7FFF * math.pi for k in range(3)]
        tr = [f32(jnt, o + 0x18 + k * 4) for k in range(3)]
        m.joint_trs.append((sc, rot, tr))
        mm = np.eye(4)
        mm[:3, :3] = euler_matrix(*rot) @ np.diag(sc)
        mm[:3, 3] = tr
        local.append(pose[i] if pose and i in pose else mm)

    # --- INF1 hierarchy: joint parents and shape -> material
    h = u32(inf, 0x14)
    parent = [-1] * jcount
    shape_mat = {}
    stack, last_joint, last_mat, last = [], -1, -1, None
    joint_stack = [-1]
    while True:
        t, idx = u16(inf, h), u16(inf, h + 2)
        h += 4
        if t == 0x00:
            break
        if t == 0x01:
            stack.append(last)
            joint_stack.append(last_joint)
        elif t == 0x02:
            stack.pop()
            last_joint = joint_stack.pop()
        elif t == 0x10:
            parent[idx] = joint_stack[-1]
            last_joint, last = idx, ("j", idx)
        elif t == 0x11:
            last_mat, last = idx, ("m", idx)
        elif t == 0x12:
            shape_mat[idx] = last_mat
            last = ("s", idx)
    world = [None] * jcount

    def joint_world(i):
        if world[i] is None:
            world[i] = local[i] if parent[i] < 0 else joint_world(parent[i]) @ local[i]
        return world[i]
    m.joints_world = [joint_world(i) for i in range(jcount)]
    m.joint_parent = parent

    # --- EVP1 / DRW1 -> one 4x4 matrix per draw-matrix index (bind pose, model space)
    env_count = u16(evp, 8)
    cnt_o, idx_o, w_o, ib_o = (u32(evp, 0x0C + k * 4) for k in range(4))
    envelopes, k = [], 0
    for i in range(env_count):
        n = evp[cnt_o + i]
        envelopes.append([(u16(evp, idx_o + (k + j) * 2), f32(evp, w_o + (k + j) * 4)) for j in range(n)])
        k += n
    def inv_bind(j):
        mm = np.eye(4)
        mm[:3, :] = np.array(struct.unpack_from(">12f", evp, ib_o + j * 0x30)).reshape(3, 4)
        return mm
    dcount = u16(drw, 8)
    dkind, ddata = u32(drw, 0x0C), u32(drw, 0x10)
    draw_mtx = []
    for i in range(dcount):
        kind, p = drw[dkind + i], u16(drw, ddata + i * 2)
        if kind == 0:
            draw_mtx.append(m.joints_world[p])
            m.draw_weights.append([(p, 1.0)])
        else:
            acc = np.zeros((4, 4))
            for j, wgt in envelopes[p]:
                acc += wgt * (m.joints_world[j] @ inv_bind(j))
            draw_mtx.append(acc)
            m.draw_weights.append(list(envelopes[p]))

    # --- VTX1 arrays
    fmt_o = u32(vtx, 8)
    vat = {}
    o = fmt_o
    while True:
        a = u32(vtx, o)
        if a == NULL:
            break
        vat[a] = (u32(vtx, o + 4), u32(vtx, o + 8), vtx[o + 12])
        o += 0x10
    starts = [u32(vtx, 0x0C + i * 4) for i in range(len(VTX_ARRAYS))]
    arrays = {}
    for i, a in enumerate(VTX_ARRAYS):
        if not starts[i] or a not in vat:
            continue
        end = next((s for s in starts[i + 1:] if s), len(vtx))
        cnt, ctype, shift = vat[a]
        raw = vtx[starts[i]:end]
        if a == POS or a == NRM or a == NBT or a >= TEX0:
            ncomp = {POS: 2 + cnt, NRM: 3, NBT: 9}.get(a, 1 + cnt)
            dt = np.dtype(COMP_FMT[ctype])
            usable = len(raw) // (dt.itemsize * ncomp) * dt.itemsize * ncomp
            arr = np.frombuffer(raw[:usable], dt).reshape(-1, ncomp).astype(np.float32)
            if ctype != 4:
                arr = arr / float(1 << shift)
            if a == POS and ncomp == 2:
                arr = np.concatenate([arr, np.zeros((len(arr), 1), np.float32)], 1)
            arrays[a] = arr
        else:  # colours
            arrays[a] = _decode_colors(raw, ctype)

    # --- MAT3
    if mat is not None:
        m.materials = _parse_materials(mat)

    # --- TEX1
    if tex is not None:
        tcount, th = u16(tex, 8), u32(tex, 0x0C)
        names = string_table(tex, u32(tex, 0x10))
        cache = {}
        for i in range(tcount):
            ho = th + i * 0x20
            fmt, w, hgt = tex[ho], u16(tex, ho + 2), u16(tex, ho + 4)
            ws, wt, pal_fmt, pal_cnt, pal_off = tex[ho + 6], tex[ho + 7], tex[ho + 9], u16(tex, ho + 10), u32(tex, ho + 12)
            doff = u32(tex, ho + 0x1C)
            img = None
            if decode_textures:
                key = (ho + doff, fmt, w, hgt)
                if key not in cache:
                    pal = tex[ho + pal_off: ho + pal_off + pal_cnt * 2] if pal_off else None
                    try:
                        cache[key] = gx_texture.decode(tex[ho + doff:], fmt, w, hgt, pal, pal_fmt)
                    except Exception:
                        cache[key] = None
                img = cache[key]
            m.textures.append((names[i] if i < len(names) else f"tex{i}", img, WRAP.get(ws, 10497), WRAP.get(wt, 10497)))

    # --- SHP1
    scount = u16(shp, 8)
    s_init, _, _, decl_o, mtxtab_o, dl_o, mtxinit_o, drawinit_o = (u32(shp, 0x0C + k * 4) for k in range(8))
    for si in range(scount):
        so = s_init + si * 0x28
        mtx_type, groups, decl_idx, mtxinit_idx, drawinit_idx = shp[so], u16(shp, so + 2), u16(shp, so + 4), u16(shp, so + 6), u16(shp, so + 8)
        decl = []
        d = decl_o + decl_idx
        while u32(shp, d) != NULL:
            decl.append((u32(shp, d), u32(shp, d + 4)))
            d += 8
        decl.sort()
        slots = [0] * 10
        verts = []   # (matrix index, {attr: index})
        tris = []
        for g in range(groups):
            mo = mtxinit_o + (mtxinit_idx + g) * 8
            use_idx, use_cnt, use_first = u16(shp, mo), u16(shp, mo + 2), u32(shp, mo + 4)
            table = [u16(shp, mtxtab_o + (use_first + k) * 2) for k in range(use_cnt)]
            for k, v in enumerate(table):
                if v != 0xFFFF:
                    slots[k] = v
            default = use_idx if use_idx != 0xFFFF else slots[0]
            do = drawinit_o + (drawinit_idx + g) * 8
            size, start = u32(shp, do), dl_o + u32(shp, do + 4)
            p = start
            while p < start + size:
                op = shp[p]
                p += 1
                if op == 0 or op < 0x80:
                    continue
                prim = op & 0xF8
                n = u16(shp, p)
                p += 2
                first = len(verts)
                for _ in range(n):
                    attrs = {}
                    for a, t in decl:
                        if t == 1:  # direct
                            if a == PNMTXIDX or TEX0MTXIDX <= a < POS:
                                attrs[a] = shp[p]
                                p += 1
                            else:
                                raise ValueError("direct vertex data not supported")
                        elif t == 2:
                            attrs[a] = shp[p]
                            p += 1
                        elif t == 3:
                            attrs[a] = u16(shp, p)
                            p += 2
                    mi = slots[attrs[PNMTXIDX] // 3] if PNMTXIDX in attrs else default
                    verts.append((mi, attrs))
                idx = list(range(first, first + n))
                if prim == 0x90:
                    tris += [tuple(idx[i:i + 3]) for i in range(0, n - 2, 3)]
                elif prim == 0x98:
                    tris += [(idx[i], idx[i + 1], idx[i + 2]) if i % 2 == 0 else (idx[i + 1], idx[i], idx[i + 2]) for i in range(n - 2)]
                elif prim == 0xA0:
                    tris += [(idx[0], idx[i], idx[i + 1]) for i in range(1, n - 1)]
                elif prim == 0x80:
                    for i in range(0, n - 3, 4):
                        tris += [(idx[i], idx[i + 1], idx[i + 2]), (idx[i], idx[i + 2], idx[i + 3])]
        if not tris or POS not in arrays:
            continue
        posa = arrays[POS]
        pos = np.empty((len(verts), 3), np.float32)
        mats = np.stack([draw_mtx[mi] if mi < len(draw_mtx) else np.eye(4) for mi, _ in verts])
        pi = np.array([at.get(POS, 0) for _, at in verts])
        p4 = np.concatenate([posa[np.clip(pi, 0, len(posa) - 1)], np.ones((len(verts), 1), np.float32)], 1)
        pos[:] = np.einsum("nij,nj->ni", mats, p4)[:, :3]
        mesh = {"shape": si, "material": shape_mat.get(si, -1), "pos": pos, "tris": np.array(tris, np.uint32), "uv": {},
                "drw": np.array([mi for mi, _ in verts], np.int32)}
        for a in range(TEX0, TEX0 + 8):
            if a in arrays and any(a in at for _, at in verts):
                ti = np.array([at.get(a, 0) for _, at in verts])
                mesh["uv"][a] = arrays[a][np.clip(ti, 0, len(arrays[a]) - 1), :2]
        if CLR0 in arrays and any(CLR0 in at for _, at in verts):
            ci = np.array([at.get(CLR0, 0) for _, at in verts])
            mesh["color"] = arrays[CLR0][np.clip(ci, 0, len(arrays[CLR0]) - 1)]
        m.meshes.append(mesh)
    return m


def _decode_colors(raw: bytes, ctype: int) -> np.ndarray:
    size = CLR_SIZE[ctype]
    n = len(raw) // size
    b = np.frombuffer(raw[: n * size], np.uint8).reshape(n, size).astype(np.int32)
    if ctype == 5 or ctype == 2:  # RGBA8 / RGBX8
        out = b.copy()
        if ctype == 2:
            out[:, 3] = 255
    elif ctype == 1:  # RGB8
        out = np.concatenate([b, np.full((n, 1), 255)], 1)
    elif ctype == 0:  # RGB565
        v = (b[:, 0] << 8) | b[:, 1]
        out = gx_texture._rgb565(v).astype(np.int32)
    elif ctype == 3:  # RGBA4
        v = (b[:, 0] << 8) | b[:, 1]
        out = np.stack([(v >> 12) & 15, (v >> 8) & 15, (v >> 4) & 15, v & 15], 1) * 17
    else:  # RGBA6
        v = (b[:, 0] << 16) | (b[:, 1] << 8) | b[:, 2]
        out = np.stack([(v >> 18) & 63, (v >> 12) & 63, (v >> 6) & 63, v & 63], 1)
        out = (out << 2) | (out >> 4)
    return out.astype(np.uint8)


def _tex_matrix(mat, tbl, idx):
    o = tbl + idx * 0x64
    info = mat[o + 1]
    cs, ct = f32(mat, o + 4), f32(mat, o + 8)
    ss, st = f32(mat, o + 0x10), f32(mat, o + 0x14)
    r = s16(mat, o + 0x18) / 0x7FFF * math.pi
    ts, tt = f32(mat, o + 0x1C), f32(mat, o + 0x20)
    c, s = math.cos(r), math.sin(r)
    if info >> 7:  # Maya convention
        return np.array([[ss * c, ss * s, ss * ((-0.5 * c) - (0.5 * s - 0.5) - ts)],
                         [st * -s, st * c, st * ((-0.5 * c) + (0.5 * s - 0.5) + tt) + 1.0]])
    a00, a01, a10, a11 = ss * c, ss * -s, st * s, st * c
    return np.array([[a00, a01, ts + cs - (a00 * cs + a01 * ct)],
                     [a10, a11, tt + ct - (a10 * cs + a11 * ct)]])


def _parse_materials(mat: bytes) -> list[Material]:
    count = u16(mat, 8)
    entries, remap = u32(mat, 0x0C), u32(mat, 0x10)
    names = string_table(mat, u32(mat, 0x14))
    cull_o, matcol_o, chan_o = u32(mat, 0x1C), u32(mat, 0x20), u32(mat, 0x28)
    texcoord_o, texmtx_o, texno_o, tevorder_o = u32(mat, 0x38), u32(mat, 0x40), u32(mat, 0x48), u32(mat, 0x4C)
    alphacmp_o, blend_o = u32(mat, 0x6C), u32(mat, 0x70)
    out = []
    for i in range(count):
        e = entries + 0x14C * u16(mat, remap + i * 2)
        mode = mat[e]
        cull = u32(mat, cull_o + mat[e + 1] * 4)
        mc = u16(mat, e + 8)
        mat_color = tuple(mat[matcol_o + mc * 4: matcol_o + mc * 4 + 4]) if mc != 0xFFFF else (255, 255, 255, 255)
        ch = u16(mat, e + 0x0C)
        use_vtx = True
        if ch != 0xFFFF:
            use_vtx = mat[chan_o + ch * 8 + 1] == 1
        texgens = []
        for j in range(8):
            ti = s16(mat, e + 0x28 + j * 2)
            if ti < 0:
                texgens.append(None)
                continue
            to = texcoord_o + ti * 4
            texgens.append((mat[to], mat[to + 1], mat[to + 2]))
        texmtx = []
        for j in range(8):
            ti = s16(mat, e + 0x48 + j * 2)
            texmtx.append(_tex_matrix(mat, texmtx_o, ti) if texmtx_o and ti >= 0 else None)
        texnos = []
        for j in range(8):
            ti = u16(mat, e + 0x84 + j * 2)
            texnos.append(u16(mat, texno_o + ti * 2) if ti != 0xFFFF else -1)
        stages = []
        tev_stages = []
        tevcolor_o, kcolor_o, stage_o = u32(mat, 0x50), u32(mat, 0x54), u32(mat, 0x5C)
        for j in range(16):
            si = s16(mat, e + 0xE4 + j * 2)
            if si < 0:
                continue
            oi = u16(mat, e + 0xBC + j * 2)
            oo = tevorder_o + oi * 4
            stages.append((mat[oo], mat[oo + 1]))  # texcoord id, texmap
            so = stage_o + si * 0x14
            tm = mat[oo + 1]
            tev_stages.append({"texmap": texnos[tm] if tm < 8 else -1, "chan": mat[oo + 2],
                               "c": tuple(mat[so + 1:so + 10]), "a": tuple(mat[so + 10:so + 19]),
                               "kc": mat[e + 0x9C + j], "ka": mat[e + 0xAC + j]})
        regs = []
        for j in range(4):
            ti = u16(mat, e + 0xDC + j * 2)
            regs.append(tuple(s16(mat, tevcolor_o + ti * 8 + k * 2) for k in range(4)) if ti != 0xFFFF and tevcolor_o else (0, 0, 0, 0))
        kregs = []
        for j in range(4):
            ti = u16(mat, e + 0x94 + j * 2)
            kregs.append(tuple(mat[kcolor_o + ti * 4:kcolor_o + ti * 4 + 4]) if ti != 0xFFFF and kcolor_o else (255, 255, 255, 255))
        tev = {"stages": tev_stages, "regs": regs, "kregs": kregs}
        used = []
        for tc, tm in stages:
            if tm != 0xFF and tm < 8 and texnos[tm] >= 0 and tc < 8 and texgens[tc] is not None:
                gtype, src, gmtx = texgens[tc]
                if 4 <= src <= 11:
                    attr = TEX0 + (src - 4)
                    mtx = texmtx[tc] if gmtx != 60 else None
                    entry = (texnos[tm], attr, mtx)
                    if all(u[0] != entry[0] for u in used):
                        used.append(entry)
        ac = alphacmp_o + u16(mat, e + 0x146) * 8
        comp, ref = mat[ac], mat[ac + 1]
        alpha_ref = None if comp == 7 else max(ref, 1) / 255
        bm = blend_o + u16(mat, e + 0x148) * 4
        # Only the translucent draw pass (material mode 4) really blends. Opaque-pass materials
        # (mode 1) also carry SRCALPHA/INVSRCALPHA blend modes, but their alpha is not coverage
        # (e.g. the nozzles' texture alpha drives their shine), so they draw solid.
        blend = mat[bm] == 1 and mode == 4 and not (mat[bm + 1] == 1 and mat[bm + 2] == 0)
        out.append(Material(names[i] if i < len(names) else f"mat{i}", mode == 4, alpha_ref, blend, use_vtx,
                            mat_color, used[0] if used else None, used[1] if len(used) > 1 else None, cull, used, tev))
    return out
