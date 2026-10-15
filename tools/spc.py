#!/usr/bin/env python3
"""Sunshine's event scripts (map/sp/*.sb, SPCB: TSpcBinary / TSpcInterp in the decomp's
Strategic/spcinterp.cpp): the builtin calls a script makes, with the arguments that are constants.

The bytecode is a stack machine; one pass over it keeps a stack of what each push was (an int, a
float, a string from the data table, or something only known at run time) and records every
`func` (a builtin call) with its arguments. Branches aren't followed: a call's constant arguments
are pushed right before it, which is all this needs.

Usage: spc.py <scene.szs> [script path in the archive]
"""
from __future__ import annotations

import struct
import sys

# TSpcInterp::chooseExecFunction's table: opcode -> (name, operand bytes)
OPS = [("int", 4), ("flt", 4), ("str", 4), ("adr", 4), ("var", 8), ("nop", 0), ("inc", 9), ("dec", 9),
       ("add", 0), ("sub", 0), ("mul", 0), ("div", 0), ("mod", 0), ("ass", 9), ("eq", 0), ("ne", 0),
       ("gt", 0), ("lt", 0), ("ge", 0), ("le", 0), ("neg", 0), ("not", 0), ("and", 0), ("or", 0),
       ("band", 0), ("bor", 0), ("shl", 0), ("shr", 0), ("call", 8), ("func", 8), ("mkfr", 4), ("mkds", 4),
       ("ret", 0), ("ret0", 0), ("jne", 4), ("jmp", 4), ("pop", 0), ("int0", 0), ("int1", 0), ("end", 0)]
BINARY = {"add", "sub", "mul", "div", "mod", "eq", "ne", "gt", "lt", "ge", "le", "and", "or", "band", "bor", "shl", "shr"}
UNKNOWN = object()


def builtin_calls(d: bytes) -> list[tuple[str, list]]:
    """[(builtin name, [args: int / float / str, or None where not a constant])] in code order."""
    if d[:4] != b"SPCB":
        return []
    text, data, ndata, symo, nsym = struct.unpack_from(">IIIII", d, 4)

    def string(i):
        off = struct.unpack_from(">I", d, data + i * 4)[0]
        p = data + ndata * 4 + off
        return d[p:d.index(b"\0", p)].decode("shift_jis", "replace")

    names = []
    for i in range(nsym):
        noff = struct.unpack_from(">I", d, symo + i * 20 + 4)[0]
        p = symo + nsym * 20 + noff
        names.append(d[p:d.index(b"\0", p)].decode("shift_jis", "replace"))
    out, stack, pc, end = [], [], 0, data - text
    pop = lambda: stack.pop() if stack else UNKNOWN  # noqa: E731
    while pc < end:
        op = d[text + pc]
        if op >= len(OPS):
            break
        name, size = OPS[op]
        arg = d[text + pc + 1:text + pc + 1 + size]
        pc += 1 + size
        if name == "int":
            stack.append(struct.unpack(">i", arg)[0])
        elif name == "flt":
            stack.append(struct.unpack(">f", arg)[0])
        elif name == "str":
            stack.append(string(struct.unpack(">I", arg)[0]))
        elif name == "int0":
            stack.append(0)
        elif name == "int1":
            stack.append(1)
        elif name in ("adr", "var", "inc", "dec"):
            stack.append(UNKNOWN)
        elif name == "ass" or name == "pop" or name == "jne":
            pop()
        elif name in BINARY:
            pop(); pop(); stack.append(UNKNOWN)
        elif name in ("neg", "not"):
            pop(); stack.append(UNKNOWN)
        elif name == "call":
            _, argc = struct.unpack(">Ii", arg)
            for _ in range(argc):
                pop()
            stack.append(UNKNOWN)
        elif name == "func":
            sym, argc = struct.unpack(">II", arg)
            args = [pop() for _ in range(argc)][::-1]
            out.append((names[sym] if sym < len(names) else f"?{sym}", [None if a is UNKNOWN else a for a in args]))
            stack.append(UNKNOWN)
        elif name in ("ret", "ret0", "end", "jmp"):
            stack = []
    return out


def main(argv):
    sys.path.insert(0, __file__.rsplit("/", 1)[0])
    from convert_map import rarc_files, yaz0_decompress
    arc = rarc_files(yaz0_decompress(open(argv[0], "rb").read()))
    for k in sorted(arc):
        if k.endswith(".sb") and (len(argv) < 2 or k == argv[1]):
            for name, args in builtin_calls(arc[k]):
                print(k, name, args)


if __name__ == "__main__":
    main(sys.argv[1:])
