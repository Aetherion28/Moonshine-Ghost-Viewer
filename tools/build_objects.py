#!/usr/bin/env python3
"""Build per-episode object placements and per-stage object model libraries for the viewer.

Usage: build_objects.py <scene_dir> <stage_table.json> <mapobj_table.json> <site_dir> [--max-tex N]

For every stage in <site_dir>/maps/index.json:
  objects/<stage>.lib.glb.b64.txt  one node "m<N>" per distinct object model used by its episodes
  objects/<scene>.json             instances: model, type, key, position, rotation (deg), scale,
                                   pickup kind and collision cylinder (radius, height)
and the stage entry gains "objects": {"lib": ..., "scenes": {"<area>:<episode>": file}}.

Models come from the scene archive: map objects via the decomp's TMapObjData table
(MapObjInit.cpp) or <key>.bmd in mapobj/, characters from the folder named after their type.
Characters are baked in the first frame of their idle ("wait") animation when one fits.
"""
from __future__ import annotations

import base64
import hashlib
import io
import math
import json
import re
import struct
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bmd
import brk  # noqa: E402
import gx_texture  # noqa: E402
import prm  # noqa: E402
import npc_payload  # noqa: E402
import scene_bin  # noqa: E402
import btk  # noqa: E402
import build_stage  # noqa: E402
from build_mario_iso import SUBSTITUTE, _add_mesh, bck_pose, gx_tev_uvs, material_for, parse_bck, quat_from_matrix  # noqa: E402
from build_stage import uv_for  # noqa: E402
from convert_map import parse_col  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from dae_to_glb import GlbWriter  # noqa: E402

SKIP_TYPES = re.compile(r"^(Light|AmbColor|Cube\w*|AreaCylinder|\w*Manager|Map|Sky|SunMgr|MirrorCamera|Mario|"
                        r"GroupObj|IdxGroup|MarScene|MapObjSoundGroup|MapObjWave|Pollution|\w*Camera\w*|"
                        r"\w*Event\w*Point|Strategy|ConductorInit|NameRefGrp|ScenarioArchiveName\w*|"
                        r"Shimmer)$")   # Shimmer: the heat-haze screen effect's plane
OBJ_COLS: dict = {}
PICKUP_TYPES = {"Coin": "coin", "CoinBlue": "coin_blue", "CoinRed": "coin_red", "Shine": "shine",
                "Mushroom1up": "1up", "Mushroom1upR": "1up", "Mushroom1upX": "1up",
                "NozzleItem": "nozzle", "Item": "item"}
# Character type -> model folder where the folder isn't simply the type name (scene archives).
TYPE_FOLDERS = {"NPCMareM": "marem", "NPCMareMB": "maremb", "NPCMareW": "marew", "NPCMareWB": "marewb",
                "AnimalMew": "mew", "AnimalBird": "bird", "NameKuri": "namekuri2", "BombHei": "bombhei",
                "Cannon": "cannon", "RaccoonDog": "raccoondog", "NPCRaccoonDog": "raccoondog",
                "Gesso": "mamegesso", "LandGesso": "rikugesso", "BossGesso": "bgeso", "PoiHana": "poihana",
                "PoiHanaRed": "poihana", "SleepPoiHana": "poihana", "StayPakkun": "pakkun", "Pakkun": "pakkun",
                "HanaSambo": "sambohead", "Yumbo": "sambohead", "ElecNokonoko": "dennoko",
                "Telesa": "telesa", "LoopTelesa": "telesa", "BoxTelesa": "telesa", "MarioModokiTelesa": "telesa", "BossTelesa": "telesa",
                "FishoidA": "fish", "FishoidB": "fish", "FishoidC": "fish", "FishoidD": "fish",
                "ButterflyA": "butterfly", "ButterflyB": "butterfly", "ButterflyC": "butterfly",
                "NPCBoard": "boardnpc", "NPCKinopio": "kinopio", "NPCKinojii": "kinojii", "NPCPeach": "peach",
                "Amenbo": "amenbo", "AmenboManager": "amenbo", "HamuKuri": "hamukuri", "Hamukuri": "hamukuri",
                "HaneHamuKuri": "hanekuri", "HaneHamuKuri2": "hanekuri", "DoroHaneKuri": "hanekuri",
                "KageMario": "kagemario", "Kazekun": "kazekun", "Manta": "manta", "FireWanwan": "firewanwan", "BossWanwan": "bwanwan",
                "BeeHive": "beehive", "Kugu": "kug", "Aminoko": "aminoko", "GateKeeper": "gatekeeper",
                "OrangeSeal": "seal", "BossPakkun": "kbosspakkun", "Gorogoro": "gorogoro"}
PREFERRED_FILES = {"poihana": "default.bmd", "sambohead": "sambohead.bmd", "telesa": "telesa.bmd",
                   "mamegesso": "default.bmd", "rikugesso": "geso_model1.bmd", "bgeso": "bgeso_body.bmd",
                   "pakkun": "pakun.bmd", "kinopio": "kinopio_body.bmd", "kinojii": "kinoji_body.bmd",
                   "peach": "peach_model.bmd", "beehive": "bee_nest.bmd", "firewanwan": "wanwan.bmd", "bwanwan": "bwanwan_body.bmd",
                   "gatekeeper": "gene_pakkun_model1.bmd", "seal": "gene_orange_model1.bmd"}
# NPC bodies (NpcManager.cpp createModelData): the Noki variants share /scene/mareM or /scene/mareW.
NPC_BODIES = {**{f"NPCMareM{v}": ("marem", "marem.bmd") for v in ("", "A", "B", "C", "D")},
              **{f"NPCMareW{v}": ("marew", "marew.bmd") for v in ("", "A", "B")},
              "NPCRaccoonDog": ("raccoondog", "tanuki.bmd"), "RaccoonDog": ("raccoondog", "tanuki.bmd")}
TYPE_FILES = {"Yumbo": "yumbo.bmd", "HaneHamuKuri": "hanekuri.bmd", "HaneHamuKuri2": "hanekuri.bmd", "DoroHaneKuri": "dorohane.bmd", "MarioModokiTelesa": "modoki.bmd", "FishoidA": "fisha.bmd",
              "FishoidB": "fishb.bmd", "FishoidC": "fishc.bmd", "FishoidD": "fishd.bmd",
              "ButterflyA": "butterflya.bmd", "ButterflyB": "butterflyb.bmd", "ButterflyC": "butterflyc.bmd"}
SHRINK_STEPS = 6
CARRY_TYPES = {"JumpBase": "spring", "ResetFruit": "fruit", "FruitBanana": "fruit", "FruitCoconut": "fruit",
               "FruitDurian": "fruit", "FruitPapaya": "fruit", "FruitPine": "fruit"}
PREFERRED = {"cannon": "default.bmd", "bombhei": "nejibomb_model1.bmd"}
# Actors Mario can carry that enemies spawn at run time (not placed in scene.bin), by retail actor
# type (Strategic/ActorTypes.hpp): model, carry kind and the .prm holding their throw physics.
# Moving blocks (MapObjRailBlock.cpp). TRollBlock spins about its local Z by a per-object speed;
# TRailBlock rolls along a rail from map/scene.ral.
ROLL_TYPES = {"Umaibou", "GetaGreen", "GetaOrange", "RollBlock", "RollBlockR", "RollBlockY", "RollBlockB"}
RAIL_TYPES = {"EXRollCube", "RailBlock", "RailBlockR", "RailBlockY", "RailBlockB"}
# TNormalLift and TWoodBlock: ride a rail without rolling; nodes can pause them, make them wait for
# Mario, or send them back to the start.
# RideCloud (MapObjCloud.cpp) runs the same rail logic as a lift, at 2 units per step by default,
# and sinks into a cushion while Mario stands on it.
LIFT_TYPES = {"NormalLift", "EXKickBoard", "Kamaboko", "Uirou", "Castella", "Hikidashi", "WoodBlock", "YoshiBlock", "RideCloud"}


def is_spine(payload: bytes) -> bool:
    """A TSpineEnemy (enemy, NPC, animal): its manager is a ...マネージャー / 管理 object."""
    try:
        _, p = _lstr(payload, 36)
        mgr, _ = _lstr(payload, p + 4)
    except (struct.error, ValueError):
        return False
    mgr = mgr.decode("shift_jis", "replace")
    return "マネージャー" in mgr or "管理" in mgr


def _lstr(b: bytes, p: int):
    n = struct.unpack_from(">H", b, p)[0]
    return b[p + 2:p + 2 + n], p + 2 + n


def actor_tail(payload: bytes):
    """Offset just past TActor + TMapObjBase strings: [desc][u32][model key]."""
    _, p = _lstr(payload, 36)
    p += 4
    _, p = _lstr(payload, p)
    return p


def parse_rails(ral: bytes) -> dict:
    rails, i = {}, 0
    while i + 12 <= len(ral):
        n, no, do = struct.unpack_from(">III", ral, i)
        i += 12
        if n == 0:
            break
        name = ral[no:ral.index(b"\0", no)].decode("ascii", "replace")
        nodes = []
        for k in range(n):
            x, y, z, cn, fl, pi, ya, ro, sp = struct.unpack_from(">hhhhIHHHH", ral, do + k * 0x44)
            con = list(struct.unpack_from(">8H", ral, do + k * 0x44 + 0x14)[:max(cn, 0)])
            nodes.append([x, y, z, pi, ya, ro, sp, fl, con])
        rails[name] = nodes
    return rails


