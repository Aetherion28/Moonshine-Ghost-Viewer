"""Add each scene's invisible triggers to its objects/<scene>.json as "trig".

From scene.bin: stage changes (TMapObjChangeStage[HipDrop] / ChangeStageMerrygoround: cylinder
100 x max(sx, sz) by 100 x sy, the next stage's id), cutscene starts (TMapObjStartDemo, same
cylinder), warp areas (TWarpAreaActor: 100 sx by 100 sy) and area cylinders (TAreaCylinder:
radius sx x 50, height sy x 50). From tables.bin: the cubes (TCubeGeneralInfo: centre x/z,
bottom y, rotation in degrees, size x 100; CLBIsPointInCube), by table: camera, area, stream,
wire, shadow, mirror, sound change, fast A/B/C.

Each entry: [kind, label, x, y, z, rx, ry, rz, a, b, c, info] with a / b the cylinder's radius
and height, or a / b / c the cube's size.

usage: build_triggers.py <scene_dir> <site_dir>
"""
import json
import struct
import sys
from pathlib import Path

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
import scene_bin  # noqa: E402
from build_objects import actor_tail, _lstr  # noqa: E402

CUBES = {"カメラキューブテーブル": "camera", "エリアキューブテーブル": "area", "流れキューブテーブル": "stream",
         "ワイヤーキューブテーブル": "wire", "影キューブテーブル": "shadow", "鏡キューブテーブル": "mirror",
         "サウンド切り替えキューブテーブル": "sound", "高速Ａキューブテーブル": "fastA", "高速Ｂキューブテーブル": "fastB",
         "高速Ｃキューブテーブル": "fastC"}
STAGE_CHANGE = {"MapObjChangeStage": "stage", "MapObjChangeStageHipDrop": "stageHipDrop", "ChangeStageMerrygoround": "stage"}


def r(v):
    return round(float(v), 2)


def triggers(arc):
    out = []
    for o in scene_bin.parse(arc["map/scene.bin"]):
        t = o["type"]
        pl = scene_bin.placement(o["payload"])
        if pl is None:
            continue
        (x, y, z), (rx, ry, rz), (sx, sy, sz) = pl
        if t in STAGE_CHANGE or t == "MapObjStartDemo":
            try:
                p = actor_tail(o["payload"])
                val = struct.unpack_from(">I", o["payload"], p)[0]
            except struct.error:
                val = 0
            kind = STAGE_CHANGE.get(t, "demo")
            out.append([kind, t, r(x), r(y), r(z), r(rx), r(ry), r(rz), r(100 * max(sx, sz)), r(100 * sy), 0, val])
        elif t == "WarpArea":
            try:
                p = 36
                _, p = _lstr(o["payload"], p)   # TActor's model key... THitActor reads nothing more of its own
                a, b = struct.unpack_from(">II", o["payload"], len(o["payload"]) - 8)
            except struct.error:
                a = b = 0
            out.append(["warp", t, r(x), r(y), r(z), r(rx), r(ry), r(rz), r(100 * sx), r(100 * sy), 0, [a, b]])
        elif t in ("AreaCylinder", "AreaSphere"):
            out.append(["areaCyl", o["name"], r(x), r(y), r(z), 0, 0, 0, r(sx * 50), r(sy * 50), 0, 0])
    if "map/tables.bin" in arc:
        for o in scene_bin.parse(arc["map/tables.bin"]):
            if o["type"] not in ("CubeGeneralInfo", "CameraCubeInfo", "CubeStreamInfo"):
                continue
            kind = CUBES.get(o["path"][-1] if o["path"] else "", "cube")
            v = struct.unpack_from(">9f", o["payload"], 0)
            info = o["name"]
            out.append([kind, info, *[r(c) for c in v[0:6]], r(v[6] * 100), r(v[7] * 100), r(v[8] * 100), 0])
    return out


def main(scene_dir, site):
    site = Path(site)
    index = json.loads((site / "maps/index.json").read_text())
    done = 0
    for m in index:
        objs = (m.get("objects") or {}).get("scenes") or {}
        for i, (route, file) in enumerate(objs.items()):
            scene = Path(file).stem
            szs = Path(scene_dir) / f"{scene}.szs"
            if not szs.exists():
                continue
            arc = rarc_files(yaz0_decompress(szs.read_bytes()))
            if "map/scene.bin" not in arc:
                continue
            p = site / file
            d = json.loads(p.read_text())
            if isinstance(d, list):
                continue
            d["trig"] = triggers(arc)
            p.write_text(json.dumps(d, separators=(",", ":")))
            done += 1
    print(done, "scenes")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
