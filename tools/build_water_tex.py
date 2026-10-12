"""Export FLUDD water textures from mario.szs (timg/) to site/water_tex.js.

TModelWaterManager::load uses waterref (indirect refraction offsets, IA8: A = s, I = t),
waterMask (I8 drop shape) and waterSpec (I8 highlight); TSplashManager::load uses splash (IA8).
Channels are packed into opaque RGB PNGs so the browser cannot premultiply them:
ref -> R = s (A), G = t (I); mask / spec -> R; splash -> R = I, G = A.

usage: build_water_tex.py <mario.szs> <out.js>
"""
import base64
import io
import struct
import sys

import numpy as np
from PIL import Image

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
import gx_texture  # noqa: E402


def bti(d: bytes) -> np.ndarray:
    fmt = d[0]
    w, h = struct.unpack_from(">HH", d, 2)
    pal_fmt = d[9]
    npal = struct.unpack_from(">H", d, 10)[0]
    pal_off = struct.unpack_from(">I", d, 12)[0]
    img_off = struct.unpack_from(">I", d, 0x1C)[0]
    pal = d[pal_off:pal_off + npal * 2] if npal else None
    return gx_texture.decode(d[img_off:], fmt, w, h, pal, pal_fmt).astype(np.uint8)


def png(rgb: np.ndarray) -> str:
    b = io.BytesIO()
    Image.fromarray(rgb, "RGB").save(b, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(b.getvalue()).decode()


def main(szs, out):
    a = rarc_files(yaz0_decompress(open(szs, "rb").read()))
    tex = {}
    ref = bti(a["timg/waterref.bti"])
    z = np.zeros(ref.shape[:2], np.uint8)
    tex["ref"] = png(np.dstack([ref[..., 3], ref[..., 0], z]))
    for k, n in (("mask", "watermask"), ("spec", "waterspec")):
        p = bti(a[f"timg/{n}.bti"])
        tex[k] = png(np.dstack([p[..., 0], p[..., 0], p[..., 0]]))
    sp = bti(a["timg/splash.bti"])
    tex["splash"] = png(np.dstack([sp[..., 0], sp[..., 3], np.zeros(sp.shape[:2], np.uint8)]))
    with open(out, "w") as f:
        f.write("// FLUDD water textures from mario.szs timg/ (tools/build_water_tex.py).\n")
        f.write("const WATER_TEX = {\n")
        for k, v in tex.items():
            f.write(f"  {k}: '{v}',\n")
        f.write("};\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