LIGHT_GROUPS = {"プレイヤー": "player", "オブジェクト": "object", "敵": "enemy"}
LIGHT_KINDS = {"太陽": "sun", "太陽サブ": "sub", "影": "shade", "影サブ": "shadeSub", "太陽スペキュラ": "spec",
               "太陽アンビエント": "amb", "影アンビエント": "shadeAmb"}


def stage_lights(scene: bytes) -> dict:
    """Light / AmbColor objects (TLightWithDBSet): per group (player, object, enemy) a sun light and
    a sub light (position far away, colour) and an ambient colour, plus "in shadow" variants."""
    out = {}
    for o in scene_bin.parse(scene):
        if o["type"] not in ("Light", "AmbColor"):
            continue
        m = re.match(r"(.+?)（(.+?)）", o.get("name", ""))
        if not m or m.group(2) not in LIGHT_GROUPS or m.group(1) not in LIGHT_KINDS:
            continue
        g = out.setdefault(LIGHT_GROUPS[m.group(2)], {})
        p = o["payload"]
        if o["type"] == "AmbColor" and len(p) >= 4:
            g[LIGHT_KINDS[m.group(1)]] = list(p[:3])
        elif o["type"] == "Light" and len(p) >= 16:
            g[LIGHT_KINDS[m.group(1)]] = {"p": [round(v, 1) for v in struct.unpack_from(">3f", p, 0)], "c": list(p[12:15])}
    return out


_GLOBAL_PRM = {}
PARAMS_SZS = None   # data/params.szs next to the scene folder (set by main)


def global_params(name: str):
    """A parameter file from params.szs (e.g. enemy/hamukuri.prm), parsed; {} if missing."""
    if not _GLOBAL_PRM:
        src = PARAMS_SZS
        _GLOBAL_PRM["arc"] = rarc_files(yaz0_decompress(src.read_bytes())) if src and src.exists() else {}
    arc = _GLOBAL_PRM["arc"]
    if name not in _GLOBAL_PRM:
        try:
            _GLOBAL_PRM[name] = prm.parse(arc[name]) if name in arc else {}
        except Exception:
            _GLOBAL_PRM[name] = {}
    return _GLOBAL_PRM[name]


# Walking speed (units per frame) by parameter, in order of preference: NPCs' top march speed,
# small enemies' march speed range, the rest's own names.
SPEED_KEYS = ("mMaxMarchSpeed", "mSLMaxMarchSpeed", "mMarchSpeed", "mSLMoveSpeed", "mSLWalkSpeed")
DEFAULT_SPEED = {"AnimalBird": 5.0, "AnimalMew": 10.0, "Butterfly": 2.0, "ButterflyB": 2.0, "ButterflyC": 2.0,
                 "FishoidA": 2.0, "FishoidB": 2.0, "FishoidC": 2.0, "FishoidD": 2.0}


# TNpcSave: each NPC type's parameter file (sSaveFileName, in NPC_ORDER order).
NPC_PRM = ["MonteM"] * 5 + ["MonteME", "MonteMF", "MonteMG", "MonteMH"] + ["MonteW"] * 3 + ["MonteWC", "MareM",
           "MareMA", "MareMB", "MareMC", "MareMD", "MareW", "MareWA", "MareWB", "Kinopio", "Kinojii", "Peach",
           "RaccoonDog", "SunflowerL", "SunflowerS"]


def npc_prm(typ: str) -> dict:
    if typ not in NPC_ORDER:
        return {}
    return global_params(f"npc/npc{NPC_PRM[NPC_ORDER.index(typ)].lower()}.prm")


def walk_anim_rate(typ: str) -> float:
    """BCK frames per game frame while walking: SMSGetAnmFrameRate (2: 60 fps animations at 30 fps
    logic), times an NPC's mSLMaxWalkAnmRate at full walking speed (TBaseNPC, NpcAnm.cpp)."""
    if typ in NPC_ORDER:
        p = npc_prm(typ)
        r = p.get("mSLMaxWalkAnmRate")
        return round(2.0 * (r if isinstance(r, float) and r > 0 else 1.5), 3)
    return 2.0


# Classes whose graph speed isn't a plain parameter: TBoidLeader's base speed for schools of
# fish (fishoid.cpp) and butterflies (Butterfly.cpp); TAnimalBase::execWalk runs animals at
# mSLMaxMarchSpeed x SMSGetAnmFrameRate (seagulls); birds fly their loops at bird.prm mMarchSpeed, assumed
# to follow the same animal convention (TAnimalBird isn't decompiled yet).
FIXED_SPEED = {"FishoidA": 4.0, "FishoidB": 4.0, "FishoidC": 4.0, "FishoidD": 4.0,
               "Butterfly": 6.0, "ButterflyB": 6.0, "ButterflyC": 6.0}


def walk_speed(arc: dict, typ: str) -> float:
    if typ in FIXED_SPEED:
        return FIXED_SPEED[typ]
    if typ == "AnimalMew":
        v = global_params("animal/mew.prm").get("mSLMaxMarchSpeed")
        return round(2.0 * (v if isinstance(v, float) else 6.0), 3)
    if typ == "AnimalBird":   # their graphs are flight loops above the perches: bird.prm mMarchSpeed
        v = global_params("animal/bird.prm").get("mMarchSpeed")
        return round(2.0 * (v if isinstance(v, float) else 5.0), 3)
    if typ in NPC_ORDER:   # TBaseNPC::walk: up to mMaxMarchSpeed (TNpcSaveIndividual default 3)
        v = npc_prm(typ).get("mMaxMarchSpeed")
        return round(v if isinstance(v, float) and v > 0 else 3.0, 3)
    names = [typ.lower(), TYPE_FOLDERS.get(typ, "").lower()]
    for n in names:
        if not n:
            continue
        for path in (f"npc/{n}.prm", f"enemy/{n}.prm", f"animal/{n}.prm"):
            p = enemy_params(arc, typ) if path.startswith("enemy/") else None
            p = p or global_params(path)
            if not p:
                continue
            if "mSLMarchSpeedLow" in p and "mSLMarchSpeedHigh" in p:
                return round((p["mSLMarchSpeedLow"] + p["mSLMarchSpeedHigh"]) / 2, 3)
            for k in SPEED_KEYS:
                if isinstance(p.get(k), float) and p[k] >= 0.3:
                    return round(p[k], 3)
    return DEFAULT_SPEED.get(typ, 1.5)


def walk_extra(typ: str, payload: bytes, rails: dict, arc: dict):
    """TSpineEnemy::load: [TActor][manager name][graph name]. Enemies, NPCs and animals with a graph
    walk it (TGraphTracer, node to node; TGraphWeb::getRandomNextIndex picks the next node)."""
    try:
        name, _ = _lstr(payload, actor_tail(payload))
    except (struct.error, ValueError):
        return None
    name = name.decode("ascii", "replace")
    if name not in rails or len(rails[name]) < 2:
        return None
    return {"walk": name, "v": walk_speed(arc, typ), "ar": walk_anim_rate(typ)}


# Map objects that turn on their own every step (QF), degrees per step about a model axis
# (0 x, 1 y, 2 z): TBigWindmill::control (sSpeed), TBiancoWatermill (unk138 0.3),
# TMerrygoround::mRotSpeed. TBiancoWatermillVertical reads its speed (x 1/1000) and turns the
# matching BiaTurnBridge at mBridgeRotRate times it.
SPIN_TYPES = {"BigWindmill": (2, -0.05), "BiaWatermill": (2, -0.3), "Merrygoround": (1, 0.1)}
WATERMILL_BRIDGE_RATE = 0.03


def move_extra(typ: str, payload: bytes, rails: dict, name: str = "", spin_rates: dict | None = None):
    try:
        if typ in SPIN_TYPES:
            ax, rate = SPIN_TYPES[typ]
            return {"spin": {"ax": ax, "rate": rate}}
        if typ == "BiaWatermillVertical":
            return {"spin": {"ax": 1, "rate": round(watermill_vertical_rate(payload), 5)}}
        if typ == "BiaTurnBridge" and spin_rates is not None:
            rate = spin_rates.get(name.split()[-1] if name else "0", 0.0) * WATERMILL_BRIDGE_RATE
            return {"spin": {"ax": 1, "rate": round(rate, 5)}} if rate else None
        if typ == "CraneRotY":   # TCraneRotY: base angle to base + [tail], 0.05-0.15 a step (0.1), 120-step waits
            mx = struct.unpack_from(">f", payload, actor_tail(payload))[0]
            return {"osc": {"ax": 1, "lo": 0.0, "hi": round(mx, 3), "sp": 0.1, "wait": 120, "start": "lo"}}
        if typ == "craneUpDown":   # TCraneUpDown: pitch between -25 and 45 (crane 0) / 30, 0.1 a step
            return {"osc": {"ax": 0, "lo": -25.0, "hi": 45.0 if name.endswith(" 0") else 30.0, "sp": 0.1, "wait": 120,
                            "abs": 1, "start": "mid"}}
        if typ in ROLL_TYPES:
            p = actor_tail(payload)
            return {"roll": struct.unpack_from(">i", payload, p)[0] * 0.01}
        if typ in RAIL_TYPES or typ in LIFT_TYPES:
            name, _ = _lstr(payload, actor_tail(payload))
            name = name.decode("ascii", "replace")
            if typ == "NormalLift" and name.startswith("S_") and name in rails:
                return star_spin(rails[name])
            if typ == "RideCloud" and (name not in rails or name.startswith("S_")):
                return {"lift": [], "cloud": 1}   # a cloud that stays put (still sinks when ridden)
            if name in rails and not name.startswith("S_"):
                ex = {"lift" if typ in LIFT_TYPES else "rail": rails[name]}
                if typ == "RideCloud":
                    ex["cloud"] = 1
                return ex
    except (struct.error, ValueError):
        pass
    return None


