#!/usr/bin/env python3
"""Per-stage collision (map/map.col) for the viewer's physics: thrown objects, spray hits.

Usage: build_collision.py <scene_dir> <site_dir>
Writes maps/<id>.col.b64.txt for every stage in maps/index.json and adds "col" to the entry.
Format (little endian): 'SCOL', u32 nverts, u32 ntris, 3 f32 origin, f32 step, then int16 xyz per vertex
(relative to origin, in steps), u16 or u32 indices (u32 when nverts > 65535), u16 type per tri,
then (padded to 4) 'LGHT' and a u8 light set per tri: the triangle's additional data when its
BG type has the shadow flag (0x4000), else 0 (TBGCheckData::isShadow / MActor::setLightData).
"""
import base64
import json
import struct
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from convert_map import parse_col, rarc_files, yaz0_decompress  # noqa: E402


def light_ids(col: bytes, ntris: int):
    """Per-triangle light set, in the same order parse_col returns triangles."""
    vcount, voff, gcount, goff = struct.unpack_from(">4I", col, 0)
    out = []
    for g in range(gcount):
        o = goff + g * 0x18
        bgtype, ntri, flags = struct.unpack_from(">HHH", col, o)
        data_o = struct.unpack_from(">I", col, o + 0x14)[0]
        for t in range(ntri):
            d = struct.unpack_from(">h", col, data_o + t * 2)[0] if flags & 1 and data_o else 0
            out.append(d if bgtype & 0x4000 and 0 <= d < 256 else 0)
    return out if len(out) == ntris else [0] * ntris


def pack(verts, tris, types, lights=None):
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
    tb = np.asarray(types, "<u2").tobytes()
    if len(tb) % 4:
        tb += b"\0" * (4 - len(tb) % 4)
    lb = b"LGHT" + np.asarray(lights if lights is not None else [0] * len(t), np.uint8).tobytes() if lights is not None and any(lights) else b""
    return head + body + ib + tb + lb


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
            verts, tris, types = parse_col(col)
            data = pack(verts, tris, types, light_ids(col, len(tris)))
            out = f"maps/{e['id']}.col.b64.txt"
            (site / out).write_text(base64.b64encode(data).decode())
            e["col"] = out
            total += len(data)
            break
    json.dump(entries, open(index, "w"), indent=1)
    print(f"{sum(1 for e in entries if 'col' in e)} stages, {total / 1e6:.2f} MB")


if __name__ == "__main__":
    main(sys.argv[1:])
