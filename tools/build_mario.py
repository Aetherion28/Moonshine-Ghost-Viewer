#!/usr/bin/env python3
"""Build a posed, single-mesh Mario + FLUDD model (.glb) for the ghost viewer.

The Models Resource rip ships Mario's body skinned in a T-pose, with hands, cap and FLUDD
as separate parts in their own local space and no animations. This bakes them into one
static model in a relaxed standing pose, facing +Z (Sunshine's yaw-0 direction), feet at y=0.

Usage: build_mario.py <mario_dir> <fludd_dir> <out.glb> [--b64] [--no-fludd]
"""
from __future__ import annotations

import base64
import math
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from dae_to_glb import NS, Collada, GlbWriter, convert_dae, read_mesh  # noqa: E402

C = "{" + NS["c"] + "}"


def rot(axis, deg):
    a = np.radians(deg)
    x, y, z = np.asarray(axis, float) / np.linalg.norm(axis)
    c, s, t = math.cos(a), math.sin(a), 1 - math.cos(a)
    m = np.eye(4)
    m[:3, :3] = [[t * x * x + c, t * x * y - s * z, t * x * z + s * y],
                 [t * x * y + s * z, t * y * y + c, t * y * z - s * x],
                 [t * x * z - s * y, t * y * z + s * x, t * z * z + c]]
    return m


def node_local(node) -> np.ndarray:
    m = np.eye(4)
    for el in node:
        tag = el.tag.replace(C, "")
        v = list(map(float, (el.text or "").split()))
        if tag == "matrix":
            m = m @ np.array(v).reshape(4, 4)
        elif tag == "translate":
            t = np.eye(4)
            t[:3, 3] = v
            m = m @ t
        elif tag == "rotate":
            m = m @ rot(v[:3], v[3])
        elif tag == "scale":
            m = m @ np.diag(v + [1])
    return m


class Skeleton:
    def __init__(self, dae_path: Path, pose: dict[str, np.ndarray] | None = None):
        root = ET.parse(dae_path).getroot()
        self.world: dict[str, np.ndarray] = {}
        self.bind_world: dict[str, np.ndarray] = {}
        self.by_sid: dict[str, str] = {}
        pose = pose or {}

        def walk(node, parent, parent_bind):
            if node.get("type") == "JOINT":
                local = node_local(node)
                name = node.get("name")
                bind = parent_bind @ local
                posed = parent @ local @ pose.get(name, np.eye(4))
                self.world[name] = posed
                self.bind_world[name] = bind
                self.by_sid[node.get("id")] = name
                self.by_sid[node.get("sid") or node.get("id")] = name
                parent, parent_bind = posed, bind
            for child in node.findall(C + "node"):
                walk(child, parent, parent_bind)

        for vs in root.iter(C + "visual_scene"):
            for n in vs.findall(C + "node"):
                walk(n, np.eye(4), np.eye(4))

    def skin_matrix(self, joint: str, inv_bind: np.ndarray) -> np.ndarray:
        return self.world[joint] @ inv_bind


def skinned_transform(dae: Collada, skel: Skeleton):
    """Return {geometry id: function(positions)->posed positions} for every skin controller."""
    out = {}
    for ctrl in dae.root.iter(C + "controller"):
        skin = ctrl.find(C + "skin")
        geom_id = skin.get("source").lstrip("#")
        bsm = np.array(list(map(float, skin.find(C + "bind_shape_matrix").text.split()))).reshape(4, 4)
        srcs = {s.get("id"): s for s in skin.findall(C + "source")}
        jinput = skin.find(f"{C}joints/{C}input[@semantic='JOINT']").get("source").lstrip("#")
        minput = skin.find(f"{C}joints/{C}input[@semantic='INV_BIND_MATRIX']").get("source").lstrip("#")
        jnames = srcs[jinput].find(C + "Name_array").text.split()
        mats = np.array(list(map(float, srcs[minput].find(C + "float_array").text.split()))).reshape(-1, 4, 4)
        vw = skin.find(C + "vertex_weights")
        winput = vw.find(f"{C}input[@semantic='WEIGHT']").get("source").lstrip("#")
        weights = np.array(list(map(float, srcs[winput].find(C + "float_array").text.split())))
        vcount = list(map(int, vw.find(C + "vcount").text.split()))
        v = list(map(int, vw.find(C + "v").text.split()))
        joint_mats = []
        for jn, ib in zip(jnames, mats):
            name = skel.by_sid.get(jn)
            joint_mats.append(skel.skin_matrix(name, ib) if name else np.eye(4))
        joint_mats = np.array(joint_mats)
        influences, k = [], 0
        for n in vcount:
            influences.append([(v[k + 2 * i], weights[v[k + 2 * i + 1]]) for i in range(n)])
            k += 2 * n

        def apply(pos, influences=influences, joint_mats=joint_mats, bsm=bsm):
            p = np.concatenate([pos, np.ones((len(pos), 1))], axis=1) @ bsm.T
            out_p = np.zeros_like(p)
            for i, inf in enumerate(influences[: len(p)]):
                for j, wt in inf:
                    out_p[i] += wt * (joint_mats[j] @ p[i])
            return out_p[:, :3].astype(np.float32)

        out[geom_id] = apply
    return out