def star_spin(nodes) -> dict | None:
    """A lift on a small closed spline loop (Bianco 3 Secret's stars, S_block*): TRailMapObj
    traces the spline at the node's yaw / 100 a step and turns with it; shown as a turn in place,
    one revolution per loop (its chords at that speed), the way the loop goes round."""
    if len(nodes) < 3 or any(len(n[8]) != 2 for n in nodes):
        return None
    cx = sum(n[0] for n in nodes) / len(nodes)
    cz = sum(n[2] for n in nodes) / len(nodes)
    loop = sum(math.hypot(nodes[(k + 1) % len(nodes)][0] - n[0], nodes[(k + 1) % len(nodes)][2] - n[2]) for k, n in enumerate(nodes))
    spd = (nodes[0][4] if nodes[0][4] != 0xFFFF else 100) * 0.01
    a, b = nodes[0], nodes[1]
    turn = (a[2] - cz) * (b[0] - cx) - (a[0] - cx) * (b[2] - cz)
    rate = 360.0 * spd / loop if loop else 0.0
    return {"spin": {"ax": 1, "rate": round(rate if turn > 0 else -rate, 5)}} if rate else None


def watermill_vertical_rate(payload: bytes) -> float:
    """TBiancoWatermillVertical::load: one value after TMapObjBase's, / 1000."""
    raw = payload[actor_tail(payload):][:4]
    f = struct.unpack(">f", raw)[0]
    if not (abs(f) < 1e6) or (f != 0 and abs(f) < 1e-6):
        f = struct.unpack(">i", raw)[0]
    return f / 1000.0


def windmill_blocks(objs) -> list:
    """TBigWindmill::load makes four bigWindmillBlock that ride its wheel: sRadius 2380 out
    from its centre, sSubZ 150 in front, 90 degrees apart, at the wheel's angle."""
    out = []
    kb = b"bigWindmillBlock"
    for o in objs:
        if o["type"] != "BigWindmill":
            continue
        pl = scene_bin.placement(o["payload"])
        if pl is None:
            continue
        (px, py, pz), (rx, ry, rz), _ = pl
        for i in range(4):
            a = rz + 90 * i
            p = (px + 2380 * math.cos(math.radians(a)), py + 2380 * math.sin(math.radians(a)), pz - 150)
            out.append({"type": "MapObjBase", "name": "", "hash": 0, "path": [], "ptypes": (),
                        "orbit": {"c": [px, py, pz], "r": 2380, "sub": 150, "a": a, "rate": -0.05},
                        "payload": struct.pack(">9f", *p, 0, 0, 0, 1, 1, 1) + struct.pack(">HH", 0, len(kb)) + kb})
    return out


DYNAMIC_CARRY = {0x1000001E: ("bombhei/nejibomb_model1.bmd", "bomb", "bombhei")}
# Once water stops a Bob-omb, nejibomb_stop1.btp swaps its texture to the blue "stop" one (same
# model; downnejibomb_model1 is the burst-apart debris). (texture, replacement) per actor type.
DYNAMIC_SPRAYED = {0x1000001E: ("Q_nejibomb_s3tc", "Q_stop_nejibomb_s3tc")}


# NPC types in ACTOR_TYPE_NPC_* order, which indexes sAllNpcInitData (NpcInitData.cpp).
NPC_ORDER = ["NPCMonteM", "NPCMonteMA", "NPCMonteMB", "NPCMonteMC", "NPCMonteMD", "NPCMonteME", "NPCMonteMF",
             "NPCMonteMG", "NPCMonteMH", "NPCMonteW", "NPCMonteWA", "NPCMonteWB", "NPCMonteWC", "NPCMareM",
             "NPCMareMA", "NPCMareMB", "NPCMareMC", "NPCMareMD", "NPCMareW", "NPCMareWA", "NPCMareWB",
             "NPCKinopio", "NPCKinojii", "NPCPeach", "NPCRaccoonDog", "NPCSunflowerL", "NPCSunflowerS"]
NPC_INIT = None


POLLUTION_NPCS = {"NPCMonteM", "NPCMonteMA", "NPCMonteMC", "NPCMonteW", "NPCMonteWA", "NPCMareM", "NPCMareW", "NPCKinopio"}
SPECIAL_NPCS = {"NPCMonteMF", "NPCMonteMG", "NPCMonteMH", "NPCMonteWC", "NPCMareMA", "NPCMareMB", "NPCMareMC",
                "NPCMareMD", "NPCMareWA", "NPCMareWB"}


PICTURE_TYPES = {"WaterHitPictureHideObj", "HideObjPictureTwin", "PictureTeresa"}
# Starting spray progress by model (TWaterHitPictureHideObj::loadAfter): signs that spraying
# erases start full, the ones spraying reveals start at their minimum.
PICTURE_START = {"ChipShine": 32, "star_sign": 30, "PictureTeresa": 0}


def bti_rgba(tex: bytes):
    """Decode a .bti texture to RGBA8."""
    fmt, w_, h_ = tex[0], struct.unpack_from(">H", tex, 2)[0], struct.unpack_from(">H", tex, 4)[0]
    pal_fmt, pal_cnt, pal_off = tex[9], struct.unpack_from(">H", tex, 10)[0], struct.unpack_from(">I", tex, 12)[0]
    doff = struct.unpack_from(">I", tex, 0x1C)[0]
    return gx_texture.decode(tex[doff:], fmt, w_, h_, tex[pal_off:pal_off + pal_cnt * 2] if pal_off else None, pal_fmt)


def npc_colour(cc, idx):
    """TColorChangeInfo at colour index idx -> viewer spec: ['mul', rgb] or ['grad', dark, light].
    (SMS_InitChangeNpcColor: kind 0 material colour, 1 TEV colour 0, 2 TEV colours 1 and 2.)"""
    if cc is None or idx is None or idx < 0:
        return None
    b0, b1 = cc.get("c0"), cc.get("c1")
    def pick(b):
        return [max(0, min(510, v)) for v in b[idx]] if b and idx < len(b) else None
    c0, c1 = pick(b0), pick(b1)
    def raw_pick(b):   # GXColorS10: signed, may be negative or above 255
        return [max(-1024, min(1023, v)) for v in b[idx]] if b and idx < len(b) else None
    # [4:]: what SMS_InitChangeNpcColor really sets, for the viewer's TEV emulation: kind 0 the
    # material colour, 1 TEV register 0, 2 registers 1 (first table) and 2 (second table).
    raw = [cc["kind"], raw_pick(b0), raw_pick(b1)]
    if cc["kind"] == 2 and c0 and c1:
        return [cc["mat"], "grad", c0, c1] + raw
    c = c0 or c1
    return [cc["mat"], "mul", c, None] + raw if c else None


def npc_extra(w, lib, arc, typ, payload, body_model):
    """Colours and parts of one placed NPC (TBaseNPC::setIndividualDifference_, TNpcParts)."""
    global NPC_INIT
    if typ not in NPC_ORDER:
        return None
    if NPC_INIT is None:
        NPC_INIT = json.load(open(Path(__file__).resolve().parent.parent / "raw" / "npc_init.json"))
    info = NPC_INIT[NPC_ORDER.index(typ)]
    f = npc_payload.npc_fields(payload)
    if not f:
        return None
    mats = [c for c in (npc_colour(info["body"][j], f["c0"][j]) for j in range(2)) if c]
    # TBaseNPC::setIndividualDifference_: KCOLOR0 = (255, 255, 255, pollution) on every material but
    # the eyes; its alpha is the threshold the TEV compares the pollution mask against.
    k0 = None
    if typ in POLLUTION_NPCS or typ in SPECIAL_NPCS:
        amount = max(0, f["c0"][2]) / 255 if typ in POLLUTION_NPCS else 0
        k0 = [255, 255, 255, int(amount * 150) & 0xFF]
    lower = {k.lower().rsplit("/", 1)[-1]: k for k in arc if k.lower().endswith(".bmd")}
    parts = []
    for i, part in enumerate(info["parts"]):
        if not part or not (f["parts"] >> i) & 1:
            continue
        path = lower.get(part["file"].lower())
        if not path:
            continue
        idx = f["c1"][part["slot"]] if part["slot"] < 3 else None
        pc = [c for c in (npc_colour(cc, idx) for cc in part["colors"]) if c]
        if part["joint"] == "__ROOT_JOINT__" or part["joint"] not in body_model.joint_names:
            mtx, ji = np.eye(4), 0
        else:
            ji = body_model.joint_names.index(part["joint"])
            mtx = body_model.joints_world[ji]
        pi = lib_add(w, lib, "part:" + hashlib.sha1(arc[path]).hexdigest(), lambda path=path: [bmd.parse(arc[path])])
        if pi >= 0:
            parts.append([pi, [round(float(v), 4) for v in mtx.T.reshape(-1)], pc, ji])
    if not mats and not parts and not k0:
        return None
    out = {"mats": mats, "parts": parts}
    if k0:
        out["k0"] = k0
    return {"npc": out}


