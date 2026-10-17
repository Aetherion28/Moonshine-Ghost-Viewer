// Moonshine Ghost Viewer v2. The stage comes from the player's own copy of the game, read in the
// browser, and is drawn by the game's own J3D / GX rendering (noclip.website's port of it, see
// noclip/LICENSE). Ghosts are Moonshine .smsghost files played through it.

import * as Yaz0 from '../noclip/Common/Compression/Yaz0.js';
import { GameFS, openDisc, openFolder, rememberHandle, rememberedHandle, forgetHandle } from './disc.js';
import { parseStageArc, sceneForRoute } from './stagearc.js';
import { parseArchive } from './mario.js';
import { parseSmsGhost, ghostSampleAt, ghostFormatTime, ghostRouteLabel } from './ghost.js';
import { InputDisplay } from './inputs.js';
import { Ghost, Shared, View } from './view.js';

const QF_PER_SECOND = 120000 / 1001;
const QF_PER_FRAME = 4;
const COLORS = ['#e8402a', '#2f7de1', '#2aa36b', '#a35ad8', '#e07b1c', '#0fa3a3'];
const WORLD_NAMES: Record<number, string> = { 0: 'Delfino Airstrip', 1: 'Delfino Plaza', 2: 'Bianco Hills', 3: 'Ricco Harbor', 4: 'Gelato Beach',
    5: 'Pinna Park', 6: 'Sirena Beach', 7: 'Hotel Delfino', 8: 'Pianta Village', 9: 'Noki Bay', 13: 'Pinna Park', 14: 'Casino Delfino',
    16: 'Noki Bay undersea', 52: 'Corona Mountain', 55: 'Petey Piranha', 56: 'King Boo', 57: 'Eely-Mouth', 58: 'Mecha-Bowser', 59: 'Gooper Blooper', 60: 'Bowser' };

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

// ---------------------------------------------------------------- state
const shared: Shared = {
    fs: null, stageTable: [], marioArc: null, yoshiArc: null, ghosts: [],
    opt: { recCam: true, triggers: false, auto: true },
    onError: showError,
    onStatus: (v, text) => { (v === viewA ? $('status') : $('statusB')).textContent = text; },
    onStage: (v) => { if (v === viewA) $<HTMLSelectElement>('stage').value = v.stageName; update(); },
};
const ghosts = shared.ghosts;
const viewA = new View($<HTMLCanvasElement>('scene'), $<HTMLCanvasElement>('overlay'), shared);
let viewB: View | null = null;           // the comparison view, made when first turned on
let compare = false;
let lead: Ghost | null = null;           // the left view's ghost (and the splits' reference)
let right: Ghost | null = null;          // the comparison view's ghost
let offset = 0;                          // right view time = left view time + offset
let playing = false;
let speed = 1;

const t = () => viewA.t;
function setT(q: number) {
    viewA.t = Math.max(0, Math.min(duration(), q));
    if (viewB) viewB.t = Math.max(0, Math.min(right ? right.data.header.durationQf : duration(), viewA.t + offset));
}

// ---------------------------------------------------------------- the disc
async function useDisc(g: GameFS) {
    shared.fs = g;
    shared.stageTable = parseStageArc(await g.read('data/stageArc.bin'));
    shared.marioArc = parseArchive(await g.read('data/mario.szs'), Yaz0.decompressSW);
    shared.yoshiArc = g.has('data/yoshi.szs') ? parseArchive(await g.read('data/yoshi.szs'), Yaz0.decompressSW) : null;
    $('discLabel').textContent = `${g.label}${g.id ? ` · ${g.id}` : ''}`;
    document.body.classList.add('hasDisc');
    fillStagePicker();
    const r = viewA.leadRoute();
    await viewA.loadStage(r ? sceneForRoute(shared.stageTable, r.area, r.episode) || 'dolpic0' : 'dolpic0');
    if (viewB) viewB.followStage();
}

async function pickDisc() {
    const w = window as any;
    if (w.showOpenFilePicker) {
        try {
            const [h] = await w.showOpenFilePicker({ types: [{ description: 'GameCube disc image', accept: { 'application/octet-stream': ['.iso', '.gcm'] } }] });
            await useDisc(await openDisc(await h.getFile()));
            rememberHandle(h);
            return;
        } catch (e: any) {
            if (e && e.name === 'AbortError') return;
            if (!(e instanceof TypeError)) { showError(e); return; }
        }
    }
    $<HTMLInputElement>('isoFile').click();
}

