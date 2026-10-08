#!/usr/bin/env python3
"""Convert Models Resource Sunshine stage rips (J3D Ripoff Exporter COLLADA) to one .glb.

The rips are skinned to identity joints, so vertex positions are already world-space
game units, which is exactly the space Moonshine ghosts are recorded in.

Usage: dae_to_glb.py out.glb [--max-tex 512] [--b64] model.dae [more.dae ...] [--water sea.dae ...]
  --water marks the following files as water surfaces: they get a flat translucent sea colour,
          because their textures are only grayscale masks the GameCube colours at runtime
  --b64   also write out.glb.b64.txt for publishing where raw binaries aren't served
"""
from __future__ import annotations

import base64
import io
import json
import re
import struct
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

import numpy as np
from PIL import Image

NS = {"c": "http://www.collada.org/2005/11/COLLADASchema"}


def floats(el) -> np.ndarray:
    return np.array((el.text or "").split(), dtype=np.float32)


class Collada:
    def __init__(self, path: Path):
        self.path = path
        self.root = ET.parse(path).getroot()
        self.by_id = {e.get("id"): e for e in self.root.iter() if e.get("id")}

    def ref(self, url: str):
        return self.by_id.get(url.lstrip("#"))

    def image_for_material(self, mat_id: str) -> Path | None:
        mat = self.by_id.get(mat_id)
        if mat is None:
            return None
        eff = self.ref(mat.find("c:instance_effect", NS).get("url"))
        surf = eff.find(".//c:surface/c:init_from", NS) if eff is not None else None
        if surf is None:
            return None
        img = self.by_id.get(surf.text.strip())
        if img is None:
            return None
        return self.path.parent / img.find("c:init_from", NS).text.strip()

    def meshes(self):
        """Yield (name, geometry element, material id) for each instanced mesh."""
        for node in self.root.iter(f"{{{NS['c']}}}node"):
            inst = node.find("c:instance_controller", NS)
            geom = None
            if inst is not None:
                ctrl = self.ref(inst.get("url"))
                geom = self.ref(ctrl.find("c:skin", NS).get("source"))
            else:
                inst = node.find("c:instance_geometry", NS)
                if inst is not None:
                    geom = self.ref(inst.get("url"))
            if geom is None:
                continue
            im = inst.find(".//c:instance_material", NS)
            yield node.get("name") or node.get("id"), geom, (im.get("target").lstrip("#") if im is not None else None)


