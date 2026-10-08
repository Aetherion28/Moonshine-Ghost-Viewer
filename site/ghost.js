// Parser for Moonshine .smsghost files (canonical SGHF, versions 3, 4 and 5).
// Spec: moonshine/doc/ghost_format.md. All integers are big endian.

const GHOST_CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function ghostCrc32(bytes, zeroStart = -1, zeroEnd = -1) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    const b = i >= zeroStart && i < zeroEnd ? 0 : bytes[i];
    c = GHOST_CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

const GHOST_AREA_LABELS = {
  0x00: 'AS', 0x01: 'DP', 0x02: 'BH', 0x03: 'RH', 0x04: 'GB',
  0x05: 'PP', 0x06: 'SB', 0x08: 'PV', 0x09: 'NB', 0x34: 'CM', 0x3c: 'BW',
};

function ghostRouteLabel(route) {
  let area = route.area;
  let episode = route.episode;
  if (route.parentArea !== 0xff && route.variant >= 0) {
    area = route.parentArea;
    episode = route.variant;
  }
  const abbr = GHOST_AREA_LABELS[area];
  if (abbr) return abbr + (episode + 1);
  const hex = (v) => v.toString(16).toUpperCase().padStart(2, '0');
  return `A${hex(area)}E${hex(episode)}`;
}

// QF -> seconds. Moonshine's export uses durationQf * 1001 / 120 milliseconds.
function ghostQfToSeconds(qf) {
  return (qf * 1001) / 120000;
}

function ghostFormatTime(qf) {
  const ms = Math.floor((qf * 1001) / 120);
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const frac = String(ms % 1000).padStart(3, '0');
  return m > 0 ? `${m}:${String(s).padStart(2, '0')}.${frac}` : `${s}.${frac}`;
}