async function reopenRemembered() {
    const h = await rememberedHandle();
    if (!h) return false;
    try {
        if ((await h.queryPermission({ mode: 'read' })) !== 'granted' && (await h.requestPermission({ mode: 'read' })) !== 'granted') return false;
        await useDisc(await openDisc(await h.getFile()));
        return true;
    } catch (e) { forgetHandle(); showError(e); return false; }
}

function showError(e: any) {
    const box = $('error');
    box.textContent = e && e.message ? e.message : String(e);
    box.hidden = false;
    console.error(e);
}

function fillStagePicker() {
    const sel = $<HTMLSelectElement>('stage');
    sel.textContent = '';
    shared.stageTable.forEach((eps, area) => {
        const seen = new Set<string>();
        const names = eps.filter((s) => s && s !== 'none' && !seen.has(s) && seen.add(s) && shared.fs!.has(`data/scene/${s}.szs`));
        if (!names.length) return;
        const og = document.createElement('optgroup');
        og.label = WORLD_NAMES[area] || `Area ${area}`;
        for (const s of names) { const o = document.createElement('option'); o.value = s; o.textContent = s; og.append(o); }
        sel.append(og);
    });
    sel.value = viewA.stageName;
}

// ---------------------------------------------------------------- ghosts
async function addGhostFiles(files: FileList | File[]) {
    for (const f of Array.from(files)) {
        try {
            const data = parseSmsGhost(await f.arrayBuffer());
            const g: Ghost = { data, fileName: f.name, color: COLORS[ghosts.length % COLORS.length], visible: true };
            ghosts.push(g);
            viewA.attach(g);
            if (viewB) viewB.attach(g);
            for (const w of data.warnings) console.warn(f.name, w);
        } catch (e) { showError(new Error(`${f.name}: ${(e as any).message}`)); }
    }
    if (!lead) setLead(ghosts[0] || null);
    if (!right || right === lead) right = ghosts.find((g) => g !== lead) || null;
    if (viewB) viewB.lead = right;
    renderGhostList();
    viewA.followStage();
    update();
}

function setLead(g: Ghost | null) {
    lead = g;
    viewA.lead = g;
    if (right === g) { right = ghosts.find((x) => x !== g) || null; if (viewB) viewB.lead = right; }
}

function duration() { return Math.max(0, ...ghosts.map((g) => g.data.header.durationQf)); }

function renderGhostList() {
    const box = $('ghostList');
    box.textContent = '';
    for (const g of ghosts) {
        const row = document.createElement('div');
        row.className = 'ghostRow' + (g === lead ? ' lead' : '') + (compare && g === right ? ' right' : '');
        const sw = document.createElement('input');
        sw.type = 'checkbox'; sw.checked = g.visible; sw.title = 'Show this ghost';
        sw.style.accentColor = g.color;
        sw.onchange = () => { g.visible = sw.checked; };
        const name = document.createElement('button');
        name.className = 'ghostName';
        name.title = compare ? 'Follow this ghost in the left view (shift-click: the right view)' : 'Follow this ghost';
        const h = g.data.header;
        name.innerHTML = `<span class="sw" style="background:${g.color}"></span>`;
        name.append(`${h.name || g.fileName}`);
        const meta = document.createElement('span');
        meta.className = 'meta';
        meta.textContent = `${h.routeLabel} · ${ghostFormatTime(h.durationQf)}${h.author ? ' · ' + h.author : ''}${g.data.camera ? ' · camera' : ''}`;
        name.append(meta);
        name.onclick = (e) => {
            if (compare && e.shiftKey && g !== lead) { right = g; if (viewB) { viewB.lead = g; viewB.followStage(); } }
            else setLead(g);
            renderGhostList(); viewA.followStage(); update();
        };
        const rm = document.createElement('button');
        rm.className = 'rm'; rm.textContent = '×'; rm.title = 'Remove this ghost';
        rm.onclick = () => {
            ghosts.splice(ghosts.indexOf(g), 1);
            viewA.detach(g); if (viewB) viewB.detach(g);
            if (lead === g) setLead(ghosts[0] || null);
            if (right === g) { right = ghosts.find((x) => x !== lead) || null; if (viewB) viewB.lead = right; }
            renderGhostList(); update();
        };
        row.append(sw, name, rm);
        box.append(row);
    }
    $('ghostHint').hidden = ghosts.length > 0;
    const cb = $<HTMLInputElement>('optCompare');
    cb.disabled = ghosts.length < 2;
    if (ghosts.length < 2 && compare) setCompare(false);
}

