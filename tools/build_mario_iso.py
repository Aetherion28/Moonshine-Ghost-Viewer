#!/usr/bin/env python3
"""Build an animatable Mario + FLUDD (.glb) and his animation set from the game's mario archive.

Usage: build_mario_iso.py <mario.szs> <out_dir> [--b64]

Outputs:
  mario.glb      skinned Mario (29-joint skeleton, game joint names), hand/cap/FLUDD parts
                 parented to the joints the game attaches them to (decomp: MarioDraw.cpp,
                 MarioCap.cpp, WaterGun.cpp). Part node names: hand_<id>_<side>, cap,
                 fludd_body, nozzle_<name>.
  mario_bck.json every Mario animation (J3D BCK/ANK1) as per-joint keyframe tracks.
"""
from __future__ import annotations

import base64
import hashlib
import json
import math
import re
import struct
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bmd  # noqa: E402
from build_stage import unlit, uv_for  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from dae_to_glb import GlbWriter  # noqa: E402

MASK_TEXTURES = re.compile(r"polmask|rak_dummy|toon|mask_i4", re.I)


def quat_from_matrix(m):
    t = np.trace(m)
    if t > 0:
        s = math.sqrt(t + 1.0) * 2
        return [(m[2, 1] - m[1, 2]) / s, (m[0, 2] - m[2, 0]) / s, (m[1, 0] - m[0, 1]) / s, 0.25 * s]
    i = int(np.argmax(np.diag(m)))
    j, k = (i + 1) % 3, (i + 2) % 3
    s = math.sqrt(1.0 + m[i, i] - m[j, j] - m[k, k]) * 2
    q = [0.0] * 4
    q[i] = 0.25 * s
    q[j] = (m[j, i] + m[i, j]) / s
    q[k] = (m[k, i] + m[i, k]) / s
    q[3] = (m[k, j] - m[j, k]) / s
    return q


def pick_base(model, mat):
    for entry in mat.used:
        if not MASK_TEXTURES.search(model.textures[entry[0]][0]):
            return entry
    return mat.base


# Parts models ship a placeholder that the game replaces with the body's first texture at load
# (MarioDraw.cpp / MarioCap.cpp: getTexture()->setResTIMG(0, body texture 0)).
SUBSTITUTE: dict[str, tuple] = {}


KCSEL = [1, 7 / 8, 3 / 4, 5 / 8, 1 / 2, 3 / 8, 1 / 4, 1 / 8]


def toon_stages(w, model, mat):
    """Mario's 5-stage TEV (ma_mdl1 / cap / hands): base texture, then
    REG1 = clamp(REG0 + lerp(toon(COLOR0.rg), COLOR0, k3) - 0.5) with the toon ramp looked up by the
    lit colour (GX_TG_SRTG), then out = clamp(base + lerp(REG1, COLOR1 specular, k4) - 0.5).
    Returns the constants for the viewer's shader, or None for other setups."""
    st = (mat.tev or {}).get("stages") or []
    if len(st) != 5 or st[3]["chan"] != 4 or st[3]["texmap"] < 0 or st[4]["texmap"] >= 0:
        return None
    t = model.textures[st[3]["texmap"]]
    if "toon" not in t[0].lower() or t[1] is None:
        return None
    c3, c4 = st[3]["c"], st[4]["c"]
    if c3[:4] != (8, 10, 14, 2) or c4[0] != 4 or c4[2] != 14 or c4[3] != 0:
        return None
    k = lambda sel: KCSEL[sel] if sel < 8 else 0.5
    tex = w.texture_rgba(f"tex:{t[0]}", t[1], t[2], t[3])
    reg0 = mat.tev["regs"][1]
    return {"tex": tex[0], "reg0": [round(min(255, max(0, v)) / 255, 4) for v in reg0[:3]],
            "k3": k(st[3]["kc"]), "k4": k(st[4]["kc"]), "spec": int(st[4]["chan"] == 5 and c4[1] == 10)}


