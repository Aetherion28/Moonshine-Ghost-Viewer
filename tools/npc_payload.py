"""NPC per-instance data in scene.bin (TBaseNPC::setIndividualDifference_, NpcInitPrg.cpp)."""
import struct


def _skip_str(p, o):
    ln = struct.unpack_from(">H", p, o)[0]
    return o + 2 + ln


def npc_fields(payload: bytes):
    """After JDrama::TActor (placement, a string, a u32) and TSpineEnemy (manager, graph strings):
    colour indices c0 (r, g, b) and c1 (r, g, b), parts flags, action flags, ..."""
    try:
        o = 36
        o = _skip_str(payload, o) + 4      # TActor: name + u32
        o = _skip_str(payload, o)          # manager
        o = _skip_str(payload, o)          # graph
        vals = [struct.unpack_from(">i", payload, o + k * 4)[0] for k in range(9)]
    except struct.error:
        return None
    return {"c0": vals[0:3], "c1": vals[3:6], "parts": max(0, vals[6]), "action": vals[7], "throw": vals[8]}