// ---------------------------------------------------------------- comparison view
function setCompare(on: boolean) {
    compare = on && ghosts.length >= 2;
    $<HTMLInputElement>('optCompare').checked = compare;
    document.body.classList.toggle('compare', compare);
    if (compare && !viewB) {
        viewB = new View($<HTMLCanvasElement>('sceneB'), $<HTMLCanvasElement>('overlayB'), shared);
        viewB.lead = right;
        for (const g of ghosts) viewB.attach(g);
    }
    if (viewB) { viewB.lead = right; setT(t()); viewB.followStage(); }
    renderGhostList();
    update();
}

// ---------------------------------------------------------------- playback
let lastFrame = performance.now();
function setPlaying(on: boolean) {
    playing = on && ghosts.length > 0;
    $('play').textContent = playing ? 'Pause' : 'Play';
}
function seek(q: number) { setT(q); update(); }

function update() {
    const d = duration();
    const sc = $<HTMLInputElement>('scrub');
    sc.max = String(Math.max(1, Math.round(d)));
    sc.value = String(Math.round(t()));
    $('clock').textContent = `${ghostFormatTime(Math.round(t()))} / ${ghostFormatTime(Math.round(d))}`;
    if (viewB && compare) {
        $('clockB').textContent = `${ghostFormatTime(Math.round(viewB.t))}${offset ? ` (${offset > 0 ? '+' : '−'}${ghostFormatTime(Math.round(Math.abs(offset)))})` : ''}`;
        const dl = splitDelta();
        $('deltaB').textContent = dl ? `split ${dl.k + 1}: ${fmtDelta(dl.dq)}` : '';
        $('deltaB').className = dl ? (dl.dq > 0 ? 'behind' : 'ahead') : '';
    }
    drawSplitTicks();
    updateSplitTable();
    viewA.followStage();
    if (viewB && compare) viewB.followStage();
    hud.update(lead, t());
    const r = viewA.leadRoute();
    $('where').textContent = r ? `${ghostRouteLabel(r)} · ${viewA.stageName}` : viewA.stageName;
}

function frame(now: number) {
    const dt = Math.min(100, now - lastFrame);
    lastFrame = now;
    if (playing) {
        setT(t() + (dt / 1000) * QF_PER_SECOND * speed);
        if (t() >= duration()) { setT(duration()); setPlaying(false); }
        update();
    }
    viewA.frame(now, dt);
    if (viewB && compare) viewB.frame(now, dt);
    requestAnimationFrame(frame);
}

