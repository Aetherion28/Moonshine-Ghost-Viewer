#!/usr/bin/env python3
"""Build a viewer stage (.glb) straight from a Super Mario Sunshine scene archive.

Usage: build_stage.py <scene.szs> <out.glb> [--b64] [--max-tex N] [--no-sky]

Includes the stage model (map/map/map.bmd), the sky dome and the sea surface. Geometry is
in game units, the same space Moonshine records ghosts in.
"""
from __future__ import annotations

import base64
import re
import hashlib
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bmd  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from dae_to_glb import GlbWriter  # noqa: E402

WATER_MODELS = ("map/map/sea.bmd",)
SKY_MODELS = ("map/map/sky.bmd",)


def unlit(name, tex=None, alpha=None, factor=(1, 1, 1, 1), double=True):
    m = {"name": name, "doubleSided": double, "extensions": {"KHR_materials_unlit": {}},
         "pbrMetallicRoughness": {"baseColorFactor": [round(c, 4) for c in factor], "metallicFactor": 0, "roughnessFactor": 1}}
    if tex is not None:
        m["pbrMetallicRoughness"]["baseColorTexture"] = {"index": tex}
    if alpha == "MASK":
        m["alphaMode"] = "MASK"
    elif alpha:
        m.update(alpha)
    return m


def uv_for(mesh, entry):
    tex_index, attr, mtx = entry
    uv = mesh["uv"].get(attr)
    if uv is None:
        uv = next(iter(mesh["uv"].values()), None)
    if uv is None:
        return None
    if mtx is not None:
        uv = uv @ mtx[:, :2].T + mtx[:, 2]
    return uv.astype(np.float32)