def enemy_params(arc: dict, typ: str):
    """The stage's /enemy/<name>.prm for a small enemy, if it has one."""
    for n in dict.fromkeys([typ.lower(), TYPE_FOLDERS.get(typ, "").lower()]):
        raw = arc.get(f"map/params/enemy/{n}.prm") if n else None
        if raw:
            try:
                return prm.parse(raw)
            except Exception:
                return None
    return None


def body_scale(arc: dict, typ: str):
    """TSmallEnemy::reset replaces the placed scale with a random body scale from its params."""
    p = enemy_params(arc, typ)
    if p and "mSLBodyScaleLow" in p and "mSLBodyScaleHigh" in p:
        return round((p["mSLBodyScaleLow"] + p["mSLBodyScaleHigh"]) / 2, 4)
    return None


def _xf(m: np.ndarray):
    return [round(float(v), 4) for v in m[:3, :4].reshape(-1)]


def transformed(model: bmd.Model, mtx: np.ndarray) -> bmd.Model:
    for mesh in model.meshes:
        p = np.asarray(mesh["pos"], dtype=np.float64)
        mesh["pos"] = (p @ mtx[:3, :3].T + mtx[:3, 3]).astype(np.float32)
    return model


def cannon_parts(arc: dict):
    """TCannon (Enemy/cannon.cpp): body default.bmd, a cannon_Dom on joints nullA..nullC, and the
    Monty Mole (TChorobei) on the root joint raised 300. Returns (body models, mole model, hit offset)."""
    body = bmd.parse(arc["cannon/default.bmd"])
    parts = [body]
    if "cannon/cannon_dom.bmd" in arc:
        for jn in ("nullA", "nullB", "nullC"):
            if jn in body.joint_names:
                dom = bmd.parse(arc["cannon/cannon_dom.bmd"])
                parts.append(transformed(dom, body.joints_world[body.joint_names.index(jn)]))
    mole = None
    if "cannon/tyorobe_model1.bmd" in arc:
        raw = bmd.parse(arc["cannon/tyorobe_model1.bmd"], decode_textures=False)
        pose = None
        if "cannon/tyorobe_wait1_loop.bck" in arc:
            anim = parse_bck(arc["cannon/tyorobe_wait1_loop.bck"])
            if len(anim["j"]) == len(raw.joint_names):
                pose = bck_pose(anim, 0)
        lift = np.eye(4)
        lift[1, 3] = 300.0
        mole = transformed(bmd.parse(arc["cannon/tyorobe_model1.bmd"], pose=pose), lift)
    # The mole's hit actor during the frame's hit check: TChorobei::perform (calc-anim cue) puts it on
    # the cannon's root joint + 300 - 150 (TCannon::moveObject's lid position is overwritten by then).
    return parts, mole, [0.0, 150.0, 0.0]


def cork_track(arc: dict, step: int = 2):
    """TMareCork's pop-out animation (marecork.bck) as rigid transforms of its 'cork' joint (all shapes
    bind to it) and its 'posnull1' joint (TMareCork::getTakingMtx, which carries the cannon)."""
    if "mapobj/marecork.bck" not in arc:
        return None
    anim = parse_bck(arc["mapobj/marecork.bck"])
    rest = bmd.parse(arc["mapobj/marecork.bmd"], decode_textures=False)
    inv1, inv2 = np.linalg.inv(rest.joints_world[1]), np.linalg.inv(rest.joints_world[2])
    cork, carry = [], []
    for f in range(0, int(anim["d"]) + 1, step):
        m = bmd.parse(arc["mapobj/marecork.bmd"], decode_textures=False, pose=bck_pose(anim, f))
        cork.append(_xf(m.joints_world[1] @ inv1))
        carry.append(_xf(m.joints_world[2] @ inv2))
    return {"step": step, "cork": cork, "carry": carry, "shineFrame": 250}


def ascii_keys(payload: bytes) -> list[str]:
    return [s for s in scene_bin.strings_after(payload) if s.isascii() and re.fullmatch(r"[\w.\- ]+", s)]


def ascii_key(payload: bytes) -> str | None:
    keys = ascii_keys(payload)
    return keys[0] if keys else None


def _folder_files(arc, f):
    return sorted(k for k in arc if k.lower().startswith(f + "/") and k.lower().endswith((".bmd", ".bdl"))
                  and k.count("/") == 1)


# TMapObjManager::load / TMapObjBase::initUnique: these objects' materials (or only textures) are
# swapped for a shared table, e.g. the barrels' and signs' textures are 8x8 dummies in the .bmd.
MAT_TABLES = {"ACTOR_TYPE_WOOD_BARREL": ("barrel.bmt", False), "ACTOR_TYPE_WOOD_BOX": ("kibako.bmt", False),
              "ACTOR_TYPE_ARROW_BOARD_LR": ("arrowboard.bmt", False), "ACTOR_TYPE_BRICK_BLOCK": ("brickblock.bmt", False),
              "ACTOR_TYPE_WATER_MELON_BLOCK": ("watermelonblock.bmt", False), "ACTOR_TYPE_FLOWER_ORANGE": ("flower.bmt", False),
              "ACTOR_TYPE_RICCO_SHIP": ("riccoship.bmt", False), "ACTOR_TYPE_LEAF_BOAT": ("leafboat.bmt", False),
              "ACTOR_TYPE_LEAF_BOAT_ROTTEN": ("leafboat.bmt", False), "ACTOR_TYPE_MIRROR_L": ("mirror.bmt", False),
              "ACTOR_TYPE_SAND_LEAF_BASE00": ("sandbombbase.bmt", False), "ACTOR_TYPE_SAND_BOMB_BASE00": ("sandbombbase.bmt", False),
              "ACTOR_TYPE_SAND_BOMB_BASE_FOOT": ("sandbombbase.bmt", False), "ACTOR_TYPE_SAND_CASTLE": ("sandbombbase.bmt", True),
              "ACTOR_TYPE_NORMAL_NOZZLE_ITEM": ("nozzleitem.bmt", False), "ACTOR_TYPE_BACK_NOZZLE_ITEM": ("nozzleitem.bmt", False),
              "ACTOR_TYPE_WATERGUN_ITEM": ("nozzleitem.bmt", False), "ACTOR_TYPE_ROCKET_NOZZLE_ITEM": ("nozzleitem.bmt", False),
              "ACTOR_TYPE_NOZZLE_BOX": ("nozzlebox.bmt", True)}
for _a in ("BIG_WINDMILL_BLOCK", "BIG_WINDMILL", "BIA_WATERMILL01", "BIA_TURN_BRIDGE", "BIA_BELL", "BIA_WATERMILL00",
           "BIA_WATERMILL_VERTICAL", "LAMP_BIANCO", "BIA_DOOR", "MINI_WINDMILL_L"):
    MAT_TABLES["ACTOR_TYPE_" + _a] = ("bianco.bmt", False)


def mat_table(arc: dict, keys, table: dict):
    """(bmt bytes, textures only) for the object's actor type, if its scene has the table."""
    lower = {k.lower(): k for k in arc}
    for key in keys or []:
        ent = MAT_TABLES.get((table.get(key) or {}).get("actor"))
        if ent and "mapobj/" + ent[0] in lower:
            return arc[lower["mapobj/" + ent[0]]], ent[1]
    return None, False


# THangingBridge::loadAfter / initMonte (MapObjMonte.cpp): the bridge places its own boards, so the
# scene only holds the bridge. Pianta Village: 19 boards at fixed spots (x, y, z, tilt); Pinna Park:
# 14 boards in a line. The ropes between them are drawn by code and left out.
MONTE_BOARDS = [(0, -130, 11965, 30), (0, -275, 12225, 29), (0, -415, 12490, 28), (0, -540, 12760, 26),
                (0, -660, 13035, 24), (0, -770, 13315, 22), (0, -875, 13595, 20), (0, -960, 13895, 12),
                (0, -1020, 14190, 8), (0, -1060, 14490, 4), (0, -1090, 14790, 2), (0, -1090, 15090, 0),
                (0, -1080, 15395, -4), (0, -1040, 15695, -6), (0, -995, 15990, -8), (0, -945, 16285, -8),
                (0, -900, 16580, -8), (0, -855, 16880, -8), (0, -800, 17175, -10)]


def bridge_boards(scene: str, objs) -> list:
    if not any(o["type"] == "HangingBridge" for o in objs):
        return []
    if scene.startswith("monte"):
        key, boards = "HangingBridgeBoard", [((x, y, z), (rx, 0, 0)) for x, y, z, rx in MONTE_BOARDS]
    elif scene.startswith("pinnaParco"):
        a, b, n = (1550, 2980, -9410), (3570, 2455, -9410), 14
        key = "PinnaHangingBridgeBoard"
        boards = [(tuple(a[k] + (b[k] - a[k]) * i / (n - 1) for k in range(3)), (15, 90, 0)) for i in range(n)]
    else:
        return []
    kb = key.encode()
    return [{"type": "MapObjBase", "name": "", "hash": 0, "path": [], "ptypes": (),
             "payload": struct.pack(">9f", *p, *r, 1, 1, 1) + struct.pack(">HH", 0, len(kb)) + kb} for p, r in boards]


