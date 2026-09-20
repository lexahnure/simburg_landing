import { useEffect, useRef } from 'react';

// --- Math 3D Vector Utilities ---
function vAdd(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
function vSub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
function vScale(a, s) { return [a[0] * s, a[1] * s, a[2] * s]; }
function vDot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
function vCross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}
function vLength(a) { return Math.hypot(a[0], a[1], a[2]); }
function vNorm(a) {
  const l = vLength(a) || 1e-6;
  return [a[0] / l, a[1] / l, a[2] / l];
}

// 3D Euler Rotation (Yaw Y, Pitch X, Roll Z)
function rotatePoint(p, rotY, rotX, rotZ = 0) {
  const [x, y, z] = p;
  const cy = Math.cos(rotY), sy = Math.sin(rotY);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;

  const cx = Math.cos(rotX), sx = Math.sin(rotX);
  const y2 = y * cx - z1 * sx;
  const z2 = y * sx + z1 * cx;

  if (rotZ !== 0) {
    const cz = Math.cos(rotZ), sz = Math.sin(rotZ);
    const x3 = x1 * cz - y2 * sz;
    const y3 = x1 * sz + y2 * cz;
    return [x3, y3, z2];
  }
  return [x1, y2, z2];
}

// Safe roundRect helper
function drawRoundRect(c, x, y, w, h, r) {
  if (typeof c.roundRect === 'function') {
    c.roundRect(x, y, w, h, r);
  } else {
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
  }
}

// --- 9 VECTOR ICONS (Centered at 0, 0) ---
function drawCar(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); c.arc(23 - 40, 57 - 40, 5.5, 0, 2 * Math.PI); c.stroke();
  c.beginPath(); c.arc(58 - 40, 57 - 40, 5.5, 0, 2 * Math.PI); c.stroke();

  c.beginPath();
  c.moveTo(16.5 - 40, 57 - 40); c.lineTo(12 - 40, 57 - 40);
  c.quadraticCurveTo(7 - 40, 57 - 40, 7 - 40, 51 - 40);
  c.lineTo(7 - 40, 40 - 40);
  c.quadraticCurveTo(7 - 40, 33 - 40, 13 - 40, 31 - 40);
  c.lineTo(22 - 40, 23 - 40);
  c.quadraticCurveTo(28 - 40, 21 - 40, 32 - 40, 21 - 40);
  c.lineTo(45 - 40, 21 - 40);
  c.quadraticCurveTo(52 - 40, 23 - 40, 55 - 40, 28 - 40);
  c.lineTo(61 - 40, 39 - 40); c.lineTo(69 - 40, 41 - 40);
  c.quadraticCurveTo(74 - 40, 43 - 40, 74 - 40, 48 - 40);
  c.lineTo(74 - 40, 51 - 40);
  c.quadraticCurveTo(74 - 40, 57 - 40, 69 - 40, 57 - 40);
  c.lineTo(64.5 - 40, 57 - 40);
  c.stroke();

  c.beginPath();
  c.moveTo(29.5 - 40, 57 - 40); c.lineTo(51.5 - 40, 57 - 40);
  c.stroke();
  c.restore();
}

function drawCCTV(c, color) {
  c.save();
  c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(12 - 40, 52 - 40); c.lineTo(12 - 40, 68 - 40);
  c.stroke();

  c.beginPath();
  c.moveTo(12 - 40, 60 - 40); c.lineTo(22 - 40, 60 - 40);
  c.quadraticCurveTo(31 - 40, 56 - 40, 34 - 40, 52 - 40);
  c.lineTo(40 - 40, 43 - 40);
  c.stroke();

  c.save();
  c.translate(46 - 40, 36 - 40);
  c.rotate(-35 * Math.PI / 180);
  c.beginPath(); drawRoundRect(c, -22, -12, 30, 24, 5); c.stroke();
  c.beginPath(); c.moveTo(8, -8); c.lineTo(19, -14); c.lineTo(19, 14); c.lineTo(8, 8); c.stroke();
  c.beginPath(); c.arc(-7, 0, 2.5, 0, 2 * Math.PI); c.fill();
  c.restore();

  c.restore();
}

