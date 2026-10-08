#!/usr/bin/env python3
"""Convert a Super Mario Sunshine stage into a compact mesh for the ghost viewer.

Accepts any of:
  - a scene archive (e.g. bianco3.szs), Yaz0-compressed or not; its map/map.col is used
  - a raw collision file (map.col)
  - a Wavefront .obj export

Writes <out>.smsmap: little-endian 'SMAP' v1
  u32 magic, u32 version, u32 vertCount, u32 triCount, f32 bbox[6]
  f32 vertices[vertCount*3], u32 indices[triCount*3], u16 surfaceType[triCount] (+pad to 4)

Usage: convert_map.py <input> <output.smsmap> [--list]
"""
from __future__ import annotations

import struct
import sys
from pathlib import Path


# ---------------------------------------------------------------- Yaz0
def yaz0_decompress(data: bytes) -> bytes:
    if data[:4] != b"Yaz0":
        return data
    size = struct.unpack_from(">I", data, 4)[0]
    out = bytearray(size)
    src, dst = 16, 0
    while dst < size:
        code = data[src]
        src += 1
        for bit in range(7, -1, -1):
            if dst >= size:
                break
            if code & (1 << bit):
                out[dst] = data[src]
                dst += 1
                src += 1
            else:
                b1, b2 = data[src], data[src + 1]
                src += 2
                dist = ((b1 & 0x0F) << 8 | b2) + 1
                n = b1 >> 4
                if n == 0:
                    n = data[src] + 0x12
                    src += 1
                else:
                    n += 2
                for _ in range(n):
                    out[dst] = out[dst - dist]
                    dst += 1
    return bytes(out)


# ---------------------------------------------------------------- RARC
def rarc_files(data: bytes) -> dict[str, bytes]:
    if data[:4] != b"RARC":
        raise ValueError("not a RARC archive")
    data_off = struct.unpack_from(">I", data, 0x0C)[0] + 0x20
    info = 0x20
    n_nodes, node_off, _n_entries, entry_off, _st_size, st_off = struct.unpack_from(">6I", data, info)
    node_off += info
    entry_off += info
    st_off += info

    def name_at(off: int) -> str:
        end = data.index(b"\0", st_off + off)
        return data[st_off + off:end].decode("ascii", "replace")

    files: dict[str, bytes] = {}

    def walk(node_index: int, prefix: str, seen: set[int]) -> None:
        if node_index in seen or node_index >= n_nodes:
            return
        seen.add(node_index)
        o = node_off + node_index * 0x10
        _typ, _name_off, _hash, count, first = struct.unpack_from(">4sIHHI", data, o)
        for e in range(first, first + count):
            eo = entry_off + e * 0x14
            fid, _h, flags, _pad, noff, doff, dsize = struct.unpack_from(">HHBBHII", data, eo)
            name = name_at(noff)
            if name in (".", ".."):
                continue
            if fid == 0xFFFF or flags & 0x02:
                walk(doff, f"{prefix}{name}/", seen)
            else:
                files[f"{prefix}{name}"] = data[data_off + doff:data_off + doff + dsize]

    walk(0, "", set())
    return files


# ---------------------------------------------------------------- .col
def parse_col(data: bytes):
    vcount, voff, gcount, goff = struct.unpack_from(">4I", data, 0)
    verts = [struct.unpack_from(">3f", data, voff + i * 12) for i in range(vcount)]
    last_err = None
    # Groups are 0x18 bytes in retail files; fall back to other strides if that fails to validate.
    for stride in (0x18, 0x14, 0x1C, 0x10):
        try:
            tris, types = [], []
            for g in range(gcount):
                o = goff + g * stride
                ctype, ntri = struct.unpack_from(">HH", data, o)
                ioff = struct.unpack_from(">I", data, o + 8)[0]
                if ioff + ntri * 6 > len(data):
                    raise ValueError("index block out of range")
                for t in range(ntri):
                    a, b, c = struct.unpack_from(">3H", data, ioff + t * 6)
                    if max(a, b, c) >= vcount:
                        raise ValueError("vertex index out of range")
                    tris.append((a, b, c))
                    types.append(ctype)
            if not tris:
                raise ValueError("no triangles")
            return verts, tris, types
        except (ValueError, struct.error) as exc:
            last_err = exc
    raise ValueError(f"could not parse collision: {last_err}")


# ---------------------------------------------------------------- .obj
def parse_obj(text: str):
    verts, tris = [], []
    for line in text.splitlines():
        p = line.split()
        if not p:
            continue
        if p[0] == "v":
            verts.append(tuple(float(x) for x in p[1:4]))
        elif p[0] == "f":
            idx = [int(x.split("/")[0]) for x in p[1:]]
            idx = [i - 1 if i > 0 else len(verts) + i for i in idx]
            for k in range(1, len(idx) - 1):
                tris.append((idx[0], idx[k], idx[k + 1]))
    return verts, tris, [0] * len(tris)


def load_any(path: Path):
    raw = path.read_bytes()
    if path.suffix.lower() == ".obj":
        return parse_obj(raw.decode("utf-8", "replace")), "obj"
    raw = yaz0_decompress(raw)
    if raw[:4] == b"RARC":
        files = rarc_files(raw)
        cols = sorted(k for k in files if k.lower().endswith(".col"))
        if not cols:
            raise ValueError("archive contains no .col collision file")
        preferred = [k for k in cols if k.lower().endswith("map/map.col")] or \
                    [k for k in cols if k.lower().endswith("/map.col")] or cols[:1]
        return parse_col(files[preferred[0]]), preferred[0]
    return parse_col(raw), "col"


def write_smsmap(out: Path, verts, tris, types) -> None:
    xs, ys, zs = zip(*verts)
    head = struct.pack("<4sIII6f", b"SMAP", 1, len(verts), len(tris),
                       min(xs), min(ys), min(zs), max(xs), max(ys), max(zs))
    body = struct.pack(f"<{len(verts) * 3}f", *[c for v in verts for c in v])
    body += struct.pack(f"<{len(tris) * 3}I", *[i for t in tris for i in t])
    body += struct.pack(f"<{len(types)}H", *types)
    if len(types) % 2:
        body += b"\0\0"
    out.write_bytes(head + body)


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__)
        return 2
    src = Path(argv[0])
    if "--list" in argv:
        raw = yaz0_decompress(src.read_bytes())
        for k, v in sorted(rarc_files(raw).items()):
            print(f"{len(v):>9}  {k}")
        return 0
    (verts, tris, types), used = load_any(src)
    write_smsmap(Path(argv[1]), verts, tris, types)
    print(f"{src.name}: {used} -> {len(verts)} verts, {len(tris)} tris, "
          f"{len(set(types))} surface types")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
