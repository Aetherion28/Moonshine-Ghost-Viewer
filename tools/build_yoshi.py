#!/usr/bin/env python3
"""Build Yoshi (yoshi.szs: yoshi_model.bmd) as a skinned model for the ghost viewer, with every
BCK of the archive in alphabetical order (MActor's index: TYoshi calls setBckFromIndex(24) for
yoshi_walk and 15 for yoshi_run), which Moonshine V7 ghosts record by index.

Usage: build_yoshi.py <yoshi.szs> <out_dir>
"""
from __future__ import annotations

import base64
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bmd  # noqa: E402
from build_mario_iso import parse_bck  # noqa: E402
from build_objects import add_skinned  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from dae_to_glb import GlbWriter  # noqa: E402


def main(argv):
    arc = rarc_files(yaz0_decompress(Path(argv[0]).read_bytes()))
    out = Path(argv[1])
    model = bmd.parse(arc["yoshi_model.bmd"])
    names = sorted(k for k in arc if k.endswith(".bck"))
    anims = [parse_bck(arc[k]) for k in names]
    w = GlbWriter(128)
    add_skinned(w, model, "yoshi", anims[names.index("yoshi_wait.bck")])
    ex = w.gltf["scenes"][0].setdefault("extras", {})
    ex["anims"] = {f"yoshi#{i}": a for i, a in enumerate(anims)}
    ex["animNames"] = [n[:-4] for n in names]
    glb = w.write(out / "yoshi.glb")
    (out / "yoshi.glb").unlink(missing_ok=True)
    (out / "yoshi.glb.b64.txt").write_text(base64.b64encode(glb).decode())
    print(f"yoshi {len(glb) / 1e3:.0f} KB, {len(anims)} animations, {len(model.joint_names)} joints")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
