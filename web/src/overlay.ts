// Invisible triggers drawn over the stage on a 2D canvas: outlines (cylinders, cubes, spheres)
// projected with the stage camera, and a label for each, nearest first, leaving out labels that
// would land on one already drawn.

import { vec4 } from 'gl-matrix';
import { Camera } from '../noclip/Camera.js';
import { ENEMY_ZONE_COLOR, Trigger, TRIG_STYLE } from './triggers.js';

const CYL = new Set(['stage', 'stageHipDrop', 'demo', 'warp', 'areaCyl']);
const D = Math.PI / 180;

function outline(tr: Trigger): number[][][] {
    const [x, y, z] = tr.pos, lines: number[][][] = [];
    if (tr.kind === 'enemy') {   // a sphere: three rings and a few parallels
        const r = tr.a, n = 48;
        for (const h of [-0.7, -0.35, 0, 0.35, 0.7]) {
            const rr = r * Math.sqrt(1 - h * h), yy = y + r * h;
            for (let i = 0; i < n; i++) {
                const a0 = (i / n) * 2 * Math.PI, a1 = ((i + 1) / n) * 2 * Math.PI;
                lines.push([[x + Math.cos(a0) * rr, yy, z + Math.sin(a0) * rr], [x + Math.cos(a1) * rr, yy, z + Math.sin(a1) * rr]]);
            }
        }
        for (const m of [0, Math.PI / 2]) for (let i = 0; i < n; i++) {
            const a0 = (i / n) * 2 * Math.PI, a1 = ((i + 1) / n) * 2 * Math.PI;
            lines.push([[x + Math.cos(m) * Math.cos(a0) * r, y + Math.sin(a0) * r, z + Math.sin(m) * Math.cos(a0) * r],
                [x + Math.cos(m) * Math.cos(a1) * r, y + Math.sin(a1) * r, z + Math.sin(m) * Math.cos(a1) * r]]);
        }
        return lines;
    }
    if (CYL.has(tr.kind)) {
        const r = tr.a, h = tr.b, n = 32;
        for (let i = 0; i < n; i++) {
            const a0 = (i / n) * 2 * Math.PI, a1 = ((i + 1) / n) * 2 * Math.PI;
            const p0 = [x + Math.cos(a0) * r, z + Math.sin(a0) * r], p1 = [x + Math.cos(a1) * r, z + Math.sin(a1) * r];
            lines.push([[p0[0], y, p0[1]], [p1[0], y, p1[1]]], [[p0[0], y + h, p0[1]], [p1[0], y + h, p1[1]]]);
            if (i % 4 === 0) lines.push([[p0[0], y, p0[1]], [p0[0], y + h, p0[1]]]);
        }
        return lines;
    }
    // A cube: centred in x / z, from its base up, turned x then y then z (CLBIsPointInCube).
    const [rx, ry, rz] = tr.rot.map((v) => v * D), sx = tr.a / 2, sy = tr.b, sz = tr.c / 2;
    const rot = (p: number[]) => {
        let [a, b, c] = p;
        [b, c] = [b * Math.cos(rx) - c * Math.sin(rx), b * Math.sin(rx) + c * Math.cos(rx)];
        [a, c] = [a * Math.cos(ry) + c * Math.sin(ry), -a * Math.sin(ry) + c * Math.cos(ry)];
        [a, b] = [a * Math.cos(rz) - b * Math.sin(rz), a * Math.sin(rz) + b * Math.cos(rz)];
        return [x + a, y + b, z + c];
    };
    const c = [[-sx, 0, -sz], [sx, 0, -sz], [sx, 0, sz], [-sx, 0, sz], [-sx, sy, -sz], [sx, sy, -sz], [sx, sy, sz], [-sx, sy, sz]].map(rot);
    for (const [i, j] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) lines.push([c[i], c[j]]);
    return lines;
}

const cache = new WeakMap<Trigger, number[][][]>();
const _a = vec4.create(), _b = vec4.create();

