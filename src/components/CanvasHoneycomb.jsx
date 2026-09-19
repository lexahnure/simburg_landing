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
    cachedGoldbergCells = generateGoldbergSphere(7);
  }
  return cachedGoldbergCells;
}

function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function CanvasHoneycomb({ trackRef, overlayRef, textRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const goldbergCells = getGoldbergCells();

    let width = 0, height = 0, dpr = 1;
    let sphereRotY = 0.5;
    const EARTH_ROT_SPEED = 0.085; // rad/sec
    const EARTH_TILT_X = 0.32; // ~18.5 deg forward tilt

    let scrollProgress = 0;
    let targetScrollProgress = 0;

    let activeCellId = -1;
    let activeIconIndex = 0;
    let cellSwitchTimer = 0;
    const CELL_CYCLE_DURATION = 3.2;

    let centralTargetCellId = -1;
    let rafId = null;
    let lastTime = 0;

    function isCellInUpperThird(cell, rotY) {
      if (!cell) return false;
      const rot = rotatePoint(cell.center, rotY, EARTH_TILT_X);
      return rot[2] > 0.28 && rot[1] >= -0.92 && rot[1] <= -0.42 && Math.abs(rot[0]) < 0.70;
    }

    function pickNextActiveCellInUpperThird() {
      const candidates = goldbergCells.map(cell => {
        const rot = rotatePoint(cell.center, sphereRotY, EARTH_TILT_X);
        return { cell, rot };
      }).filter(item => {
        return item.rot[2] > 0.30 &&
               item.rot[1] >= -0.88 && item.rot[1] <= -0.45 &&
               Math.abs(item.rot[0]) < 0.65 &&
               item.cell.id !== activeCellId;
      });

      if (candidates.length > 0) {
        candidates.sort((a, b) => {
          const distA = Math.hypot(a.rot[0], a.rot[1] - (-0.66), a.rot[2] - 0.75);
          const distB = Math.hypot(b.rot[0], b.rot[1] - (-0.66), b.rot[2] - 0.75);
          return distA - distB;
        });

        const pick = candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
        activeCellId = pick.cell.id;
        activeIconIndex = (activeIconIndex + 1) % ICONS.length;
        pick.cell.iconIndex = activeIconIndex;
      } else {
        const anyValid = goldbergCells.find(c => isCellInUpperThird(c, sphereRotY));
        if (anyValid) {
          activeCellId = anyValid.id;
        }
      }
    }

    function getVisibleCenterCell() {
      let bestCell = goldbergCells[0];
      let bestDist = Infinity;

      for (const cell of goldbergCells) {
        const rot = rotatePoint(cell.center, sphereRotY, EARTH_TILT_X);
        if (rot[2] <= 0.3) continue;
        const dist = Math.hypot(rot[0] - 0, rot[1] - (-0.65), rot[2] - 0.75);
        if (dist < bestDist) {
          bestDist = dist;
          bestCell = cell;
        }
      }
      return bestCell;
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
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      onScroll();
    }

    function drawCell(item, hexBrightenRatio) {
      const { projectedVerts, dotL, isActive } = item;
      if (projectedVerts.length < 3) return;

      ctx.beginPath();
      ctx.moveTo(projectedVerts[0].x, projectedVerts[0].y);
      for (let i = 1; i < projectedVerts.length; i++) {
        ctx.lineTo(projectedVerts[i].x, projectedVerts[i].y);
      }
      ctx.closePath();

      if (isActive) {
        const rBase = 0, gBase = 110, bBase = 255;
        const rTarget = 248, gTarget = 250, bTarget = 252;

        const r = Math.round(rBase + (rTarget - rBase) * hexBrightenRatio);
        const g = Math.round(gBase + (gTarget - gBase) * hexBrightenRatio);
        const b = Math.round(bBase + (bTarget - bBase) * hexBrightenRatio);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        if (hexBrightenRatio < 0.9) {
          const edgeAlpha = Math.max(0, (1.0 - hexBrightenRatio) * 0.8);
          ctx.strokeStyle = `rgba(0, 240, 255, ${edgeAlpha})`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
      } else {
        const baseR = 8 + dotL * 16;
        const baseG = 24 + dotL * 38;
        const baseB = 58 + dotL * 72;

        const r = Math.round(baseR + (248 - baseR) * hexBrightenRatio * 0.7);
        const g = Math.round(baseG + (250 - baseG) * hexBrightenRatio * 0.7);
        const b = Math.round(baseB + (252 - baseB) * hexBrightenRatio * 0.7);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        if (hexBrightenRatio < 0.9) {
          ctx.strokeStyle = `rgba(5, 16, 42, ${0.85 * (1.0 - hexBrightenRatio)})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();

          ctx.strokeStyle = `rgba(64, 130, 255, ${0.12 * dotL * (1.0 - hexBrightenRatio)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    function drawSurfaceMappedActiveCell(item, sphereCenterX, sphereCenterY, sphereRadius, cameraZ, cameraFocal, curRotY, curRotX, fadeAlpha) {
      const cell = item.cell;

      const rotN = rotatePoint(cell.center, curRotY, curRotX);
      const rotU = rotatePoint(cell.tangentU, curRotY, curRotX);
      const rotV = rotatePoint(cell.tangentV, curRotY, curRotX);

      const C_worldX = sphereCenterX + rotN[0] * sphereRadius * 1.002;
      const C_worldY = sphereCenterY + rotN[1] * sphereRadius * 1.002;
      const C_worldZ = rotN[2] * sphereRadius * 1.002;

      const depthC = cameraZ - C_worldZ;
      if (depthC <= 40) return;
      const scaleC = cameraFocal / depthC;
      const ScX = width * 0.5 + (C_worldX - width * 0.5) * scaleC;
      const ScY = height * 0.5 + (C_worldY - height * 0.5) * scaleC;

      const step = 0.037 * sphereRadius;

      const U_worldX = C_worldX + rotU[0] * step;
      const U_worldY = C_worldY + rotU[1] * step;
      const U_worldZ = C_worldZ + rotU[2] * step;
      const depthU = cameraZ - U_worldZ;
      const scaleU = cameraFocal / (depthU > 40 ? depthU : 40);
      const SuX = width * 0.5 + (U_worldX - width * 0.5) * scaleU;
      const SuY = height * 0.5 + (U_worldY - height * 0.5) * scaleU;

      const V_worldX = C_worldX + rotV[0] * step;
      const V_worldY = C_worldY + rotV[1] * step;
      const V_worldZ = C_worldZ + rotV[2] * step;
      const depthV = cameraZ - V_worldZ;
      const scaleV = cameraFocal / (depthV > 40 ? depthV : 40);
      const SvX = width * 0.5 + (V_worldX - width * 0.5) * scaleV;
      const SvY = height * 0.5 + (V_worldY - height * 0.5) * scaleV;

      const ICON_COORD_SIZE = 28.0;
      const a = (SuX - ScX) / ICON_COORD_SIZE;
      const b = (SuY - ScY) / ICON_COORD_SIZE;
      const c = (SvX - ScX) / ICON_COORD_SIZE;
      const d = (SvY - ScY) / ICON_COORD_SIZE;
      const e = ScX;
      const f = ScY;

      ctx.save();
      ctx.globalAlpha = fadeAlpha;
      ctx.transform(a, b, c, d, e, f);

      const icon = ICONS[activeIconIndex];
      const iconScale = 0.68;

      ctx.save();
      ctx.scale(iconScale, iconScale);

      const pulse = 1.0 + Math.sin(Date.now() * 0.003) * 0.02;
      ctx.scale(pulse, pulse);

      icon.draw(ctx, '#ffffff');
      ctx.restore();

      ctx.restore();
    }

    function drawScene() {
      ctx.clearRect(0, 0, width, height);

      // Deep Space Atmospheric Gradient
      const spaceGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.82, width * 0.1,
        width * 0.5, height * 0.82, width * 0.85
      );
      spaceGrad.addColorStop(0, 'rgba(14, 52, 126, 0.75)');
      spaceGrad.addColorStop(0.45, 'rgba(8, 28, 72, 0.55)');
      spaceGrad.addColorStop(0.85, 'rgba(5, 18, 44, 0.2)');
      spaceGrad.addColorStop(1, 'rgba(3, 10, 28, 0)');
      ctx.fillStyle = spaceGrad;
      ctx.fillRect(0, 0, width, height);

      const p = scrollProgress;
      const baseRadius = Math.min(width, height) * 0.82;
      let zoom = 1.0;
      let sphereCenterX = width * 0.5;
      let sphereCenterY = 0;
      let whiteoutAlpha = 0;
      let hexBrightenRatio = 0;

      const restCenterY = height + 0.34 * baseRadius;
      const visible60CenterY = height - 0.20 * baseRadius;

      const curRotX = EARTH_TILT_X;
      const curRotY = sphereRotY;

      if (p <= 0.25) {
        const t1 = smoothstep(0.0, 0.25, p);
        zoom = 1.0;
        sphereCenterY = restCenterY + (visible60CenterY - restCenterY) * t1;
        hexBrightenRatio = 0;
        whiteoutAlpha = 0;
      } else if (p <= 0.68) {
        const t2 = smoothstep(0.25, 0.68, p);
        zoom = 1.0 + (30.0 - 1.0) * Math.pow(t2, 2.0);
        hexBrightenRatio = t2;

        const curRadius = baseRadius * zoom;
        const targetCell = goldbergCells[centralTargetCellId !== -1 ? centralTargetCellId : activeCellId];
        const targetRot = rotatePoint(targetCell.center, curRotY, curRotX);

        const desiredCenterX = width * 0.5 - targetRot[0] * curRadius;
        const desiredCenterY = height * 0.5 - targetRot[1] * curRadius;

        sphereCenterX = width * 0.5 + (desiredCenterX - width * 0.5) * t2;
        sphereCenterY = visible60CenterY + (desiredCenterY - visible60CenterY) * t2;

        whiteoutAlpha = smoothstep(0.50, 0.68, p) * 0.6;
      } else {
        const t3 = smoothstep(0.68, 0.80, p);
        zoom = 30.0 + t3 * 6.0;
        const curRadius = baseRadius * zoom;
        const targetCell = goldbergCells[centralTargetCellId !== -1 ? centralTargetCellId : activeCellId];
        const targetRot = rotatePoint(targetCell.center, curRotY, curRotX);

        sphereCenterX = width * 0.5 - targetRot[0] * curRadius;
        sphereCenterY = height * 0.5 - targetRot[1] * curRadius;

        hexBrightenRatio = 1.0;
        whiteoutAlpha = 0.6 + t3 * 0.4;
      }

      const sphereRadius = baseRadius * zoom;
      const cameraFocal = 950;
      const cameraZ = 1300;

      // Update external whiteout overlay if ref provided
      if (overlayRef?.current) {
        overlayRef.current.style.opacity = whiteoutAlpha.toFixed(3);
      }

      // Update hero text visibility & subtle parallax fade
      if (textRef?.current) {
        const textOpacity = Math.max(0, 1.0 - p * 4.5);
        textRef.current.style.opacity = textOpacity.toFixed(3);
        textRef.current.style.transform = `translateY(-${(p * 60).toFixed(1)}px)`;
        textRef.current.style.pointerEvents = textOpacity > 0.05 ? 'auto' : 'none';
        textRef.current.style.visibility = textOpacity <= 0 ? 'hidden' : 'visible';
      }

      const lightDir = vNorm([0.28, -0.65, 0.72]);
      const renderList = [];

      for (const cell of goldbergCells) {
        const rotCenter = rotatePoint(cell.center, curRotY, curRotX);
        if (rotCenter[2] < -0.12) continue;

        const worldX = sphereCenterX + rotCenter[0] * sphereRadius;
        const worldY = sphereCenterY + rotCenter[1] * sphereRadius;
        const worldZ = rotCenter[2] * sphereRadius;

        const depthZ = cameraZ - worldZ;
        if (depthZ <= 40) continue;
        const perspectiveScale = cameraFocal / depthZ;

        const screenX = width * 0.5 + (worldX - width * 0.5) * perspectiveScale;
        const screenY = height * 0.5 + (worldY - height * 0.5) * perspectiveScale;

        const projectedVerts = [];
        for (const v of cell.vertices) {
          const rotV = rotatePoint(v, curRotY, curRotX);
          const vWorldX = sphereCenterX + rotV[0] * sphereRadius;
          const vWorldY = sphereCenterY + rotV[1] * sphereRadius;
          const vWorldZ = rotV[2] * sphereRadius;
          const vDepthZ = cameraZ - vWorldZ;
          const vScale = cameraFocal / (vDepthZ > 40 ? vDepthZ : 40);

          projectedVerts.push({
            x: width * 0.5 + (vWorldX - width * 0.5) * vScale,
            y: height * 0.5 + (vWorldY - height * 0.5) * vScale
          });
        }

        const dotL = Math.max(0.12, vDot(rotCenter, lightDir));
        const isActive = (cell.id === activeCellId);

        renderList.push({
          cell,
          screenX,
          screenY,
          worldZ,
          rotCenter,
          projectedVerts,
          dotL,
          isActive
        });
      }

      renderList.sort((a, b) => a.worldZ - b.worldZ);

      for (const item of renderList) {
        drawCell(item, hexBrightenRatio);
      }

      const activeItem = renderList.find(i => i.isActive);
      if (activeItem && p < 0.65) {
        const fadeOut = Math.max(0, 1.0 - smoothstep(0.28, 0.62, p));
        if (fadeOut > 0.01) {
          drawSurfaceMappedActiveCell(
            activeItem, sphereCenterX, sphereCenterY, sphereRadius,
            cameraZ, cameraFocal, curRotY, curRotX, fadeOut
          );
        }
      }
    }

    function renderLoop(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.1);
      lastTime = timestamp;

      scrollProgress += (targetScrollProgress - scrollProgress) * 0.18;
      const isScrolled = scrollProgress > 0.003;

      if (!isScrolled) {
        sphereRotY += EARTH_ROT_SPEED * dt;

        const curActive = goldbergCells[activeCellId];
        if (!isCellInUpperThird(curActive, sphereRotY)) {
          pickNextActiveCellInUpperThird();
          cellSwitchTimer = 0;
        } else {
          cellSwitchTimer += dt;
          if (cellSwitchTimer >= CELL_CYCLE_DURATION) {
            cellSwitchTimer = 0;
            pickNextActiveCellInUpperThird();
          }
        }
        centralTargetCellId = -1;
      } else {
        if (centralTargetCellId === -1) {
          const centerCell = getVisibleCenterCell();
          centralTargetCellId = centerCell.id;
          activeCellId = centerCell.id;
          activeIconIndex = centerCell.iconIndex;
        }
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      drawScene();
      ctx.restore();

      rafId = requestAnimationFrame(renderLoop);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    pickNextActiveCellInUpperThird();

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [trackRef, overlayRef, textRef]);

  return (
    <canvas
      ref={canvasRef}
      id="sphere-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
