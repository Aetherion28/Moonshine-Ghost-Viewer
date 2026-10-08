"""Parse JDrama TParams .prm files: [u32 count] then [u16 hash][u16 len][name][u32 size][value]."""
import struct


def parse(d: bytes):
    n = struct.unpack_from(">I", d, 0)[0]
    o, out = 4, {}
    for _ in range(n):
        ln = struct.unpack_from(">H", d, o + 2)[0]
        name = d[o + 4:o + 4 + ln].decode("ascii", "replace")
        o += 4 + ln
        sz = struct.unpack_from(">I", d, o)[0]
        raw = d[o + 4:o + 4 + sz]
        o += 4 + sz
        if sz == 4:
            f = struct.unpack(">f", raw)[0]
            i = struct.unpack(">i", raw)[0]
            out[name] = f if (abs(f) > 1e-6 and abs(f) < 1e7) or i == 0 else i
        elif sz == 1:
            out[name] = raw[0]
        else:
            out[name] = raw
    return out


if __name__ == "__main__":
    import sys
    sys.path.insert(0, __file__.rsplit("/", 1)[0])
    from convert_map import rarc_files, yaz0_decompress
    a = rarc_files(yaz0_decompress(open(sys.argv[1], "rb").read()))
    for k in sys.argv[2:]:
        print(k, parse(a[k]))
