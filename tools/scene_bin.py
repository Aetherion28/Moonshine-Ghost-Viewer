#!/usr/bin/env python3
"""Parse Sunshine scene.bin (JDrama NameRef object tree) into a flat object list.

Each object: [u32 size][u16 hash][u16 len][type][u16 hash][u16 len][name][payload].
Groups carry an optional u32, then a u32 child count and their children; leaf payloads are
class-specific. Placed actors (TPlacement/TActor) begin with position, rotation (degrees)
and scale as float32 triples, followed by class data such as a manager or model key.

Usage: scene_bin.py <scene.szs> [--types] [--dump TYPE]
"""
from __future__ import annotations

import struct
import sys
from collections import Counter


def _str(d, o):
    ln = struct.unpack_from(">H", d, o + 2)[0]
    return d[o + 4:o + 4 + ln].decode("shift_jis", "replace"), o + 4 + ln


def _looks_like_object(d, o, end):
    if o + 12 > end:
        return False
    size = struct.unpack_from(">I", d, o)[0]
    if size < 12 or o + size > end:
        return False
    ln = struct.unpack_from(">H", d, o + 6)[0]
    if ln == 0 or ln > 64 or o + 8 + ln > end:
        return False
    t = d[o + 8:o + 8 + ln]
    return all(48 <= c < 123 or c == 95 for c in t)


def parse(d: bytes):
    objects = []

    def walk(o, end_limit, path, ptypes=()):
        size = struct.unpack_from(">I", d, o)[0]
        typ, p = _str(d, o + 4)
        name_hash = struct.unpack_from(">H", d, p)[0]
        name, p = _str(d, p)
        end = o + size
        for lead in (0, 4):
            q = p + lead
            if q + 4 <= end:
                cnt = struct.unpack_from(">I", d, q)[0]
                if 0 < cnt < 5000 and _looks_like_object(d, q + 4, end):
                    q += 4
                    for _ in range(cnt):
                        if not _looks_like_object(d, q, end):
                            break
                        q = walk(q, end, path + [name], ptypes + (typ,))
                    return end
        objects.append({"type": typ, "name": name, "hash": name_hash, "payload": d[p:end], "path": path,
                        "ptypes": ptypes})
        return end

    walk(0, len(d), [])
    return objects


def placement(payload: bytes):
    """Position, rotation (degrees), scale for actors; None when the payload is too short."""
    if len(payload) < 36:
        return None
    v = struct.unpack_from(">9f", payload, 0)
    if any(abs(x) > 1e7 or x != x for x in v):
        return None
    return v[0:3], v[3:6], v[6:9]


def strings_after(payload: bytes, start: int = 36):
    """Length-prefixed strings ([u16 hash][u16 len][bytes] or [u16 len][bytes]) in a payload."""
    out = []
    o = start
    while o + 4 <= len(payload):
        ln = struct.unpack_from(">H", payload, o + 2)[0]
        if 0 < ln < 80 and o + 4 + ln <= len(payload):
            s = payload[o + 4:o + 4 + ln]
            if all(32 <= c < 127 for c in s) or s.decode("shift_jis", "replace").isprintable():
                out.append(s.decode("shift_jis", "replace"))
                o += 4 + ln
                continue
        o += 1
    return out


if __name__ == "__main__":
    sys.path.insert(0, __file__.rsplit("/", 1)[0])
    from convert_map import rarc_files, yaz0_decompress
    arc = rarc_files(yaz0_decompress(open(sys.argv[1], "rb").read()))
    objs = parse(arc["map/scene.bin"])
    if "--types" in sys.argv:
        for t, c in Counter(o["type"] for o in objs).most_common():
            print(c, t)
    if "--dump" in sys.argv:
        want = sys.argv[sys.argv.index("--dump") + 1]
        for o in objs:
            if o["type"] == want:
                print(o["name"], placement(o["payload"]), strings_after(o["payload"])[:4], o["payload"][36:80].hex())