// ---------------------------------------------------------------- splits (Moonshine V5+)
const fmtDelta = (q: number) => (q < 0 ? '−' : '+') + (Math.abs(q) / QF_PER_SECOND).toFixed(2);
function splitGroup() {
    if (!lead || !lead.data.splits.length) return null;
    const route = lead.data.splits[0].route;
    const list = [lead, ...ghosts.filter((g) => g !== lead && g.data.splits.length && g.data.splits[0].route === route)];
    return { list, n: Math.max(...list.map((g) => g.data.splits.length)) };
}
// Comparison view: how far the right ghost is behind (+) or ahead (−) at the last split both passed.
function splitDelta() {
    if (!lead || !right || !viewB) return null;
    const sa = lead.data.splits || [], sb = right.data.splits || [];
    if (!sa.length || !sb.length || sa[0].route !== sb[0].route) return null;
    let k = -1;
    for (const x of sa) { const y = sb.find((z: any) => z.index === x.index); if (y && x.qf <= t() && y.qf <= viewB.t) k = x.index; }
    if (k < 0) return null;
    return { k, dq: sb.find((z: any) => z.index === k).qf - sa.find((z: any) => z.index === k).qf };
}
let tickKey = '', tickLayout = 0;
new ResizeObserver(() => { tickLayout++; drawSplitTicks(); }).observe($('timeline'));
function drawSplitTicks() {
    const sp = lead ? lead.data.splits : [], box = $('splitTicks'), sc = $('scrub');
    const key = (lead ? lead.fileName : '') + '|' + duration() + '|' + sp.length + '|' + tickLayout;
    if (key === tickKey) return;
    tickKey = key;
    box.textContent = '';
    box.style.left = sc.offsetLeft + 'px'; box.style.width = sc.offsetWidth + 'px';
    sp.forEach((x: any, k: number) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.style.left = (Math.max(0, Math.min(1, x.qf / Math.max(1, duration()))) * 100) + '%';
        b.title = `Split ${k + 1} · ${ghostFormatTime(Math.round(x.qf))}`;
        b.onclick = () => { setPlaying(false); seek(x.qf); };
        box.append(b);
    });
}
let tableKey = '';
function updateSplitTable() {
    const G = splitGroup(), box = $('splits');
    $('splitsHead').hidden = box.hidden = !G;
    if (!G) { tableKey = ''; return; }
    const at = (g: Ghost, k: number) => g.data.splits.find((x: any) => x.index === k);
    const cur = lead!.data.splits.filter((x: any) => x.qf <= t()).length;
    const key = G.list.map((g) => g.fileName).join('|') + '|' + cur + '|' + compare;
    if (key === tableKey) return;
    tableKey = key;
    const segOf = (g: Ghost, k: number) => { const a = at(g, k), b = k ? at(g, k - 1) : { qf: 0 }; return a && b ? a.qf - b.qf : null; };
    const best: number[] = [];
    for (let k = 0; k < G.n; k++) best[k] = Math.min(...G.list.map((g) => segOf(g, k)).filter((v): v is number => v !== null));
    const tbl = document.createElement('table');
    const head = document.createElement('tr');
    head.innerHTML = '<th>#</th>';
    G.list.forEach((g) => { const th = document.createElement('th'); th.innerHTML = `<span class="sw" style="background:${g.color}"></span>`; th.append(g.data.header.name.replace(/ - .*$/, '') || g.fileName); head.append(th); });
    const thead = document.createElement('thead'); thead.append(head); tbl.append(thead);
    const body = document.createElement('tbody');
    for (let k = 0; k < G.n; k++) {
        const tr = document.createElement('tr');
        if (k === cur - 1) tr.className = 'now';
        tr.title = compare ? 'Line both views up on this split' : 'Jump to this split';
        tr.innerHTML = `<td>${k + 1}</td>`;
        const ref = at(lead!, k);
        G.list.forEach((g) => {
            const td = document.createElement('td'), s0 = at(g, k), seg = segOf(g, k);
            if (!s0) { td.textContent = '--'; tr.append(td); return; }
            const txt = ghostFormatTime(Math.round(s0.qf));
            if (g !== lead && ref) { const dq = s0.qf - ref.qf; td.innerHTML = `${txt} <span class="${dq > 0 ? 'behind' : 'ahead'}">${fmtDelta(dq)}</span>`; }
            else td.textContent = txt;
            if (seg !== null) {
                const sp = document.createElement('span'); sp.className = 'seg'; sp.textContent = (seg / QF_PER_SECOND).toFixed(2) + ' s';
                td.append(sp);
                if (G.list.length > 1 && seg === best[k]) td.classList.add('best');
            }
            tr.append(td);
        });
        tr.onclick = () => {
            setPlaying(false);
            if (compare && right) {   // both views to this split
                const b = at(right, k);
                if (ref && b) offset = b.qf - ref.qf;
            }
            if (ref) seek(ref.qf);
        };
        body.append(tr);
    }
    tbl.append(body);
    box.replaceChildren(tbl);
}

