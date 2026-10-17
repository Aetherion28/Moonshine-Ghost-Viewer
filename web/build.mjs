// Bundles the v2 viewer (src/main.ts) into ../site/app.js. node build.mjs [--watch]
import * as esbuild from 'esbuild';
import path from 'node:path';

const here = path.dirname(new URL(import.meta.url).pathname);
// noclip modules this viewer doesn't use, replaced by small stubs.
const STUB = { 'Studio.js': 'Studio.ts', 'DebugFloaters.js': 'DebugFloaters.ts', 'ui.js': 'ui.ts', 'SaveManager.js': 'SaveManager.ts' };
const stubs = {
  name: 'stubs',
  setup(b) {
    b.onResolve({ filter: /(Studio|DebugFloaters|ui|SaveManager)\.js$/ }, (a) => {
      const base = path.basename(a.path);
      if (!a.importer.includes(`${path.sep}noclip${path.sep}`) || !STUB[base]) return;
      return { path: path.join(here, 'stubs', STUB[base]) };
    });
  },
};
const opts = {
  entryPoints: [path.join(here, 'src/main.ts')], bundle: true, format: 'esm', target: 'es2022',
  outfile: path.join(here, '../site/app.js'), sourcemap: true, minify: !process.argv.includes('--dev'),
  plugins: [stubs], logLevel: 'warning', metafile: true, define: { 'process.env.NODE_ENV': '"production"' },
};
import fs from 'node:fs';
fs.copyFileSync(path.join(here, 'index.html'), path.join(here, '../site/index.html'));
if (process.argv.includes('--watch')) await (await esbuild.context(opts)).watch();
else {
  const r = await esbuild.build(opts);
  if (process.argv.includes('--meta')) fs.writeFileSync(path.join(here, 'meta.json'), JSON.stringify(r.metafile));
}
