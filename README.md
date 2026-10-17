# Moonshine Ghost Viewer v2

Super Mario Sunshine practice-mod ghosts (Moonshine `.smsghost`, versions 3–8) played in the game's
own stages. v2 reads the stages from the player's own copy of the game, in the browser, and draws
them with the game's own model and material code: the J3D / GX rendering of
[noclip.website](https://github.com/magcius/noclip.website) (MIT, see `web/noclip/`), a port of
what Sunshine runs. The site hosts no game data.

Live at https://aetherion28.github.io/Moonshine-Ghost-Viewer/v2/ (v1, which needs no disc, stays
at the site's root, built from `main`).

- **The disc**: a GameCube disc image (`.iso` / `.gcm`, any region) or a folder Dolphin extracted
  it to. Read with the browser's file APIs (`web/src/disc.ts`); Chrome and Edge can reopen it on
  the next visit. RVZ / WIA / NKit images need converting to ISO first.
- **Stages**: the stage table from `stageArc.bin`, each stage's scene archive drawn by noclip's
  Sunshine loader (map, sky, sea, map objects), plus the stage's characters (NPCs with their colours
  and parts, enemies, animals) on their idle animations (`web/src/actors.ts`).
- **Ghosts**: Mario from `mario.szs`, posed by the game's BCKs, with the hands, cap, FLUDD and nozzle
  the game hangs on him and his own lights (`TLightMario::setLight`); Yoshi under a ghost that rides
  him. The stage follows the ghost from area to area.
- **Viewing**: the recorded V8 camera, a follow camera, free flight; the timeline with split dots, the
  splits table, a comparison view (two ghosts side by side, each in its own stage, lined up on a
  split), the controller inputs, and the invisible triggers (load zones, cutscene and warp triggers,
  area cylinders, the stage's cubes, enemies' own zones).

Not yet in v2 from v1: the game logic v1 runs on what the ghost did (Gooper Blooper, the Chain Chomp,
Shines coming out, the Monty Mole cannon), FLUDD's water and particles, walking NPCs, pickups
disappearing. The plan is to rebuild that logic from the decomp.

## Building

```
cd web
npm install
node build.mjs          # site/app.js (minified); --dev for an unminified build
```

`web/src` is the viewer, `web/noclip` the noclip.website code it uses (see its README for what
changed), `web/stubs` stand-ins for the noclip parts it doesn't. `site/` is what's published.