def attach(skel: Skeleton, joint: str, extra: np.ndarray | None = None):
    m = skel.world[joint] @ (extra if extra is not None else np.eye(4))

    def apply(pos):
        p = np.concatenate([pos, np.ones((len(pos), 1))], axis=1) @ m.T
        return p[:, :3].astype(np.float32)
    return apply


def add_skinned(w: GlbWriter, path: Path, skel: Skeleton, skip_textures=()) -> int:
    """Pose a skinned DAE (per-geometry skin) and add it, skipping mask layers."""
    dae = Collada(path)
    xf = skinned_transform(dae, skel)
    tris = 0
    for name, geom, mat_id in dae.meshes():
        mat_el = dae.by_id.get(mat_id) if mat_id else None
        mname = mat_el.get("name") if mat_el is not None else name
        if re.search(r"_uv\d$", mname or ""):
            continue
        img = dae.image_for_material(mat_id) if mat_id else None
        if img is not None and img.stem.lower() in skip_textures:
            continue
        f = xf.get(geom.get("id"))
        recolor = SOLID_UV.get(mname)
        tex = w.texture(img) if img else None
        mat = w.material(tex, f"{mname} {img.stem if img else ''}")
        for rows, cols in read_mesh(dae, geom):
            if not len(rows):
                continue
            if f is not None:
                cols = {**cols, "VERTEX": (cols["VERTEX"][0], f(cols["VERTEX"][1][:, :3]))}
            if recolor and "TEXCOORD" in cols:
                # Point every UV at one plain texel; vertex colours still shade it.
                off, uv = cols["TEXCOORD"]
                cols = {**cols, "TEXCOORD": (off, np.tile(np.array(recolor, np.float32), (len(uv), 1)))}
            w.add_mesh(f"{path.stem}:{name}", rows, cols, mat)
            tris += len(rows) // 3
    return tris


# Mario's shirt UVs point at the Hawaiian-shirt tile of the shared texture; the game moves them to
# the plain red shirt at runtime. Sample a plain red texel instead (COLLADA S,T with T up).
SOLID_UV = {"_mat_head(2)": (0.875, 1 - 0.70)}

FLUDD_OFFSET = (-28.0, 0.0, 0.0)
SECONDARY_NOZZLES = ("hover_wg.dae", "rocket_wg.dae", "back_wg.dae")

# Relaxed standing pose. Joint X axes run along the limbs; rotating about local Z swings an arm
# toward the body. Values were tuned by rendering the result.
POSE = {
    "jnt_sldr_R": rot((0, 0, 1), -62),
    "jnt_sldr_L": rot((0, 0, 1), -62),
    "jnt_arm_R2": rot((0, 0, 1), -18),
    "jnt_arm_L2": rot((0, 0, 1), -18),
}


def main(argv):
    if len(argv) < 3:
        print(__doc__)
        return 2
    mario, fludd, out = Path(argv[0]), Path(argv[1]), Path(argv[2])
    pose = dict(POSE)
    for a in argv[3:]:
        m = re.match(r"--pose=(\w+):([-\d.]+),([-\d.]+),([-\d.]+):([-\d.]+)", a)
        if m:
            pose[m.group(1)] = rot(tuple(map(float, m.group(2, 3, 4))), float(m.group(5)))
    skel = Skeleton(mario / "ma_mdl1.dae", pose)
    w = GlbWriter(256)
    tris = add_skinned(w, mario / "ma_mdl1.dae", skel)
    tris += convert_dae(w, mario / "ma_hnd2l.dae", transform=attach(skel, "jnt_hand_L"), layers="skip")
    tris += convert_dae(w, mario / "ma_hnd2r.dae", transform=attach(skel, "jnt_hand_R"), layers="skip")
    tris += convert_dae(w, mario / "ma_cap1.dae", transform=attach(skel, "jnt_head"), layers="skip")
    if "--no-fludd" not in argv:
        # FLUDD hangs from the chest joint; its local X runs up the spine, so a negative X offset lowers it.
        mount = np.eye(4)
        mount[:3, 3] = FLUDD_OFFSET
        tris += convert_dae(w, fludd / "body.dae", transform=attach(skel, "jnt_chest", mount), layers="skip",
                            skip_textures=("h_watergun_mask_i4",))
        fludd_skel = Skeleton(fludd / "body.dae")
        nozzle_mount = attach(skel, "jnt_chest", mount @ fludd_skel.bind_world["nozzle_center"])
        tris += convert_dae(w, fludd / "normal_wg.dae", transform=nozzle_mount, layers="skip")
        # Secondary nozzles share the mount and extend backwards. The viewer shows one at a time,
        # picking it by node name prefix (hover_wg / rocket_wg / back_wg = Turbo).
        for part in SECONDARY_NOZZLES:
            tris += convert_dae(w, fludd / part, transform=nozzle_mount, layers="skip")
    glb = w.write(out)
    if "--b64" in argv:
        Path(str(out) + ".b64.txt").write_text(base64.b64encode(glb).decode())
    print(f"{out.name}: {tris} triangles, {len(w.gltf.get('images', []))} textures, {len(glb) / 1e3:.0f} KB")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
