"""Export the JPA particle effects the viewer draws to site/jpa_data.js.

Each effect (particle.szs <name>.jpa, JEFFjpa1) goes out as its parsed blocks (tools/jpa.py,
following JSystem/JParticle's loaders) and its textures as raw RGBA (base64), decoded the way GX
reads them (I: intensity in all four channels, IA: intensity in RGB, alpha in A). Raw rather than
PNG so the browser can't premultiply away colour under zero alpha (the indirect texture uses both).

usage: build_jpa.py <particle.szs> <out.js>
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
}


def main(szs, out):
    arc = rarc_files(yaz0_decompress(open(szs, "rb").read()))
    res = {}
    for key, fn in EFFECTS.items():
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
    with open(out, "w") as f:
        f.write("// JPA particle effects from particle.szs (tools/build_jpa.py).\n")
        f.write("const JPA_RES = " + json.dumps(res, separators=(",", ":")) + ";\n")
    print({k: len(json.dumps(v)) for k, v in res.items()})


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
