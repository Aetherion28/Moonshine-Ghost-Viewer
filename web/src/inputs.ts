// The leading ghost's controller (Moonshine V5+ records it): stick, C-stick, buttons and the
// analog triggers at the current time (the last record at or before it, as Moonshine holds it).
// GameCube pad bits: d-pad 0x1-0x8, Z 0x10, R 0x20, L 0x40, A 0x100, B 0x200, X 0x400, Y 0x800, Start 0x1000.

const BITS: [string, number][] = [['A', 0x100], ['B', 0x200], ['X', 0x400], ['Y', 0x800], ['Z', 0x10], ['L', 0x40], ['R', 0x20], ['S', 0x1000]];

export class InputDisplay {
    private stick: SVGCircleElement;
    private cstick: SVGCircleElement;
    private btn: Record<string, SVGElement> = {};
    private trig: SVGRectElement[] = [];
    constructor(private root: HTMLElement) {
        root.innerHTML = `<svg viewBox="0 0 220 110" width="220" height="110" aria-label="Controller inputs">
  <rect x="2" y="8" width="16" height="60" rx="3" class="tb"/><rect id="tL" x="2" y="68" width="16" height="0" class="tf"/>
  <circle cx="58" cy="44" r="30" class="ring"/><circle id="st" cx="58" cy="44" r="9" class="dot"/>
  <circle cx="58" cy="92" r="14" class="ring c"/><circle id="cs" cx="58" cy="92" r="5" class="dot c"/>
  <circle id="bA" cx="150" cy="52" r="16" class="b a"/><text x="150" y="57">A</text>
  <circle id="bB" cx="122" cy="72" r="10" class="b bb"/><text x="122" y="76">B</text>
  <circle id="bX" cx="178" cy="40" r="10" class="b"/><text x="178" y="44">X</text>
  <circle id="bY" cx="146" cy="22" r="10" class="b"/><text x="146" y="26">Y</text>
  <rect id="bZ" x="166" y="2" width="26" height="11" rx="4" class="b z"/><text x="179" y="11" class="s">Z</text>
  <rect id="bL" x="22" y="0" width="22" height="9" rx="3" class="b"/><text x="33" y="8" class="s">L</text>
  <rect id="bR" x="196" y="2" width="22" height="9" rx="3" class="b"/><text x="207" y="10" class="s">R</text>
  <rect id="bS" x="100" y="94" width="18" height="10" rx="5" class="b"/>
  <rect x="202" y="16" width="16" height="60" rx="3" class="tb"/><rect id="tR" x="202" y="76" width="16" height="0" class="tf"/>
</svg>`;
        const q = (id: string) => root.querySelector('#' + id) as any;
        this.stick = q('st'); this.cstick = q('cs');
        for (const [n] of BITS) this.btn[n] = q('b' + n);
        this.trig = [q('tL'), q('tR')];
    }

    update(g: any, t: number) {
        const inp = g && g.data.inputs;
        this.root.hidden = !inp || !inp.count;
        if (this.root.hidden) return;
        let lo = 0, hi = inp.count - 1;
        if (t < inp.qf[0]) lo = 0;
        else { while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (inp.qf[mid] <= t) lo = mid; else hi = mid - 1; } }
        const b = inp.buttons[lo];
        for (const [n, bit] of BITS) this.btn[n].classList.toggle('on', !!(b & bit));
        const sx = inp.stick[lo * 2] / 128, sy = inp.stick[lo * 2 + 1] / 128;
        this.stick.setAttribute('cx', String(58 + sx * 24)); this.stick.setAttribute('cy', String(44 - sy * 24));
        const cx = inp.cstick[lo * 2] / 128, cy = inp.cstick[lo * 2 + 1] / 128;
        this.cstick.setAttribute('cx', String(58 + cx * 10)); this.cstick.setAttribute('cy', String(92 - cy * 10));
        for (let k = 0; k < 2; k++) {
            const v = Math.min(1, inp.trig[lo * 2 + k] / 255), top = (k ? 16 : 8) + 60 * (1 - v);
            this.trig[k].setAttribute('y', String(top)); this.trig[k].setAttribute('height', String(60 * v));
        }
    }
}