function drawCard(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); drawRoundRect(c, 10 - 40, 20 - 40, 60, 40, 7); c.stroke();
  c.beginPath(); c.moveTo(10 - 40, 32 - 40); c.lineTo(70 - 40, 32 - 40); c.stroke();
  c.restore();
}

function drawHeadphones(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(17 - 40, 44 - 40);
  c.bezierCurveTo(17 - 40, 20 - 40, 25 - 40, 16 - 40, 40 - 40, 16 - 40);
  c.bezierCurveTo(55 - 40, 16 - 40, 63 - 40, 20 - 40, 63 - 40, 44 - 40);
  c.stroke();

  c.beginPath(); drawRoundRect(c, 11 - 40, 44 - 40, 11, 22, 5); c.stroke();
  c.beginPath(); drawRoundRect(c, 58 - 40, 44 - 40, 11, 22, 5); c.stroke();
  c.restore();
}

function drawSmartHome(c, color) {
  c.save();
  c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(40 - 40, 12 - 40); c.lineTo(66 - 40, 33 - 40);
  c.quadraticCurveTo(69 - 40, 38 - 40, 69 - 40, 41 - 40);
  c.lineTo(69 - 40, 63 - 40);
  c.quadraticCurveTo(69 - 40, 69 - 40, 63 - 40, 69 - 40);
  c.lineTo(17 - 40, 69 - 40);
  c.quadraticCurveTo(11 - 40, 69 - 40, 11 - 40, 63 - 40);
  c.lineTo(11 - 40, 41 - 40);
  c.quadraticCurveTo(11 - 40, 35 - 40, 14 - 40, 33 - 40);
  c.closePath();
  c.stroke();

  c.beginPath(); c.arc(40 - 40, 56 - 40, 2.5, 0, 2 * Math.PI); c.fill();

  c.beginPath();
  c.moveTo(31 - 40, 46 - 40);
  c.bezierCurveTo(34 - 40, 41 - 40, 46 - 40, 41 - 40, 49 - 40, 46 - 40);
  c.stroke();

  c.beginPath();
  c.moveTo(23 - 40, 36 - 40);
  c.bezierCurveTo(30 - 40, 26 - 40, 50 - 40, 26 - 40, 57 - 40, 36 - 40);
  c.stroke();
  c.restore();
}

function drawPhone(c, color) {
  c.save();
  c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); drawRoundRect(c, -20, -29, 40, 58, 8); c.stroke();
  c.beginPath(); c.arc(0, 18, 2.5, 0, 2 * Math.PI); c.fill();
  c.restore();
}

function drawAirplane(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.rotate(Math.PI / 4);
  c.beginPath();
  c.moveTo(0, -26);
  c.bezierCurveTo(3, -26, 4, -23, 4, -11);
  c.lineTo(25, 5);
  c.bezierCurveTo(27, 7, 26, 9, 23, 9);
  c.lineTo(4, 6.5);
  c.lineTo(3, 18);
  c.lineTo(12, 24);
  c.bezierCurveTo(13, 25, 12.5, 26, 11, 26);
  c.lineTo(0, 23);
  c.lineTo(-11, 26);
  c.bezierCurveTo(-12.5, 26, -13, 25, -12, 24);
  c.lineTo(-3, 18);
  c.lineTo(-4, 6.5);
  c.lineTo(-23, 9);
  c.bezierCurveTo(-26, 9, -27, 7, -25, 5);
  c.lineTo(-4, -11);
  c.bezierCurveTo(-4, -23, -3, -26, 0, -26);
  c.closePath();
  c.stroke();
  c.restore();
}