def tev_factor(model, mat, base_tex):
    """Constant colour the material's TEV stages give when the lit colour (COLOR0) is white, the
    displayed base texture is white and other textures sit at their average colour, COLOR1
    (the specular channel) is black. The viewer multiplies the base texture and lighting by it,
    which brings in TEV register colours such as the flying Stus' pink (C0)."""
    st = (mat.tev or {}).get("stages") or []
    if not st:
        return None
    regs = [tuple(c / 255 for c in r[:4]) for r in (mat.tev.get("regs") or [])] + [(0, 0, 0, 0)] * 4
    kregs = [tuple(c / 255 for c in r[:4]) for r in (mat.tev.get("kregs") or [])] + [(1, 1, 1, 1)] * 4
    reg = {0: list(regs[3]), 1: list(regs[0]), 2: list(regs[1]), 3: list(regs[2])}   # PREV, REG0..2
    uses_reg = False
    mean = {}

    def tex(i):
        if i < 0 or i == base_tex or i >= len(model.textures) or model.textures[i][1] is None:
            return (1, 1, 1, 1)
        if i not in mean:
            a = model.textures[i][1].reshape(-1, 4).mean(0) / 255
            mean[i] = tuple(a)
        return mean[i]

    for s in st:
        t = tex(s["texmap"])
        ras = (1, 1, 1, 1) if s["chan"] in (4, 0) else (0, 0, 0, 0)
        kc = s["kc"]
        if kc < 8:
            k = (KCSEL[kc],) * 3
        elif 12 <= kc <= 15:
            k = kregs[kc - 12][:3]
        else:
            k = (1, 1, 1)
        P, R0, R1, R2 = reg[0], reg[1], reg[2], reg[3]

        def arg(a, ch):
            nonlocal uses_reg
            if 2 <= a <= 7:
                uses_reg = True
            return {0: P[ch], 1: P[3], 2: R0[ch], 3: R0[3], 4: R1[ch], 5: R1[3], 6: R2[ch], 7: R2[3],
                    8: t[ch], 9: t[3], 10: ras[ch], 11: ras[3], 12: 1, 13: 0.5, 14: k[ch], 15: 0}.get(a, 0)
        a, b, c, d, op, bias, scale, clamp, out = s["c"][:9]
        res = []
        for ch in range(3):
            va, vb, vc, vd = (arg(x, ch) for x in (a, b, c, d))
            v = va * (1 - vc) + vb * vc
            v = vd + v if op == 0 else vd - v
            v += {0: 0, 1: 0.5, 2: -0.5}.get(bias, 0)
            v *= {0: 1, 1: 2, 2: 4, 3: 0.5}.get(scale, 1)
            res.append(min(1, max(0, v)) if clamp else v)
        reg[out if out in reg else 0][:3] = res
    if not uses_reg:
        return None
    return tuple(min(1, max(0, v)) for v in reg[0][:3])


