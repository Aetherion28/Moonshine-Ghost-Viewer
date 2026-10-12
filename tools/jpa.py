"""JPA1 (JEFFjpa1) particle resource parser, following JSystem/JParticle's loaders
(JPAEmitterLoader_v10, JPABaseEmitter::loadBaseEmitterBlock, JPABaseShape, JPAExtraShape,
JPASweepShape, JPAExTexShape, JPABaseField::loadFieldBlock, JPAKeyFrameAnime, TEX1)."""
import struct


def fix(v):
    # JPAConvertFixToFloat
    return 1.0 if v == 0x7FFF else v / 32768.0


def s16(d, o): return struct.unpack_from(">h", d, o)[0]
def u16(d, o): return struct.unpack_from(">H", d, o)[0]
def f32(d, o): return struct.unpack_from(">f", d, o)[0]
def u32(d, o): return struct.unpack_from(">I", d, o)[0]
def fx(d, o): return fix(s16(d, o))


def bem1(d):
    o = 0xC
    e = {}
    e["scale"] = list(struct.unpack_from(">3f", d, o)); o += 12
    e["trans"] = list(struct.unpack_from(">3f", d, o)); o += 12
    e["rot"] = list(struct.unpack_from(">3h", d, o)); o += 6
    e["volumeType"] = d[o]; e["emitInterval"] = d[o + 1]; o += 4
    e["volumeSubdiv"] = u16(d, o); o += 2
    e["rate"] = f32(d, o); o += 4
    e["rateRndm"] = fx(d, o); o += 2
    e["maxFrame"] = s16(d, o); o += 2
    e["startFrame"] = s16(d, o); o += 2
    e["volumeSize"] = u16(d, o); o += 2
    e["volumeSweep"] = fx(d, o); o += 2
    e["volumeMinRad"] = fx(d, o); o += 2
    e["life"] = s16(d, o); o += 2
    e["lifeRndm"] = fx(d, o); o += 2
    e["weight"] = fx(d, o); o += 2
    e["weightRndm"] = fx(d, o); o += 2
    e["velRndm"] = fx(d, o); o += 2          # unk1C4
    e["momentRndm"] = fx(d, o); o += 2       # unk1CC
    e["airResist"] = fx(d, o); o += 2
    e["airResistRndm"] = fx(d, o); o += 2
    e["initVelOmni"], e["initVelAxis"], e["initVelRndm"], e["initVelDir"], e["moment"] = struct.unpack_from(">5f", d, o); o += 20
    dv = [fx(d, o + i * 2) for i in range(3)]; o += 6
    e["dir"] = dv
    e["spread"] = fx(d, o); o += 2           # unk1E4
    e["flags"] = u32(d, o); o += 4
    e["keyMask"] = u32(d, o); o += 4
    return e


def color_table(d, off, n, maxf):
    keys = [(s16(d, off + i * 6), list(d[off + i * 6 + 2:off + i * 6 + 6])) for i in range(n)]
    return keys


def bsp1(d):
    b = dict(sizeY=f32(d, 0x18), sizeX=f32(d, 0x1C), loopOffset=s16(d, 0x20), colLoop=d[0x22] & 1, texLoop=d[0x23] & 1,
             globalColAnm=bool(d[0x22] & 2), globalTexAnm=bool(d[0x23] & 2),
             type=d[0x24], dirType=d[0x25], rotType=d[0x26], tevCol=d[0x30], tevAlpha=d[0x31],
             blendMode=d[0x35], srcFactor=d[0x36], dstFactor=d[0x37], logicOp=d[0x38],
             aCmp0=d[0x39], aRef0=d[0x3A], aOp=d[0x3B], aCmp1=d[0x3C], aRef1=d[0x3D],
             zCompLoc=int(not (d[0x3E] >> 1 & 1)), zCmp=d[0x3F], zFunc=d[0x40], zUpd=d[0x41], anmTone=d[0x42], projection=d[0x43],
             flags=d[0x44], texAnmFlags=d[0x4C], texAnmType=d[0x4D], texAnmKeyNum=d[0x4E], texIndex=d[0x4F],
             colAnmMaxFrm=s16(d, 0x5C), colAnmType=d[0x5E], prmFlags=d[0x60], envFlags=d[0x61], prmKeyNum=d[0x62], envKeyNum=d[0x63],
             prm=list(d[0x64:0x68]), env=list(d[0x68:0x6C]),
             texStatic=[fx(d, 0x80 + i * 2) * 10 for i in range(4)], tiling=[fx(d, 0x88) * 10, fx(d, 0x8A) * 10],
             texScroll=[fx(d, 0x8C), fx(d, 0x8E), fx(d, 0x90) * 0.1, fx(d, 0x92) * 0.1, fx(d, 0x94)], texScrollAnm=d[0x96])
    b["texAnm"] = (d[0x4C] & 1) and b["texAnmKeyNum"] != 0
    if b["texAnm"]:
        o = s16(d, 0x12); b["texIndices"] = list(d[o:o + b["texAnmKeyNum"]])
    if b["prmFlags"] & 2:
        b["prmKeys"] = color_table(d, s16(d, 0x14), b["prmKeyNum"], b["colAnmMaxFrm"])
    if b["envFlags"] & 2:
        b["envKeys"] = color_table(d, s16(d, 0x16), b["envKeyNum"], b["colAnmMaxFrm"])
    return b


