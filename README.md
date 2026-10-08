# Sunshine Ghost Viewer

A 3D viewer for Super Mario Sunshine practice-mod ghosts (Moonshine `.smsghost`, versions 3–6).
Open `site/index.html` from any static web server, then drop ghost files on the stage.

- Stages, objects, NPCs, Mario and FLUDD built from the game's own files (`tools/`).
- Mario animations, FLUDD nozzles and water, carried and thrown objects (springs, fruit,
  Bob-ombs), the Noki Bay Monty Mole cannon, tightropes, pickups, input display.
- Frame-by-frame or Cinematic playback, follow / free / top cameras.

## Layout

| Path | What |
|---|---|
| `site/` | The static site: `index.html`, `ghost.js` (Moonshine format reader), `mario_rig.js`, `mario_anims.js`, and the converted data (`maps/`, `objects/`, `models/`). Binary data is stored as base64 `.b64.txt`. |
| `tools/` | Python converters: GameCube ISO/RARC/Yaz0, J3D BMD/BCK, scene.bin, collision, objects, NPC tables. |
| `raw/` | Small lookup tables the tools use (stage table, map object table, NPC init data). |
| `test/` | Test inputs. |

## Rebuilding the data from your own ISO

The `site/` data was generated from a retail Super Mario Sunshine disc. To regenerate it, extract
`data/scene/*.szs`, `mario.szs`, `params.szs` and `stageArc.bin` from your ISO, then run, for example:

```
python3 tools/build_all_stages.py ...
python3 tools/build_mario_iso.py <mario.szs> site/models --b64
python3 tools/build_objects.py <scene_dir> raw/stage_table.json raw/mapobj_table.json site
python3 tools/build_collision.py <scene_dir> site
```

`raw/npc_init.json` comes from the sms decompilation (`tools/npc_init_data.py src/NPC/NpcInitData.cpp`).

Game data (models, textures, stages) belongs to Nintendo and is included for the speedrunning community's use.