def add_model(w: GlbWriter, model: bmd.Model, prefix: str, kind: str = "map") -> int:
    tris = 0
    seen = set()
    for mesh in model.meshes:
        mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
        # Exact copies of a shape under a copied material ("_Bill1F_5(2)") would stack; draw one.
        dup = (re.sub(r"\(\d+\)$", "", mat.name) if mat else "", hashlib.sha1(np.ascontiguousarray(mesh["pos"], np.float32).tobytes()).hexdigest())
        if dup in seen:
            continue
        seen.add(dup)
        name = f"{prefix}_{mat.name if mat else 'shape'}{mesh['shape']}"
        color = mesh.get("color")
        if kind == "water":
            wm = w.custom_material(unlit("water", factor=(0.13, 0.47, 0.62, 0.72), alpha={"alphaMode": "BLEND"}))
            w.add_arrays(name, mesh["pos"], mesh["tris"], wm)
            tris += len(mesh["tris"])
            continue
        if kind == "map" and mat is not None and mat.lit and mesh.get("nrm") is not None:
            # Lit stage parts (secret courses, the hotel's glass Boo, the Plaza's Shine statue...):
            # exported like objects, with normals, for the viewer's GX lighting.
            from build_mario_iso import material_for
            mi, entry = material_for(w, model, mat, prefix)
            luv = uv_for(mesh, entry) if entry is not None else None
            lcol = color if mat.use_vertex_color else None
            w.add_arrays(name, mesh["pos"], mesh["tris"], mi, luv, lcol, mesh.get("nrm"))
            tris += len(mesh["tris"])
            continue
        tex = uv = None
        alpha = None
        factor = (1, 1, 1, 1)
        if mat is not None:
            if mat.base is not None:
                t = model.textures[mat.base[0]]
                tex = w.texture_rgba(f"{prefix}:{t[0]}", t[1], t[2], t[3])
                uv = uv_for(mesh, mat.base)
            if not mat.use_vertex_color or color is None:
                factor = tuple(c / 255 for c in mat.mat_color)
                color = None
            if mat.alpha_ref is not None:
                alpha = {"alphaMode": "MASK", "alphaCutoff": round(mat.alpha_ref, 3)}
            elif mat.translucent or mat.blend:
                alpha = {"alphaMode": "BLEND"}
        sky_mul = None
        glow_extra = False
        if kind == "map" and mat is not None:
            st0 = ((mat.tev or {}).get("stages") or [{}])[0]
            if st0.get("c", ())[:4] == (15, 15, 15, 2) and mat.translucent and mat.blend_mode[:2] == (1, 2) \
                    and mat.blend_mode[2] in (1, 4):
                # C0-only glow layers drawn src*src + dst (GX_BL_SRCCLR, GX_BL_ONE / SRCALPHA): an additive
                # tint of C0 squared, e.g. the light over Petey Piranha's arena.
                c0 = mat.tev["regs"][0]
                a0 = c0[3] / 255 if mat.blend_mode[2] == 4 else 1
                factor = tuple((max(0, min(255, c)) / 255) ** 2 * a0 for c in c0[:3]) + (1,)
                tex = None
                alpha = {"alphaMode": "BLEND"}
                glow_extra = True
            elif st0.get("c", ())[:4] == (15, 15, 15, 2) and not mat.translucent:   # TEV outputs register C0 only
                c0 = mat.tev["regs"][0]
                a0 = c0[3] / 255 if st0.get("a", ())[:4] == (7, 7, 7, 1) else 1
                factor = tuple(max(0, min(255, c)) / 255 for c in c0[:3]) + (a0,)
                color = None
                tex = None
                alpha = {"alphaMode": "BLEND"} if a0 < 0.99 else None
        if kind == "sky":
            alpha = None
            st = (mat.tev or {}).get("stages") or [] if mat is not None else []
            # Sky TEV: stage 0 texture x C0 (not the material colour), stage 1 previous x a second
            # texture (e.g. the secret courses' dot grid times a blue pattern).
            if st and st[0]["c"][:4] == (15, 8, 2, 15):
                factor = tuple(c / 255 for c in mat.tev["regs"][0][:3]) + (1,)
                color = None
            if len(st) > 1 and st[1]["c"][:4] == (15, 0, 8, 15) and mat.layer is not None:
                sky_mul = mat.layer
        base_color = color
        if color is not None and mat is not None and mat.layer is not None:
            # Vertex alpha is the blend weight of the second layer, not base opacity.
            base_color = color.copy()
            base_color[:, 3] = 255
        extras = {"additive": True} if glow_extra else None
        if kind == "map" and mat is not None and mat.translucent and mat.blend_mode[:3] == (1, 4, 1):
            # Additive glow cards (e.g. the hotel's Boo-shaped light, GX_BL_ONE destination). When the
            # only TEV stage outputs a KONST colour, the texture gives just the shape (its alpha).
            extras = {"additive": True}
            st = (mat.tev or {}).get("stages") or []
            if len(st) == 1 and st[0]["c"][:4] == (15, 15, 15, 14) and 12 <= st[0]["kc"] <= 15:
                k = mat.tev["kregs"][st[0]["kc"] - 12]
                factor = tuple(c / 255 for c in k[:3]) + (1,)
                color = base_color = None
                if mat.base is not None:
                    t = model.textures[mat.base[0]]
                    if t[1] is not None:
                        rgba = t[1].copy(); rgba[..., :3] = 255
                        tex = w.texture_rgba(f"{prefix}:{t[0]}:alpha", rgba, t[2], t[3])
            alpha = {"alphaMode": "BLEND"}
        um = unlit(f"{prefix} {mat.name if mat else ''}", tex[0] if tex else None, alpha, factor)
        if kind == "map" and mat is not None and mat.cull in (1, 2):
            # GX culling (GX_CULL_FRONT / GX_CULL_BACK): the viewer draws one side, as the game does,
            # so a wall seen from behind is see-through instead of showing its inside.
            extras = {**(extras or {}), "cull": mat.cull}
        if extras:
            um["extras"] = extras
        mi = w.custom_material(um)
        w.add_arrays(name, mesh["pos"], mesh["tris"], mi, uv if tex else None, base_color)
        tris += len(mesh["tris"])
        if sky_mul is not None:
            t = model.textures[sky_mul[0]]
            mtex = w.texture_rgba(f"{prefix}:{t[0]}", t[1], t[2], t[3])
            muv = uv_for(mesh, sky_mul)
            if mtex is not None and muv is not None:
                mm = unlit(f"skymul {prefix} {mat.name}", mtex[0], {"alphaMode": "BLEND"})
                mm["extras"] = {"multiply": True}
                w.add_arrays(name + "_mul", mesh["pos"], mesh["tris"], w.custom_material(mm), muv, None)
                tris += len(mesh["tris"])
        if mat is not None and mat.layer is not None and color is not None:
            t = model.textures[mat.layer[0]]
            ltex = w.texture_rgba(f"{prefix}:{t[0]}", t[1], t[2], t[3])
            luv = uv_for(mesh, mat.layer)
            if ltex is not None and luv is not None:
                lm = w.custom_material(unlit(f"layer2 {prefix} {mat.name}", ltex[0], {"alphaMode": "BLEND"}))
                w.add_arrays(name + "_layer2", mesh["pos"], mesh["tris"], lm, luv, color)
                tris += len(mesh["tris"])
    return tris


def build(scene_path: Path, out: Path, max_tex: int = 512, sky: bool = True) -> bytes:
    arc = rarc_files(yaz0_decompress(scene_path.read_bytes()))
    w = GlbWriter(max_tex)
    tris = add_model(w, bmd.parse(arc["map/map/map.bmd"]), "map")
    for name in WATER_MODELS:
        if name in arc:
            tris += add_model(w, bmd.parse(arc[name], decode_textures=False), "sea", "water")
    if sky:
        for name in SKY_MODELS:
            if name in arc:
                bmt = arc.get(name[:-4] + ".bmt")
                tris += add_model(w, bmd.parse(arc[name], bmt=bmt), "sky", "sky")
    glb = w.write(out)
    print(f"{out.name}: {tris} triangles, {len(w.gltf.get('images', []))} images, {len(glb) / 1e6:.2f} MB")
    return glb


def main(argv):
    if len(argv) < 2:
        print(__doc__)
        return 2
    max_tex = int(argv[argv.index("--max-tex") + 1]) if "--max-tex" in argv else 512
    glb = build(Path(argv[0]), Path(argv[1]), max_tex, "--no-sky" not in argv)
    if "--b64" in argv:
        Path(argv[1] + ".b64.txt").write_text(base64.b64encode(glb).decode())
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