def esp1(d):
    e = dict(alphaIn=fx(d, 0x14), alphaOut=fx(d, 0x16), alphaInVal=fx(d, 0x18), alphaBase=fx(d, 0x1A), alphaOutVal=fx(d, 0x1C),
             alphaFlags=d[0x1E], alphaWaveType=d[0x1F], wave=[fx(d, 0x20), fx(d, 0x22), fx(d, 0x24)], waveRndm=fx(d, 0x26),
             scaleRndm=fx(d, 0x34), scaleIn=fx(d, 0x36), scaleOut=fx(d, 0x38), scaleInY=fx(d, 0x3A) * 10, scaleOutY=fx(d, 0x3E) * 10,
             pivotY=d[0x40], anmTypeY=d[0x41], cycleY=s16(d, 0x42), scaleInX=fx(d, 0x44) * 10, scaleOutX=fx(d, 0x48) * 10,
             pivotX=d[0x4A], anmTypeX=d[0x4B], cycleX=s16(d, 0x4C), scaleFlags=d[0x4E],
             rotAngle=fx(d, 0x5A), rotSpeed=fx(d, 0x5C), rotSpeedRndm=fx(d, 0x5E), rotAngleRndm=fx(d, 0x60), rotDir=fx(d, 0x62), rotate=d[0x64])
    return e


def ssp1(d):
    return dict(type=d[0x10], dirType=d[0x11], rotType=d[0x12], life=s16(d, 0x14), rate=s16(d, 0x16), timing=fx(d, 0x18), step=d[0x1A],
                posRndm=f32(d, 0x28), baseVel=f32(d, 0x2C), velInh=fx(d, 0x30), baseVelRndm=fx(d, 0x32), moment=fx(d, 0x34),
                fields=d[0x36], unk49=d[0x44], scaleOut=d[0x45], alphaOut=d[0x46], texIndex=d[0x47], inhScale=fx(d, 0x48), inhAlpha=fx(d, 0x4A),
                scaleY=f32(d, 0x4C), scaleX=f32(d, 0x50), rotSpeed=fx(d, 0x54), rotate=d[0x56], unk4E=d[0x57],
                prm=list(d[0x58:0x5C]), env=list(d[0x5C:0x60]), inhRGB=fx(d, 0x60))


def etx1(d):
    m = [fx(d, 0x12 + i * 2) for i in range(6)]
    return dict(indMode=d[0x10], mtxType=d[0x11], mtx=m, expScale=s16(d, 0x1E) >> 8 if False else d[0x1E], indTex=d[0x1F], subTex=d[0x20], flags=d[0x30], secondTex=d[0x33])


def parse(data: bytes):
    assert data[:8] == b"JEFFjpa1", data[:8]
    nblocks = u32(data, 0xC)
    o = 0x20
    out = {"fields": [], "keys": [], "tex": []}
    for _ in range(nblocks):
        tag = data[o:o + 4].decode(); sz = u32(data, o + 4); d = data[o:o + sz]
        if tag == "BEM1": out["emitter"] = bem1(d)
        elif tag == "BSP1": out["base"] = bsp1(d)
        elif tag == "ESP1": out["extra"] = esp1(d)
        elif tag == "SSP1": out["sweep"] = ssp1(d)
        elif tag == "ETX1": out["extex"] = etx1(d)
        elif tag == "FLD1": out["fields"].append(d)
        elif tag == "KFA1": out["keys"].append(d)
        elif tag == "TEX1": out["tex"].append(d)
        else: out.setdefault("other", []).append(tag)
        o += sz
    return out


def fld1(d):
    # JPABaseField::loadFieldBlock
    return dict(type=d[0x0C], unk51=d[0x0D], addType=d[0x0E], cycle=d[0x0F], status=u16(d, 0x10),
                mag=f32(d, 0x14), magRndm=f32(d, 0x18), maxDist=f32(d, 0x1C),
                pos=list(struct.unpack_from(">3f", d, 0x20)), dir=list(struct.unpack_from(">3f", d, 0x2C)),
                param1=f32(d, 0x38), param2=f32(d, 0x3C), param3=u32(d, 0x40),
                fadeInEnd=fx(d, 0x44), fadeOutStart=fx(d, 0x46), fadeInStart=fx(d, 0x48), fadeOutEnd=fx(d, 0x4A))


def kfa1(d):
    # JPABaseEmitter::calcKeyFrameAnime: key count at 0x10, loop flag at 0x12, keys (t, v, in, out) at 0x20
    n = d[0x10]
    return dict(loop=d[0x12], keys=list(struct.unpack_from(">%df" % (n * 4), d, 0x20)))


def tex1(d):
    # TEX1: name at 0x0C, BTI image from 0x20 (JPATexture: storeTIMG(mRawData + 0x20))
    name = d[0x0C:0x20].split(b"\0")[0].decode()
    b = d[0x20:]
    return dict(name=name, fmt=b[0], w=u16(b, 2), h=u16(b, 4), wrapS=b[6], wrapT=b[7], bti=b)