def material_for(w, model, mat, prefix, tev=False):
    if mat is None:
        return w.custom_material(unlit(f"{prefix}"), ), None
    entry = pick_base(model, mat)
    tex = None
    if entry is not None:
        t = model.textures[entry[0]]
        if t[0] in SUBSTITUTE:
            t = SUBSTITUTE[t[0]]
        digest = hashlib.sha1(t[1].tobytes()).hexdigest()[:10] if t[1] is not None else "none"
        tex = w.texture_rgba(f"tex:{t[0]}:{digest}", t[1], t[2], t[3])
    alpha = None
    if mat.alpha_ref is not None:
        alpha = {"alphaMode": "MASK", "alphaCutoff": round(mat.alpha_ref, 3)}
    elif mat.blend:
        alpha = {"alphaMode": "BLEND"}
    factor = tuple(c / 255 for c in mat.mat_color) if not mat.use_vertex_color else (1, 1, 1, 1)
    if tev and mat.lit and not toon_stages(w, model, mat):
        tf = tev_factor(model, mat, entry[0] if entry is not None else -1)
        if tf is not None and max(abs(v - 1) for v in tf) > 0.08:
            factor = tuple(round(f * v, 4) for f, v in zip(factor[:3], tf)) + (factor[3],)
    spec = unlit(f"{prefix} {mat.name}", tex[0] if tex else None, alpha, factor)
    if mat.lit:   # the viewer lights these like GX: ambient + stage lights, times material/vertex colour
        spec["extras"] = {"lit": 1, "mask": mat.lit_mask, "ambVtx": int(mat.amb_vtx), "diff": mat.diff_fn}
        toon = toon_stages(w, model, mat)
        if toon:
            spec["extras"]["toon"] = toon
    env = []
    for layer in mat.env:   # sphere-mapped highlight textures (e.g. the Shine Sprite body)
        t = model.textures[layer["tex"]]
        if t[1] is None:
            continue
        tx = w.texture_rgba(f"tex:{t[0]}:env", t[1], 33071, 33071)
        if tx:
            env.append({"tex": tx[0], "k": [round(c / 255, 4) for c in layer["k"]],
                        "s": [round(v, 4) for v in layer["s"]], "t": [round(v, 4) for v in layer["t"]]})
    if env:
        spec.setdefault("extras", {})["env"] = env
    mi = w.custom_material(spec)
    return mi, entry


def add_node(w, node) -> int:
    w.gltf["nodes"].append(node)
    return len(w.gltf["nodes"]) - 1


