// One view of the game world: its own canvas and graphics device, the stage it has loaded (the
// one its ghost is in), the models of every ghost on that stage, and its camera. The comparison
// view is a second one, following another ghost at its own time.

import { mat4, quat, vec3 } from 'gl-matrix';
import ArrayBufferSlice from '../noclip/ArrayBufferSlice.js';
import { Camera, FPSCameraController } from '../noclip/Camera.js';
import * as RARC from '../noclip/Common/JSYSTEM/JKRArchive.js';
import { AntialiasingMode } from '../noclip/gfx/helpers/RenderGraphHelpers.js';
import { createSwapChainForWebGL2, GfxPlatformWebGL2Config } from '../noclip/gfx/platform/GfxPlatformWebGL2.js';
import { GfxDevice, GfxSwapChain } from '../noclip/gfx/platform/GfxPlatform.js';
import InputManager from '../noclip/InputManager.js';
import { J3DModelInstanceSimple } from '../noclip/Common/JSYSTEM/J3D/J3DGraphSimple.js';
import { GameFS } from './disc.js';
import { sceneForRoute } from './stagearc.js';
import { SunshineRenderer, SunshineSceneDesc } from './sms_scene.js';
import { MarioModel, YoshiModel, setPlayerLights } from './mario.js';
import { MARIO_BCK_FILES } from './mario_anims.js';
import { ghostSampleAt, ghostAnimAt, ghostFluddAt, ghostCameraAt, ghostYoshiAt } from './ghost.js';
import { buildTriggers, marioStart, Trigger } from './triggers.js';
import { drawTriggers } from './overlay.js';
import { buildActors, ActorPart, updateActorParts, swapTextures } from './actors.js';

export interface Ghost {
    data: any;
    fileName: string;
    color: string;
    visible: boolean;
}

/** What every view shares: the disc and its tables, the ghosts, the options. */
export interface Shared {
    fs: GameFS | null;
    stageTable: string[][];
    marioArc: RARC.JKRArchive | null;
    yoshiArc: RARC.JKRArchive | null;
    ghosts: Ghost[];
    opt: { recCam: boolean, triggers: boolean, auto: boolean };
    onError(e: any): void;
    onStatus(view: View, text: string): void;
    onStage(view: View): void;
}

const NOZZLE: Record<number, string> = { 0: 'normal_wg', 1: 'rocket_wg', 4: 'hover_wg', 5: 'back_wg' };
const _q = quat.create(), _p = vec3.create();

export class View {
    public device: GfxDevice;
    private swapChain: GfxSwapChain;
    public camera = new Camera();
    private input: InputManager;
    private fps = new FPSCameraController();
    private viewerInput: any;
    public renderer: SunshineRenderer | null = null;
    public stageName = '';
    private stageLoading = '';
    public triggers: Trigger[] = [];
    private playerSun: any = null;
    private objectSun: any = null;
    private actorModels: J3DModelInstanceSimple[] = [];
    private actorParts: ActorPart[] = [];
    private models = new Map<Ghost, { mario: MarioModel, yoshi: YoshiModel | null }>();
    /** The ghost this view follows (its stage, its camera). */
    public lead: Ghost | null = null;
    /** This view's time, QF from the ghosts' start. */
    public t = 0;
    public camMode: 'follow' | 'free' = 'follow';
    private follow = { yaw: 0, pitch: 0.32, dist: 1100, userUntil: 0 };
    private dragging = false;
    public autoStage = true;

