"""Extract each map object's collision files from the decomp's MapObjInit.cpp.

TMapObjData (mIndividualName) -> mCollision (TMapObjCollisionInfo) -> entries
TMapObjCollisionData { mColFileNoExt, mFlags }; TMapObjBase::initMapCollisionData loads
/scene/mapObj/<name>.col for each and places it with the object's matrix.

usage: extract_mapobj_cols.py <MapObjInit.cpp> <out.json>
"""
import json
import re
import sys


def main(src, out):
    s = open(src, encoding="utf-8").read()
    data = {}
    for m in re.finditer(r"static const TMapObjCollisionData (\w+)\[\] = \{(.*?)\};", s, re.S):
        data[m.group(1)] = [(n, int(f, 0)) for n, f in re.findall(r'\{\s*"([^"]+)",\s*(0x[0-9a-fA-F]+|\d+)\s*\}', m.group(2))]
    info = {}
    for m in re.finditer(r"static const TMapObjCollisionInfo (\w+)\s*=\s*\{\s*(\d+),\s*(\d+),\s*(\w+)\s*\}", s):
        info[m.group(1)] = data.get(m.group(4), [])[: int(m.group(2))]
    table = {}
    for m in re.finditer(r"static TMapObjData \w+ = \{\s*\"([^\"]+)\",(.*?)\};", s, re.S):
        fields = [f.strip() for f in m.group(2).split(",")]
        # fields: actor type, manager, group, anim, hit, collision, ...
        col = fields[5] if len(fields) > 5 else "nullptr"
        if col.startswith("&") and col[1:] in info:
            table[m.group(1)] = [{"col": n, "flags": f} for n, f in info[col[1:]]]
    json.dump(table, open(out, "w"), indent=0, sort_keys=True)
    print(len(table), "objects with collision")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
