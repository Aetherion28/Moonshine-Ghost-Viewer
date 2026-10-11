"""J3D texture SRT animation (.btk, TTK1): per material texture matrix scale / rotation /
translation tracks, so the viewer can scroll water and similar textures like the game.

parse(data) -> {"duration": frames, "loop": mode, "anims": [{"mat": name, "tm": texmtx index,
"center": [cs, ct, cq], "tracks": {"sS": track, "rS": .., "tS": .., "sT": .., "rT": .., "tT": ..}}]}
A track is a constant [v] or keyframes [[time, value, tan_in, tan_out], ...]; rotations in radians.
"""
from __future__ import annotations

import math
import struct


def _u16(b, o): return struct.unpack_from(">H", b, o)[0]
def _u32(b, o): return struct.unpack_from(">I", b, o)[0]


def _names(b, o):
    n = _u16(b, o)
    out = []
    for i in range(n):
        so = _u16(b, o + 4 + i * 4 + 2)
        e = b.index(b"\0", o + so)
        out.append(b[o + so:e].decode("shift_jis", "replace"))
    return out


def parse(data: bytes) -> dict | None:
    if data[:8] != b"J3D1btk1":
        return None
    o = 0x20
    while o < len(data) and data[o:o + 4] != b"TTK1":
        o += _u32(data, o + 4)
    if data[o:o + 4] != b"TTK1":
        return None
    c = data[o:]
    loop, rdec, dur = c[8], c[9], _u16(c, 0x0A)
    n = _u16(c, 0x0C) // 3
    anim_o, names_o, tm_o, center_o = _u32(c, 0x14), _u32(c, 0x1C), _u32(c, 0x20), _u32(c, 0x24)
    s_o, r_o, t_o = _u32(c, 0x28), _u32(c, 0x2C), _u32(c, 0x30)
    rscale = (1 << rdec) / 0x7FFF * math.pi
    names = _names(c, names_o)

    def track(at, table, kind):
        count, idx, tan = _u16(c, at), _u16(c, at + 2), _u16(c, at + 4)
        def val(i):
            if kind == "r":
                return struct.unpack_from(">h", c, r_o + i * 2)[0] * rscale
            return struct.unpack_from(">f", c, table + i * 4)[0]
        if count == 1:
            return [round(val(idx), 6)]
        stride = 3 if tan == 0 else 4
        keys = []
        for k in range(count):
            base = idx + k * stride
            if kind == "r":
                t = struct.unpack_from(">h", c, r_o + base * 2)[0]
                v, ti = val(base + 1), val(base + 2)
                to = val(base + 3) if stride == 4 else ti
            else:
                t = struct.unpack_from(">f", c, table + base * 4)[0]
                v, ti = val(base + 1), val(base + 2)
                to = val(base + 3) if stride == 4 else ti
            keys.append([round(t, 4), round(v, 6), round(ti, 6), round(to, 6)])
        return keys

    anims = []
    for i in range(n):
        at = anim_o + i * 0x36
        tr = {"sS": track(at + 0x00, s_o, "s"), "rS": track(at + 0x06, r_o, "r"), "tS": track(at + 0x0C, t_o, "t"),
              "sT": track(at + 0x12, s_o, "s"), "rT": track(at + 0x18, r_o, "r"), "tT": track(at + 0x1E, t_o, "t"),
              "rQ": track(at + 0x2A, r_o, "r")}   # the 2D texture rotation is about Q
        center = list(struct.unpack_from(">3f", c, center_o + i * 12))
        anims.append({"mat": names[i] if i < len(names) else "", "tm": c[tm_o + i], "center": center, "tracks": tr})
    return {"duration": dur, "loop": loop, "anims": anims}