function parseSmsGhost(buffer) {
  const bytes = new Uint8Array(buffer);
  const dv = new DataView(buffer);
  const fail = (msg) => { throw new Error(msg); };
  if (bytes.length < 0x100) fail('File is too small to be a Moonshine ghost.');
  const magic = String.fromCharCode(...bytes.subarray(0, 4));
  if (magic !== 'SGHF') fail('Not a Moonshine ghost (missing SGHF header).');
  const version = dv.getUint16(4);
  if (version < 3 || version > 6) fail(`Ghost version ${version} is newer than this viewer supports (3–6). The viewer needs an update for it.`);
  const fileSize = dv.getUint32(8);
  if (fileSize !== bytes.length) fail('Ghost file is truncated or has extra bytes.');

  const warnings = [];
  if (ghostCrc32(bytes, 0x0c, 0x10) !== dv.getUint32(0x0c)) warnings.push('File checksum does not match; the file may be damaged.');

  const text = (off, len) => String.fromCharCode(...bytes.subarray(off, off + len));
  const region = ['JP', 'US', 'PAL'][bytes[0x25]] || '?';
  const route = {
    area: bytes[0x2c], episode: bytes[0x2d], parentArea: bytes[0x2e],
    flags: bytes[0x2f], variant: dv.getInt32(0x30),
  };
  const header = {
    version, region, route,
    routeLabel: ghostRouteLabel(route),
    runFlags: dv.getUint32(0x1c),
    resultQf: dv.getUint32(0x34),
    startQf: dv.getUint32(0x38),
    endQf: dv.getUint32(0x3c),
    durationQf: dv.getUint32(0x40),
    sampleCount: dv.getUint32(0x44),
    created: dv.getUint32(0x4c) * 2 ** 32 + dv.getUint32(0x50),
    author: text(0x60, bytes[0x5c]),
    name: text(0x78, bytes[0x5d]),
    profileName: text(0xa8, bytes[0x5e]),
  };

  const segCount = dv.getUint16(0xb8);
  const segTable = dv.getUint32(0xbc);
  const sampleOff = dv.getUint32(0xc4);
  const sampleSize = dv.getUint32(0xc8);
  if (segCount < 1 || segCount > 64) fail('Ghost has an invalid segment count.');
  if (sampleOff + sampleSize > bytes.length || sampleSize !== header.sampleCount * 16) fail('Ghost sample data is out of bounds.');

  const be24s = (o) => { const v = (bytes[o] << 16) | (bytes[o + 1] << 8) | bytes[o + 2]; return v & 0x800000 ? v - 0x1000000 : v; };
  const be24u = (o) => (bytes[o] << 16) | (bytes[o + 1] << 8) | bytes[o + 2];

  // Flatten every sample onto the ghost's absolute QF timeline.
  const n = header.sampleCount;
  const qf = new Float64Array(n);
  const pos = new Float32Array(n * 3);
  const yaw = new Int16Array(n);
  const anim = new Uint16Array(n);
  const phase = new Uint16Array(n);   // 0..4095: animation frame / length * 4096
  const yoshi = new Uint8Array(n);
  const held = new Uint8Array(n);     // V4+: 1..7 = attachment descriptor, 15 = unknown held actor
  const segIndex = new Uint8Array(n);
  const segments = [];
  for (let s = 0; s < segCount; s++) {
    const o = segTable + s * 0x20;
    const seg = {
      firstSample: dv.getUint32(o), sampleCount: dv.getUint32(o + 4),
      startQf: dv.getUint32(o + 8), endQf: dv.getUint32(o + 12),
      route: { area: bytes[o + 0x14], episode: bytes[o + 0x15], parentArea: bytes[o + 0x16], flags: bytes[o + 0x17], variant: dv.getInt32(o + 0x10) },
    };
    seg.routeLabel = ghostRouteLabel(seg.route);
    if (seg.firstSample + seg.sampleCount > n) fail('Ghost segment table is out of bounds.');
    let t = seg.startQf;
    for (let i = seg.firstSample; i < seg.firstSample + seg.sampleCount; i++) {
      const o2 = sampleOff + i * 16;
      t += i === seg.firstSample ? 0 : dv.getUint16(o2 + 2);
      qf[i] = t - header.startQf;
      yaw[i] = dv.getInt16(o2);
      pos[i * 3] = be24s(o2 + 4) / 8;
      pos[i * 3 + 1] = be24s(o2 + 7) / 8;
      pos[i * 3 + 2] = be24s(o2 + 10) / 8;
      const a = be24u(o2 + 13);
      anim[i] = a >>> 15;
      phase[i] = version >= 4 ? Math.round(((a >>> 7) & 0xff) * 4095 / 255) : (a >>> 3) & 0xfff;
      yoshi[i] = version >= 4 ? (a >>> 4) & 7 : 0;
      held[i] = version >= 4 ? a & 15 : 0;
      segIndex[i] = s;
    }
    segments.push(seg);
  }

  // V5+ append an SGTI section: controller inputs (V5: 16-byte records) and, from V6
  // (section version 2), an 8-byte FLUDD observation after each input (24-byte records).
  // Held-actor identities (V4+): retail actor type and the actor's name hash, which scene.bin
  // also stores, so a held spring or fruit maps to the exact placed object.
  const attachments = [];
  if (version >= 4) {
    for (let k = 0; k < Math.min(bytes[0xd0], 7); k++) {
      const o = 0xd6 + k * 6;
      attachments.push({ objectId: dv.getUint32(o), nameKey: dv.getUint16(o + 4) });
    }
  }

  let inputs = null;
  if (version >= 5) {
    const off = sampleOff + sampleSize;
    if (off + 32 <= bytes.length && text(off, 4) === 'SGTI') {
      const sectionVersion = dv.getUint16(off + 4);
      const headerSize = dv.getUint16(off + 6) || 32;
      const stride = sectionVersion >= 2 ? 24 : 16;
      let count = dv.getUint32(off + 8);
      const maxCount = Math.floor((bytes.length - off - headerSize) / stride);
      if (count > maxCount) { warnings.push('Input data is shorter than its header says; showing what is there.'); count = maxCount; }
      inputs = {
        count, hasFludd: stride === 24,
        qf: new Float64Array(count), buttons: new Uint16Array(count), stick: new Int8Array(count * 2),
        cstick: new Int8Array(count * 2), trig: new Uint8Array(count * 2),
        fluddMode: new Uint8Array(count), fluddOffset: new Float32Array(count * 3),
        fluddYaw: new Float32Array(count), fluddPitch: new Float32Array(count), fluddPower: new Uint8Array(count),
      };
      for (let i = 0; i < count; i++) {
        const r = off + headerSize + i * stride;
        inputs.qf[i] = dv.getUint32(r) - header.startQf;
        inputs.buttons[i] = dv.getUint16(r + 4);
        inputs.stick[i * 2] = dv.getInt8(r + 6);
        inputs.stick[i * 2 + 1] = dv.getInt8(r + 7);
        // Record layout (Moonshine scripts/test_ghost_teaching.py): >I qf, H buttons, b stick x/y,
        // b C-stick x/y, B trigger L/R, B analog A/B, b error, B flags.
        inputs.cstick[i * 2] = dv.getInt8(r + 8);
        inputs.cstick[i * 2 + 1] = dv.getInt8(r + 9);
        inputs.trig[i * 2] = bytes[r + 10];
        inputs.trig[i * 2 + 1] = bytes[r + 11];
        if (stride === 24) {
          const f = r + 16;
          inputs.fluddMode[i] = bytes[f];
          inputs.fluddOffset[i * 3] = dv.getInt8(f + 1) * 2;
          inputs.fluddOffset[i * 3 + 1] = dv.getInt8(f + 2) * 2;
          inputs.fluddOffset[i * 3 + 2] = dv.getInt8(f + 3) * 2;
          // 12-bit unsigned yaw and 12-bit signed pitch, 4096 steps per turn.
          const yaw12 = (bytes[f + 4] << 4) | (bytes[f + 5] >> 4);
          let pitch12 = ((bytes[f + 5] & 15) << 8) | bytes[f + 6];
          if (pitch12 & 2048) pitch12 -= 4096;
          inputs.fluddYaw[i] = (yaw12 / 4096) * Math.PI * 2;
          inputs.fluddPitch[i] = (pitch12 / 4096) * Math.PI * 2;
          inputs.fluddPower[i] = bytes[f + 7];
        }
      }
    }
  }

  return { header, segments, qf, pos, yaw, anim, phase, yoshi, held, attachments, segIndex, inputs, warnings };
}

