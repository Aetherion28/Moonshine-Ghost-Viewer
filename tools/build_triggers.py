"""Add each scene's invisible triggers to its objects/<scene>.json as "trig".

From scene.bin: stage changes (TMapObjChangeStage[HipDrop] / ChangeStageMerrygoround: cylinder
100 x max(sx, sz) by 100 x sy, the next stage's id), cutscene starts (TMapObjStartDemo, same
cylinder), warp areas (TWarpAreaActor: 100 sx by 100 sy) and area cylinders (TAreaCylinder:
radius sx x 50, height sy x 50). From tables.bin: the cubes (TCubeGeneralInfo: centre x/z,
bottom y, rotation in degrees, size x 100; CLBIsPointInCube), by table: camera, area, stream,
wire, shadow, mirror, sound change, fast A/B/C. Plus enemies' own distance checks around where
they're placed ("enemy" spheres, ENEMY_ZONES), from the stage's map/params/enemy/<name>.prm or
the decomp's defaults.

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
import prm  # noqa: E402
from build_objects import actor_tail, _lstr  # noqa: E402

CUBES = {"カメラキューブテーブル": "camera", "エリアキューブテーブル": "area", "流れキューブテーブル": "stream",
         "ワイヤーキューブテーブル": "wire", "影キューブテーブル": "shadow", "鏡キューブテーブル": "mirror",
         "サウンド切り替えキューブテーブル": "sound", "高速Ａキューブテーブル": "fastA", "高速Ｂキューブテーブル": "fastB",
         "高速Ｃキューブテーブル": "fastC"}
STAGE_CHANGE = {"MapObjChangeStage": "stage", "MapObjChangeStageHipDrop": "stageHipDrop", "ChangeStageMerrygoround": "stage"}


# Enemies that act on Mario's distance from them (PSVECSquareDistance: a sphere), by scene type:
# (prm file, [(zone, label, radius from the params)]). TCannon (Enemy/cannon.cpp,
# TNerveCannonSearch): within mSLBombDist it throws a bomb once mSLBombInterval is up, else
# (within mSLKillerDist, every mSLShootInterval) three goop shots, then a bomb if Mario is within
# sqrt(2) x mSLBombDist (TNerveCannonForceBombShoot); within mSLHideDist the mole hides
# (TNerveCannonClose) until Mario is past 3 x mSLHideDist. mSLKillerDist (20000) takes in about
# the whole stage, so it isn't drawn.
ENEMY_ZONES = {
    "Cannon": ("cannon", {"mSLHideDist": 300.0, "mSLBombDist": 2000.0, "mSLKillerDist": 10000.0}, [
        ("bomb", "Monty Mole: throws bombs", lambda p: p["mSLBombDist"]),
        ("bomb2", "Monty Mole: bomb after goop", lambda p: p["mSLBombDist"] * 2 ** 0.5),
        ("hide", "Monty Mole: hides", lambda p: p["mSLHideDist"]),
        ("unhide", "Monty Mole: comes back out past", lambda p: p["mSLHideDist"] * 3),
    ]),
}


def cork_held(arc, objs):
    """Noki Bay's cannon rides the cork (TMareCork::loadAfter takes it): TCannon::calcRootMatrix
    puts it at the cork's getTakingMtx, joint 2 (posnull1), here in the model's bind pose."""
    cork = next((p for o, p in objs if o["type"] == "MareCork"), None)
    if cork is None or "mapobj/marecork.bmd" not in arc:
        return None
    import math
    import bmd
    (cx, cy, cz), ry = cork[0], cork[1][1] * math.pi / 180
    j = bmd.parse(arc["mapobj/marecork.bmd"]).joints_world[2]
    lx, ly, lz = j[0][3], j[1][3], j[2][3]
    return (cx + lx * math.cos(ry) + lz * math.sin(ry), cy + ly, cz - lx * math.sin(ry) + lz * math.cos(ry))


def enemy_zones(arc, objs):
    out = []
    for t, (name, defaults, zones) in ENEMY_ZONES.items():
        prm_ = dict(defaults)
        raw = arc.get(f"map/params/enemy/{name}.prm")
        if raw:
            try:
                prm_.update(prm.parse(raw))
            except Exception:
                pass
        for o, pos in objs:
            if o["type"] != t:
                continue
            x, y, z = pos
            if t == "Cannon":
                x, y, z = cork_held(arc, objs) or (x, y, z)
            for zone, label, rad in zones:
                out.append(["enemy", label, r(x), r(y), r(z), 0, 0, 0, r(rad(prm_)), 0, 0, zone])
    return out


def r(v):
    return round(float(v), 2)


def triggers(arc):
    out, placed = [], []
    for o in scene_bin.parse(arc["map/scene.bin"]):
        t = o["type"]
        pl = scene_bin.placement(o["payload"])
        if pl is None:
            continue
        (x, y, z), (rx, ry, rz), (sx, sy, sz) = pl
        if t in ENEMY_ZONES:
            placed.append((o, (x, y, z)))
        elif t == "MareCork":
            placed.append((o, ((x, y, z), (rx, ry, rz))))
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
    return out + enemy_zones(arc, placed)


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
            text = p.read_text()
            d = json.loads(text)
            if isinstance(d, list):
                continue
            d["trig"] = triggers(arc)
            p.write_text(json.dumps(d, separators=(",", ":"), ensure_ascii=text.isascii()))
            done += 1
    print(done, "scenes")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