function drawCart(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath(); c.arc(-11, 22, 4.2, 0, 2 * Math.PI); c.stroke();
  c.beginPath(); c.arc(17, 22, 4.2, 0, 2 * Math.PI); c.stroke();

  c.beginPath();
  c.moveTo(13 - 40, 19 - 40); c.lineTo(19 - 40, 19 - 40);
  c.quadraticCurveTo(23 - 40, 19 - 40, 24 - 40, 24 - 40);
  c.lineTo(31 - 40, 50 - 40);
  c.quadraticCurveTo(34 - 40, 54 - 40, 38 - 40, 54 - 40);
  c.lineTo(60 - 40, 54 - 40);
  c.quadraticCurveTo(64 - 40, 54 - 40, 66 - 40, 50 - 40);
  c.lineTo(72 - 40, 25 - 40);
  c.quadraticCurveTo(73 - 40, 22 - 40, 68 - 40, 22 - 40);
  c.lineTo(24 - 40, 22 - 40);
  c.stroke();

  c.beginPath();
  c.moveTo(27 - 40, 35 - 40); c.lineTo(69 - 40, 35 - 40);
  c.stroke();
  c.restore();
}

function drawTV(c, color) {
  c.save();
  c.strokeStyle = color; c.lineWidth = 2.6;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(0, 28 - 40); c.lineTo(25 - 40, 13 - 40);
  c.moveTo(0, 28 - 40); c.lineTo(55 - 40, 13 - 40);
  c.stroke();

  c.beginPath(); drawRoundRect(c, -27, -11, 54, 38, 7); c.stroke();
  c.restore();
}

const ICONS = [
  { id: 'car', name: 'Автомобіль', color: '#0088ff', draw: drawCar },
  { id: 'camera', name: 'Камера', color: '#0099ff', draw: drawCCTV },
  { id: 'card', name: 'Картка', color: '#00b4d8', draw: drawCard },
  { id: 'headphones', name: 'Навушники', color: '#00c3ff', draw: drawHeadphones },
  { id: 'smart-home', name: 'Розумний Дім', color: '#00e5ff', draw: drawSmartHome },
  { id: 'phone', name: 'Смартфон', color: '#00d2ff', draw: drawPhone },
  { id: 'airplane', name: 'Авіація', color: '#00b4d8', draw: drawAirplane },
  { id: 'cart', name: 'Кошик', color: '#0096c7', draw: drawCart },
  { id: 'tv', name: 'Телевізор', color: '#0077b6', draw: drawTV }
];

