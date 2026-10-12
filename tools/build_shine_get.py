"""Export the Shine get demo's data to site/shine_get.js.

- SHINE_BCK: the Shine's own animations (mapobj/shine_float, shine_demo_shine_get, *_yo), the same
  in every scene; joints shine (root), starglow (glow card), body.
- CAM_BCK: /common/camera/camera_demo_shine_get_{outside,inside}.bck on camera_model.bmd
  (joints cam_interest, cam_position; TCameraBck::updateDemo).
- SG_LETTERS: the "SHINE GET!" panes sg00-sg08 of game_6.szs scrn/big_tx_1.blo (600 x 480 layout):
  position, size, corner colours and the letter texture (TConsoleStr::processShineGet).

usage: build_shine_get.py <data dir> <out.js>
"""
import base64
import io
import json
import struct
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from build_mario_iso import parse_bck  # noqa: E402
from build_water_tex import bti  # noqa: E402


def arc(p):
    return rarc_files(yaz0_decompress(Path(p).read_bytes()))


def blo_pictures(d: bytes):
    """PIC1 panes of a BLO1 screen: name -> (x, y, w, h, texture, [4 corner RGBA])."""
    out, o = {}, 0x20
    while o + 8 <= len(d):
        tag, sz = d[o:o + 4], struct.unpack_from(">I", d, o + 4)[0]
        if sz < 8:
            break
        b = d[o + 8:o + sz]
        if tag == b"PIC1":
            name = b[4:8].decode()
            x, y, w, h = struct.unpack_from(">hhhh", b, 8)
            ln = b[22]
            tex = b[23:23 + ln].decode()
            c0 = 23 + ln + 13   # after: palette (type, name), binding, mirror / wrap, black, white
            corners = [list(b[c0 + i * 4:c0 + i * 4 + 4]) for i in range(4)]
            out[name] = (x, y, w, h, tex, corners)
        o += sz
    return out


def png(rgba: np.ndarray) -> str:
    b = io.BytesIO()
    Image.fromarray(rgba, "RGBA").save(b, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(b.getvalue()).decode()


def main(data, out):
    data = Path(data)
    scene = arc(data / "scene" / "mare1.szs")
    common = arc(data / "common.szs")
    game = arc(data / "game_6.szs")
    shine = {k: parse_bck(scene[f"mapobj/shine_{n}.bck"]) for k, n in
             (("float", "float"), ("get", "demo_shine_get"), ("get_yo", "demo_shine_get_yo"))}
    cam = {k: parse_bck(common[f"camera/camera_demo_shine_get_{k}.bck"]) for k in ("outside", "inside")}
    pics = blo_pictures(game["scrn/big_tx_1.blo"])
    letters = []
    for i in range(9):
        x, y, w, h, tex, corners = pics[f"sg{i:02d}"]
        # J2DPicture: the texture's intensity between black and white, times the corner colours
        px = bti(game[f"timg/{tex}"])
        letters.append({"x": x, "y": y, "w": w, "h": h, "c": corners, "tex": png(px)})
    with open(out, "w") as f:
        f.write("// Shine get demo data (tools/build_shine_get.py).\n")
        f.write("const SHINE_BCK = " + json.dumps(shine, separators=(",", ":")) + ";\n")
        f.write("const CAM_BCK = " + json.dumps(cam, separators=(",", ":")) + ";\n")
        f.write("const SG_LETTERS = " + json.dumps(letters, separators=(",", ":")) + ";\n")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
