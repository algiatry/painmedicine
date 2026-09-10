/**
 * anatomy-project — flatten BodyParts3D meshes (via ashemag/human-atlas) into
 * SVG outline paths for the anatomy library.
 *
 *   git clone --depth 1 https://github.com/ashemag/human-atlas ../human-atlas
 *   node scripts/anatomy-project.mjs ../human-atlas/public/models reports/pelvis
 *
 * Writes <out>.svg (a labelled preview) and <out>.paths.json (the bone /
 * gluteus-medius / piriformis paths + anchor points) that PelvisPosterior.tsx
 * was generated from. Edit IDS below to project a different view; mesh ids
 * and names live in atlas.json. Posterior view: screen x = -world x.
 *
 * Data: BodyParts3D 4.0, © DBCLS, CC BY 4.0 — keep the attribution.
 */
import fs from 'node:fs';
const ROOT = (process.argv[2] ?? '../human-atlas/public/models').replace(/\/?$/, '/');
const OUT = process.argv[3] ?? 'reports/pelvis';
const atlas = JSON.parse(fs.readFileSync(ROOT + 'atlas.json', 'utf8'));
const chunkCache = {};
function chunk(i) {
  if (!chunkCache[i]) {
    const buf = fs.readFileSync(ROOT + `body-${i}.bin`);
    chunkCache[i] = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }
  return chunkCache[i];
}
const part = (id) => atlas.parts.find((p) => p.id === id);
function mesh(id) {
  const p = part(id);
  const ab = chunk(p.chunk);
  return { p, pos: new Float32Array(ab, p.positions, p.vertexCount * 3), idx: new Uint32Array(ab, p.indices, p.indexCount) };
}
// Posterior orthographic view: screen x = -world x, screen y = -world y.
const IDS = { pelvis: ['FJ3152', 'FJ3288', 'FJ3393'], femur: ['FJ3259', 'FJ3365'], glutmed: ['FJ1419', 'FJ1419M'], pir: ['FJ1428', 'FJ1428M'] };
const all = Object.values(IDS).flat().map(mesh);
let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
for (const m of all) {
  const [b0, b1] = m.p.bounds;
  minx = Math.min(minx, -b1[0]); maxx = Math.max(maxx, -b0[0]);
  miny = Math.min(miny, -b1[1]); maxy = Math.max(maxy, -b0[1]);
}
const cropY = -part('FJ3393').bounds[0][1] + 0.16; // 16 cm below sacrum apex
maxy = Math.min(maxy, cropY);
const PAD = 0.02; minx -= PAD; maxx += PAD; miny -= PAD;
const W = 1000, S = W / (maxx - minx), H = Math.round((maxy - miny) * S);
const px = (x) => (-x - minx) * S, py = (y) => (-y - miny) * S;

