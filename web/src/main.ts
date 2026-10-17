// Moonshine Ghost Viewer v2. The stage comes from the player's own copy of the game, read in the
// browser, and is drawn by the game's own J3D / GX rendering (noclip.website's port of it, see
// noclip/LICENSE). Ghosts are Moonshine .smsghost files played through it.

import { mat4, quat, vec3 } from 'gl-matrix';
import ArrayBufferSlice from '../noclip/ArrayBufferSlice.js';
import { Camera, FPSCameraController } from '../noclip/Camera.js';
import * as Yaz0 from '../noclip/Common/Compression/Yaz0.js';
import * as RARC from '../noclip/Common/JSYSTEM/JKRArchive.js';
import { AntialiasingMode } from '../noclip/gfx/helpers/RenderGraphHelpers.js';
import { createSwapChainForWebGL2, GfxPlatformWebGL2Config } from '../noclip/gfx/platform/GfxPlatformWebGL2.js';
import { GfxDevice, GfxSwapChain } from '../noclip/gfx/platform/GfxPlatform.js';
import InputManager from '../noclip/InputManager.js';
import { colorFromRGBA } from '../noclip/Color.js';
import { GameFS, openDisc, openFolder, rememberHandle, rememberedHandle, forgetHandle } from './disc.js';
import { parseStageArc, sceneForRoute } from './stagearc.js';
import { SunshineRenderer, SunshineSceneDesc } from './sms_scene.js';
import { MarioModel, parseArchive, setPlayerLights } from './mario.js';
import { parseSmsGhost, ghostSampleAt, ghostAnimAt, ghostFluddAt, ghostCameraAt, ghostFormatTime, ghostRouteLabel } from './ghost.js';
import { buildTriggers, marioStart, Trigger } from './triggers.js';
import { drawTriggers } from './overlay.js';
import { InputDisplay } from './inputs.js';
import { buildActors, actorParts, updateActorParts, swapTextures } from './actors.js';

const QF_PER_SECOND = 120000 / 1001;
const QF_PER_FRAME = 4;
const COLORS = ['#e8402a', '#2f7de1', '#2aa36b', '#a35ad8', '#e07b1c', '#0fa3a3'];
const WORLD_NAMES: Record<number, string> = { 0: 'Delfino Airstrip', 1: 'Delfino Plaza', 2: 'Bianco Hills', 3: 'Ricco Harbor', 4: 'Gelato Beach',
    5: 'Pinna Park', 6: 'Sirena Beach', 7: 'Hotel Delfino', 8: 'Pianta Village', 9: 'Noki Bay', 13: 'Pinna Park', 14: 'Casino Delfino',
    16: 'Noki Bay undersea', 52: 'Corona Mountain', 55: 'Petey Piranha', 56: 'King Boo', 57: 'Eely-Mouth', 58: 'Mecha-Bowser', 59: 'Gooper Blooper', 60: 'Bowser' };

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

interface Ghost {
    data: any;
    fileName: string;
    color: string;
    visible: boolean;
    mario: MarioModel | null;
}

// ---------------------------------------------------------------- state
let fs: GameFS | null = null;
let stageTable: string[][] = [];
let marioArc: RARC.JKRArchive | null = null;
let renderer: SunshineRenderer | null = null;
let stageName = '';
let stageLoading = '';
let triggers: Trigger[] = [];
const ghosts: Ghost[] = [];
let lead: Ghost | null = null;
let t = 0;                       // QF from the ghosts' start
let playing = false;
let speed = 1;
let camMode: 'follow' | 'free' = 'follow';

// ---------------------------------------------------------------- graphics
const canvas = $<HTMLCanvasElement>('scene');
const gl = canvas.getContext('webgl2', { antialias: false, preserveDrawingBuffer: false, depth: false, stencil: false });
if (!gl) throw new Error('This browser has no WebGL 2.');
const swapChain: GfxSwapChain = createSwapChainForWebGL2(gl, new GfxPlatformWebGL2Config());
const device: GfxDevice = swapChain.getDevice();
const camera = new Camera();
(camera as any).clipSpaceNearZ = device.queryVendorInfo().clipSpaceNearZ;
const input = new InputManager(canvas);
const fps = new FPSCameraController();
fps.camera = camera;
const viewerInput: any = {
    camera, time: 0, deltaTime: 0, backbufferWidth: 1, backbufferHeight: 1, onscreenTexture: null,
    antialiasingMode: AntialiasingMode.FXAA, mouseLocation: { mouseX: -1, mouseY: -1 }, debugConsole: { addInfoLine() { } },
};