def add_static_part(w, model, name, parent_node, matrix=None, skip_tex=()):
    """Add every mesh of a parts model as children of a joint node (rigid attachment)."""
    holder = {"name": name, "children": []}
    if matrix is not None:
        holder["matrix"] = [float(x) for x in np.asarray(matrix).T.reshape(-1)]
    hi = add_node(w, holder)
    w.gltf["nodes"][parent_node].setdefault("children", []).append(hi)
    for mesh in model.meshes:
        mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
        if mat is not None and pick_base(model, mat) is not None and model.textures[pick_base(model, mat)[0]][0].lower() in skip_tex:
            continue
        mi, entry = material_for(w, model, mat, name)
        uv = uv_for(mesh, entry) if entry is not None else None
        color = mesh.get("color") if mat is not None and mat.use_vertex_color else None
        _add_mesh(w, f"{name}_s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, normal=mesh.get("nrm"))
        mesh_node = w.gltf["nodes"].pop()
        w.gltf["scenes"][0]["nodes"].pop()
        ni = add_node(w, mesh_node)
        w.gltf["nodes"][hi]["children"].append(ni)
    return hi


def _add_mesh(w, name, pos, tris, mat, uv=None, color=None, joints=None, weights=None, normal=None):
    w.add_arrays(name, pos, tris, mat, uv, color, normal)
    if joints is not None:
        prim = w.gltf["meshes"][-1]["primitives"][0]
        prim["attributes"]["JOINTS_0"] = w.accessor(np.ascontiguousarray(joints, np.uint16), "VEC4", 5123, 34962)
        prim["attributes"]["WEIGHTS_0"] = w.accessor(np.ascontiguousarray(weights, np.float32), "VEC4", 5126, 34962)


def build_glb(arc, out: Path):
    w = GlbWriter(256)
    body = bmd.parse(arc["bmd/ma_mdl1.bmd"])
    SUBSTITUTE["H_ma_main_dummy"] = body.textures[0]
    # --- skeleton nodes
    joint_nodes = []
    for i, name in enumerate(body.joint_names):
        sc, rot, tr = body.joint_trs[i]
        q = quat_from_matrix(bmd.euler_matrix(*rot))
        joint_nodes.append(add_node(w, {"name": name, "translation": [float(x) for x in tr],
                                        "rotation": [float(x) for x in q], "scale": [float(x) for x in sc]}))
    for i, p in enumerate(body.joint_parent):
        if p >= 0:
            w.gltf["nodes"][joint_nodes[p]].setdefault("children", []).append(joint_nodes[i])
        else:
            w.gltf["scenes"][0]["nodes"].append(joint_nodes[i])
    ibm = np.stack([np.linalg.inv(m).T.reshape(-1) for m in body.joints_world]).astype(np.float32)
    w.gltf.setdefault("skins", []).append({"joints": joint_nodes, "skeleton": joint_nodes[0],
                                            "inverseBindMatrices": w.accessor(ibm, "MAT4", 5126, None)})
    # --- skinned body: one node per shape so the viewer can toggle shapes 5/6 (built-in hands)
    for mesh in body.meshes:
        mat = body.materials[mesh["material"]] if 0 <= mesh["material"] < len(body.materials) else None
        mi, entry = material_for(w, body, mat, "mario")
        uv = uv_for(mesh, entry) if entry is not None else None
        n = len(mesh["pos"])
        joints = np.zeros((n, 4), np.uint16)
        weights = np.zeros((n, 4), np.float32)
        for vi, d in enumerate(mesh["drw"]):
            for k, (j, wt) in enumerate(body.draw_weights[d][:4]):
                joints[vi, k] = j
                weights[vi, k] = wt
        weights /= np.maximum(weights.sum(1, keepdims=True), 1e-6)
        _add_mesh(w, f"body_s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, None, joints, weights, normal=mesh.get("nrm"))
        w.gltf["nodes"][-1]["skin"] = 0
    jidx = {n: joint_nodes[i] for i, n in enumerate(body.joint_names)}
    # --- hands (decomp TMario::changeHand: [0]=ma_hnd2, [1]=ma_hnd3, plus ma_hnd4r)
    for hid, side, joint in (("2", "r", "jnt_hand_R"), ("2", "l", "jnt_hand_L"), ("3", "r", "jnt_hand_R"),
                             ("3", "l", "jnt_hand_L"), ("4", "r", "jnt_hand_R")):
        key = f"bmd/ma_hnd{hid}{side}.bmd"
        if key in arc:
            add_static_part(w, bmd.parse(arc[key]), f"hand_{hid}_{side}", jidx[joint])
    # --- cap on M_head (MarioCap.cpp)
    add_static_part(w, bmd.parse(arc["bmd/ma_cap1.bmd"]), "cap", jidx["M_head"])
    # --- FLUDD on jnt_chest, nozzles on FLUDD's nozzle_center (WaterGun.cpp)
    fludd = bmd.parse(arc["watergun2/body/wg_mdl1.bmd"])
    # TWaterGun::init: nozzles' placeholder texture becomes FLUDD's own texture 1 (SMS_ChangeTextureAll).
    SUBSTITUTE["H_watergun_main_dummy"] = fludd.textures[1]
    fludd_holder = add_static_part(w, fludd, "fludd_body", jidx["jnt_chest"], skip_tex=("h_watergun_mask_i4",))
    mount = fludd.joints_world[fludd.joint_names.index("nozzle_center")]
    for noz in ("normal_wg", "hover_wg", "rocket_wg", "back_wg"):
        key = f"watergun2/{noz}/{noz}.bmd"
        if key in arc:
            # Resting pose: the end of the nozzle's shoot_end animation (WaterGun.cpp idle).
            rest = arc.get(f"watergun2/{noz}/{noz}_shoot_end.bck")
            pose = None
            if rest:
                anim = parse_bck(rest)
                pose = bck_pose(anim, anim["d"])
            add_static_part(w, bmd.parse(arc[key], pose=pose), f"nozzle_{noz}", fludd_holder, mount)
    return w.write(out), body.joint_names


def _hermite(p0, p1, s0, s1, t):
    t2, t3 = t * t, t * t * t
    return (2 * t3 - 3 * t2 + 1) * p0 + (t3 - 2 * t2 + t) * s0 + (-2 * t3 + 3 * t2) * p1 + (t3 - t2) * s1


def sample_track(tr, f):
    if not isinstance(tr, list):
        return tr
    n = len(tr) // 4
    if f < tr[0]:
        return tr[1]
    for i in range(1, n):
        t1 = tr[i * 4]
        if f < t1:
            b = (i - 1) * 4
            ln = t1 - tr[b]
            return _hermite(tr[b + 1], tr[i * 4 + 1], tr[b + 3] * ln, tr[i * 4 + 2] * ln, (f - tr[b]) / ln)
    return tr[(n - 1) * 4 + 1]


def bck_pose(anim, frame):
    """Local joint matrices for a decoded BCK at a frame (for baking parts models)."""
    out = {}
    for i, j in enumerate(anim["j"]):
        v = [sample_track(t, frame) for t in j]
        m = np.eye(4)
        m[:3, :3] = bmd.euler_matrix(v[3], v[4], v[5]) @ np.diag(v[0:3])
        m[:3, 3] = v[6:9]
        out[i] = m
    return out


# ---------------------------------------------------------------- BCK animations
def parse_bck(data: bytes):
    chunks = bmd.read_chunks(data)
    a = chunks["ANK1"]
    loop, rdec, dur = a[8], a[9], struct.unpack_from(">H", a, 0x0A)[0]
    jcount, sc, rc, tc = struct.unpack_from(">HHHH", a, 0x0C)
    jt, st, rt, tt = struct.unpack_from(">IIII", a, 0x14)
    stab = np.frombuffer(a[st:st + sc * 4], ">f4").astype(np.float64)
    rtab = np.frombuffer(a[rt:rt + rc * 2], ">i2").astype(np.float64)
    ttab = np.frombuffer(a[tt:tt + tc * 4], ">f4").astype(np.float64)
    rscale = (2 ** rdec) / 0x7FFF * math.pi
    o = jt
    joints = []
    for _ in range(jcount):
        tracks = []
        for comp in range(3):
            for kind, table, scale in (("s", stab, 1.0), ("r", rtab, rscale), ("t", ttab, 1.0)):
                count, index, tangent = struct.unpack_from(">HHH", a, o)
                o += 6
                if count == 1:
                    tracks.append(round(float(table[index] * scale), 5))
                else:
                    stride = 3 if tangent == 0 else 4
                    keys = []
                    for k in range(count):
                        b = index + k * stride
                        tm, v, ti = table[b], table[b + 1] * scale, table[b + 2] * scale
                        to = table[b + 3] * scale if stride == 4 else ti
                        keys += [round(float(tm), 3), round(float(v), 5), round(float(ti), 5), round(float(to), 5)]
                    tracks.append(keys)
        # stored order: sx rx tx sy ry ty sz rz tz -> regroup as s[3], r[3], t[3]
        joints.append([tracks[0], tracks[3], tracks[6], tracks[1], tracks[4], tracks[7], tracks[2], tracks[5], tracks[8]])
    return {"d": max(dur, 1), "l": loop, "j": joints}


def main(argv):
    arc = rarc_files(yaz0_decompress(Path(argv[0]).read_bytes()))
    out = Path(argv[1])
    out.mkdir(parents=True, exist_ok=True)
    glb, names = build_glb(arc, out / "mario.glb")
    anims = {}
    for k, v in arc.items():
        m = re.match(r"bck/ma_(.+)\.bck$", k)
        if m:
            anims[m.group(1)] = parse_bck(v)
    js = json.dumps({"joints": names, "anims": anims}, separators=(",", ":"))
    (out / "mario_bck.json").write_text(js)
    if "--b64" in argv:
        (out / "mario.glb.b64.txt").write_text(base64.b64encode(glb).decode())
    print(f"mario.glb {len(glb) / 1e3:.0f} KB, {len(anims)} animations, json {len(js) / 1e6:.2f} MB")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