    constructor(public canvas: HTMLCanvasElement, public overlay: HTMLCanvasElement, private shared: Shared) {
        const gl = canvas.getContext('webgl2', { antialias: false, preserveDrawingBuffer: false, depth: false, stencil: false });
        if (!gl) throw new Error('This browser has no WebGL 2.');
        this.swapChain = createSwapChainForWebGL2(gl, new GfxPlatformWebGL2Config());
        this.device = this.swapChain.getDevice();
        (this.camera as any).clipSpaceNearZ = this.device.queryVendorInfo().clipSpaceNearZ;
        this.input = new InputManager(canvas);
        this.fps.camera = this.camera;
        this.viewerInput = {
            camera: this.camera, time: 0, deltaTime: 0, backbufferWidth: 1, backbufferHeight: 1, onscreenTexture: null,
            antialiasingMode: AntialiasingMode.FXAA, mouseLocation: { mouseX: -1, mouseY: -1 }, debugConsole: { addInfoLine() { } },
        };
        // Follow camera: drag to look round the ghost, scroll to zoom; it swings back when let go.
        let lx = 0, ly = 0;
        canvas.addEventListener('pointerdown', (e) => { if (this.camMode !== 'follow') return; this.dragging = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); });
        canvas.addEventListener('pointermove', (e) => {
            if (!this.dragging) return;
            const f = this.follow;
            f.yaw -= (e.clientX - lx) * 0.006; f.pitch = Math.max(-1.2, Math.min(1.45, f.pitch + (e.clientY - ly) * 0.005));
            lx = e.clientX; ly = e.clientY; f.userUntil = performance.now() + 1500;
        });
        canvas.addEventListener('pointerup', () => { this.dragging = false; });
        canvas.addEventListener('wheel', (e) => {
            if (this.camMode !== 'follow') return;
            const f = this.follow;
            f.dist = Math.max(200, Math.min(8000, f.dist * Math.exp(e.deltaY * 0.001))); f.userUntil = performance.now() + 1500;
            e.preventDefault();
        }, { passive: false });
    }

    // ------------------------------------------------------------ stage
    public leadRoute() {
        const g = this.lead;
        if (!g) return null;
        const s = ghostSampleAt(g.data, this.t);
        // In the gap between two segments Mario has touched the load zone: load the next area.
        const k = s.gap ? Math.min(s.i + 1, g.data.segIndex.length - 1) : s.i;
        const seg = g.data.segments[g.data.segIndex[k]];
        return seg ? seg.route : null;
    }

    /** Load the stage the lead ghost is in now, if the view follows it there. */
    public followStage() {
        const sh = this.shared;
        if (!sh.fs || !this.autoStage) return;
        const r = this.leadRoute();
        if (!r) return;
        const s = sceneForRoute(sh.stageTable, r.area, r.episode);
        if (s && s !== this.stageName) this.loadStage(s);
    }

    public async loadStage(name: string) {
        const sh = this.shared, fs = sh.fs;
        if (!fs || name === this.stageName || name === this.stageLoading) return;
        if (!fs.has(`data/scene/${name}.szs`)) { sh.onError(new Error(`${name}.szs isn't on this disc.`)); return; }
        this.stageLoading = name;
        sh.onStatus(this, `Loading ${name}…`);
        try {
            const buf = await fs.read(`data/scene/${name}.szs`);
            const device = this.device;
            const context: any = { device, dataFetcher: { fetchData: async () => new ArrayBufferSlice(buf) } };
            const r = await new SunshineSceneDesc(name, name).createScene(device, context) as SunshineRenderer;
            if (this.stageLoading !== name) { r.destroy(device); return; }
            this.destroyStage();
            this.renderer = r;
            this.stageName = name;
            this.triggers = buildTriggers(r.rarc);
            this.playerSun = findLight(r, '太陽（プレイヤー）');
            this.objectSun = findLight(r, '太陽（オブジェクト）');
            r.beforePrepare = (vi) => { this.poseGhosts(); if (this.actorParts.length) updateActorParts(this.actorParts, vi.time); };
            const cache = r.renderHelper.renderInstManager.gfxRenderCache;
            const parts: ActorPart[] = [];
            const actors = buildActors(device, cache, r.rarc, parts);
            setAmbient(actors, r.objectAmbient);
            for (const a of actors) (a as any).isPlayer = true;   // (lit by the viewer, not noclip's object light)
            this.actorModels = actors;
            this.actorParts = parts;
            r.modelInstances.push(...actors);
            for (const g of sh.ghosts) this.attach(g);
            if (!this.lead || this.camMode === 'free') this.frameStage();
            sh.onStage(this);
        } catch (e) { sh.onError(e); }
        finally { if (this.stageLoading === name) this.stageLoading = ''; sh.onStatus(this, ''); }
    }

    private destroyStage() {
        if (!this.renderer) return;
        this.models.clear();
        this.renderer.destroy(this.device);
        this.renderer = null;
        this.actorModels = []; this.actorParts = [];
    }

    /** Make a ghost's Mario (and Yoshi, if it rides him) for this view's stage. */
    public attach(g: Ghost) {
        const sh = this.shared, r = this.renderer;
        if (!r || !sh.marioArc || this.models.has(g)) return;
        const cache = r.renderHelper.renderInstManager.gfxRenderCache;
        const mario = new MarioModel(this.device, cache, sh.marioArc);
        setAmbient(mario.all, r.playerAmbient);
        swapTextures(this.device, cache, r.rarc, mario.all);
        r.modelInstances.push(...mario.all);
        let yoshi: YoshiModel | null = null;
        if (sh.yoshiArc && g.data.yoshi && g.data.yoshi.some((v: number) => v)) {
            yoshi = new YoshiModel(this.device, cache, sh.yoshiArc);
            setAmbient([yoshi.body], r.playerAmbient);
            r.modelInstances.push(yoshi.body);
        }
        this.models.set(g, { mario, yoshi });
    }

    public detach(g: Ghost) {
        const m = this.models.get(g);
        if (!m || !this.renderer) return;
        const drop = new Set<any>([...m.mario.all, ...(m.yoshi ? [m.yoshi.body] : [])]);
        this.renderer.modelInstances = this.renderer.modelInstances.filter((x) => !drop.has(x));
        this.models.delete(g);
    }

    public frameStage() {
        // As the game starts: behind Mario at his start, facing the way he faces; else from above.
        const p = this.renderer ? marioStart(this.renderer.rarc) : null;
        if (p) { const r = (p[3] * Math.PI) / 180; this.look([p[0] - Math.sin(r) * 1100, p[1] + 420, p[2] - Math.cos(r) * 1100], [p[0], p[1] + 120, p[2]]); }
        else this.look([0, 6000, 8000], [0, 0, 0]);
    }

    public look(eye: number[], at: number[]) {
        mat4.targetTo(this.camera.worldMatrix, eye as any, at as any, [0, 1, 0]);
        this.camera.worldMatrixUpdated();
    }

    // ------------------------------------------------------------ ghosts
    private onStage(g: Ghost, time: number) {
        const s = ghostSampleAt(g.data, time);
        const seg = g.data.segments[g.data.segIndex[s.i]];
        return !!seg && sceneForRoute(this.shared.stageTable, seg.route.area, seg.route.episode) === this.stageName;
    }

    private poseGhosts() {
        const vm = this.camera.viewMatrix, t = this.t;
        if (this.playerSun) setPlayerLights([...this.models.values()].flatMap((m) => [...m.mario.all, ...(m.yoshi ? [m.yoshi.body] : [])]), this.playerSun, vm);
        if (this.objectSun) {   // TLightCommon::setLight, the object group
            setPlayerLights(this.actorModels, this.objectSun, vm);
            // TODO: with GXInitLightShininess(50)'s attenuation and the diffuse function these
            // characters' specular channel has, the GX lighting model (as Dolphin and noclip run it)
            // washes them out white; the game doesn't look like that, so something about how their
            // specular light is set is still missing. Left off for now.
            for (const m of this.actorModels) { const l = m.getGXLightReference(2); l.Color.r = l.Color.g = l.Color.b = 0; }
        }
        for (const [g, { mario, yoshi }] of this.models) {
            const on = g.visible && t <= g.data.header.durationQf && this.onStage(g, t);
            mario.setVisible(on);
            if (yoshi) yoshi.body.visible = false;
            if (!on) continue;
            const s = ghostSampleAt(g.data, t), a = ghostAnimAt(g.data, t), fl = ghostFluddAt(g.data, t);
            // FLUDD and the nozzle out (V6+ record it; older ghosts: always the spray nozzle).
            const noz = fl ? (fl.present ? NOZZLE[fl.nozzle] || 'normal_wg' : null) : 'normal_wg';
            mario.pose(s.x, s.y, s.z, s.yaw, a.id, !!a.yoshi, a.phase, a.yoshi ? null : noz);
            mario.calcParts();
            if (yoshi) {
                // Riding Yoshi (the sample's Yoshi type, 1..4): V7 records his own animation and frame;
                // older ghosts get the rider animation's counterpart at the same point of its loop.
                const colour = g.data.yoshi ? g.data.yoshi[s.i] : 0;
                yoshi.body.visible = !!colour && !s.gap;
                if (yoshi.body.visible) {
                    const ob = ghostYoshiAt(g.data, t);
                    let k: number, f: number;
                    if (ob) { k = ob.anim; f = ob.frame; }
                    else { k = yoshi.indexForRider(MARIO_BCK_FILES[a.id]); f = (a.phase / 4096) * yoshi.duration(k); }
                    yoshi.pose(s.x, s.y, s.z, s.yaw, colour, k, f);
                }
            }
        }
    }

    // ------------------------------------------------------------ camera
    public setCamMode(m: 'follow' | 'free') {
        if (m === 'free') mat4.copy(this.fps.camera.worldMatrix, this.camera.worldMatrix);
        this.camMode = m;
    }

    private updateCamera(dt: number) {
        const cam = this.camera, f = this.follow;
        let fov = 50;
        if (this.camMode === 'free') {
            this.fps.update(this.input, dt, 1);
        } else if (this.lead) {
            const d = this.lead.data, s = ghostSampleAt(d, this.t);
            const rec = s.gap ? null : ghostCameraAt(d, this.t, d.segIndex[s.i]);
            const userOn = this.dragging || performance.now() < f.userUntil;
            if (rec && !userOn && this.shared.opt.recCam) {
                // Moonshine V8: the game's own camera, as the run was seen.
                quat.set(_q, -rec.quat[0], -rec.quat[1], -rec.quat[2], rec.quat[3]);
                mat4.fromRotationTranslation(cam.worldMatrix, _q, rec.pos as any);
                cam.worldMatrixUpdated();
                fov = rec.fov;
                // A drag takes over from here: orbit round him from where the recording looks.
                const v = vec3.sub(_p, rec.pos as any, [s.x, s.y + 120, s.z]);
                f.dist = Math.max(200, vec3.length(v));
                f.yaw = Math.atan2(v[0], v[2]);
                f.pitch = Math.asin(Math.max(-1, Math.min(1, v[1] / f.dist)));
            } else {
                if (!userOn) {   // behind him, turning with him (slowly)
                    const want = (s.yaw / 32768) * Math.PI + Math.PI;
                    let dy = want - f.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
                    f.yaw += dy * Math.min(1, (dt / 1000) * 2.5);
                }
                const tx = s.x, ty = s.y + 120, tz = s.z;
                this.look([tx + Math.sin(f.yaw) * Math.cos(f.pitch) * f.dist, ty + Math.sin(f.pitch) * f.dist, tz + Math.cos(f.yaw) * Math.cos(f.pitch) * f.dist], [tx, ty, tz]);
            }
        }
        cam.fovY = (fov * Math.PI) / 180;
        cam.aspect = this.canvas.width / Math.max(1, this.canvas.height);
        cam.setClipPlanes(10, 300000);
    }

    // ------------------------------------------------------------ drawing
    public frame(now: number, dt: number) {
        const canvas = this.canvas;
        if (!canvas.clientWidth || !canvas.clientHeight) return;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const w = Math.max(1, Math.round(canvas.clientWidth * dpr)), h = Math.max(1, Math.round(canvas.clientHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
        this.updateCamera(dt);
        const vi = this.viewerInput;
        if (this.renderer) {
            vi.time = now; vi.deltaTime = dt; vi.backbufferWidth = w; vi.backbufferHeight = h;
            this.swapChain.configureSwapChain(w, h);
            this.device.beginFrame();
            vi.onscreenTexture = this.swapChain.getOnscreenTexture();
            this.renderer.render(this.device, vi);
            this.device.endFrame();
        }
        drawTriggers(this.overlay, this.camera, this.shared.opt.triggers ? this.triggers : []);
        this.input.afterFrame();
    }

    public sample() { return this.lead ? ghostSampleAt(this.lead.data, this.t) : null; }
}

function findLight(r: SunshineRenderer, name: string) {
    let found: any = null;
    const walk = (o: any) => { if (found) return; if (o.type === 'Group') o.children.forEach(walk); else if (o.type === 'Light' && o.name === name) found = o; };
    if (r.sceneBin) walk(r.sceneBin);
    return found;
}

/** GXSetChanAmbColor(GX_COLOR0A0, …): the light group's ambient colour on the models' materials. */
function setAmbient(models: J3DModelInstanceSimple[], amb: { r: number, g: number, b: number, a: number } | null) {
    if (!amb) return;
    for (const m of models)
        m.modelMaterialData.materialData?.forEach((md: any) => { md.material.colorAmbRegs[0] = { r: amb.r / 255, g: amb.g / 255, b: amb.b / 255, a: amb.a / 255 }; });
}