// Interpolated pose at time t (QF from ghost start). Matches Moonshine's playback:
// linear position, shortest-path yaw, no interpolation across segment gaps.
function ghostSampleAt(g, t) {
  const { qf, pos, yaw } = g;
  const n = qf.length;
  if (t <= qf[0]) return { x: pos[0], y: pos[1], z: pos[2], yaw: yaw[0], i: 0, gap: false };
  if (t >= qf[n - 1]) { const k = n - 1; return { x: pos[k * 3], y: pos[k * 3 + 1], z: pos[k * 3 + 2], yaw: yaw[k], i: k, gap: false }; }
  let lo = 0, hi = n - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (qf[mid] <= t) lo = mid; else hi = mid; }
  if (g.segIndex[lo] !== g.segIndex[hi]) {
    return { x: pos[lo * 3], y: pos[lo * 3 + 1], z: pos[lo * 3 + 2], yaw: yaw[lo], i: lo, gap: true };
  }
  const f = (t - qf[lo]) / (qf[hi] - qf[lo] || 1);
  const dy = (((yaw[hi] - yaw[lo]) + 32768) & 0xffff) - 32768;
  return {
    x: pos[lo * 3] + (pos[hi * 3] - pos[lo * 3]) * f,
    y: pos[lo * 3 + 1] + (pos[hi * 3 + 1] - pos[lo * 3 + 1]) * f,
    z: pos[lo * 3 + 2] + (pos[hi * 3 + 2] - pos[lo * 3 + 2]) * f,
    yaw: yaw[lo] + dy * f, i: lo, gap: false,
  };
}

// Animation at time t, following Moonshine's playback: equal IDs interpolate phase along the
// shortest path around the loop; an ID change steps at the sample boundary.
function ghostAnimAt(g, t) {
  const { qf, anim, phase, yoshi } = g;
  const n = qf.length;
  let lo = 0;
  if (t >= qf[n - 1]) lo = n - 1;
  else if (t > qf[0]) {
    let hi = n - 1;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (qf[mid] <= t) lo = mid; else hi = mid; }
  }
  const out = { id: anim[lo], yoshi: yoshi[lo], phase: phase[lo] };
  const hi = lo + 1;
  if (hi < n && anim[hi] === anim[lo] && yoshi[hi] === yoshi[lo] && g.segIndex[hi] === g.segIndex[lo]) {
    const f = (t - qf[lo]) / (qf[hi] - qf[lo] || 1);
    const d = ((((phase[hi] - phase[lo]) + 2048) % 4096) + 4096) % 4096 - 2048;
    out.phase = (((phase[lo] + d * f) % 4096) + 4096) % 4096;
  }
  return out;
}

const FLUDD_NOZZLES = ['Spray', 'Rocket', 'Underwater', 'Yoshi', 'Hover', 'Turbo'];

// FLUDD state at time t: the most recent recorded input at or before t (Moonshine holds the
// last sample rather than interpolating). Returns null for ghosts without FLUDD data.
function ghostFluddAt(g, t) {
  const inp = g.inputs;
  if (!inp || !inp.hasFludd || !inp.count || t < inp.qf[0]) return null;
  let lo = 0, hi = inp.count - 1;
  while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (inp.qf[mid] <= t) lo = mid; else hi = mid - 1; }
  const mode = inp.fluddMode[lo];
  if (!(mode & 0x08)) return { present: false };
  return {
    present: true, nozzle: mode & 7, nozzleName: FLUDD_NOZZLES[mode & 7] || '?',
    spraying: !!(mode & 0x10), power: inp.fluddPower[lo],
    offset: [inp.fluddOffset[lo * 3], inp.fluddOffset[lo * 3 + 1], inp.fluddOffset[lo * 3 + 2]],
    yaw: inp.fluddYaw[lo], pitch: inp.fluddPitch[lo],
  };
}

if (typeof module !== 'undefined') module.exports = { parseSmsGhost, ghostSampleAt, ghostFluddAt, ghostAnimAt, ghostFormatTime, ghostRouteLabel, ghostQfToSeconds };