export function drawTriggers(cv: HTMLCanvasElement, camera: Camera, list: Trigger[]) {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(cv.clientWidth * dpr), H = Math.round(cv.clientHeight * dpr);
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    const g = cv.getContext('2d')!;
    g.clearRect(0, 0, W, H);
    if (!list.length) return;
    const M = camera.clipFromWorldMatrix;
    const cam = [camera.worldMatrix[12], camera.worldMatrix[13], camera.worldMatrix[14]];
    const proj = (p: number[], out: vec4) => vec4.transformMat4(out, vec4.set(out, p[0], p[1], p[2], 1), M);
    const NEAR = 1;
    g.lineWidth = 1.25 * dpr;
    const labels: { x: number, y: number, text: string, color: string, d: number }[] = [];
    for (const tr of list) {
        let L = cache.get(tr);
        if (!L) { L = outline(tr); cache.set(tr, L); }
        const color = tr.kind === 'enemy' ? ENEMY_ZONE_COLOR[tr.info] || TRIG_STYLE.enemy[0] : (TRIG_STYLE[tr.kind] || TRIG_STYLE.cube)[0];
        g.strokeStyle = color;
        g.globalAlpha = 0.8;
        g.beginPath();
        for (const [p, q] of L) {
            proj(p, _a); proj(q, _b);
            let aw = _a[3], bw = _b[3];
            if (aw < NEAR && bw < NEAR) continue;
            if (aw < NEAR || bw < NEAR) {   // clip to just in front of the eye
                const f = (NEAR - aw) / (bw - aw);
                const cut = vec4.lerp(vec4.create(), _a, _b, f);
                if (aw < NEAR) vec4.copy(_a, cut); else vec4.copy(_b, cut);
                aw = _a[3]; bw = _b[3];
            }
            g.moveTo((_a[0] / aw + 1) * 0.5 * W, (1 - _a[1] / aw) * 0.5 * H);
            g.lineTo((_b[0] / bw + 1) * 0.5 * W, (1 - _b[1] / bw) * 0.5 * H);
        }
        g.stroke();
        // label over the top
        const top = [tr.pos[0], tr.pos[1] + (tr.kind === 'enemy' ? tr.a : tr.b), tr.pos[2]];
        proj(top, _a);
        if (_a[3] > NEAR) {
            const sx = (_a[0] / _a[3] + 1) * 0.5 * W, sy = (1 - _a[1] / _a[3]) * 0.5 * H;
            if (sx > -50 && sx < W + 50 && sy > -20 && sy < H + 20) {
                let text = tr.kind === 'enemy' ? `${tr.label} (${Math.round(tr.a)})` : (TRIG_STYLE[tr.kind] || TRIG_STYLE.cube)[1];
                if (tr.kind === 'warp' && Array.isArray(tr.info)) text += ` ${tr.info[0]} → ${tr.info[1]}`;
                labels.push({ x: sx, y: sy, text, color, d: Math.hypot(top[0] - cam[0], top[1] - cam[1], top[2] - cam[2]) });
            }
        }
    }
    g.globalAlpha = 1;
    labels.sort((a, b) => a.d - b.d);
    const placed: number[][] = [];
    g.font = `600 ${12 * dpr}px system-ui, sans-serif`;
    g.textBaseline = 'middle';
    for (const l of labels) {
        const w = g.measureText(l.text).width + 12 * dpr, h = 20 * dpr, x = l.x - w / 2, y = l.y - h;
        if (placed.some(([px, py, pw, ph]) => x < px + pw && px < x + w && y < py + ph && py < y + h)) continue;
        placed.push([x, y, w, h]);
        g.fillStyle = 'rgba(10,14,20,0.75)';
        g.fillRect(x, y, w, h);
        g.fillStyle = l.color;
        g.fillText(l.text, x + 6 * dpr, y + h / 2);
    }
}
