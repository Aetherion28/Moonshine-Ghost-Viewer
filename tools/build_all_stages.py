#!/usr/bin/env python3
"""Build every Sunshine stage for the viewer and write its stage list.

Usage: build_all_stages.py <scene_dir> <stage_table.json> <site_dir> [--max-tex N]

Scenes whose map, sky and sea models are byte-identical share one model file. Each list
entry records every (area, episode) pair that loads it, so the viewer can pick the exact
stage for any ghost segment.
"""
from __future__ import annotations

import base64
import hashlib
import json
import sys
import traceback
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import build_stage  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402

AREA_NAMES = {
    0x00: "Delfino Airstrip", 0x01: "Delfino Plaza", 0x02: "Bianco Hills", 0x03: "Ricco Harbor",
    0x04: "Gelato Beach", 0x05: "Pinna Park Beach", 0x06: "Sirena Beach", 0x07: "Hotel Delfino",
    0x08: "Pianta Village", 0x09: "Noki Bay", 0x0D: "Pinna Park", 0x0E: "Casino Delfino",
    0x10: "Noki Bay Undersea", 0x37: "Bianco Hills Boss", 0x38: "Hotel Delfino Boss",
    0x39: "Noki Bay Boss", 0x3A: "Pinna Park Boss", 0x3B: "Ricco Harbor (Gooper Blooper)",
    0x3C: "Corona Mountain",
}
LABELS = {0x01: "DP", 0x02: "BH", 0x03: "RH", 0x04: "GB", 0x05: "PP", 0x06: "SB", 0x08: "PV", 0x09: "NB", 0x00: "AS", 0x3C: "BW"}
# Internal scene -> parent area, from Moonshine's portable route table (ghost_format.h).
SECRET_PARENT = {0x07: 0x06, 0x0D: 0x05, 0x0E: 0x06, 0x10: 0x09, 0x1E: 0x03, 0x1F: 0x09, 0x20: 0x04,
                 0x21: 0x04, 0x28: 0x06, 0x29: 0x05, 0x2A: 0x08, 0x2C: 0x09, 0x2E: 0x02, 0x2F: 0x02,
                 0x30: 0x03, 0x32: 0x05, 0x33: 0x06, 0x37: 0x02, 0x38: 0x06, 0x39: 0x09, 0x3A: 0x05,
                 0x3B: 0x03}
SKIP = ("none", "scale", "test", "option", "pinnaDemo")


def area_name(area: int, scene: str) -> str:
    if area in AREA_NAMES:
        return AREA_NAMES[area]
    if area in SECRET_PARENT:
        return f"{AREA_NAMES.get(SECRET_PARENT[area], 'Secret')} secret ({scene})"
    if scene.startswith("dolpic_ex"):
        return f"Delfino Plaza area ({scene})"
    return f"Secret ({scene})"


def secret_name(e: dict) -> None:
    parents = []
    for a, _ in e["routes"]:
        p = SECRET_PARENT.get(a)
        if p is not None and a not in AREA_NAMES and AREA_NAMES.get(p) not in parents:
            parents.append(AREA_NAMES.get(p))
    if len(parents) > 1:
        e["name"] = f"{' / '.join(parents)} secret ({e['id']})"


def main(argv):
    scene_dir, table, site = Path(argv[0]), json.load(open(argv[1])), Path(argv[2])
    max_tex = int(argv[argv.index("--max-tex") + 1]) if "--max-tex" in argv else 512
    out_dir = site / "maps"
    out_dir.mkdir(parents=True, exist_ok=True)
    groups: dict[str, dict] = {}
    for area, episodes in enumerate(table):
        for ep, scene in enumerate(episodes):
            if scene.startswith(SKIP):
                continue
            path = scene_dir / f"{scene}.szs"
            if not path.exists():
                continue
            arc = rarc_files(yaz0_decompress(path.read_bytes()))
            if "map/map/map.bmd" not in arc:
                continue
            h = hashlib.sha1()
            for k in ("map/map/map.bmd", "map/map/sky.bmd", "map/map/sky.bmt", "map/map/sea.bmd"):
                h.update(arc.get(k, b""))
            key = h.hexdigest()[:12]
            g = groups.setdefault(key, {"scenes": [], "routes": [], "path": path, "area": area})
            if scene not in g["scenes"]:
                g["scenes"].append(scene)
            g["routes"].append([area, ep])
    entries, total, by_output = [], 0, {}
    for key, g in groups.items():
        first = g["scenes"][0]
        fname = f"{first}.glb.b64.txt"
        try:
            glb = build_stage.build(g["path"], out_dir / f"{first}.glb", max_tex)
            (out_dir / f"{first}.glb").unlink()
        except Exception:
            traceback.print_exc()
            print("FAILED", g["scenes"])
            continue
        digest = hashlib.sha1(glb).hexdigest()
        if digest in by_output:  # identical model from different source bytes: share the file
            prev = by_output[digest]
            prev["routes"] += g["routes"]
            prev["scenes"] += g["scenes"]
            continue
        (out_dir / fname).write_text(base64.b64encode(glb).decode())
        total += len(glb)
        area = g["area"]
        eps = sorted({e for a, e in g["routes"] if a == area})
        label = LABELS.get(area)
        if label and len(eps) < 8 and area in (0x02, 0x03, 0x04, 0x05, 0x06, 0x08, 0x09):
            name = f"{area_name(area, first)} " + ", ".join(f"{label}{e + 1}" for e in eps)
        else:
            name = area_name(area, first)
        entry = {"id": first, "name": name, "file": f"maps/{fname}", "routes": g["routes"], "scenes": g["scenes"]}
        by_output[digest] = entry
        entries.append(entry)
    for e in entries:   # a secret shared by several levels (coro_ex2 / coro_ex5) names all of them
        secret_name(e)
    entries.sort(key=lambda e: (e["routes"][0][0], e["routes"][0][1]))
    json.dump(entries, open(out_dir / "index.json", "w"), indent=1)
    print(f"{len(entries)} stage models, {total / 1e6:.1f} MB")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
