#!/usr/bin/env python3
"""Per-stage collision (map/map.col) for the viewer's physics: thrown objects, spray hits.

Usage: build_collision.py <scene_dir> <site_dir>
Writes maps/<id>.col.b64.txt for every stage in maps/index.json and adds "col" to the entry.
Format (little endian): 'SCOL', u32 nverts, u32 ntris, 3 f32 origin, f32 step, then int16 xyz per vertex
(relative to origin, in steps), u16 or u32 indices (u32 when nverts > 65535), u16 type per tri.
"""
import base64
import json
import struct
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from convert_map import parse_col, rarc_files, yaz0_decompress  # noqa: E402


def pack(verts, tris, types):
    v = np.asarray(verts, np.float64)
    lo, hi = v.min(0), v.max(0)
    origin = np.round((lo + hi) / 2)
    step = max(1.0, float(np.ceil(np.abs(v - origin).max() / 32767 * 4) / 4))
    q = np.round((v - origin) / step)
    t = np.asarray(tris, np.uint32)
    idx = t.astype(np.uint16 if len(v) <= 65535 else np.uint32)
    head = b"SCOL" + struct.pack("<II4f", len(v), len(t), *origin, step)
    body = q.astype("<i2").tobytes()
    if len(body) % 4:
        body += b"\0" * (4 - len(body) % 4)
    ib = idx.astype("<u2" if idx.dtype == np.uint16 else "<u4").tobytes()
    if len(ib) % 4:
        ib += b"\0" * (4 - len(ib) % 4)
    return head + body + ib + np.asarray(types, "<u2").tobytes()


def main(argv):
    scene_dir, site = Path(argv[0]), Path(argv[1])
    index = site / "maps" / "index.json"
    entries = json.load(open(index))
    total = 0
    for e in entries:
        for scene in e.get("scenes", []):
            p = scene_dir / f"{scene}.szs"
            if not p.exists():
                continue
            arc = rarc_files(yaz0_decompress(p.read_bytes()))
            col = arc.get("map/map.col")
            if not col:
                continue
            data = pack(*parse_col(col))
            out = f"maps/{e['id']}.col.b64.txt"
            (site / out).write_text(base64.b64encode(data).decode())
            e["col"] = out
            total += len(data)
            break
    json.dump(entries, open(index, "w"), indent=1)
    print(f"{sum(1 for e in entries if 'col' in e)} stages, {total / 1e6:.2f} MB")


if __name__ == "__main__":
    main(sys.argv[1:])
