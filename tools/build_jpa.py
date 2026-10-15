"""Export the JPA particle effects the viewer draws to site/jpa_data.js.

Each effect (particle.szs <name>.jpa, JEFFjpa1) goes out as its parsed blocks (tools/jpa.py,
following JSystem/JParticle's loaders) and its textures as raw RGBA (base64), decoded the way GX
reads them (I: intensity in all four channels, IA: intensity in RGB, alpha in A). Raw rather than
PNG so the browser can't premultiply away colour under zero alpha (the indirect texture uses both).

The Chain Chomp's effects come from its stage archive (Pianta 4's monte1.szs, bwanwan/jpa/),
Gooper Blooper's from his (Ricco's, bgeso/jpa/): those go to their own file, loaded only where he is
(objects/bgeso_jpa.js, adding to JPA_RES).

usage: build_jpa.py <particle.szs> <out.js> [<monte1.szs> [<ricco8.szs> <bgeso_jpa.js>]]
"""
import base64
import json
import sys

sys.path.insert(0, __file__.rsplit("/", 1)[0])
from convert_map import rarc_files, yaz0_decompress  # noqa: E402
from build_water_tex import bti  # noqa: E402
from jpa import parse, fld1, kfa1, tex1  # noqa: E402

# Particle IDs (SMS_LoadParticle) -> what the viewer calls them.
EFFECTS = {
    "nozzlesmoke": "ms_nozzlesmoke.jpa",      # 0x10D, FLUDD nozzle mist (TNozzleBase::animation)
    "watslide_a": "ms_m_watslide_a.jpa",     # 0x1EA, TMario::frontSlipEffect on wet ground
    "watslide_b": "ms_m_watslide_b.jpa",     # 0x112
    "watslide_c": "ms_m_watslide_c.jpa",     # 0x113
    "slipsmoke": "ms_m_slipsmoke.jpa",       # 0x103, the same on other ground
    # TShine::calc, bound to its body joint: rays, flashes, twinkles, the rainbow
    "shine_promi": "ms_shine_promi.jpa",     # 0x127
    "shine_senko": "ms_shine_senko.jpa",     # 0x128
    "shine_kira": "ms_shine_kira.jpa",       # 0x129
    "shine_bow": "ms_shine_bow.jpa",         # 0x12A
}

# TBossWanwan (bosswanwan.cpp): its effects, in the stage archive.
BW_EFFECTS = {f"bw_{n}": f"bwanwan/jpa/ms_bwan_{n}.jpa" for n in
              ("hityuge", "downyuge", "deadyuge", "kira", "jump_rock", "jump_smoke", "hibana", "yugami")}

# TBossGessoManager::initJParticle (bossgesso.cpp): /scene/bgeso/jpa/ms_boge_*.jpa.
BG_EFFECTS = {f"bg_{n}": f"bgeso/jpa/ms_boge_{n}.jpa" for n in
              ("attack_a", "attack_b", "attack_c", "attack_d", "blur", "blur_f", "blur_j", "canon_a", "canon_b",
               "damage_a", "damage_b", "hit_a", "hit_b", "hit_c", "hitdown", "jump", "kizetsu", "kizetsu_r",
               "odanhit_a", "odanhit_b", "osen", "ase", "namida", "kiseki", "wash")}


def export(todo):
    res = {}
    for key, arc, fn in todo:
        r = parse(arc[fn])
        o = {"em": r["emitter"], "bs": r["base"]}
        if "extra" in r: o["es"] = r["extra"]
        if "sweep" in r: o["ss"] = r["sweep"]
        if "extex" in r: o["ex"] = r["extex"]
        o["fld"] = [fld1(d) for d in r["fields"]]
        o["key"] = [kfa1(d) for d in r["keys"]]
        o["tex"] = []
        for d in r["tex"]:
            t = tex1(d)
            px = bti(t["bti"])
            o["tex"].append({"name": t["name"], "w": t["w"], "h": t["h"], "wrapS": t["wrapS"], "wrapT": t["wrapT"],
                             "rgba": base64.b64encode(px.astype("uint8").tobytes()).decode()})
        res[key] = o
    return res


def main(szs, out, stage=None, bg_stage=None, bg_out=None):
    arc = rarc_files(yaz0_decompress(open(szs, "rb").read()))
    todo = [(k, arc, f) for k, f in EFFECTS.items()]
    if stage:
        sarc = rarc_files(yaz0_decompress(open(stage, "rb").read()))
        todo += [(k, sarc, f) for k, f in BW_EFFECTS.items() if f in sarc]
    res = export(todo)
    with open(out, "w") as f:
        f.write("// JPA particle effects from particle.szs (tools/build_jpa.py).\n")
        f.write("const JPA_RES = " + json.dumps(res, separators=(",", ":")) + ";\n")
    print({k: len(json.dumps(v)) for k, v in res.items()})
    if bg_stage and bg_out:
        barc = rarc_files(yaz0_decompress(open(bg_stage, "rb").read()))
        bres = export([(k, barc, f) for k, f in BG_EFFECTS.items() if f in barc])
        with open(bg_out, "w") as f:
            f.write("// Gooper Blooper's JPA particle effects (tools/build_jpa.py), added to JPA_RES where he is.\n")
            f.write("Object.assign(JPA_RES, " + json.dumps(bres, separators=(",", ":")) + ");\n")
        print({k: len(json.dumps(v)) for k, v in bres.items()})


if __name__ == "__main__":
    main(*sys.argv[1:6])