// --- Goldberg Polyhedron Generator (Frequency 7 -> 492 cells) ---
function generateGoldbergSphere(freq = 7) {
  const phi = (1.0 + Math.sqrt(5.0)) / 2.0;
  const baseVerts = [
    [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
    [0, -1,  phi], [0,  1,  phi], [0, -1, -phi], [0,  1, -phi],
    [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
  ].map(vNorm);

  const baseFaces = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
  ];

  const triVerts = [];
  const vertMap = new Map();

  function getVertex(v) {
    const key = `${v[0].toFixed(5)},${v[1].toFixed(5)},${v[2].toFixed(5)}`;
    if (!vertMap.has(key)) {
      vertMap.set(key, triVerts.length);
      triVerts.push(vNorm(v));
    }
    return vertMap.get(key);
  }

  const triangles = [];
  for (const face of baseFaces) {
    const v1 = baseVerts[face[0]], v2 = baseVerts[face[1]], v3 = baseVerts[face[2]];
    const grid = {};
    for (let i = 0; i <= freq; i++) {
      for (let j = 0; j <= freq - i; j++) {
        const k = freq - i - j;
        const vx = (i * v1[0] + j * v2[0] + k * v3[0]) / freq;
        const vy = (i * v1[1] + j * v2[1] + k * v3[1]) / freq;
        const vz = (i * v1[2] + j * v2[2] + k * v3[2]) / freq;
        grid[`${i},${j}`] = getVertex([vx, vy, vz]);
      }
    }
    for (let i = 0; i < freq; i++) {
      for (let j = 0; j < freq - i; j++) {
        triangles.push([grid[`${i},${j}`], grid[`${i+1},${j}`], grid[`${i},${j+1}`]]);
        if (i + j + 1 < freq) {
          triangles.push([grid[`${i+1},${j}`], grid[`${i+1},${j+1}`], grid[`${i},${j+1}`]]);
        }
      }
    }
  }

  // Dual construction
  const vertTriangles = Array.from({ length: triVerts.length }, () => []);
  const triCentroids = [];

  triangles.forEach((tri, tIdx) => {
    const c = vNorm(vScale(vAdd(vAdd(triVerts[tri[0]], triVerts[tri[1]]), triVerts[tri[2]]), 1 / 3));
    triCentroids.push(c);
    tri.forEach(v => vertTriangles[v].push(tIdx));
  });

  const cells = [];
  for (let i = 0; i < triVerts.length; i++) {
    const normal = triVerts[i];
    const tIndices = vertTriangles[i];
    const uRef = Math.abs(normal[0]) < 0.85 ? [1, 0, 0] : [0, 1, 0];
    const tangentU = vNorm(vSub(uRef, vScale(normal, vDot(uRef, normal))));
    const tangentV = vCross(normal, tangentU);

    const polyVerts = tIndices.map(tIdx => {
      const p = triCentroids[tIdx];
      const diff = vSub(p, normal);
      const angle = Math.atan2(vDot(diff, tangentV), vDot(diff, tangentU));
      return { angle, pt: p };
    });

    polyVerts.sort((a, b) => a.angle - b.angle);

    cells.push({
      id: i,
      center: normal,
      vertices: polyVerts.map(p => p.pt),
      isPentagon: polyVerts.length === 5,
      tangentU,
      tangentV,
      iconIndex: i % ICONS.length
    });
  }

  return cells;
}

// Pre-generate cells
let cachedGoldbergCells = null;
function getGoldbergCells() {
  if (!cachedGoldbergCells) {
    cachedGoldbergCells = generateGoldbergSphere(10);
  }
  return cachedGoldbergCells;
}

function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function CanvasHoneycomb({ trackRef, textRef, btnRef, standardsRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const goldbergCells = getGoldbergCells();

    let vW = 0, vH = 0;
    let padX = 0, padY = 0;
    let width = 0, height = 0, dpr = 1;
    let sphereRotY = 0.5;
    const EARTH_ROT_SPEED = 0.085; // rad/sec
    const EARTH_TILT_X = 0.32; // ~18.5 deg forward tilt

    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const MAX_ACTIVE_CELLS = 3;
    let activeCells = [];
    let spawnTimer = 0.4;

    let curTextTranslateY = 0;

    let rafId = null;
    let lastTime = 0;

    function isCellEligible(cell, rotY, isCentered) {
      if (!cell) return false;
      const rot = rotatePoint(cell.center, rotY, EARTH_TILT_X);
      if (isCentered) {
        // Centered stage: front-facing and close to the sphere center
        return rot[2] > 0.55 && Math.abs(rot[0]) < 0.35 && Math.abs(rot[1]) < 0.35;
      }
      // Horizon stage: front-facing horizontal band across front hemisphere (below hero text)
      return rot[2] > 0.32 && Math.abs(rot[0]) < 0.65 && rot[1] >= -0.62 && rot[1] <= -0.15;
    }

    function spawnActiveCell(isCentered = false) {
      const activeIds = new Set(activeCells.map(a => a.cellId));
      const activeIcons = new Set(activeCells.map(a => a.iconIndex));

      const candidates = goldbergCells.filter(cell => {
        if (activeIds.has(cell.id)) return false;
        return isCellEligible(cell, sphereRotY, isCentered);
      });

      if (candidates.length === 0) return;

      // Keep active cells spatially separated across the band
      const wellSpaced = candidates.filter(cand => {
        return activeCells.every(act => {
          const actCell = goldbergCells[act.cellId];
          if (!actCell) return true;
          return vLength(vSub(cand.center, actCell.center)) > 0.28;
        });
      });

      const pool = wellSpaced.length > 0 ? wellSpaced : candidates;
      const chosenCell = pool[Math.floor(Math.random() * pool.length)];

      // Pick an icon not currently displayed by other active cells
      const availableIcons = ICONS.map((_, idx) => idx).filter(idx => !activeIcons.has(idx));
      const chosenIconIndex = availableIcons.length > 0
        ? availableIcons[Math.floor(Math.random() * availableIcons.length)]
        : Math.floor(Math.random() * ICONS.length);

      activeCells.push({
        cellId: chosenCell.id,
        iconIndex: chosenIconIndex,
        fade: 0,
        state: 'in',
        timer: 0,
        maxLife: 3.6 + Math.random() * 2.0,
        fadeInDuration: 0.5,
        fadeOutDuration: 0.5,
      });
    }

    function onScroll() {
      const track = trackRef?.current || canvas.closest('.hero-scroll-track');
      if (track) {
        const rect = track.getBoundingClientRect();
        const trackHeight = rect.height - window.innerHeight;
        if (trackHeight > 0) {
          const scrolled = -rect.top;
          targetScrollProgress = Math.max(0, Math.min(1, scrolled / trackHeight));
        } else {
          targetScrollProgress = 0;
        }
      } else {
        targetScrollProgress = 0;
      }
    }

    function handleResize() {
      dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      vW = parent ? parent.clientWidth : window.innerWidth;
      vH = parent ? parent.clientHeight : window.innerHeight;

      // Generous bleed padding around viewport to eliminate any sphere/blur clipping
      padX = Math.round(vW * 0.40);
      padY = Math.round(vH * 0.85);

      width = vW + 2 * padX;
      height = vH + 2 * padY;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.position = 'absolute';
      canvas.style.top = `${-padY}px`;
      canvas.style.left = `${-padX}px`;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      onScroll();
    }

    function drawCell(item, sphereGrad) {
      const { projectedVerts, dotL, isActive, activeFade } = item;
      if (projectedVerts.length < 3) return;

      ctx.beginPath();
      ctx.moveTo(projectedVerts[0].x, projectedVerts[0].y);
      for (let i = 1; i < projectedVerts.length; i++) {
        ctx.lineTo(projectedVerts[i].x, projectedVerts[i].y);
      }
      ctx.closePath();

      if (isActive && activeFade > 0.01) {
        ctx.fillStyle = sphereGrad;
        ctx.fill();

        // Active highlight fill (#18284D) without cyan border thickness
        ctx.save();
        ctx.globalAlpha = activeFade;
        ctx.fillStyle = '#18284D';
        ctx.fill();
        ctx.restore();

        ctx.strokeStyle = 'rgba(6, 16, 38, 0.75)';
        ctx.lineWidth = 0.9;
        ctx.stroke();

        ctx.strokeStyle = `rgba(80, 150, 255, ${0.12 * dotL})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      } else {
        ctx.fillStyle = sphereGrad;
        ctx.fill();

        if (dotL < 0.5) {
          ctx.fillStyle = `rgba(0, 0, 0, ${(0.5 - dotL) * 0.4})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${(dotL - 0.5) * 0.12})`;
          ctx.fill();
        }

        ctx.strokeStyle = 'rgba(6, 16, 38, 0.75)';
        ctx.lineWidth = 0.9;
        ctx.stroke();

        ctx.strokeStyle = `rgba(80, 150, 255, ${0.12 * dotL})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function drawSurfaceMappedActiveCell(item, activeEntry, sphereCenterX, sphereCenterY, sphereRadius, cameraZ, cameraFocal, curRotY, curRotX) {
      const cell = item.cell;
      const fadeAlpha = activeEntry.fade;
      const icon = ICONS[activeEntry.iconIndex % ICONS.length];

      const rotN = rotatePoint(cell.center, curRotY, curRotX);

      // Screen-aligned tangent basis in 3D:
      // Screen UP vector is [0, -1, 0]
      const V_up = [0, -1, 0];
      const dotUp = vDot(V_up, rotN);
      const rawT_up = vSub(V_up, vScale(rotN, dotUp));
      const rotUp = vNorm(rawT_up);
      const rotRight = vNorm(vCross(rotN, rotUp));
      const rotDown = vScale(rotUp, -1);

      const C_worldZ = rotN[2] * sphereRadius * 1.002;
      const depthC = cameraZ - C_worldZ;
      if (depthC <= 40) return;
      const scaleC = cameraFocal / depthC;
      const ScX = sphereCenterX + rotN[0] * sphereRadius * 1.002 * scaleC;
      const ScY = sphereCenterY + rotN[1] * sphereRadius * 1.002 * scaleC;

      // Scaled step for 10% smaller hexagon (freq = 10)
      const step = 0.025 * sphereRadius;

      // Point U: local icon +X (rotRight)
      const U_worldZ = C_worldZ + rotRight[2] * step;
      const depthU = cameraZ - U_worldZ;
      const scaleU = cameraFocal / (depthU > 40 ? depthU : 40);
      const SuX = sphereCenterX + (rotN[0] * sphereRadius * 1.002 + rotRight[0] * step) * scaleU;
      const SuY = sphereCenterY + (rotN[1] * sphereRadius * 1.002 + rotRight[1] * step) * scaleU;

      // Point V: local icon +Y (rotDown)
      const V_worldZ = C_worldZ + rotDown[2] * step;
      const depthV = cameraZ - V_worldZ;
      const scaleV = cameraFocal / (depthV > 40 ? depthV : 40);
      const SvX = sphereCenterX + (rotN[0] * sphereRadius * 1.002 + rotDown[0] * step) * scaleV;
      const SvY = sphereCenterY + (rotN[1] * sphereRadius * 1.002 + rotDown[1] * step) * scaleV;

      const ICON_COORD_SIZE = 28.0;
      const a = (SuX - ScX) / ICON_COORD_SIZE;
      const b = (SuY - ScY) / ICON_COORD_SIZE;
      const c = (SvX - ScX) / ICON_COORD_SIZE;
      const d = (SvY - ScY) / ICON_COORD_SIZE;
      const e = ScX;
      const f = ScY;

      // 1. Draw Vector Icon inside cell
      ctx.save();
      ctx.globalAlpha = fadeAlpha;
      ctx.transform(a, b, c, d, e, f);

      // Scaled icon for 10% smaller hexagon
      const iconScale = 0.46;
      ctx.scale(iconScale, iconScale);

      const pulse = 1.0 + Math.sin(Date.now() * 0.003 + cell.id) * 0.02;
      ctx.scale(pulse, pulse);

      icon.draw(ctx, '#ffffff');
      ctx.restore();

      // 2. Draw "ONLINE" badge with green dot near the icon
      ctx.save();
      ctx.globalAlpha = fadeAlpha;

      const badgeW = 50;
      const badgeH = 16;
      const badgeR = 8;

      let badgeX = ScX + 15;
      let badgeY = ScY - 8;
      // Flip to the left if too close to right edge of viewport
      if (ScX > padX + vW - 70) {
        badgeX = ScX - badgeW - 15;
      }

      // Badge pill background
      ctx.beginPath();
      drawRoundRect(ctx, badgeX, badgeY, badgeW, badgeH, badgeR);
      ctx.fillStyle = 'rgba(4, 18, 38, 0.90)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.40)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Glowing green dot
      const dotX = badgeX + 7.5;
      const dotY = badgeY + badgeH / 2;
      const dotPulse = 2.2 + Math.sin(Date.now() * 0.006 + cell.id) * 0.35;

      ctx.save();
      ctx.shadowColor = '#22C55E';
      ctx.shadowBlur = 5;
      ctx.fillStyle = '#22C55E';
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotPulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // "ONLINE" text
      ctx.fillStyle = '#F8FAFC';
      ctx.font = '600 8.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('ONLINE', dotX + 5.5, dotY + 0.5);

      ctx.restore();
    }

    function drawScene() {
      ctx.clearRect(0, 0, width, height);

      const p = scrollProgress;
      const minDim = Math.min(vW, vH);

      // 3 Stages of Animation:
      // Stage 1 (p = 0): Sphere is large (rRest = minDim * 0.78), center is below screen (vH + 0.38 * rRest),
      // forming the horizon arc under the Contact Us button (matching Stage 1 mockup).
      // Stage 2 (p = 0.35): Sphere moves to screen center (vH * 0.5), scales to rCenter = minDim * 0.42,
      // and blurs into a glowing orb behind stationary text (matching Stage 2 mockup).
      // Stage 3 (p = 1.0): Sphere scrolls up to vH * 0.08, staying blurred, while white section
      // scrolls up and covers hero, text scrolling when 120px from white section (matching Stage 3 mockup).
      const p1 = Math.min(1.0, p / 0.35);
      const t1 = smoothstep(0.0, 1.0, p1);

      const p2 = Math.max(0.0, (p - 0.35) / 0.65);
      const t2 = smoothstep(0.0, 1.0, p2);

      const rRest = minDim * 0.78;
      const rCenter = minDim * 0.98;
      const rUp = minDim * 1.15;

      const restCenterY_view = vH + 0.38 * rRest;
      const centerCenterY_view = vH * 0.50;
      const upCenterY_view = vH * 0.08;

      let currentRadius;
      let currentCenterY_view;

      if (p <= 0.35) {
        currentRadius = rRest + (rCenter - rRest) * t1;
        currentCenterY_view = restCenterY_view + (centerCenterY_view - restCenterY_view) * t1;
      } else {
        currentRadius = rCenter + (rUp - rCenter) * t2;
        currentCenterY_view = centerCenterY_view + (upCenterY_view - centerCenterY_view) * t2;
      }

      // Map viewport coordinates into oversized canvas coordinates
      const sphereCenterX = padX + vW * 0.5;
      const sphereCenterY = padY + currentCenterY_view;
      const sphereRadius = currentRadius;

      // 90deg Linear Gradient: #032A4F 0%, #1B2A4F 25%, #172234 50%, #0C101A 100%
      const sphereGrad = ctx.createLinearGradient(
        sphereCenterX - sphereRadius,
        sphereCenterY,
        sphereCenterX + sphereRadius,
        sphereCenterY
      );
      sphereGrad.addColorStop(0, '#032A4F');
      sphereGrad.addColorStop(0.25, '#1B2A4F');
      sphereGrad.addColorStop(0.5, '#172234');
      sphereGrad.addColorStop(1, '#0C101A');

      const curRotX = EARTH_TILT_X;
      const curRotY = sphereRotY;

      // Progressive blur on the sphere as it moves to screen center, staying blurred as it scrolls up
      const blurAmount = smoothstep(0.04, 0.35, p) * 26;
      if (blurAmount > 0.2) {
        canvas.style.filter = `blur(${blurAmount.toFixed(1)}px)`;
      } else {
        canvas.style.filter = 'none';
      }
      canvas.style.transform = 'none';

      // Hero text visibility (translateY is managed in renderLoop according to 120px rule)
      if (textRef?.current) {
        textRef.current.style.opacity = '1';
        textRef.current.style.pointerEvents = 'auto';
        textRef.current.style.visibility = 'visible';
      }

      const cameraFocal = 950;
      const cameraZ = 1250;

      const lightDir = vNorm([0.28, -0.65, 0.72]);
      const renderList = [];

      const activeMap = new Map();
      for (const a of activeCells) {
        if (a.fade > 0.01) {
          activeMap.set(a.cellId, a);
        }
      }

      for (const cell of goldbergCells) {
        const rotCenter = rotatePoint(cell.center, curRotY, curRotX);
        if (rotCenter[2] < -0.12) continue;

        const worldZ = rotCenter[2] * sphereRadius;
        const depthZ = cameraZ - worldZ;
        if (depthZ <= 40) continue;
        const perspectiveScale = cameraFocal / depthZ;

        const screenX = sphereCenterX + rotCenter[0] * sphereRadius * perspectiveScale;
        const screenY = sphereCenterY + rotCenter[1] * sphereRadius * perspectiveScale;

        const projectedVerts = [];
        for (const v of cell.vertices) {
          const rotV = rotatePoint(v, curRotY, curRotX);
          const vDepthZ = cameraZ - rotV[2] * sphereRadius;
          const vScale = cameraFocal / (vDepthZ > 40 ? vDepthZ : 40);

          projectedVerts.push({
            x: sphereCenterX + rotV[0] * sphereRadius * vScale,
            y: sphereCenterY + rotV[1] * sphereRadius * vScale
          });
        }

        const dotL = Math.max(0.12, vDot(rotCenter, lightDir));
        const activeEntry = activeMap.get(cell.id);
        const isActive = Boolean(activeEntry);
        const activeFade = activeEntry ? activeEntry.fade : 0;

        renderList.push({
          cell,
          screenX,
          screenY,
          worldZ,
          rotCenter,
          projectedVerts,
          dotL,
          isActive,
          activeFade,
          activeEntry
        });
      }

      renderList.sort((a, b) => a.worldZ - b.worldZ);

      // Base sphere disc to provide seamless body under the honeycomb mesh
      ctx.beginPath();
      ctx.arc(sphereCenterX, sphereCenterY, sphereRadius * 0.998, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      for (const item of renderList) {
        drawCell(item, sphereGrad);
      }

      for (const item of renderList) {
        if (item.isActive && item.activeFade > 0.01 && item.activeEntry) {
          drawSurfaceMappedActiveCell(
            item, item.activeEntry, sphereCenterX, sphereCenterY, sphereRadius,
            cameraZ, cameraFocal, curRotY, curRotX
          );
        }
      }
    }

    function renderLoop(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
      lastTime = timestamp;

      scrollProgress += (targetScrollProgress - scrollProgress) * 0.18;

      // 120px distance rule between Contact Us button and next white section
      if (textRef?.current && btnRef?.current && standardsRef?.current) {
        const standardsRect = standardsRef.current.getBoundingClientRect();
        const btnRect = btnRef.current.getBoundingClientRect();

        // While white section is off-screen, hero text is strictly stationary in center
        if (standardsRect.top >= window.innerHeight) {
          if (curTextTranslateY !== 0) {
            curTextTranslateY = 0;
            textRef.current.style.transform = 'none';
          }
        } else {
          const untranslatedBtnBottom = btnRect.bottom - curTextTranslateY;
          const triggerThreshold = untranslatedBtnBottom + 120;

          if (standardsRect.top < triggerThreshold) {
            curTextTranslateY = standardsRect.top - triggerThreshold;
            textRef.current.style.transform = `translate3d(0, ${curTextTranslateY}px, 0)`;
          } else if (curTextTranslateY !== 0) {
            curTextTranslateY = 0;
            textRef.current.style.transform = 'none';
          }
        }
      }

      sphereRotY += EARTH_ROT_SPEED * dt;

      const isCentered = scrollProgress > 0.25;

      // Spawn new active cells when near top (before heavy blur in Stage 2)
      if (scrollProgress < 0.20) {
        spawnTimer -= dt;
        if (spawnTimer <= 0 && activeCells.length < MAX_ACTIVE_CELLS) {
          spawnActiveCell(isCentered);
          spawnTimer = 1.0 + Math.random() * 0.8;
        }
      }

      // Update existing active cells
      for (const item of activeCells) {
        const cell = goldbergCells[item.cellId];
        // If scrolled into blur stage or cell rotated out of eligibility, transition to fade out
        if (scrollProgress >= 0.20 || !isCellEligible(cell, sphereRotY, isCentered)) {
          if (item.state !== 'out') {
            item.state = 'out';
            item.timer = 0;
          }
        }

        if (item.state === 'in') {
          item.timer += dt;
          item.fade = Math.min(1.0, item.timer / item.fadeInDuration);
          if (item.timer >= item.fadeInDuration) {
            item.state = 'active';
            item.timer = 0;
            item.fade = 1.0;
          }
        } else if (item.state === 'active') {
          item.timer += dt;
          item.fade = 1.0;
          if (item.timer >= item.maxLife) {
            item.state = 'out';
            item.timer = 0;
          }
        } else if (item.state === 'out') {
          item.timer += dt;
          item.fade = Math.max(0.0, 1.0 - (item.timer / item.fadeOutDuration));
        }
      }

      // Filter out completed active cells
      activeCells = activeCells.filter(item => item.fade > 0.001 || item.state !== 'out');

      ctx.save();
      ctx.scale(dpr, dpr);
      drawScene();
      ctx.restore();

      rafId = requestAnimationFrame(renderLoop);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    spawnActiveCell(false);
    spawnTimer = 0.8;

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      if (textRef?.current) {
        textRef.current.style.transform = 'none';
      }
    };
  }, [trackRef, textRef, btnRef, standardsRef]);

  return (
    <canvas
      ref={canvasRef}
      id="sphere-canvas"
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 1,
        display: 'block',
      }}
    />
  );
}
