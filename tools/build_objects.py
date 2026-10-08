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
import json
import re
import struct
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import bmd  # noqa: E402
import prm  # noqa: E402
import npc_payload  # noqa: E402
import scene_bin  # noqa: E402
from build_mario_iso import bck_pose, material_for, parse_bck  # noqa: E402
from build_stage import uv_for  # noqa: E402
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from dae_to_glb import GlbWriter  # noqa: E402

SKIP_TYPES = re.compile(r"^(Light|AmbColor|Cube\w*|AreaCylinder|\w*Manager|Map|Sky|SunMgr|MirrorCamera|Mario|"
                        r"GroupObj|IdxGroup|MarScene|MapObjSoundGroup|MapObjWave|Pollution|\w*Camera\w*|"
                        r"\w*Event\w*Point|Strategy|ConductorInit|NameRefGrp|ScenarioArchiveName\w*|"
                        r"Shimmer)$")   # Shimmer: the heat-haze screen effect's plane
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
                "KageMario": "kagemario", "Kazekun": "kazekun", "Manta": "manta", "FireWanwan": "firewanwan",
                "BeeHive": "beehive", "Kugu": "kug", "Aminoko": "aminoko", "GateKeeper": "gatekeeper",
                "OrangeSeal": "seal", "BossPakkun": "kbosspakkun", "Gorogoro": "gorogoro"}
PREFERRED_FILES = {"poihana": "default.bmd", "sambohead": "sambohead.bmd", "telesa": "telesa.bmd",
                   "mamegesso": "default.bmd", "rikugesso": "geso_model1.bmd", "bgeso": "bgeso_body.bmd",
                   "pakkun": "pakun.bmd", "kinopio": "kinopio_body.bmd", "kinojii": "kinoji_body.bmd",
                   "peach": "peach_model.bmd", "beehive": "bee_nest.bmd", "firewanwan": "wanwan.bmd",
                   "gatekeeper": "gene_pakkun_model1.bmd", "seal": "gene_orange_model1.bmd"}
# NPC bodies (NpcManager.cpp createModelData): the Noki variants share /scene/mareM or /scene/mareW.
NPC_BODIES = {**{f"NPCMareM{v}": ("marem", "marem.bmd") for v in ("", "A", "B", "C", "D")},
              **{f"NPCMareW{v}": ("marew", "marew.bmd") for v in ("", "A", "B")},
              "NPCRaccoonDog": ("raccoondog", "tanuki.bmd"), "RaccoonDog": ("raccoondog", "tanuki.bmd")}