function raster(ms) {
  const g = new Uint8Array(W * H);
  for (const m of ms) {
    const { pos, idx } = m;
    for (let t = 0; t < idx.length; t += 3) {
      const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
      const xs = [px(pos[a]), px(pos[b]), px(pos[c])], ys = [py(pos[a + 1]), py(pos[b + 1]), py(pos[c + 1])];
      const y0 = Math.max(0, Math.floor(Math.min(...ys))), y1 = Math.min(H - 1, Math.ceil(Math.max(...ys)));
      for (let y = y0; y <= y1; y++) {
        const cy = y + 0.5; let xl = 1e9, xr = -1e9;
        for (let e = 0; e < 3; e++) {
          const f = (e + 1) % 3, ya = ys[e], yb = ys[f];
          if ((cy >= ya && cy < yb) || (cy >= yb && cy < ya)) {
            const x = xs[e] + ((cy - ya) / (yb - ya)) * (xs[f] - xs[e]);
            xl = Math.min(xl, x); xr = Math.max(xr, x);
          }
        }
        if (xl <= xr) for (let x = Math.max(0, Math.floor(xl)); x <= Math.min(W - 1, Math.ceil(xr)); x++) g[y * W + x] = 1;
      }
    }
  }
  return g;
}
function dilateErode(g, r) { // morphological close to seal mesh seams
  const out = new Uint8Array(W * H), tmp = new Uint8Array(W * H);
  const op = (src, dst, val) => { for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let hit = false; for (let dy = -r; dy <= r && !hit; dy++) for (let dx = -r; dx <= r; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < W && yy < H && src[yy * W + xx] === val) { hit = true; break; } } dst[y * W + x] = hit ? val : 1 - val; } };
  op(g, tmp, 1); op(tmp, out, 0); return out;
}
function contours(g) {
  const at = (x, y) => (x >= 0 && y >= 0 && x < W && y < H ? g[y * W + x] : 0);
  const segs = [];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (!at(x, y)) continue;
    if (!at(x, y - 1)) segs.push([[x, y], [x + 1, y]]);
    if (!at(x + 1, y)) segs.push([[x + 1, y], [x + 1, y + 1]]);
    if (!at(x, y + 1)) segs.push([[x + 1, y + 1], [x, y + 1]]);
    if (!at(x - 1, y)) segs.push([[x, y + 1], [x, y]]);
  }
  const key = (p) => p[0] + ',' + p[1];
  const next = new Map();
  for (const s of segs) { const k = key(s[0]); if (!next.has(k)) next.set(k, []); next.get(k).push(s); }
  const used = new Set(), loops = [];
  for (const s of segs) {
    if (used.has(s)) continue;
    const loop = [s[0]]; let cur = s; used.add(cur);
    for (;;) {
      const cands = (next.get(key(cur[1])) || []).filter((c) => !used.has(c));
      if (!cands.length) break;
      cur = cands[0]; used.add(cur); loop.push(cur[0]);
      if (key(cur[1]) === key(s[0])) break;
    }
    if (loop.length > 40) loops.push(loop);
  }
  return loops;
}
function simplify(pts, eps) {
  const dp = (a, b) => {
    if (b - a < 2) return [];
    let md = 0, mi = -1; const [x1, y1] = pts[a], [x2, y2] = pts[b]; const L = Math.hypot(x2 - x1, y2 - y1) || 1;
    for (let i = a + 1; i < b; i++) { const [x, y] = pts[i]; const d = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1) / L; if (d > md) { md = d; mi = i; } }
    return md > eps ? [...dp(a, mi), mi, ...dp(mi, b)] : [];
  };
  return [0, ...dp(0, pts.length - 1), pts.length - 1].map((i) => pts[i]);
}
function smoothPath(pts) {
  const n = pts.length; let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
}
function pathFor(ids, eps = 2.5, close = 2) {
  let g = raster(ids.map(mesh)); if (close) g = dilateErode(g, close);
  return contours(g).map((l) => smoothPath(simplify(l, eps))).join('');
}
const F = { nerve: '#0d9488', nerveTint: '#ccfbf1', signal: '#f59e0b', signalDark: '#d97706', ink: '#0f172a', text: '#334155', textMid: '#475569', slate: '#94a3b8', slateTint: '#e2e8f0', slateGround: '#f8fafc' };
const bone = pathFor([...IDS.pelvis, ...IDS.femur]);
const glut = pathFor(IDS.glutmed);
const pir = pathFor(IDS.pir, 2, 1);
const cen = (id) => { const p = part(id); return [px((p.bounds[0][0] + p.bounds[1][0]) / 2), py((p.bounds[0][1] + p.bounds[1][1]) / 2)]; };
const rc = cen('FJ1428'), lc = cen('FJ1428M');
// Sciatic nerve is NOT in BodyParts3D 4.0 (its nervous system is cranial only) — drawn schematically:
// emerges below piriformis through the greater sciatic foramen, descends midway between ischial tuberosity and greater trochanter.
const nerve = (c, s) => `M${c[0] + 10 * s} ${c[1] + 20} C${c[0] + 40 * s} ${c[1] + 60} ${c[0] + 70 * s} ${c[1] + 110} ${c[0] + 78 * s} ${c[1] + 180} S${c[0] + 72 * s} ${c[1] + 420} ${c[0] + 66 * s} ${H - 4}`;
const sacTop = py(part('FJ3393').bounds[1][1]);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H + 70}" width="${W}" height="${H + 70}" font-family="ui-sans-serif,system-ui,sans-serif">
<defs><clipPath id="crop"><rect width="${W}" height="${H}"/></clipPath></defs>
<rect width="${W}" height="${H + 70}" fill="#fff"/>
<g clip-path="url(#crop)">
<path d="${bone}" fill="${F.slateTint}" stroke="${F.slate}" stroke-width="1.5" fill-rule="evenodd"/>
<path d="${glut}" fill="${F.slateGround}" fill-opacity=".92" stroke="${F.slate}" stroke-width="1.5" stroke-dasharray="6 5" fill-rule="evenodd"/>
<path d="${nerve(rc, 1)}" fill="none" stroke="${F.signal}" stroke-width="7" stroke-linecap="round"/>
<path d="${nerve(lc, -1)}" fill="none" stroke="${F.signal}" stroke-width="7" stroke-linecap="round" opacity=".35"/>
<path d="${pir}" fill="${F.nerveTint}" stroke="${F.nerve}" stroke-width="2.5" fill-rule="evenodd"/>
</g>
<g font-size="20" fill="${F.text}">
<text x="${rc[0] + 120}" y="${rc[1] - 40}" font-weight="600" fill="${F.nerve}">piriformis</text>
<line x1="${rc[0] + 115}" y1="${rc[1] - 34}" x2="${rc[0] + 30}" y2="${rc[1] - 6}" stroke="${F.nerve}" stroke-width="1.5"/>
<text x="${rc[0] + 40}" y="${rc[1] + 330}" text-anchor="end" font-weight="600" fill="${F.signalDark}">sciatic nerve</text>
<line x1="${rc[0] + 46}" y1="${rc[1] + 324}" x2="${rc[0] + 74}" y2="${rc[1] + 300}" stroke="${F.signalDark}" stroke-width="1.5"/>
<text x="${W / 2}" y="${sacTop - 12}" text-anchor="middle" fill="${F.textMid}">sacrum</text>
<text x="${lc[0] - 40}" y="${lc[1] - 190}" text-anchor="middle" fill="${F.textMid}" font-size="17">gluteus medius</text><text x="${lc[0] - 40}" y="${lc[1] - 170}" text-anchor="middle" fill="${F.textMid}" font-size="14">(dashed, overlying)</text>
<text x="30" y="${H + 30}" font-size="15" fill="${F.textMid}">Posterior view; patient's right is on the viewer's right. Bone and muscle outlines projected from BodyParts3D 4.0 (DBCLS, CC BY 4.0).</text>
<text x="30" y="${H + 54}" font-size="15" fill="${F.textMid}">The sciatic nerve is drawn schematically: the dataset carries no peripheral nerves.</text>
</g></svg>`;
fs.writeFileSync(OUT + ".svg", svg);
fs.writeFileSync(OUT + ".paths.json", JSON.stringify({ W, H, bone, glut, pir, rc: rc.map(Math.round), lc: lc.map(Math.round), sacTop: Math.round(sacTop), pirR: [part("FJ1428").bounds[0].map(v=>v), part("FJ1428").bounds[1]], pirRpx: [[px(part("FJ1428").bounds[1][0]), py(part("FJ1428").bounds[1][1])],[px(part("FJ1428").bounds[0][0]), py(part("FJ1428").bounds[0][1])]] }));
console.log('W', W, 'H', H, 'svg KB', (svg.length / 1024).toFixed(0), 'bone', bone.length, 'glut', glut.length, 'pir', pir.length);
