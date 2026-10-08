#!/usr/bin/env python3
"""Read Sunshine's /data/stageArc.bin: area ID -> list of scene archive names per episode.

The file is a JDrama NameRef tree: each object is [u32 size][u16 hash][u16 len][type]
[u16 hash][u16 len][name] followed by its payload. Groups/tables carry a u32 child count
then their children; a ScenarioArchiveName carries one [u16 len][string].
Table N corresponds to Moonshine's route area N.
"""
from __future__ import annotations

import json
import struct
import sys


def _str(d, o):
    ln = struct.unpack_from(">H", d, o + 2)[0]
    return d[o + 4:o + 4 + ln].decode("shift_jis", "replace"), o + 4 + ln


def _obj(d, o):
    size = struct.unpack_from(">I", d, o)[0]
    typ, p = _str(d, o + 4)
    name, p = _str(d, p)
    end = o + size
    if typ == "ScenarioArchiveName":
        ln = struct.unpack_from(">H", d, p)[0]
        value = d[p + 2:p + 2 + ln].decode("shift_jis", "replace")
        return {"type": typ, "value": value}, end
    count = struct.unpack_from(">I", d, p)[0]
    p += 4
    children = []
    for _ in range(count):
        c, p = _obj(d, p)
        children.append(c)
    return {"type": typ, "children": children}, end


def stage_table(data: bytes) -> list[list[str]]:
    root, _ = _obj(data, 0)
    stages = root["children"][0]["children"]
    out = []
    for table in stages:
        out.append([c["value"].replace(".arc", "") for c in table.get("children", [])])
    return out


if __name__ == "__main__":
    table = stage_table(open(sys.argv[1], "rb").read())
    for area, eps in enumerate(table):
        print(f"0x{area:02X}", eps)
    if len(sys.argv) > 2:
        json.dump(table, open(sys.argv[2], "w"))