def bridge_ropes(arc: dict, scene: str, objs) -> dict | None:
    """THangingBridge::perform: the ropes the game draws itself (mon_bri_rope.bti, TEXC only), as
    triangles: a short post up from each end of every board, then two sagging hand-ropes per side
    from the bridge ends through the boards, one at the boards and one mRopeHeight above."""
    if not any(o["type"] == "HangingBridge" for o in objs):
        return None
    if scene.startswith("monte"):
        n, a, b, height, half = 19, (0, 0, 11356), (0, -750, 17743), 1000.0, 315.0
        boards = [((x, y, z), 0.0) for x, y, z, _ in MONTE_BOARDS]
    elif scene.startswith("pinnaParco"):
        n, a, b, height, half = 14, (1550, 2980, -9410), (3570, 2455, -9410), 200.0, 150.0
        boards = [(tuple(a[k] + (b[k] - a[k]) * i / (n - 1) for k in range(3)), 90.0) for i in range(n)]
        a, b = (1350, 2980, -9410), (3650, 2455, -9410)   # loadAfter moves the ends out after placing the boards
    else:
        return None
    lower = {k.lower(): k for k in arc}
    tex = arc.get(lower.get("mapobj/mon_bri_rope.bti", ""))
    tris, uvs = [], []

    def strip(verts):
        for i in range(len(verts) - 2):
            for p, t in verts[i:i + 3]:
                tris.extend(round(c, 2) for c in p)
                uvs.extend((round(t[0], 4), round(t[1], 4)))
    # Board anchors: board position -/+ its local X axis (rotY only) x unk3C, 70 up.
    anchors = []
    for (x, y, z), ry in boards:
        ax, az = math.cos(math.radians(ry)), -math.sin(math.radians(ry))
        anchors.append(((x - ax * half, y + 70, z - az * half), (x + ax * half, y + 70, z + az * half)))
    for pair in anchors:   # THangingBridgeBoard::drawOneRope
        for (x, y, z) in pair:
            top, wx, wz = y + height, 10.0, 7.0
            pts = [((x, top, z + wz), 0), ((x, y, z + wz), 0), ((x - wx, top, z - wz), 1), ((x - wx, y, z - wz), 1),
                   ((x + wx, top, z - wz), 2), ((x + wx, y, z - wz), 2), ((x, top, z + wz), 3), ((x, y, z + wz), 3)]
            strip([(p, (s, 0.01 * (p[1] - y))) for p, s in pts])
    dx, dz = b[0] - a[0], b[2] - a[2]
    ln = math.hypot(dx, dz)
    px, pz = -dz / ln, dx / ln             # unk30: the bridge direction turned 90 degrees
    wx, wz = px * 10.0, pz * 10.0           # mRopeWidthBetweenBoards
    sag = [50.0 * math.sin(3.14 * i / 10) for i in range(10)]
    for lift, count in ((0.0, 10), (height, 1)):   # drawRopeBetweenBoards(0, 10) and (mRopeHeight, 1)
        for side, sign in ((0, 1), (1, -1)):
            ends = ((a[0] + sign * px * half, a[1] + lift, a[2] + sign * pz * half),
                    (b[0] + sign * px * half, b[1] + lift, b[2] + sign * pz * half))
            path = [ends[0]] + [(q[0], q[1] + lift, q[2]) for q in (pr[side] for pr in anchors)] + [ends[1], ends[1]]
            for kind in ("minus", "plus", "upper"):
                verts = []
                for p0, p1 in zip(path, path[1:]):
                    for i in range(count):
                        f = i / count
                        x, y, z = (p0[k] + (p1[k] - p0[k]) * f for k in range(3))
                        h, t = y - sag[i], 0.01 * (x + z)
                        if kind == "minus":
                            verts += [((x - wx, h, z - wz), (0, t)), ((x, h - 10, z), (1, t))]
                        elif kind == "plus":
                            verts += [((x, h - 10, z), (0, t)), ((x + wx, h, z + wz), (1, t))]
                        else:
                            verts += [((x + wx, h, z + wz), (0, t)), ((x - wx, h, z - wz), (1, t))]
                strip(verts)
    out = {"pos": tris, "uv": uvs}
    if tex:
        rgba = bti_rgba(tex)
        buf = io.BytesIO()
        Image.fromarray(rgba).save(buf, "PNG")
        out["tex"] = "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()
    return out


def find_model(arc: dict, typ: str, keys, table: dict):
    """keys: candidate model keys from the payload, in order (e.g. ['NozzleBox', 'valid'])."""
    if isinstance(keys, str) or keys is None:
        keys = [keys] if keys else []
    lower = {k.lower(): k for k in arc}
    for key in keys:
        cands = []
        if key in table and table[key].get("bmd"):
            cands.append("mapobj/" + table[key]["bmd"][0].lower())
        cands.append(f"mapobj/{key.lower()}.bmd")
        for c in cands:
            if c in lower:
                return lower[c]
    if typ in NPC_BODIES:
        f, fn = NPC_BODIES[typ]
        if f"{f}/{fn}" in lower:
            return lower[f"{f}/{fn}"]
    # Characters: folder named after the type, an alias, or the type with variant letters trimmed.
    base = re.sub(r"^(npc|animal|enemy)", "", typ.lower())
    folders = [TYPE_FOLDERS.get(typ, "").lower(), typ.lower(), base]
    folders += [base[:n] for n in range(len(base) - 1, 3, -1)]
    for f in folders:
        # "mapobj" is every map object's shared folder, not a model for a MapObj* type that has none
        if not f or f == "mapobj":
            continue
        files = _folder_files(arc, f)
        if not files:
            continue
        names = [k.lower() for k in files]
        for want in (TYPE_FILES.get(typ), PREFERRED_FILES.get(f), PREFERRED.get(f), f"{f}.bmd"):
            if want and f"{f}/{want}" in names:
                return files[names.index(f"{f}/{want}")]
        for word in ("model1", "_model", "default", "set", "body"):
            hit = [k for k in files if word in k.lower()]
            if hit:
                return hit[0]
        return min(files, key=len)
    return None


def wires(arc: dict):
    """Tightropes/wires from the wire cube table in map/tables.bin (TMapWire::initTipPoints)."""
    out = []
    if "map/tables.bin" not in arc:
        return out
    for o in scene_bin.parse(arc["map/tables.bin"]):
        if o["type"] != "CubeGeneralInfo" or not o["path"] or "ワイヤー" not in o["path"][-1]:
            continue
        pl = scene_bin.placement(o["payload"])
        if pl is None:
            continue
        (cx, cy, cz), (rx, ry, rz), (sx, sy, sz) = pl
        length, lift = sz * 100.0, sy * 100.0
        rot = bmd.euler_matrix(np.radians(rx), np.radians(ry), np.radians(rz))
        hx, hy, hz = rot @ np.array([0.0, 0.0, length * 0.5])
        out.append([round(cx - hx, 1), round(cy - hy + lift, 1), round(cz - hz, 1),
                    round(cx + hx, 1), round(cy + hy + lift, 1), round(cz + hz, 1)])
    return out


def idle_pose(arc: dict, model_path: str, model: bmd.Model):
    folder = model_path.rsplit("/", 1)[0]
    for k in sorted(arc):
        if k.startswith(folder + "/") and k.endswith(".bck") and "wait" in k.lower():
            try:
                anim = parse_bck(arc[k])
            except Exception:
                continue
            if len(anim["j"]) == len(model.joint_names):
                return bck_pose(anim, 0)
    return None


# The animation a walker plays (first match by name in its model's folder): walking for those on
# foot, flying or swimming for animals, any other movement otherwise, else its idle (Boos float).
WALK_ANIM_WORDS = ("walk", "fly", "swim", "run", "move", "march", "swing", "wait")


# Standing still: the idle animation (wait / idle), else any.
IDLE_ANIM_WORDS = ("wait", "idle", "stand", "taiki", "walk", "fly", "swim", "swing")


def walk_anim(arc: dict, model_path: str, model: bmd.Model, words=None):
    folder = model_path.rsplit("/", 1)[0]
    # NPCs keep their animations in the family's shared folder (montema -> montemcommon).
    folders = [folder, folder + "anm", folder + "common", folder[:-1] + "common", folder[:-2] + "common"]
    cands = [k for f in folders for k in sorted(arc) if k.startswith(f + "/") and k.count("/") == 1 and k.endswith(".bck")]
    for word in words or WALK_ANIM_WORDS:
        for k in cands:
            if word in k.rsplit("/", 1)[1].lower():
                try:
                    anim = parse_bck(arc[k])
                except Exception:
                    continue
                if len(anim["j"]) == len(model.joint_names):
                    return anim
    return None