// ---------------------------------------------------------------- the disc
async function useDisc(g: GameFS) {
    fs = g;
    stageTable = parseStageArc(await fs.read('data/stageArc.bin'));
    marioArc = parseArchive(await fs.read('data/mario.szs'), Yaz0.decompressSW);
    $('discLabel').textContent = `${g.label}${g.id ? ` · ${g.id}` : ''}`;
    document.body.classList.add('hasDisc');
    fillStagePicker();
    const route = leadRoute();
    await loadStage(route ? sceneForRoute(stageTable, route.area, route.episode) || 'dolpic0' : 'dolpic0');
}

async function pickDisc() {
    const w = window as any;
    if (w.showOpenFilePicker) {
        try {
            const [h] = await w.showOpenFilePicker({ types: [{ description: 'GameCube disc image', accept: { 'application/octet-stream': ['.iso', '.gcm'] } }] });
            const file = await h.getFile();
            await useDisc(await openDisc(file));
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

// ---------------------------------------------------------------- the stage
function fillStagePicker() {
    const sel = $<HTMLSelectElement>('stage');
    sel.textContent = '';
    stageTable.forEach((eps, area) => {
        const seen = new Set<string>();
        const names = eps.filter((s) => s && s !== 'none' && !seen.has(s) && seen.add(s) && fs!.has(`data/scene/${s}.szs`));
        if (!names.length) return;
        const og = document.createElement('optgroup');
        og.label = WORLD_NAMES[area] || `Area ${area}`;
        for (const s of names) { const o = document.createElement('option'); o.value = s; o.textContent = s; og.append(o); }
        sel.append(og);
    });
    sel.value = stageName;
}

async function loadStage(name: string) {
    if (!fs || name === stageName || name === stageLoading) return;
    if (!fs.has(`data/scene/${name}.szs`)) { showError(new Error(`${name}.szs isn't on this disc.`)); return; }
    stageLoading = name;
    $('status').textContent = `Loading ${name}…`;
    try {
        const buf = await fs.read(`data/scene/${name}.szs`);
        const context: any = { device, dataFetcher: { fetchData: async () => new ArrayBufferSlice(buf) } };
        const r = await new SunshineSceneDesc(name, name).createScene(device, context) as SunshineRenderer;
        if (stageLoading !== name) { r.destroy(device); return; }
        if (renderer) destroyStage();
        renderer = r;
        stageName = name;
        triggers = buildTriggers(r.rarc);
        playerSun = findLight(r, '太陽（プレイヤー）');
        objectSun = findLight(r, '太陽（オブジェクト）');
        r.beforePrepare = (vi) => { poseGhosts(); if (actorParts.length) updateActorParts(actorParts, vi.time); };
        const cache = r.renderHelper.renderInstManager.gfxRenderCache;
        const actors = buildActors(device, cache, r.rarc);
        const oa = r.objectAmbient;
        if (oa) for (const a of actors) a.modelMaterialData.materialData?.forEach((md: any) => { md.material.colorAmbRegs[0] = { r: oa.r / 255, g: oa.g / 255, b: oa.b / 255, a: oa.a / 255 }; });
        for (const a of actors) (a as any).isPlayer = true;   // (lit by the viewer, not noclip's object light)
        actorModels = actors;
        r.modelInstances.push(...actors);
        for (const g of ghosts) attachMario(g);
        $<HTMLSelectElement>('stage').value = name;
        if (!ghosts.length || camMode === 'free') frameStage();
        $('status').textContent = '';
    } catch (e) { showError(e); $('status').textContent = ''; }
    finally { if (stageLoading === name) stageLoading = ''; }
}

function destroyStage() {
    if (!renderer) return;
    for (const g of ghosts) g.mario = null;
    renderer.destroy(device);
    renderer = null;
}

function attachMario(g: Ghost) {
    if (!renderer || !marioArc) return;
    const cache = renderer.renderHelper.renderInstManager.gfxRenderCache;
    const m = new MarioModel(device, cache, marioArc);
    const amb = renderer.playerAmbient;
    if (amb) for (const inst of m.all) inst.modelMaterialData.materialData?.forEach((md: any) => { md.material.colorAmbRegs[0] = { r: amb.r / 255, g: amb.g / 255, b: amb.b / 255, a: amb.a / 255 }; });
    swapTextures(device, cache, renderer.rarc, m.all);
    renderer.modelInstances.push(...m.all);
    g.mario = m;
}

function frameStage() {
    // As the game starts: behind Mario at his start, facing the way he faces; else from above.
    const p = renderer ? marioStart(renderer.rarc) : null;
    if (p) { const r = (p[3] * Math.PI) / 180; setCameraLook([p[0] - Math.sin(r) * 1100, p[1] + 420, p[2] - Math.cos(r) * 1100], [p[0], p[1] + 120, p[2]]); }
    else setCameraLook([0, 6000, 8000], [0, 0, 0]);
}

function setCameraLook(eye: number[], at: number[]) {
    mat4.targetTo(camera.worldMatrix, eye as any, at as any, [0, 1, 0]);
    camera.worldMatrixUpdated();
}

// ---------------------------------------------------------------- ghosts
async function addGhostFiles(files: FileList | File[]) {
    for (const f of Array.from(files)) {
        try {
            const data = parseSmsGhost(await f.arrayBuffer());
            const g: Ghost = { data, fileName: f.name, color: COLORS[ghosts.length % COLORS.length], visible: true, mario: null };
            ghosts.push(g);
            attachMario(g);
            for (const w of data.warnings) console.warn(f.name, w);
        } catch (e) { showError(new Error(`${f.name}: ${(e as any).message}`)); }
    }
    if (!lead) lead = ghosts[0] || null;
    renderGhostList();
    followLeadStage();
    update();
}

function duration() { return Math.max(0, ...ghosts.map((g) => g.data.header.durationQf)); }

function leadRoute() {
    if (!lead) return null;
    const s = ghostSampleAt(lead.data, t);
    const k = s.gap ? Math.min(s.i + 1, lead.data.segIndex.length - 1) : s.i;
    const seg = lead.data.segments[lead.data.segIndex[k]];
    return seg ? seg.route : null;
}

// The stage follows the leading ghost: when it goes into another area, that area's scene loads.
function followLeadStage() {
    if (!fs || !$<HTMLInputElement>('optAuto').checked) return;
    const r = leadRoute();
    if (!r) return;
    const s = sceneForRoute(stageTable, r.area, r.episode);
    if (s && s !== stageName) loadStage(s);
}

function ghostOnStage(g: Ghost, time: number) {
    const s = ghostSampleAt(g.data, time);
    const seg = g.data.segments[g.data.segIndex[s.i]];
    return !!seg && sceneForRoute(stageTable, seg.route.area, seg.route.episode) === stageName;
}

let playerSun: any = null, objectSun: any = null, actorModels: any[] = [];
function findLight(r: SunshineRenderer, name: string) {
    let found: any = null;
    const walk = (o: any) => { if (found) return; if (o.type === 'Group') o.children.forEach(walk); else if (o.type === 'Light' && o.name === name) found = o; };
    if (r.sceneBin) walk(r.sceneBin);
    return found;
}

function poseGhosts() {
    if (renderer && playerSun) setPlayerLights(ghosts.flatMap((g) => g.mario ? g.mario.all : []), playerSun, camera.viewMatrix);
    if (renderer && objectSun) {   // TLightCommon::setLight, the object group
        setPlayerLights(actorModels, objectSun, camera.viewMatrix);
        // TODO: with GXInitLightShininess(50)'s attenuation and the diffuse function these
        // characters' specular channel has, the GX lighting model (as Dolphin and noclip run it)
        // washes them out white; the game doesn't look like that, so something about how their
        // specular light is set is still missing. Left off for now.
        for (const m of actorModels) { const l = m.getGXLightReference(2); l.Color.r = l.Color.g = l.Color.b = 0; }
    }
    for (const g of ghosts) {
        const m = g.mario;
        if (!m) continue;
        const on = g.visible && ghostOnStage(g, t) && t <= g.data.header.durationQf;
        m.setVisible(on);
        if (!on) continue;
        const s = ghostSampleAt(g.data, t), a = ghostAnimAt(g.data, t), fl = ghostFluddAt(g.data, t);
        const noz = fl && fl.present ? ({ 0: 'normal_wg', 1: 'rocket_wg', 4: 'hover_wg', 5: 'back_wg' } as Record<number, string>)[fl.nozzle] || 'normal_wg' : (fl ? null : 'normal_wg');
        m.pose(s.x, s.y, s.z, s.yaw, a.id, !!a.yoshi, a.phase, a.yoshi ? null : noz);
        m.calcParts();
    }
}

function renderGhostList() {
    const box = $('ghostList');
    box.textContent = '';
    for (const g of ghosts) {
        const row = document.createElement('div');
        row.className = 'ghostRow' + (g === lead ? ' lead' : '');
        const sw = document.createElement('input');
        sw.type = 'checkbox'; sw.checked = g.visible; sw.title = 'Show this ghost';
        sw.style.accentColor = g.color;
        sw.onchange = () => { g.visible = sw.checked; };
        const name = document.createElement('button');
        name.className = 'ghostName';
        name.title = 'Follow this ghost';
        const h = g.data.header;
        name.innerHTML = `<span class="sw" style="background:${g.color}"></span>`;
        name.append(`${h.name || g.fileName}`);
        const meta = document.createElement('span');
        meta.className = 'meta';
        meta.textContent = `${h.routeLabel} · ${ghostFormatTime(h.durationQf)}${h.author ? ' · ' + h.author : ''}`;
        name.append(meta);
        name.onclick = () => { lead = g; renderGhostList(); followLeadStage(); update(); };
        const rm = document.createElement('button');
        rm.className = 'rm'; rm.textContent = '×'; rm.title = 'Remove this ghost';
        rm.onclick = () => {
            ghosts.splice(ghosts.indexOf(g), 1);
            if (g.mario && renderer) renderer.modelInstances = renderer.modelInstances.filter((x) => !g.mario!.all.includes(x));
            if (lead === g) lead = ghosts[0] || null;
            renderGhostList(); update();
        };
        row.append(sw, name, rm);
        box.append(row);
    }
    $('ghostHint').hidden = ghosts.length > 0;
}

// ---------------------------------------------------------------- camera
const follow = { yaw: 0, pitch: 0.32, dist: 1100, userUntil: 0, pos: vec3.create(), have: false };
let dragging = false, lastX = 0, lastY = 0;
canvas.addEventListener('pointerdown', (e) => { if (camMode !== 'follow') return; dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    follow.yaw -= (e.clientX - lastX) * 0.006; follow.pitch = Math.max(-1.2, Math.min(1.45, follow.pitch + (e.clientY - lastY) * 0.005));
    lastX = e.clientX; lastY = e.clientY; follow.userUntil = performance.now() + 1500;
});
canvas.addEventListener('pointerup', () => { dragging = false; });
canvas.addEventListener('wheel', (e) => { if (camMode !== 'follow') return; follow.dist = Math.max(200, Math.min(8000, follow.dist * Math.exp(e.deltaY * 0.001))); follow.userUntil = performance.now() + 1500; e.preventDefault(); }, { passive: false });

const _q = quat.create(), _p = vec3.create();
function updateCamera(dt: number) {
    const aspect = canvas.width / Math.max(1, canvas.height);
    let fov = 50;
    if (camMode === 'free') {
        fps.update(input, dt, 1);
    } else if (lead) {
        const s = ghostSampleAt(lead.data, t);
        const rec = s.gap ? null : ghostCameraAt(lead.data, t, lead.data.segIndex[s.i]);
        const userOn = dragging || performance.now() < follow.userUntil;
        if (rec && !userOn && $<HTMLInputElement>('optRecCam').checked) {
            // Moonshine V8: the game's own camera, as the run was seen.
            quat.set(_q, -rec.quat[0], -rec.quat[1], -rec.quat[2], rec.quat[3]);
            mat4.fromRotationTranslation(camera.worldMatrix, _q, rec.pos as any);
            camera.worldMatrixUpdated();
            fov = rec.fov;
            // Hand over to the follow camera from here if the user drags.
            const d = vec3.sub(_p, rec.pos as any, [s.x, s.y + 100, s.z]);
            follow.dist = Math.max(200, vec3.length(d));
            follow.yaw = Math.atan2(d[0], d[2]);
            follow.pitch = Math.asin(Math.max(-1, Math.min(1, d[1] / follow.dist)));
        } else {
            if (!userOn) {   // behind him, turning with him (slowly)
                const want = (s.yaw / 32768) * Math.PI + Math.PI;
                let dy = want - follow.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
                follow.yaw += dy * Math.min(1, dt / 1000 * 2.5);
            }
            const tx = s.x, ty = s.y + 120, tz = s.z;
            const eye = [tx + Math.sin(follow.yaw) * Math.cos(follow.pitch) * follow.dist, ty + Math.sin(follow.pitch) * follow.dist, tz + Math.cos(follow.yaw) * Math.cos(follow.pitch) * follow.dist];
            setCameraLook(eye, [tx, ty, tz]);
        }
    }
    camera.fovY = (fov * Math.PI) / 180;
    camera.aspect = aspect;
    camera.setClipPlanes(10, 300000);
}

function setCamMode(m: 'follow' | 'free') {
    camMode = m;
    $('camFollow').setAttribute('aria-pressed', String(m === 'follow'));
    $('camFree').setAttribute('aria-pressed', String(m === 'free'));
}

// ---------------------------------------------------------------- playback
let lastFrame = performance.now();
function setPlaying(on: boolean) {
    playing = on && ghosts.length > 0;
    $('play').textContent = playing ? 'Pause' : 'Play';
}
function seek(q: number) { t = Math.max(0, Math.min(duration(), q)); update(); }

function update() {
    const d = duration();
    const sc = $<HTMLInputElement>('scrub');
    sc.max = String(Math.max(1, Math.round(d)));
    sc.value = String(Math.round(t));
    $('clock').textContent = `${ghostFormatTime(Math.round(t))} / ${ghostFormatTime(Math.round(d))}`;
    drawSplitTicks();
    updateSplitTable();
    followLeadStage();
    hud.update(lead, t);
    const r = leadRoute();
    $('where').textContent = r ? `${ghostRouteLabel(r)} · ${stageName}` : stageName;
}

function frame(now: number) {
    const dt = Math.min(100, now - lastFrame);
    lastFrame = now;
    if (playing) {
        t += (dt / 1000) * QF_PER_SECOND * speed;
        if (t >= duration()) { t = duration(); setPlaying(false); }
        update();
    }
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    updateCamera(dt);
    if (renderer) {
        viewerInput.time = now;
        viewerInput.deltaTime = dt;
        viewerInput.backbufferWidth = w;
        viewerInput.backbufferHeight = h;
        swapChain.configureSwapChain(w, h);
        device.beginFrame();
        viewerInput.onscreenTexture = swapChain.getOnscreenTexture();
        renderer.render(device, viewerInput);
        device.endFrame();
    }
    drawTriggers($<HTMLCanvasElement>('overlay'), camera, $<HTMLInputElement>('optTriggers').checked ? triggers : []);
    input.afterFrame();
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
    const cur = lead!.data.splits.filter((x: any) => x.qf <= t).length;
    const key = G.list.map((g) => g.fileName).join('|') + '|' + cur;
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
        tr.onclick = () => { setPlaying(false); if (ref) seek(ref.qf); };
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
$<HTMLSelectElement>('stage').onchange = (e) => { $<HTMLInputElement>('optAuto').checked = false; loadStage((e.target as HTMLSelectElement).value); };
$('play').onclick = () => { if (!playing && t >= duration()) t = 0; setPlaying(!playing); };
$('back').onclick = () => { setPlaying(false); seek(Math.round(t / QF_PER_FRAME) * QF_PER_FRAME - QF_PER_FRAME); };
$('fwd').onclick = () => { setPlaying(false); seek(Math.round(t / QF_PER_FRAME) * QF_PER_FRAME + QF_PER_FRAME); };
$<HTMLInputElement>('scrub').oninput = (e) => { setPlaying(false); seek(Number((e.target as HTMLInputElement).value)); };
$<HTMLSelectElement>('speed').onchange = (e) => { speed = Number((e.target as HTMLSelectElement).value); };
$('camFollow').onclick = () => setCamMode('follow');
$('camFree').onclick = () => { mat4.copy((fps as any).camera.worldMatrix, camera.worldMatrix); setCamMode('free'); };
$<HTMLInputElement>('optAuto').onchange = () => followLeadStage();
$('errorClose').onclick = () => { $('error').hidden = true; };
$('error').onclick = () => { $('error').hidden = true; };

window.addEventListener('keydown', (e) => {
    if ((e.target as HTMLElement).closest('input, select, textarea')) return;
    if (e.code === 'KeyP' || (e.code === 'Space' && camMode !== 'free')) { e.preventDefault(); $('play').click(); }
    else if (e.code === 'Comma') $('back').click();
    else if (e.code === 'Period') $('fwd').click();
    else if (e.code === 'KeyF') setCamMode(camMode === 'follow' ? 'free' : 'follow');
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
    setCamMode('follow');
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
(window as any).ghostViewer = { get t() { return t; }, seek, addGhostFiles, loadStage, get stage() { return stageName; }, get ghosts() { return ghosts; }, useDiscFile: async (f: File) => useDisc(await openDisc(f)), camera, triggers: () => triggers, setCamMode,
    get renderer() { return renderer; },
    models: () => renderer ? renderer.modelInstances.map((m: any) => [m.name, m.materialInstances.map((x: any) => x.name), [...m.modelMatrix.slice(12, 15)]]) : [],
    look: (eye: number[], at: number[]) => { setCamMode('free'); setCameraLook(eye, at); }, sample: () => lead && ghostSampleAt(lead.data, t) };