// ---------------------------------------------------------------- UI wiring
const hud = new InputDisplay($('inputs'));
$('pickDisc').onclick = () => pickDisc();
$('pickFolder').onclick = () => $<HTMLInputElement>('folderFile').click();
$<HTMLInputElement>('isoFile').onchange = async (e) => {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (f) try { await useDisc(await openDisc(f)); } catch (err) { showError(err); }
};
$<HTMLInputElement>('folderFile').onchange = async (e) => {
    const list = Array.from((e.target as HTMLInputElement).files || []);
    if (list.length) try { await useDisc(await openFolder(list)); } catch (err) { showError(err); }
};
$('addGhost').onclick = () => $<HTMLInputElement>('ghostFile').click();
$<HTMLInputElement>('ghostFile').onchange = (e) => { const f = (e.target as HTMLInputElement).files; if (f) addGhostFiles(f); (e.target as HTMLInputElement).value = ''; };
$<HTMLSelectElement>('stage').onchange = (e) => { setAuto(false); viewA.loadStage((e.target as HTMLSelectElement).value); };
$('play').onclick = () => { if (!playing && t() >= duration()) setT(0); setPlaying(!playing); };
const step = (q: number) => Math.round(q / QF_PER_FRAME) * QF_PER_FRAME;
$('back').onclick = () => { setPlaying(false); seek(step(t()) - QF_PER_FRAME); };
$('fwd').onclick = () => { setPlaying(false); seek(step(t()) + QF_PER_FRAME); };
$('backB').onclick = () => { setPlaying(false); offset -= QF_PER_FRAME; seek(t()); };
$('fwdB').onclick = () => { setPlaying(false); offset += QF_PER_FRAME; seek(t()); };
$('syncB').onclick = () => { offset = 0; seek(t()); };
$<HTMLInputElement>('scrub').oninput = (e) => { setPlaying(false); seek(Number((e.target as HTMLInputElement).value)); };
$<HTMLSelectElement>('speed').onchange = (e) => { speed = Number((e.target as HTMLSelectElement).value); };
function setCam(m: 'follow' | 'free') {
    viewA.setCamMode(m); if (viewB) viewB.setCamMode(m);
    $('camFollow').setAttribute('aria-pressed', String(m === 'follow'));
    $('camFree').setAttribute('aria-pressed', String(m === 'free'));
}
$('camFollow').onclick = () => setCam('follow');
$('camFree').onclick = () => setCam('free');
function setAuto(on: boolean) {
    shared.opt.auto = on; viewA.autoStage = on;
    $<HTMLInputElement>('optAuto').checked = on;
    if (on) viewA.followStage();
}
$<HTMLInputElement>('optAuto').onchange = (e) => setAuto((e.target as HTMLInputElement).checked);
$<HTMLInputElement>('optRecCam').onchange = (e) => { shared.opt.recCam = (e.target as HTMLInputElement).checked; };
$<HTMLInputElement>('optTriggers').onchange = (e) => { shared.opt.triggers = (e.target as HTMLInputElement).checked; };
$<HTMLInputElement>('optCompare').onchange = (e) => setCompare((e.target as HTMLInputElement).checked);
$('error').onclick = () => { $('error').hidden = true; };

window.addEventListener('keydown', (e) => {
    if ((e.target as HTMLElement).closest('input, select, textarea')) return;
    if (e.code === 'KeyP' || (e.code === 'Space' && viewA.camMode !== 'free')) { e.preventDefault(); $('play').click(); }
    else if (e.code === 'Comma') $('back').click();
    else if (e.code === 'Period') $('fwd').click();
    else if (e.code === 'KeyF') setCam(viewA.camMode === 'follow' ? 'free' : 'follow');
});
const drop = document.body;
drop.addEventListener('dragover', (e) => { e.preventDefault(); document.body.classList.add('dragging'); });
drop.addEventListener('dragleave', (e) => { if (e.target === document.body) document.body.classList.remove('dragging'); });
drop.addEventListener('drop', async (e) => {
    e.preventDefault(); document.body.classList.remove('dragging');
    const files = Array.from(e.dataTransfer?.files || []);
    const iso = files.find((f) => /\.(iso|gcm)$/i.test(f.name));
    if (iso) try { await useDisc(await openDisc(iso)); } catch (err) { showError(err); }
    const gh = files.filter((f) => /\.smsghost$/i.test(f.name));
    if (gh.length) addGhostFiles(gh);
});

(async () => {
    setCam('follow');
    renderGhostList();
    update();
    requestAnimationFrame(frame);
    const h = await rememberedHandle();
    if (h) {
        const b = $('reopen');
        b.hidden = false;
        b.textContent = `Open ${h.name} again`;
        b.onclick = async () => { b.hidden = true; if (!(await reopenRemembered())) b.hidden = false; };
    }
})();

// For tests and the console.
(window as any).ghostViewer = {
    get t() { return t(); }, seek, addGhostFiles, get stage() { return viewA.stageName; }, get ghosts() { return ghosts; },
    get views() { return [viewA, viewB]; }, get renderer() { return viewA.renderer; }, setCompare,
    loadStage: (n: string) => viewA.loadStage(n), triggers: () => viewA.triggers,
    look: (eye: number[], at: number[]) => { setCam('free'); viewA.look(eye, at); }, sample: () => viewA.sample(),
    models: () => viewA.renderer ? viewA.renderer.modelInstances.map((m: any) => [m.name, m.materialInstances.map((x: any) => x.name), [...m.modelMatrix.slice(12, 15)]]) : [],
};
