"""J3D .brk (TRK1, TEV register colour animation): per material, keyed R/G/B/A for its TEV colour
registers (GX_TEVREG0-2, colour id 1-3) and konst colours."""
import struct


def _names(d, o):
    n = struct.unpack_from(">H", d, o)[0]
    out = []
    for i in range(n):
        so = struct.unpack_from(">H", d, o + 4 + i * 4 + 2)[0]
        e = d.index(b"\0", o + so)
        out.append(d[o + so:e].decode("shift_jis", "replace"))
    return out


def parse(d: bytes):
    assert d[:8] == b"J3D1brk1", d[:8]
    o = 0x20
    assert d[o:o + 4] == b"TRK1"
    s = lambda off: struct.unpack_from(">H", d, o + off)[0]
    l = lambda off: struct.unpack_from(">I", d, o + off)[0]
    loop, dur = d[o + 8], s(0xA)
    nC, nK = s(0xC), s(0xE)
    offs = [l(0x20 + i * 4) for i in range(14)]
    cTab, kTab, cRemap, kRemap, cNames, kNames = offs[:6]
    vals = offs[6:14]   # colour R,G,B,A then konst R,G,B,A (s16 arrays)

    def track(base_vals, count, index, tan):
        a = o + base_vals
        if count == 1:
            return [[0, struct.unpack_from(">h", d, a + index * 2)[0], 0, 0]]
        step = 4 if tan == 1 else 3
        ks = []
        for k in range(count):
            v = struct.unpack_from(">" + "h" * step, d, a + (index + k * step) * 2)
            ks.append([v[0], v[1], v[2], v[3] if step == 4 else v[2]])
        return ks

    def anims(tab, n, vbase, names):
        out = []
        nm = _names(d, o + names) if n else []
        for i in range(n):
            e = o + tab + i * 28
            tr = []
            for c in range(4):
                cnt, idx, tan = struct.unpack_from(">HHH", d, e + c * 6)
                tr.append(track(vals[vbase + c], cnt, idx, tan))
            out.append({"mat": nm[i], "reg": d[e + 24], "rgba": tr})
        return out

    return {"loop": loop, "dur": dur, "color": anims(cTab, nC, 0, cNames), "konst": anims(kTab, nK, 4, kNames)}


if __name__ == "__main__":
    import json, sys
    sys.path.insert(0, __file__.rsplit("/", 1)[0])
    from convert_map import rarc_files, yaz0_decompress
    a = rarc_files(yaz0_decompress(open(sys.argv[1], "rb").read()))
    for k in sys.argv[2:]:
        print(k, json.dumps(parse(a[k])))
