"""Extract the NPC appearance tables from the decomp's src/NPC/NpcInitData.cpp:
colour buffers, TColorChangeInfo, TNpcModelData (parts) and TNpcInitInfo per NPC type.

Usage: npc_init_data.py <NpcInitData.cpp> <out.json>
"""
import json
import re
import sys

TOKEN = re.compile(r'"(?:[^"\\]|\\.)*"|[{}]|,|0x[0-9a-fA-F]+|-?\d+\.?\d*f?|&?\w+')

# C aggregate layouts (include/NPC/NpcInitData.hpp).
S = "scalar"
TYPES = {
    "GXColorS10": [S, S, S, S],
    "TColorChangeInfo": [S, S, S, S],
    "TNpcModelDataEntry": [("arr", S, 2)],
    "TNpcModelData": [("arr", S, 2), ("arr", S, 2), ("arr", "TNpcModelDataEntry", 3), S, S, S],
    "TNpcInitInfo": [S, ("arr", S, 12), ("arr", ("arr", S, 2), 2), S, S, S, S],
    "TNpcTakeData": [S, S],
}


def blank(t):
    if t == S:
        return None
    if isinstance(t, tuple):
        return [blank(t[1]) for _ in range(t[2])]
    return [blank(f) for f in TYPES[t]]


def members(t):
    if isinstance(t, tuple):
        return [t[1]] * t[2]
    return TYPES[t]


def scalar(tok):
    if tok.startswith('"'):
        return tok[1:-1]
    if tok in ("nullptr", "NULL"):
        return None
    if tok.startswith("&"):
        return {"ref": tok[1:]}
    if re.fullmatch(r"-?\d+\.?\d*f?", tok):
        v = tok.rstrip("f")
        return float(v) if "." in v else int(v, 0)
    if re.fullmatch(r"0x[0-9a-fA-F]+", tok):
        return int(tok, 16)
    return {"ref": tok}


def fill(t, toks, i, braced):
    """Initialise aggregate t from toks[i:]; braced: toks[i] is its opening brace."""
    out = blank(t)
    if braced:
        i += 1
    for k, mt in enumerate(members(t)):
        if i >= len(toks) or toks[i] == "}":
            break
        if mt == S:
            if toks[i] == "{":   # braced scalar
                out[k] = scalar(toks[i + 1]); i += 2
                while toks[i] != "}":
                    i += 1
                i += 1
            else:
                out[k] = scalar(toks[i]); i += 1
        else:
            out[k], i = fill(mt, toks, i, toks[i] == "{")
        if i < len(toks) and toks[i] == ",":
            i += 1
    if braced:
        while toks[i] != "}":   # skip trailing / excess
            i += 1
        i += 1
    return out, i


def parse(src):
    src = re.sub(r"//.*", "", src)
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    out = {}
    decl = re.compile(r"static\s+(?:const\s+)?(\w+)\s+(\w+)\s*(\[\s*\d*\s*\])?\s*=\s*", re.S)
    pos = 0
    while True:
        m = decl.search(src, pos)
        if not m:
            break
        typ, name, arr = m.group(1), m.group(2), m.group(3)
        j, depth = m.end(), 0
        while True:
            c = src[j]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
            elif c == ";" and depth == 0:
                break
            j += 1
        body = src[m.end():j]
        pos = j
        if typ not in TYPES:
            continue
        toks = [t for t in TOKEN.findall(body)]
        if arr is not None:
            vals, i = [], 1
            while i < len(toks) and toks[i] != "}":
                v, i = fill(typ, toks, i, toks[i] == "{")
                vals.append(v)
                if i < len(toks) and toks[i] == ",":
                    i += 1
            out[name] = {"type": typ, "array": vals}
        else:
            v, _ = fill(typ, toks, 0, True)
            out[name] = {"type": typ, "value": v}
    m = re.search(r"sAllNpcInitData\[\]\s*=\s*\{(.*?)\};", src, re.S)
    order = re.findall(r"&(\w+)", m.group(1)) if m else []
    return out, order


def resolve(defs, order):
    def ref(r):
        return defs.get(r["ref"]) if isinstance(r, dict) else None

    def colors(r):
        d = ref(r)
        return [c[:3] for c in d["array"]] if d else None

    def cc(r):
        d = ref(r)
        if not d:
            return None
        kind, mat, b0, b1 = d["value"]
        return {"kind": kind, "mat": mat, "c0": colors(b0), "c1": colors(b1)}

    def part(r):
        d = ref(r)
        if not d:
            return None
        joints, files, entries, slot, pollution, unify = d["value"]
        joint = joints[0]
        if isinstance(joint, dict):   # cNpcPartsNameRootJoint: the model's root
            joint = "__ROOT_JOINT__"
        return {"joint": joint, "file": files[0], "slot": slot,
                "colors": [c for c in (cc(e[0][0]) for e in entries if e and e[0]) if c]}

    table = []
    for name in order:
        d = defs[name]["value"]
        _, parts, body, *_ = d
        table.append({"name": name, "parts": [part(p) for p in parts],
                      "body": [cc(body[j][0]) for j in range(2)]})
    return table


if __name__ == "__main__":
    defs, order = parse(open(sys.argv[1], encoding="utf-8", errors="replace").read())
    table = resolve(defs, order)
    json.dump(table, open(sys.argv[2], "w"), indent=1)
    print(len(table), "NPC types")
