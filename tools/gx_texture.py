"""Decode GameCube (GX) texture formats into RGBA numpy arrays.

Formats and block layouts follow the GX hardware conventions (as documented by the
Dolphin emulator and noclip.website). All data is big endian.
"""
from __future__ import annotations

import numpy as np

I4, I8, IA4, IA8, RGB565, RGB5A3, RGBA8, C4, C8, C14X2, CMPR = 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 14
# (block width, block height, bits per pixel)
BLOCK = {I4: (8, 8, 4), I8: (8, 4, 8), IA4: (8, 4, 8), IA8: (4, 4, 16), RGB565: (4, 4, 16),
         RGB5A3: (4, 4, 16), RGBA8: (4, 4, 32), C4: (8, 8, 4), C8: (8, 4, 8), C14X2: (4, 4, 16),
         CMPR: (8, 8, 4)}


def data_size(fmt: int, w: int, h: int) -> int:
    bw, bh, bpp = BLOCK[fmt]
    return ((w + bw - 1) // bw) * ((h + bh - 1) // bh) * bw * bh * bpp // 8


def _expand(v, bits):
    return (v << (8 - bits)) | (v >> (2 * bits - 8)) if bits >= 4 else v * (255 // ((1 << bits) - 1))


def _rgb565(v):
    r = (v >> 11) & 31
    g = (v >> 5) & 63
    b = v & 31
    return np.stack([(r << 3) | (r >> 2), (g << 2) | (g >> 4), (b << 3) | (b >> 2), np.full_like(v, 255)], -1).astype(np.uint8)


def _rgb5a3(v):
    opaque = (v & 0x8000) != 0
    r5, g5, b5 = (v >> 10) & 31, (v >> 5) & 31, v & 31
    a3, r4, g4, b4 = (v >> 12) & 7, (v >> 8) & 15, (v >> 4) & 15, v & 15
    r = np.where(opaque, (r5 << 3) | (r5 >> 2), r4 * 17)
    g = np.where(opaque, (g5 << 3) | (g5 >> 2), g4 * 17)
    b = np.where(opaque, (b5 << 3) | (b5 >> 2), b4 * 17)
    a = np.where(opaque, 255, (a3 << 5) | (a3 << 2) | (a3 >> 1))
    return np.stack([r, g, b, a], -1).astype(np.uint8)


def _ia8(v):
    a = (v >> 8) & 255
    i = v & 255
    return np.stack([i, i, i, a], -1).astype(np.uint8)


def _unblock(pixels: np.ndarray, w: int, h: int, bw: int, bh: int) -> np.ndarray:
    """pixels: (nblocks, bh*bw, C) in block order -> (h, w, C) cropped image."""
    bx, by = (w + bw - 1) // bw, (h + bh - 1) // bh
    c = pixels.shape[-1]
    img = pixels.reshape(by, bx, bh, bw, c).transpose(0, 2, 1, 3, 4).reshape(by * bh, bx * bw, c)
    return img[:h, :w]


def _palette(pal: bytes, pal_fmt: int, count: int) -> np.ndarray:
    v = np.frombuffer(pal[: count * 2], ">u2").astype(np.int32)
    return {0: _ia8, 1: _rgb565, 2: _rgb5a3}[pal_fmt](v)


def decode(data: bytes, fmt: int, w: int, h: int, pal: bytes | None = None, pal_fmt: int = 0) -> np.ndarray:
    bw, bh, bpp = BLOCK[fmt]
    n = data_size(fmt, w, h)
    raw = np.frombuffer(data[:n], np.uint8)
    if fmt in (I4, C4):
        hi, lo = raw >> 4, raw & 15
        idx = np.stack([hi, lo], -1).reshape(-1)
        if fmt == I4:
            i = (idx * 17).astype(np.uint8)
            px = np.stack([i, i, i, i], -1)
        else:
            px = _palette(pal, pal_fmt, 16)[idx]
    elif fmt in (I8, C8):
        if fmt == I8:
            px = np.stack([raw, raw, raw, raw], -1)
        else:
            px = _palette(pal, pal_fmt, 256)[raw]
    elif fmt == IA4:
        a, i = (raw >> 4) * 17, (raw & 15) * 17
        px = np.stack([i, i, i, a], -1).astype(np.uint8)
    elif fmt in (IA8, RGB565, RGB5A3, C14X2):
        v = np.frombuffer(data[:n], ">u2").astype(np.int32)
        if fmt == IA8:
            px = _ia8(v)
        elif fmt == RGB565:
            px = _rgb565(v)
        elif fmt == RGB5A3:
            px = _rgb5a3(v)
        else:
            pcount = max(1, len(pal) // 2) if pal else 1
            px = _palette(pal, pal_fmt, pcount)[np.clip(v & 0x3FFF, 0, pcount - 1)]
    elif fmt == RGBA8:
        blocks = raw.reshape(-1, 2, 16, 2)  # [block][AR|GB][pixel][byte]
        a, r = blocks[:, 0, :, 0], blocks[:, 0, :, 1]
        g, b = blocks[:, 1, :, 0], blocks[:, 1, :, 1]
        px = np.stack([r, g, b, a], -1).reshape(-1, 4)
    elif fmt == CMPR:
        return _decode_cmpr(raw, w, h)
    else:
        raise ValueError(f"unsupported texture format {fmt}")
    px = px.reshape(-1, bw * bh, 4)
    return _unblock(px, w, h, bw, bh)


def _decode_cmpr(raw: np.ndarray, w: int, h: int) -> np.ndarray:
    # 8x8 macro blocks, each four 4x4 DXT1 sub-blocks in Z order, big endian.
    sub = raw.reshape(-1, 8)
    c0 = (sub[:, 0].astype(np.int32) << 8) | sub[:, 1]
    c1 = (sub[:, 2].astype(np.int32) << 8) | sub[:, 3]
    p0, p1 = _rgb565(c0).astype(np.int32), _rgb565(c1).astype(np.int32)
    gt = (c0 > c1)[:, None]
    p2 = np.where(gt, (2 * p0 + p1) // 3, (p0 + p1) // 2)
    p3 = np.where(gt, (p0 + 2 * p1) // 3, 0)
    p2[:, 3] = 255
    p3[:, 3] = np.where(gt[:, 0], 255, 0)
    pal = np.stack([p0, p1, p2, p3], 1).astype(np.uint8)  # (n, 4, 4)
    bits = sub[:, 4:8]
    idx = np.stack([(bits >> s) & 3 for s in (6, 4, 2, 0)], -1).reshape(-1, 16)  # row-major 4x4
    px = pal[np.arange(len(sub))[:, None], idx]  # (n, 16, 4)
    # Assemble 4x4 sub-blocks into 8x8 blocks (2x2 in row-major order), then into the image.
    px = px.reshape(-1, 2, 2, 4, 4, 4).transpose(0, 1, 3, 2, 4, 5).reshape(-1, 64, 4)
    return _unblock(px, w, h, 8, 8)
