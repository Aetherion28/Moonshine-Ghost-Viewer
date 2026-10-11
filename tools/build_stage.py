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
# seaindirect.bmd, the water body: in the game it shows the frame behind it through an indirect
# warp (see-through); the viewer draws it as a faint tint so the surface still reads.
WATER_ALPHA = 0.05
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


def add_model(w: GlbWriter, model: bmd.Model, prefix: str, kind: str = "map", anim: dict | None = None) -> int:
    # (material name, texture matrix index) -> btk animation with the animation's duration
    anims = {}
    for an in (anim or {}).get("anims", []):
        anims[(an["mat"], an["tm"])] = {**an, "duration": anim["duration"]}
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
            wm = w.custom_material(unlit("water", factor=(0.13, 0.47, 0.62, WATER_ALPHA), alpha={"alphaMode": "BLEND"}))
            w.add_arrays(name, mesh["pos"], mesh["tris"], wm)
            tris += len(mesh["tris"])
            continue
        if kind == "map" and mat is not None and mat.lit and mesh.get("nrm") is not None:
            # Lit stage parts (secret courses, the hotel's glass Boo, the Plaza's Shine statue...):
            # exported like objects, with normals, for the viewer's GX lighting.
            from build_mario_iso import gx_tev_uvs, material_for
            mi, entry = material_for(w, model, mat, prefix, gx=True)
            luv = uv_for(mesh, entry) if entry is not None else None
            lcol = color if mat.use_vertex_color else None
            w.add_arrays(name, mesh["pos"], mesh["tris"], mi, luv, lcol, mesh.get("nrm"), gx_tev_uvs(mesh, mat))
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
        sky_tev = None
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
            if len(st) > 1 and st[1]["c"][:4] in ((15, 0, 8, 15), (15, 8, 0, 15)) and mat.layer is not None:
                sky_mul = mat.layer
            if len(st) == 2 and st[0]["c"][:4] == (2, 15, 8, 10) and st[1]["c"][:5] == (15, 8, 4, 0, 1):
                # Sunset gradient (e.g. Sirena's sky): clamp(RAS + C0 * (1 - T)) - T * C1, done in the viewer.
                regs = mat.tev["regs"]
                sky_tev = {"c0": [round(max(0, min(255, c)) / 255, 4) for c in regs[0][:3]],
                           "c1": [round(max(0, min(255, c)) / 255, 4) for c in regs[1][:3]]}
                factor = (1, 1, 1, 1)
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
        gx_tev = None
        st_all = (mat.tev or {}).get("stages") or [] if mat is not None else []
        plain_tev = len(st_all) == 1 and st_all[0]["c"][:4] == (15, 8, 10, 15) and st_all[0]["a"][:4] == (7, 4, 5, 7)
        if kind == "map" and mat is not None and mat.translucent and mat.blend_mode[0] == 1 \
                and mat.blend_mode[1:3] != (4, 1) and not glow_extra \
                and (mat.blend_mode[1:3] != (4, 5) or not plain_tev):
            # Blends that read the frame (e.g. the shadows under trees, colour x dst + dst x (1 - a)),
            # and alpha blends whose TEV isn't plain texture x colour (Bianco's tree shadows: C0 with
            # alpha A0 x texture): the viewer runs the material's own TEV stages and GX blend.
            st = st_all
            base_no = mat.base[0] if mat.base is not None else None
            if st and all(x["texmap"] in (-1, base_no) for x in st):
                gx_tev = {"st": [list(x["c"][:8]) + list(x["a"][:8]) + [x["c"][8], x["a"][8], x["kc"], x["ka"], 1 if x["texmap"] >= 0 else 0]
                                 for x in st],
                          "regs": [[max(-1024, min(1023, c)) / 255 for c in r] for r in mat.tev["regs"]],
                          "k": [[c / 255 for c in r] for r in mat.tev["kregs"]],
                          "blend": list(mat.blend_mode[:3]), "aref": mat.alpha_ref or 0}
                factor = tuple(c / 255 for c in mat.mat_color) if (not mat.use_vertex_color or color is None) else (1, 1, 1, 1)
                alpha = {"alphaMode": "BLEND"}
        full_tev = None
        if kind == "map" and mat is not None and not glow_extra and st_all:
            # The material's own GX setup (channels, every TEV stage and texture, texgens, alpha
            # compare, blend): e.g. Bianco's cliffs mix a rock gradient and a grass texture in 3 stages.
            from build_mario_iso import gx_tev_spec
            full_tev = gx_tev_spec(w, model, mat, anims)
            if full_tev:
                gx_tev = None
                full_tev["map"] = 1
                # Vertex colours whenever any channel (colour or alpha) takes its material or ambient colour from them.
                vtx_used = any(c and (c[1] == 1 or c[5] == 1) for c in (mat.gx or {}).get("chans") or [])
                color = mesh.get("color") if vtx_used else None
                base_color = color
                alpha = {"alphaMode": "BLEND"} if mat.translucent else None
        um = unlit(f"{prefix} {mat.name if mat else ''}", tex[0] if tex else None, alpha, factor)
        if kind == "map" and mat is not None and mat.cull in (1, 2):
            # GX culling (GX_CULL_FRONT / GX_CULL_BACK): the viewer draws one side, as the game does,
            # so a wall seen from behind is see-through instead of showing its inside.
            extras = {**(extras or {}), "cull": mat.cull}
        if gx_tev:
            extras = {**(extras or {}), "gxTev": gx_tev}
        if full_tev:
            extras = {**(extras or {}), "gxTev": full_tev}
        if kind == "sky" and mat is not None:
            # TSky: the dome is drawn over a blue sphere with each material's own GX blend (e.g. the
            # sky gradient as src + dst * (1 - src)), so the viewer needs the factors.
            extras = {**(extras or {}), "gxBlend": list(mat.blend_mode[:3])}
            if sky_tev:
                extras["skyTev"] = sky_tev
        if extras:
            um["extras"] = extras
        mi = w.custom_material(um)
        if full_tev:
            from build_mario_iso import gx_tev_uvs
            # Normals only where a colour channel is lit; the TEV samples its own per-texgen UVs.
            lit_any = any(c and c[0] for c in (mat.gx or {}).get("chans") or [])
            nrm_needed = lit_any or any(g and g[1] == 1 for g in (mat.gx or {}).get("texgens") or [])
            w.add_arrays(name, mesh["pos"], mesh["tris"], mi, None, base_color, mesh.get("nrm") if nrm_needed else None,
                         gx_tev_uvs(mesh, mat, anims))
            tris += len(mesh["tris"])
            continue
        w.add_arrays(name, mesh["pos"], mesh["tris"], mi, uv if tex else None, base_color)
        tris += len(mesh["tris"])
        if sky_mul is not None:
            t = model.textures[sky_mul[0]]
            mtex = w.texture_rgba(f"{prefix}:{t[0]}", t[1], t[2], t[3])
            muv = uv_for(mesh, sky_mul)
            if mtex is not None and muv is not None:
                mm = unlit(f"skymul {prefix} {mat.name}", mtex[0], {"alphaMode": "BLEND"})
                # TEV stage 1 scale (GX_CS_SCALE_2 etc.), e.g. Sirena's clouds: 2 x tex x tex x colour.
                mm["extras"] = {"multiply": True, "scale": (1, 2, 4, 0.5)[st[1]["c"][6]]}
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
    import btk
    def anim_for(path):
        try:
            return btk.parse(arc[path]) if path in arc else None
        except Exception:
            return None
    tris = add_model(w, bmd.parse(arc["map/map/map.bmd"]), "map", "map", anim_for("map/map/map.btk"))
    for name in WATER_MODELS:
        if name in arc:
            # The sea surface: wave, shoreline and wet-sand layers with their own TEV and blends. The
            # water itself (seaindirect.bmd) redraws the frame behind it through an indirect warp, so
            # what shows is the sea floor under it; the viewer leaves that see-through.
            tris += add_model(w, bmd.parse(arc[name]), "sea", "map", anim_for(name[:-4] + ".btk"))
    if "map/map/seaindirect.bmd" in arc:
        tris += add_model(w, bmd.parse(arc["map/map/seaindirect.bmd"], decode_textures=False), "sea", "water")
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