TYPE_FILES = {"Yumbo": "yumbo.bmd", "MarioModokiTelesa": "modoki.bmd", "FishoidA": "fisha.bmd",
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


def move_extra(typ: str, payload: bytes, rails: dict):
    try:
        if typ in ROLL_TYPES:
            p = actor_tail(payload)
            return {"roll": struct.unpack_from(">i", payload, p)[0] * 0.01}
        if typ in RAIL_TYPES or typ in LIFT_TYPES:
            name, _ = _lstr(payload, actor_tail(payload))
            name = name.decode("ascii", "replace")
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


def npc_colour(cc, idx):
    """TColorChangeInfo at colour index idx -> viewer spec: ['mul', rgb] or ['grad', dark, light].
    (SMS_InitChangeNpcColor: kind 0 material colour, 1 TEV colour 0, 2 TEV colours 1 and 2.)"""
    if cc is None or idx is None or idx < 0:
        return None
    b0, b1 = cc.get("c0"), cc.get("c1")
    def pick(b):
        return [max(0, min(510, v)) for v in b[idx]] if b and idx < len(b) else None
    c0, c1 = pick(b0), pick(b1)
    if cc["kind"] == 2 and c0 and c1:
        return [cc["mat"], "grad", c0, c1]
    c = c0 or c1
    return [cc["mat"], "mul", c] if c else None


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
            mtx = np.eye(4)
        else:
            mtx = body_model.joints_world[body_model.joint_names.index(part["joint"])]
        pi = lib_add(w, lib, "part:" + hashlib.sha1(arc[path]).hexdigest(), lambda path=path: [bmd.parse(arc[path])])
        if pi >= 0:
            parts.append([pi, [round(float(v), 4) for v in mtx.T.reshape(-1)], pc])
    if not mats and not parts:
        return None
    return {"npc": {"mats": mats, "parts": parts}}


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


def add_models(w: GlbWriter, models, name: str) -> None:
    holder = {"name": name, "children": []}
    w.gltf["nodes"].append(holder)
    hi = len(w.gltf["nodes"]) - 1
    w.gltf["scenes"][0]["nodes"].append(hi)
    for pi, model in enumerate(models):
        for mesh in model.meshes:
            mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
            mi, entry = material_for(w, model, mat, f"{name}p{pi}")
            uv = uv_for(mesh, entry) if entry is not None else None
            color = mesh.get("color") if mat is not None and mat.use_vertex_color else None
            w.add_arrays(f"{name}_p{pi}s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, mesh.get("nrm"))
            node = w.gltf["nodes"].pop()
            w.gltf["scenes"][0]["nodes"].pop()
            w.gltf["nodes"].append(node)
            holder["children"].append(len(w.gltf["nodes"]) - 1)


def add_model(w: GlbWriter, model: bmd.Model, name: str) -> None:
    holder = {"name": name, "children": []}
    w.gltf["nodes"].append(holder)
    hi = len(w.gltf["nodes"]) - 1
    w.gltf["scenes"][0]["nodes"].append(hi)
    for mesh in model.meshes:
        mat = model.materials[mesh["material"]] if 0 <= mesh["material"] < len(model.materials) else None
        mi, entry = material_for(w, model, mat, name)
        uv = uv_for(mesh, entry) if entry is not None else None
        color = mesh.get("color") if mat is not None and mat.use_vertex_color else None
        w.add_arrays(f"{name}_s{mesh['shape']}", mesh["pos"], mesh["tris"], mi, uv, color, mesh.get("nrm"))
        node = w.gltf["nodes"].pop()
        w.gltf["scenes"][0]["nodes"].pop()
        w.gltf["nodes"].append(node)
        holder["children"].append(len(w.gltf["nodes"]) - 1)


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
    scene_dir, table = Path(argv[0]), json.load(open(argv[1]))
    objtable, site = json.load(open(argv[2])), Path(argv[3])
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
            instances = []
            rails = parse_rails(arc["map/scene.ral"]) if "map/scene.ral" in arc else {}
            for o in scene_bin.parse(arc["map/scene.bin"]):
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
                    digest = hashlib.sha1(arc[mpath]).hexdigest()
                    if digest not in lib:
                        try:
                            raw = bmd.parse(arc[mpath])
                            pose = idle_pose(arc, mpath, raw) if len(raw.joint_names) > 1 else None
                            model = bmd.parse(arc[mpath], pose=pose) if pose else raw
                            posed[digest] = model
                            idx = len(lib)
                            add_model(w, model, f"m{idx}")
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
                if typ == "BoxTelesa":   # TBoxTelesa::reset: the pink body colour (cTelesaColor[1] vs [0])
                    extra = {"tint": [round(255 * c / 350) for c in (600, 270, 220)], "tintMat": "_mat_body"}
                if typ == "Shine":   # TShine::loadBeforeInit: "normal" shown from the start, "quickly", else
                    try:             # hidden until its event (red coins, boss, ...) makes it appear
                        mode, q = _lstr(o["payload"], actor_tail(o["payload"]))
                        ev = struct.unpack_from(">i", o["payload"], q)[0]
                        extra = {**(extra or {}), "shine": mode.decode("ascii", "replace"), "ev": ev}
                        if "１００枚" in o.get("name", ""):   # appears once 100 gold coins are collected
                            extra["coin100"] = 1
                        if "１００枚" in o.get("name", ""):   # appears at the 100th gold coin (TCoin::taken)
                            extra["coin100"] = 1
                    except (struct.error, ValueError):
                        pass
                if typ in ROLL_TYPES or typ in RAIL_TYPES or typ in LIFT_TYPES:
                    mv = move_extra(typ, o["payload"], rails)
                    if mv:
                        extra = {**(extra or {}), **mv}
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
                if mi < 0 and not pick:
                    continue
                instances.append([mi, typ, key or "", round(px, 2), round(py, 2), round(pz, 2),
                                  round(rx, 2), round(ry, 2), round(rz, 2), round(sx, 3), round(sy, 3), round(sz, 3),
                                  pick, hit[0], hit[1], o["hash"], CARRY_TYPES.get(typ, "")] + ([extra] if extra else []))
            data = {"o": instances, "w": wires(arc), "lights": stage_lights(arc["map/scene.bin"])}
            for o in scene_bin.parse(arc["map/scene.bin"]):   # TMario::load: flag bit 1 = starts without FLUDD
                if o["type"] == "Mario" and len(o["payload"]) >= 4 and struct.unpack_from(">I", o["payload"], len(o["payload"]) - 4)[0] & 1:
                    data["noFludd"] = 1
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