def add_skinned(w: GlbWriter, model: bmd.Model, name: str, anim: dict, idle: dict | None = None) -> None:
    """A skinned library model (bind pose, joints "<name>_j<i>") with its walking animation in
    the scene's extras (anims[name]: BCK tracks, as the viewer's Mario rig uses them)."""
    holder = {"name": name, "children": []}
    w.gltf["nodes"].append(holder)
    hi = len(w.gltf["nodes"]) - 1
    w.gltf["scenes"][0]["nodes"].append(hi)
    joint_nodes = []
    for i in range(len(model.joint_names)):
        sc, rot, tr = model.joint_trs[i]
        q = quat_from_matrix(bmd.euler_matrix(*rot))
        w.gltf["nodes"].append({"name": f"{name}_j{i}", "translation": [float(x) for x in tr],
                                "rotation": [float(x) for x in q], "scale": [float(x) for x in sc]})
        joint_nodes.append(len(w.gltf["nodes"]) - 1)
    for i, par in enumerate(model.joint_parent):
        if par >= 0:
            w.gltf["nodes"][joint_nodes[par]].setdefault("children", []).append(joint_nodes[i])
        else:
            holder["children"].append(joint_nodes[i])
    ibm = np.stack([np.linalg.inv(m).T.reshape(-1) for m in model.joints_world]).astype(np.float32)
    w.gltf.setdefault("skins", []).append({"joints": joint_nodes, "skeleton": joint_nodes[0],
                                            "inverseBindMatrices": w.accessor(ibm, "MAT4", 5126, None)})
    skin = len(w.gltf["skins"]) - 1
    for mesh in model.meshes:
        mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
        mi, entry = material_for(w, model, mat, name, gx=True)
        uv = uv_for(mesh, entry) if entry is not None else None
        color = mesh.get("color") if mat is not None and (mat.use_vertex_color or any(c and (c[1] == 1 or c[5] == 1) for c in (mat.gx or {}).get("chans") or [])) else None
        n = len(mesh["pos"])
        joints = np.zeros((n, 4), np.uint16)
        weights = np.zeros((n, 4), np.float32)
        for vi, d in enumerate(mesh["drw"]):
            for k, (j, wt) in enumerate(model.draw_weights[d][:4]):
                joints[vi, k] = j
                weights[vi, k] = wt
        weights /= np.maximum(weights.sum(1, keepdims=True), 1e-6)
        _add_mesh(w, f"{name}_s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, joints, weights, normal=mesh.get("nrm"))
        prim = w.gltf["meshes"][-1]["primitives"][0]
        for k, v in (gx_tev_uvs(mesh, mat) if mat is not None and mat.lit else {}).items():
            prim["attributes"][k] = w.accessor(np.ascontiguousarray(v, np.float32), "VEC2", 5126, 34962)
        node = w.gltf["nodes"].pop()
        w.gltf["scenes"][0]["nodes"].pop()
        node["skin"] = skin
        w.gltf["nodes"].append(node)
        holder["children"].append(len(w.gltf["nodes"]) - 1)
    anims = w.gltf["scenes"][0].setdefault("extras", {}).setdefault("anims", {})
    anims[name] = anim
    if idle is not None:   # a walker's idle, for when it waits (birds on their perch)
        anims[name + "~idle"] = idle


def add_models(w: GlbWriter, models, name: str) -> None:
    holder = {"name": name, "children": []}
    w.gltf["nodes"].append(holder)
    hi = len(w.gltf["nodes"]) - 1
    w.gltf["scenes"][0]["nodes"].append(hi)
    for pi, model in enumerate(models):
        for mesh in model.meshes:
            mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
            mi, entry = material_for(w, model, mat, f"{name}p{pi}", gx=True)
            uv = uv_for(mesh, entry) if entry is not None else None
            color = mesh.get("color") if mat is not None and (mat.use_vertex_color or any(c and (c[1] == 1 or c[5] == 1) for c in (mat.gx or {}).get("chans") or [])) else None
            w.add_arrays(f"{name}_p{pi}s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, mesh.get("nrm"), gx_tev_uvs(mesh, mat) if mat is not None and mat.lit else None)
            node = w.gltf["nodes"].pop()
            w.gltf["scenes"][0]["nodes"].pop()
            w.gltf["nodes"].append(node)
            holder["children"].append(len(w.gltf["nodes"]) - 1)


# Types whose model plays its .btk from the start (TMapObjAnimData with ANM_TYPE_BTK), e.g.
# the Noki Bay gate's swirling light (MapObjInit.cpp MareGate_anim_data).
BTK_TYPES = {"MareGate"}

# Types whose colours come from TEV registers the viewer doesn't otherwise model (see tev_factor).
TEV_TINT_TYPES = {"HaneHamuKuri", "HaneHamuKuri2", "DoroHaneKuri", "HamuKuri"}


def add_model(w: GlbWriter, model: bmd.Model, name: str, tev: bool = False, anim: dict | None = None) -> None:
    """anim: a parsed .btk; its materials get the full TEV with the texture matrices animated."""
    anims = {(an["mat"], an["tm"]): {**an, "duration": anim["duration"]} for an in (anim or {}).get("anims", [])}
    holder = {"name": name, "children": []}
    w.gltf["nodes"].append(holder)
    hi = len(w.gltf["nodes"]) - 1
    w.gltf["scenes"][0]["nodes"].append(hi)
    for mesh in model.meshes:
        mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
        full = mat is not None and any(k[0] == mat.name for k in anims)
        mi, entry = material_for(w, model, mat, name, tev, gx="full" if full else True, anims=anims)
        uv = uv_for(mesh, entry) if entry is not None else None
        color = mesh.get("color") if mat is not None and (mat.use_vertex_color or any(c and (c[1] == 1 or c[5] == 1) for c in (mat.gx or {}).get("chans") or [])) else None
        w.add_arrays(f"{name}_s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, mesh.get("nrm"), gx_tev_uvs(mesh, mat, anims) if mat is not None and (mat.lit or full) else None)
        node = w.gltf["nodes"].pop()
        w.gltf["scenes"][0]["nodes"].pop()
        w.gltf["nodes"].append(node)
        holder["children"].append(len(w.gltf["nodes"]) - 1)


def add_goop(w: GlbWriter, raw: bytes, img, anim: bytes | None, name: str) -> None:
    """A pollution layer as a library model: the stage builder's full-TEV map export, its dummy
    I8 texture replaced by the layer's goop (see build_stage.pollution_layers)."""
    model = bmd.parse(raw)
    rgba = np.repeat(img[..., None], 4, axis=2)   # GX I8: the intensity in every channel
    model.textures = [(t[0], rgba, t[2], t[3]) if t[0].startswith("DummyPollution") else t for t in model.textures]
    roots = w.gltf["scenes"][0]["nodes"]
    s0 = len(roots)
    build_stage.add_model(w, model, name, "map", btk.parse(anim) if anim else None)
    kids = roots[s0:]
    del roots[s0:]
    w.gltf["nodes"].append({"name": name, "children": kids})
    roots.append(len(w.gltf["nodes"]) - 1)


def lib_add(w: GlbWriter, lib: dict, key: str, build) -> int:
    """Add a model (list of parts) to the stage library once per key; returns its index or -1."""
    if key not in lib:
        try:
            models = build()
            if not models:
                lib[key] = -1
                return -1
            idx = len(lib)
            add_models(w, models, f"m{idx}")
            lib[key] = idx
        except Exception as exc:
            print("  skip model", key, exc)
            lib[key] = -1
    return lib[key]


def main(argv):
    global PARAMS_SZS
    scene_dir, table = Path(argv[0]), json.load(open(argv[1]))
    PARAMS_SZS = scene_dir.parent / "params.szs"
    objtable, site = json.load(open(argv[2])), Path(argv[3])
    global OBJ_COLS
    cpath = Path(argv[2]).parent / "mapobj_cols.json"   # tools/extract_mapobj_cols.py
    OBJ_COLS = json.load(open(cpath)) if cpath.exists() else {}
    max_tex = int(argv[argv.index("--max-tex") + 1]) if "--max-tex" in argv else 128
    index_path = site / "maps" / "index.json"
    entries = json.load(open(index_path))
    out_dir = site / "objects"
    out_dir.mkdir(exist_ok=True)
    total, unresolved, scaled = 0, {}, {}
    only = argv[argv.index("--only") + 1].split(",") if "--only" in argv else None
    for entry in entries:
        if only and entry["id"] not in only:
            continue
        w = GlbWriter(max_tex)
        lib: dict[str, int] = {}
        posed: dict[str, bmd.Model] = {}
        scenes: dict[str, str] = {}
        arcs = {}
        for area, ep in entry["routes"]:
            scene = table[area][ep]
            scenes[f"{area}:{ep}"] = scene
            if scene in arcs:
                continue
            path = scene_dir / f"{scene}.szs"
            arcs[scene] = rarc_files(yaz0_decompress(path.read_bytes())) if path.exists() else None
        for scene, arc in arcs.items():
            if arc is None or "map/scene.bin" not in arc:
                continue
            # TNPCManager::changeTextureToPollution_: the NPCs' H_ma_rak_dummy is the stage's pollution.
            # TMonteM/WBaseManager::changeTextureToStraw_ and the jellyfish's real texture likewise.
            # TBiancoGateKeeper::init and TLauncher (gatekeeper.cpp, launcher.cpp): the gatekeeper's
            # and the goop launchers' goop is the stage's pollution texture too.
            for dummy, real in (("H_ma_rak_dummy", "map/pollution/h_ma_rak.bti"),
                                ("Q_kepper_dummy_128IA4", "map/pollution/h_ma_rak.bti"),
                                ("Q_gene_dummy_I4", "map/pollution/h_ma_rak.bti"),
                                ("I_mom_mino_dummyI4", "montemcommon/i_mom_mino_rgba.bti"),
                                ("I_mow_mino_dummyI4", "montewcommon/i_mow_mino_rgba.bti"),
                                ("J_jellyFish_dummy", "marejellyfish/j_kurage.bti")):
                raw = next((arc[k] for k in arc if k.lower() == real), None)
                if raw and dummy not in SUBSTITUTE:
                    try:
                        SUBSTITUTE[dummy] = (real.rsplit("/", 1)[1][:-4], bti_rgba(raw), 10497, 10497)
                    except Exception:
                        pass
            instances = []
            cols = {}   # this scene's map object collision meshes, by file
            used_graphs = set()
            rails = parse_rails(arc["map/scene.ral"]) if "map/scene.ral" in arc else {}
            scene_objs = scene_bin.parse(arc["map/scene.bin"])
            scene_objs += bridge_boards(scene, scene_objs) + windmill_blocks(scene_objs)
            spin_rates = {}
            for so in scene_objs:
                if so["type"] == "BiaWatermillVertical":
                    try:
                        spin_rates[(so.get("name") or "x 0").split()[-1]] = watermill_vertical_rate(so["payload"])
                    except (struct.error, ValueError):
                        pass
            for o in scene_objs:
                typ = o["type"]
                if SKIP_TYPES.match(typ):
                    continue
                pl = scene_bin.placement(o["payload"])
                if pl is None:
                    continue
                keys = ascii_keys(o["payload"])
                key = keys[0] if keys else None
                hidden = bool(key and key.startswith("invisible_"))
                if hidden:
                    keys = [key[len("invisible_"):]] + keys[1:]
                mpath = find_model(arc, typ, keys, objtable)
                extra = None
                mi = -1
                if typ == "Cannon" and "cannon/default.bmd" in arc:
                    parts, mole, hit = cannon_parts(arc)
                    mi = lib_add(w, lib, "cannon:" + hashlib.sha1(arc["cannon/default.bmd"]).hexdigest(), lambda: parts)
                    mole_i = lib_add(w, lib, "mole:" + hashlib.sha1(arc.get("cannon/tyorobe_model1.bmd", b"")).hexdigest(),
                                     lambda: [mole] if mole else None)
                    cp = enemy_params(arc, typ) or {}
                    extra = {"cannon": {"mole": mole_i, "hit": hit, "hp": cp.get("mSLHitPointMax", 3),
                                        "r": cp.get("mSLChorobeiAttackRadius", 100.0),
                                        "h": cp.get("mSLChorobeiAttackHeight", 100.0)}}
                elif mpath:
                    bmt, tex_only = mat_table(arc, keys, objtable)
                    digest = hashlib.sha1(arc[mpath] + (bmt or b"") + (b"T" if tex_only else b"")).hexdigest()
                    if digest not in lib:
                        try:
                            raw = bmd.parse(arc[mpath], bmt=bmt, bmt_tex_only=tex_only)
                            pose = idle_pose(arc, mpath, raw) if len(raw.joint_names) > 1 else None
                            model = bmd.parse(arc[mpath], pose=pose, bmt=bmt, bmt_tex_only=tex_only) if pose else raw
                            posed[digest] = model
                            idx = len(lib)
                            btk_path = mpath[:-4] + ".btk"
                            anim = btk.parse(arc[btk_path]) if typ in BTK_TYPES and btk_path in arc else None
                            add_model(w, model, f"m{idx}", typ in TEV_TINT_TYPES, anim)
                            # Springs: bake frames along jumpbase_shrink (TJumpBase states in MapObjItem2.cpp).
                            shrink = arc.get(mpath.rsplit("/", 1)[0] + "/jumpbase_shrink.bck") if typ == "JumpBase" else None
                            if shrink:
                                anim = parse_bck(shrink)
                                if len(anim["j"]) == len(raw.joint_names):
                                    for k in range(SHRINK_STEPS + 1):
                                        frame = anim["d"] * k / SHRINK_STEPS
                                        add_model(w, bmd.parse(arc[mpath], pose=bck_pose(anim, frame)), f"m{idx}_s{k}")
                            lib[digest] = idx
                        except Exception as exc:  # unsupported vertex data etc.
                            print("  skip model", mpath, exc)
                            lib[digest] = -1
                    mi = lib[digest]
                else:
                    unresolved[typ] = unresolved.get(typ, 0) + 1
                if typ in NPC_ORDER and mpath and posed.get(hashlib.sha1(arc[mpath]).hexdigest()) is not None:
                    extra = npc_extra(w, lib, arc, typ, o["payload"], posed[hashlib.sha1(arc[mpath]).hexdigest()]) or extra
                if typ == "MareCork":
                    track = cork_track(arc)
                    if track:
                        extra = {"cork": track}
                if typ in ("WoodBlock", "YoshiBlock") and len(o["payload"]) >= 12:
                    # TWoodBlock colour: the payload's last three s32 (r, g, b), e.g. the blue pillars.
                    rgb = list(struct.unpack_from(">3i", o["payload"], len(o["payload"]) - 12))
                    if all(0 <= c <= 255 for c in rgb) and rgb != [255, 255, 255]:
                        extra = {"tint": rgb}
                if typ == "AnimalBird" and len(o["payload"]) >= 4:
                    # TAnimalBird::load: the bird's colour (TEV colour 1 of _mat_body1, cColorTable)
                    # follows what it carries: event < 50 a blue coin, 200 a red coin, 777 a Shine,
                    # anything else (100: a coin) green.
                    ev = struct.unpack_from(">i", o["payload"], len(o["payload"]) - 4)[0]
                    ev = 100 if ev < 0 else ev
                    col = ([0, 100, 255, 0] if ev < 50 else [255, 0, 0, 0] if ev == 200
                           else [255, 200, 0, 0] if ev == 777 else [0, 200, 0, 0])
                    extra = {**(extra or {}), "gxSet": [{"m": "_mat_body1", "r": 1, "c": col}]}
                if typ == "NozzleBox":
                    # TNozzleBox::load: every material's TEV colour 1 follows the nozzle inside
                    # (hover blue, rocket red, turbo grey-blue; default white), alpha 0x64.
                    nb = o["payload"]
                    col = ([0, 0, 255, 100] if b"normal_nozzle_item" in nb else
                           [255, 0, 0, 100] if b"rocket_nozzle_item" in nb else
                           [90, 90, 120, 100] if b"back_nozzle_item" in nb else [255, 255, 255, 100])
                    extra = {**(extra or {}), "gxSet": [{"r": 1, "c": col}]}
                if typ in ("Telesa", "LoopTelesa", "BoxTelesa", "SeeTelesa", "MarioModokiTelesa"):
                    # TTelesaManager::createEnemies / TTelesa::reset: _mat_body's TEV colour 0 is
                    # cTelesaColor[0] (350, 350, 350), the box Boos' [1] (600, 270, 220, pink); KCOLOR0
                    # is the fade colour, fully faded in once the Boo has appeared.
                    body = [600, 270, 220, 255] if typ == "BoxTelesa" else [350, 350, 350, 255]
                    extra = {**(extra or {}), "gxSet": [{"m": "_mat_body", "r": 0, "c": body},
                                                        {"k": 0, "c": [255, 255, 255, 255]}]}
                if typ == "Shine":   # TShine::loadBeforeInit: "normal" shown from the start, "quickly", else
                    try:             # hidden until its event (red coins, boss, ...) makes it appear
                        mode, q = _lstr(o["payload"], actor_tail(o["payload"]))
                        ev = struct.unpack_from(">i", o["payload"], q)[0]
                        extra = {**(extra or {}), "shine": mode.decode("ascii", "replace"), "ev": ev}
                        # its third value: 0 makes unk190 1, the indoor Shine get camera
                        # (TMarDirector::fireGetStar: camera_demo_shine_get_inside)
                        if len(o["payload"]) >= q + 8 and struct.unpack_from(">i", o["payload"], q + 4)[0] == 0:
                            extra["inside"] = 1
                        if "１００枚" in o.get("name", ""):   # appears once 100 gold coins are collected
                            extra["coin100"] = 1
                    except (struct.error, ValueError):
                        pass
                if typ in PICTURE_TYPES and len(o["payload"]) >= 12:
                    # TWaterHitPictureHideObj::load / loadAfter: TEV colour 0 = the placed colour, its
                    # alpha the spray progress (the TEV turns it into the alpha-tested coverage).
                    r, g, b = struct.unpack_from(">3I", o["payload"], len(o["payload"]) - 12)
                    prog = PICTURE_START.get(key or "", 255)
                    extra = {**(extra or {}), "c0": [r & 255, g & 255, b & 255, prog]}
                if (typ in ROLL_TYPES or typ in RAIL_TYPES or typ in LIFT_TYPES or typ in SPIN_TYPES or o.get("orbit")
                        or typ in ("BiaWatermillVertical", "BiaTurnBridge", "CraneRotY", "craneUpDown")):
                    mv = move_extra(typ, o["payload"], rails, o.get("name") or "", spin_rates)
                    if o.get("orbit"):
                        mv = {"orbit": o["orbit"]}
                    if mv:
                        extra = {**(extra or {}), **mv}
                elif mpath and is_spine(o["payload"]):
                    # Enemies, NPCs and animals: walkers walk their graph playing their walking
                    # animation; the rest stand where they were placed playing their idle one.
                    wk = walk_extra(typ, o["payload"], rails, arc)
                    if wk:
                        extra = {**(extra or {}), **wk}
                        used_graphs.add(wk["walk"])
                    words = (("fly",) + WALK_ANIM_WORDS if typ == "AnimalBird" else WALK_ANIM_WORDS) if wk else IDLE_ANIM_WORDS
                    bmt, tex_only = mat_table(arc, keys, objtable)
                    skey = ("skin:" if wk else "idle:") + ("fly:" if wk and typ == "AnimalBird" else "") + hashlib.sha1(arc[mpath] + (bmt or b"") + (b"T" if tex_only else b"")).hexdigest()
                    if skey not in lib:
                        lib[skey] = -1
                        try:
                            bind = bmd.parse(arc[mpath], bmt=bmt, bmt_tex_only=tex_only)
                            anim = walk_anim(arc, mpath, bind, words) if len(bind.joint_names) > 1 else None
                            if anim:
                                sidx = len(lib) - 1   # lib[skey] already holds its slot
                                idle = walk_anim(arc, mpath, bind, IDLE_ANIM_WORDS[:4]) if wk else None
                                add_skinned(w, bind, f"m{sidx}", anim, idle)
                                lib[skey] = sidx
                        except Exception as exc:
                            print("  skip skinned", mpath, exc)
                    if lib[skey] >= 0:
                        extra = {**(extra or {}), "skin": lib[skey]}
                        if not wk:
                            extra["ar"] = 2.0   # SMSGetAnmFrameRate
                # TMapObjBase::initMapCollisionData: the object's .col files, placed with its matrix
                ckey = (key[len("invisible_"):] if hidden else key) or ""
                for ce in OBJ_COLS.get(ckey, []):
                    cname = ce["col"].lower()
                    if cname not in cols and f"mapobj/{cname}.col" in arc:
                        try:
                            cv, ct, cty = parse_col(arc[f"mapobj/{cname}.col"])
                            cols[cname] = {"v": [round(float(c), 1) for vv in cv for c in vv], "t": [i for tt in ct for i in tt], "ty": list(cty)}
                        except ValueError:
                            cols[cname] = None
                    if cols.get(cname):
                        extra = {**(extra or {}), "col": (extra or {}).get("col", []) + [cname]}
                info = objtable.get((key[len("invisible_"):] if hidden else key) or "", {})
                pick = PICKUP_TYPES.get(typ, "")
                if hidden and pick:
                    pick += "_hidden"  # invisible until touched in game; drawn faintly
                hit = info.get("hitbox") or [0, 0]
                (px, py, pz), (rx, ry, rz), (sx, sy, sz) = pl
                bs = body_scale(arc, typ)
                if bs is not None:
                    scaled[typ] = ((sx, sy, sz), bs)
                    sx = sy = sz = bs
                if typ == "BossWanwan":
                    # TBossWanwan::init ignores the placed position: the head starts at BW_HEAD_START,
                    # staked by a TBWPicket at BW_PICKET_START with a TBWLeash of 15 links (bosswanwan.cpp
                    # .bss, set in __sinit_bosswanwan_cpp).
                    pk = lib_add(w, lib, "bwpicket", lambda: [bmd.parse(arc["bwanwan/bwanwan_picket.bmd"])] if "bwanwan/bwanwan_picket.bmd" in arc else None)
                    ch = lib_add(w, lib, "bwchain", lambda: [bmd.parse(arc["bwanwan/bwanwan_chain.bmd"])] if "bwanwan/bwanwan_chain.bmd" in arc else None)
                    # TBWParams defaults (no bosswanwan.prm on the disc): mSLMarchSpeed 6, mSLLeashNodeLen 120.
                    # TNerveBWGraphWander walks the scene's "bwanwan" graph.
                    extra = {**(extra or {}), "bw": {"pk": pk, "ch": ch, "p": [6012.84, 0.0, 7323.15], "n": 15,
                                                     "len": 120.0, "v": 6.0, "g": "bwanwan" if "bwanwan" in rails else None}}
                    # Heat colour: TBossWanwan sets bwanwan_body.brk to frame heat x (end - 1), and each
                    # TBWLeashNode its bwanwan_chain.brk from the link's temperature.
                    # Cooled in the bath (TNerveBWDie -> takeBath) the body plays bwanwan_body_gold.brk.
                    for nm, f in (("brkBody", "bwanwan/bwanwan_body.brk"), ("brkChain", "bwanwan/bwanwan_chain.brk"),
                                  ("brkGold", "bwanwan/bwanwan_body_gold.brk")):
                        if f in arc:
                            b = brk.parse(arc[f])
                            extra["bw"][nm] = {"dur": b["dur"], "c": [[a["mat"], a["reg"], a["rgba"]] for a in b["color"]]}
                    if "bwanwan" in rails:
                        used_graphs.add("bwanwan")
                    px, py, pz = 5741.72, -100.0, 6311.62
                if mi < 0 and not pick:
                    continue
                instances.append([mi, typ, key or "", round(px, 2), round(py, 2), round(pz, 2),
                                  round(rx, 2), round(ry, 2), round(rz, 2), round(sx, 3), round(sy, 3), round(sz, 3),
                                  pick, hit[0], hit[1], o["hash"], CARRY_TYPES.get(typ, "")] + ([extra] if extra else []))
            # The goop (TPollutionManager): each layer's model with this episode's starting goop.
            for pname, praw, pimg, panim in build_stage.pollution_layers(arc, scene):
                if not pimg.any():
                    continue
                digest = "goop:" + hashlib.sha1(praw + pimg.tobytes() + (panim or b"")).hexdigest()
                if digest not in lib:
                    idx = len(lib)
                    try:
                        add_goop(w, praw, pimg, panim, f"m{idx}")
                        lib[digest] = idx
                    except Exception as exc:
                        print("  skip goop", scene, pname, exc)
                        lib[digest] = -1
                if lib[digest] >= 0:
                    instances.append([lib[digest], "Pollution", pname, 0, 0, 0, 0, 0, 0, 1, 1, 1, "", 0, 0, 0, ""])
            used_cols = {c for inst in instances if len(inst) > 17 for c in inst[17].get("col", [])}
            data = {"g": {k: [n[:3] + [n[7], n[8]] for n in rails[k]] for k in sorted(used_graphs)},
                    "o": instances, "w": wires(arc), "lights": stage_lights(arc["map/scene.bin"])}
            if used_cols:
                data["cols"] = {c: cols[c] for c in sorted(used_cols)}
            ropes = bridge_ropes(arc, scene, scene_objs)
            if ropes:
                data["ropes"] = ropes
            for o in scene_bin.parse(arc["map/scene.bin"]):   # TMario::load: flag bit 1 = starts without FLUDD
                if o["type"] == "Mario" and len(o["payload"]) >= 4 and struct.unpack_from(">I", o["payload"], len(o["payload"]) - 4)[0] & 1:
                    data["noFludd"] = 1
                if o["type"] == "Mario" and "spawn" not in data:   # where Mario starts, facing (yaw degrees)
                    pl = scene_bin.placement(o["payload"])
                    if pl:
                        data["spawn"] = [round(pl[0][0], 1), round(pl[0][1], 1), round(pl[0][2], 1), round(pl[1][1], 2)]
            dyn = {}
            for atype, (path, kind, pname) in DYNAMIC_CARRY.items():
                if path not in arc:
                    continue
                def build_dyn(path=path):
                    raw = bmd.parse(arc[path])
                    pose = idle_pose(arc, path, raw) if len(raw.joint_names) > 1 else None
                    return [bmd.parse(arc[path], pose=pose) if pose else raw]
                di = lib_add(w, lib, hashlib.sha1(arc[path]).hexdigest(), build_dyn)
                if di >= 0:
                    p = enemy_params(arc, pname) or {}
                    swap = DYNAMIC_SPRAYED.get(atype)
                    def build_wet(path=path, swap=swap):
                        model = build_dyn(path)[0]
                        stop = next((t for t in model.textures if t[0] == swap[1]), None)
                        if stop is None:
                            return None
                        model.textures = [stop if t[0] == swap[0] else t for t in model.textures]
                        return [model]
                    ai = lib_add(w, lib, "wet:" + hashlib.sha1(arc[path]).hexdigest(), build_wet) if swap else -1
                    dyn[f"{atype:08x}"] = {"m": di, "sprayed": ai, "kind": kind, "prm": {k[3:]: v for k, v in p.items()
                                           if isinstance(v, (int, float)) and k.startswith("mSL")
                                           and ("Thrown" in k or "Bomb" in k or "Body" in k or "Damage" in k)}}
            if dyn:
                data["dyn"] = dyn
            (out_dir / f"{scene}.json").write_text(json.dumps(data, separators=(",", ":"), ensure_ascii=False))
        glb = w.write(out_dir / "tmp.glb")
        (out_dir / "tmp.glb").unlink()
        lib_file = f"objects/{entry['id']}.lib.glb.b64.txt"
        (site / lib_file).write_text(base64.b64encode(glb).decode())
        total += len(glb)
        entry["objects"] = {"lib": lib_file, "scenes": {k: f"objects/{v}.json" for k, v in scenes.items()}}
        print(f"{entry['id']}: {len([v for v in lib.values() if v >= 0])} models, {len(glb) / 1e6:.2f} MB")
    json.dump(entries, open(index_path, "w"), indent=1)
    print("body scale from params:", {k: v for k, v in scaled.items()})
    print(f"total {total / 1e6:.1f} MB; types without a model: {sorted(unresolved.items(), key=lambda x: -x[1])[:40]}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