def read_mesh(dae: Collada, geom):
    mesh = geom.find("c:mesh", NS)
    sources = {}
    for src in mesh.findall("c:source", NS):
        fa = src.find("c:float_array", NS)
        acc = src.find(".//c:accessor", NS)
        stride = int(acc.get("stride", "1"))
        data = floats(fa)
        # Accessor counts in these rips are sometimes wrong; trust the array length.
        sources[src.get("id")] = data[: len(data) // stride * stride].reshape(-1, stride)
    verts_el = mesh.find("c:vertices", NS)
    vert_src = verts_el.find("c:input[@semantic='POSITION']", NS).get("source").lstrip("#")
    out = []
    for poly in list(mesh.findall("c:polylist", NS)) + list(mesh.findall("c:triangles", NS)):
        inputs = poly.findall("c:input", NS)
        stride = max(int(i.get("offset")) for i in inputs) + 1
        p = np.array(poly.find("c:p", NS).text.split(), dtype=np.int64).reshape(-1, stride)
        vc_el = poly.find("c:vcount", NS)
        vcount = np.array(vc_el.text.split(), dtype=np.int64) if vc_el is not None else np.full(len(p) // 3, 3)
        cols = {}
        for i in inputs:
            sem = i.get("semantic")
            if sem in cols or (sem in ("TEXCOORD", "COLOR") and i.get("set", "0") != "0"):
                continue
            src = vert_src if sem == "VERTEX" else i.get("source").lstrip("#")
            cols[sem] = (int(i.get("offset")), sources[src])
        # Fan-triangulate, dropping degenerate 1- and 2-vertex primitives.
        tri_rows = []
        start = 0
        for n in vcount:
            if n >= 3:
                for k in range(1, n - 1):
                    tri_rows += [start, start + k, start + k + 1]
            start += n
        rows = p[np.array(tri_rows, dtype=np.int64)] if tri_rows else np.zeros((0, stride), np.int64)
        out.append((rows, cols))
    return out


def png_has_alpha(img: Image.Image) -> bool:
    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
        a = np.asarray(img.convert("RGBA"))[..., 3]
        return bool((a < 250).any())
    return False


class GlbWriter:
    def __init__(self, max_tex: int):
        self.max_tex = max_tex
        self.bin = bytearray()
        self.gltf = {"asset": {"version": "2.0", "generator": "sms ghost viewer dae_to_glb"},
                     "extensionsUsed": ["KHR_materials_unlit"],
                     "scenes": [{"nodes": []}], "scene": 0, "nodes": [], "meshes": [],
                     "accessors": [], "bufferViews": [], "materials": [], "textures": [],
                     "images": [], "samplers": [{"wrapS": 10497, "wrapT": 10497, "magFilter": 9729, "minFilter": 9987}]}
        self.tex_cache: dict[str, tuple[int, bool]] = {}
        self.mat_cache: dict[tuple, int] = {}

    def view(self, data: bytes, target: int | None = None) -> int:
        while len(self.bin) % 4:
            self.bin.append(0)
        bv = {"buffer": 0, "byteOffset": len(self.bin), "byteLength": len(data)}
        if target:
            bv["target"] = target
        self.bin += data
        self.gltf["bufferViews"].append(bv)
        return len(self.gltf["bufferViews"]) - 1

    def accessor(self, arr: np.ndarray, kind: str, ctype: int, target: int, minmax=False, normalized=False) -> int:
        acc = {"bufferView": self.view(arr.tobytes(), target), "componentType": ctype,
               "count": int(arr.shape[0]), "type": kind}
        if normalized:
            acc["normalized"] = True
        if minmax:
            acc["min"] = arr.min(axis=0).tolist()
            acc["max"] = arr.max(axis=0).tolist()
        self.gltf["accessors"].append(acc)
        return len(self.gltf["accessors"]) - 1

    def texture(self, path: Path) -> tuple[int, bool] | None:
        key = str(path.resolve()) if path.exists() else None
        if key is None:
            return None
        if key in self.tex_cache:
            return self.tex_cache[key]
        img = Image.open(path)
        alpha = png_has_alpha(img)
        img = img.convert("RGBA" if alpha else "RGB")
        if max(img.size) > self.max_tex:
            img.thumbnail((self.max_tex, self.max_tex), Image.LANCZOS)
        buf = io.BytesIO()
        if alpha:
            img.save(buf, "PNG", optimize=True)
            mime = "image/png"
        else:
            img.save(buf, "JPEG", quality=85)
            mime = "image/jpeg"
        self.gltf["images"].append({"bufferView": self.view(buf.getvalue()), "mimeType": mime})
        self.gltf["textures"].append({"source": len(self.gltf["images"]) - 1, "sampler": 0})
        self.tex_cache[key] = (len(self.gltf["textures"]) - 1, alpha)
        return self.tex_cache[key]

    def texture_rgba(self, key: str, rgba: np.ndarray, wrap_s: int = 10497, wrap_t: int = 10497) -> tuple[int, bool] | None:
        """Add a decoded RGBA image (e.g. from a GameCube texture) with its own wrap modes."""
        ck = ("rgba", key, wrap_s, wrap_t)
        if ck in self.tex_cache:
            return self.tex_cache[ck]
        if rgba is None:
            return None
        alpha = bool((rgba[..., 3] < 250).any())
        img = Image.fromarray(np.ascontiguousarray(rgba), "RGBA")
        if not alpha:
            img = img.convert("RGB")
        if max(img.size) > self.max_tex:
            img.thumbnail((self.max_tex, self.max_tex), Image.LANCZOS)
        buf = io.BytesIO()
        img_key = ("img", key)
        if img_key in self.tex_cache:
            image_index = self.tex_cache[img_key]
        else:
            if alpha:
                img.save(buf, "PNG", optimize=True)
                mime = "image/png"
            else:
                img.save(buf, "JPEG", quality=85)
                mime = "image/jpeg"
            self.gltf["images"].append({"bufferView": self.view(buf.getvalue()), "mimeType": mime})
            image_index = len(self.gltf["images"]) - 1
            self.tex_cache[img_key] = image_index
        sampler = {"wrapS": wrap_s, "wrapT": wrap_t, "magFilter": 9729, "minFilter": 9987}
        if sampler in self.gltf["samplers"]:
            si = self.gltf["samplers"].index(sampler)
        else:
            self.gltf["samplers"].append(sampler)
            si = len(self.gltf["samplers"]) - 1
        self.gltf["textures"].append({"source": image_index, "sampler": si})
        self.tex_cache[ck] = (len(self.gltf["textures"]) - 1, alpha)
        return self.tex_cache[ck]

    def custom_material(self, spec: dict) -> int:
        key = ("custom", json.dumps(spec, sort_keys=True))
        if key not in self.mat_cache:
            self.gltf["materials"].append(spec)
            self.mat_cache[key] = len(self.gltf["materials"]) - 1
        return self.mat_cache[key]

    def add_arrays(self, name: str, pos: np.ndarray, tris: np.ndarray, mat: int, uv: np.ndarray | None = None,
                   color: np.ndarray | None = None, normal: np.ndarray | None = None) -> None:
        """Add a mesh from flat per-vertex arrays (positions, optional UV, RGBA8 colour, normals)."""
        attrs = {"POSITION": self.accessor(np.ascontiguousarray(pos, np.float32), "VEC3", 5126, 34962, minmax=True)}
        if normal is not None:
            attrs["NORMAL"] = self.accessor(np.ascontiguousarray(normal, np.float32), "VEC3", 5126, 34962)
        if uv is not None:
            attrs["TEXCOORD_0"] = self.accessor(np.ascontiguousarray(uv, np.float32), "VEC2", 5126, 34962)
        if color is not None:
            attrs["COLOR_0"] = self.accessor(np.ascontiguousarray(color, np.uint8), "VEC4", 5121, 34962, normalized=True)
        idx = np.ascontiguousarray(tris.reshape(-1).astype(np.uint32 if len(pos) > 65535 else np.uint16))
        prim = {"attributes": attrs, "indices": self.accessor(idx, "SCALAR", 5125 if idx.dtype == np.uint32 else 5123, 34963), "material": mat}
        self.gltf["meshes"].append({"name": name, "primitives": [prim]})
        self.gltf["nodes"].append({"name": name, "mesh": len(self.gltf["meshes"]) - 1})
        self.gltf["scenes"][0]["nodes"].append(len(self.gltf["nodes"]) - 1)

    def water_material(self) -> int:
        if "water" not in self.mat_cache:
            self.gltf["materials"].append({"name": "water", "doubleSided": True, "alphaMode": "BLEND",
                "pbrMetallicRoughness": {"baseColorFactor": [0.13, 0.47, 0.62, 0.72], "metallicFactor": 0, "roughnessFactor": 1},
                "extensions": {"KHR_materials_unlit": {}}})
            self.mat_cache["water"] = len(self.gltf["materials"]) - 1
        return self.mat_cache["water"]

    def layer_material(self, tex: tuple[int, bool], name: str) -> int:
        """Second texture layer blended over the base by the base mesh's vertex alpha."""
        key = ("layer", tex)
        if key not in self.mat_cache:
            self.gltf["materials"].append({"name": "layer2 " + name, "doubleSided": True, "alphaMode": "BLEND",
                "pbrMetallicRoughness": {"baseColorTexture": {"index": tex[0]}, "metallicFactor": 0, "roughnessFactor": 1},
                "extensions": {"KHR_materials_unlit": {}}})
            self.mat_cache[key] = len(self.gltf["materials"]) - 1
        return self.mat_cache[key]

    def material(self, tex: tuple[int, bool] | None, name: str) -> int:
        blend = bool(re.search(r"glass|water|sea|wave|shadow|corona|kage", name, re.I))
        key = (tex, blend)
        if key in self.mat_cache:
            return self.mat_cache[key]
        m = {"name": name, "pbrMetallicRoughness": {"metallicFactor": 0, "roughnessFactor": 1},
             "doubleSided": True, "extensions": {"KHR_materials_unlit": {}}}
        if tex:
            m["pbrMetallicRoughness"]["baseColorTexture"] = {"index": tex[0]}
            if tex[1]:
                m["alphaMode"] = "BLEND" if blend else "MASK"
                if not blend:
                    m["alphaCutoff"] = 0.5
        self.gltf["materials"].append(m)
        self.mat_cache[key] = len(self.gltf["materials"]) - 1
        return self.mat_cache[key]

    def add_mesh(self, name: str, rows, cols, mat: int, water: bool = False) -> None:
        voff, pos = cols["VERTEX"]
        if water:
            cols = {"VERTEX": cols["VERTEX"]}
        parts = [rows[:, voff]]
        uv = cols.get("TEXCOORD")
        col = cols.get("COLOR")
        if uv:
            parts.append(rows[:, uv[0]])
        if col:
            parts.append(rows[:, col[0]])
        key = np.stack(parts, axis=1)
        uniq, inverse = np.unique(key, axis=0, return_inverse=True)
        inverse = inverse.reshape(-1)
        attrs = {"POSITION": self.accessor(np.ascontiguousarray(pos[uniq[:, 0], :3], np.float32), "VEC3", 5126, 34962, minmax=True)}
        k = 1
        if uv:
            t = uv[1][np.clip(uniq[:, k], 0, len(uv[1]) - 1), :2].astype(np.float32).copy()
            t[:, 1] = 1.0 - t[:, 1]
            attrs["TEXCOORD_0"] = self.accessor(np.ascontiguousarray(t), "VEC2", 5126, 34962)
            k += 1
        if col:
            c = col[1][np.clip(uniq[:, k], 0, len(col[1]) - 1)]
            if c.shape[1] == 3:
                c = np.concatenate([c, np.ones((len(c), 1), np.float32)], axis=1)
            c8 = np.clip(np.round(c[:, :4] * 255), 0, 255).astype(np.uint8)
            attrs["COLOR_0"] = self.accessor(np.ascontiguousarray(c8), "VEC4", 5121, 34962, normalized=True)
        idx = inverse.astype(np.uint32 if len(uniq) > 65535 else np.uint16)
        prim = {"attributes": attrs, "indices": self.accessor(idx, "SCALAR", 5125 if idx.dtype == np.uint32 else 5123, 34963), "material": mat}
        self.gltf["meshes"].append({"name": name, "primitives": [prim]})
        self.gltf["nodes"].append({"name": name, "mesh": len(self.gltf["meshes"]) - 1})
        self.gltf["scenes"][0]["nodes"].append(len(self.gltf["nodes"]) - 1)

    def write(self, out: Path) -> bytes:
        for k in ("textures", "images"):
            if not self.gltf[k]:
                del self.gltf[k]
        while len(self.bin) % 4:
            self.bin.append(0)
        self.gltf["buffers"] = [{"byteLength": len(self.bin)}]
        js = json.dumps(self.gltf, separators=(",", ":")).encode()
        js += b" " * (-len(js) % 4)
        glb = struct.pack("<4sII", b"glTF", 2, 12 + 8 + len(js) + 8 + len(self.bin))
        glb += struct.pack("<I4s", len(js), b"JSON") + js
        glb += struct.pack("<I4s", len(self.bin), b"BIN\0") + bytes(self.bin)
        out.write_bytes(glb)
        return glb


LAYER_RE = re.compile(r"_uv(\d)$")


def convert_dae(w: GlbWriter, path: Path, *, water: bool = False, transform=None, layers: str = "blend",
                skip_textures: tuple[str, ...] = ()) -> int:
    """Add every mesh of one COLLADA file. transform maps an (N,3) position array to world space.
    layers: 'blend' draws _uv2 texture layers over their base mesh using its vertex alpha; 'skip' drops them."""
    dae = Collada(path)
    tris = 0
    bases: dict[str, list] = {}
    for name, geom, mat_id in dae.meshes():
        meshes = [(r, c) for r, c in read_mesh(dae, geom) if len(r)]
        if transform is not None:
            meshes = [(r, {**c, "VERTEX": (c["VERTEX"][0], transform(c["VERTEX"][1][:, :3]))}) for r, c in meshes]
        if water:
            for rows, cols in meshes:
                w.add_mesh(f"{path.stem}:{name}", rows, cols, w.water_material(), water=True)
                tris += len(rows) // 3
            continue
        mat_el = dae.by_id.get(mat_id) if mat_id else None
        img = dae.image_for_material(mat_id) if mat_id else None
        mname = (mat_el.get("name") if mat_el is not None else None) or (img.stem if img else name)
        lm = LAYER_RE.search(mname)
        if img is not None and img.stem.lower() in skip_textures:
            continue
        if lm:
            base = bases.get(name.rsplit("_", 1)[0])
            if layers != "blend" or lm.group(1) != "2" or img is None or base is None:
                continue
            tex = w.texture(img)
            if tex is None:
                continue
            for (rows, cols), (brows, bcols) in zip(meshes, base):
                if len(rows) != len(brows) or "COLOR" not in bcols or "TEXCOORD" not in cols:
                    continue
                merged = np.concatenate([rows, brows[:, bcols["COLOR"][0]:bcols["COLOR"][0] + 1]], axis=1)
                lcols = {"VERTEX": cols["VERTEX"], "TEXCOORD": cols["TEXCOORD"], "COLOR": (rows.shape[1], bcols["COLOR"][1])}
                w.add_mesh(f"{path.stem}:{name}", merged, lcols, w.layer_material(tex, mname))
                tris += len(rows) // 3
            continue
        tex = w.texture(img) if img else None
        mat = w.material(tex, f"{mname} {img.stem if img else ''}")
        bases[name] = meshes
        for rows, cols in meshes:
            w.add_mesh(f"{path.stem}:{name}", rows, cols, mat)
            tris += len(rows) // 3
    return tris


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__)
        return 2
    out = Path(argv[0])
    max_tex, b64, inputs, water = 512, False, [], False
    it = iter(argv[1:])
    for a in it:
        if a == "--max-tex":
            max_tex = int(next(it))
        elif a == "--b64":
            b64 = True
        elif a == "--water":
            water = True
        else:
            inputs.append((Path(a), water))
    w = GlbWriter(max_tex)
    tris = 0
    for path, is_water in inputs:
        tris += convert_dae(w, path, water=is_water)
    glb = w.write(out)
    if b64:
        Path(str(out) + ".b64.txt").write_text(base64.b64encode(glb).decode())
    print(f"{out.name}: {len(w.gltf['meshes'])} meshes, {tris} triangles, "
          f"{len(w.gltf.get('images', []))} textures, {len(glb) / 1e6:.2f} MB")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
