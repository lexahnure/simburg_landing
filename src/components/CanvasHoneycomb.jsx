import { useEffect, useRef } from 'react';

export default function CanvasHoneycomb() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0, height = 0, dpr = 1;
    let isPlaying = true;
    let speed = 0.5;
    const BASE_ROTATION_SPEED = (2 * Math.PI) / 6.0;

    let rotationAngle = 0;
    let previousAngle = 0;
    let currentIconIndex = 0;
    let previousIconIndex = 0;
    let transitionProgress = 1.0;

    let rippleRadius = 0;
    let rippleAlpha = 0;

    let circleRadius = 150;
    let activeCoord = typeof window !== 'undefined' && window.innerWidth < 1024
      ? (window.innerWidth < 768 ? { col: 0, row: 0 } : { col: 0, row: 1 })
      : { col: 1, row: 0 };
    let activePos = { x: 0, y: 0 };
    let targetPos = { x: 0, y: 0 };
    let gridOffset = { x: 0, y: 0 };
    let circlesList = [];
    let rafId = null;

    const GRADIENT_STOPS = [
      { stop: 0.00, color: '#00f5d4' },
      { stop: 0.12, color: '#00e676' },
      { stop: 0.24, color: '#aeea00' },
      { stop: 0.36, color: '#ffd600' },
      { stop: 0.48, color: '#ff6d00' },
      { stop: 0.62, color: '#ff1744' },
      { stop: 0.74, color: '#d500f9' },
      { stop: 0.86, color: '#2979ff' },
      { stop: 1.00, color: '#00f5d4' },
    ];

    function drawCar(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath(); c.arc(23 - 40, 57 - 40, 6.5, 0, 2 * Math.PI); c.stroke();
      c.beginPath(); c.arc(58 - 40, 57 - 40, 6.5, 0, 2 * Math.PI); c.stroke();

      c.beginPath();
      c.moveTo(16.5 - 40, 57 - 40);
      c.lineTo(12 - 40, 57 - 40);
      c.quadraticCurveTo(7 - 40, 57 - 40, 7 - 40, 51 - 40);
      c.lineTo(7 - 40, 40 - 40);
      c.quadraticCurveTo(7 - 40, 33 - 40, 13 - 40, 31 - 40);
      c.lineTo(22 - 40, 23 - 40);
      c.quadraticCurveTo(28 - 40, 21 - 40, 32 - 40, 21 - 40);
      c.lineTo(45 - 40, 21 - 40);
      c.quadraticCurveTo(52 - 40, 23 - 40, 55 - 40, 28 - 40);
      c.lineTo(61 - 40, 39 - 40);
      c.lineTo(69 - 40, 41 - 40);
      c.quadraticCurveTo(74 - 40, 43 - 40, 74 - 40, 48 - 40);
      c.lineTo(74 - 40, 51 - 40);
      c.quadraticCurveTo(74 - 40, 57 - 40, 69 - 40, 57 - 40);
      c.lineTo(64.5 - 40, 57 - 40);
      c.stroke();

      c.beginPath();
      c.moveTo(29.5 - 40, 57 - 40);
      c.lineTo(51.5 - 40, 57 - 40);
      c.stroke();
      c.restore();
    }

    function drawCCTV(c, color) {
      c.save();
      c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.moveTo(12 - 40, 52 - 40); c.lineTo(12 - 40, 70 - 40);
      c.stroke();

      c.beginPath();
      c.moveTo(12 - 40, 61 - 40); c.lineTo(22 - 40, 61 - 40);
      c.quadraticCurveTo(31 - 40, 57 - 40, 34 - 40, 52 - 40);
      c.lineTo(40 - 40, 43 - 40);
      c.stroke();

      c.save();
      c.translate(46 - 40, 36 - 40);
      c.rotate(-35 * Math.PI / 180);

      c.beginPath();
      c.roundRect(-24, -13, 32, 26, 6);
      c.stroke();

      c.beginPath();
      c.moveTo(8, -9); c.lineTo(21, -15); c.lineTo(21, 15); c.lineTo(8, 9);
      c.stroke();

      c.beginPath();
      c.arc(-8, 0, 2.8, 0, 2 * Math.PI);
      c.fill();
      c.restore();

      c.restore();
    }

    function drawCard(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.roundRect(9 - 40, 19 - 40, 62, 42, 8);
      c.stroke();

      c.beginPath();
      c.moveTo(9 - 40, 32 - 40); c.lineTo(71 - 40, 32 - 40);
      c.stroke();
      c.restore();
    }

    function drawHeadphones(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.moveTo(17 - 40, 44 - 40);
      c.bezierCurveTo(17 - 40, 20 - 40, 25 - 40, 16 - 40, 40 - 40, 16 - 40);
      c.bezierCurveTo(55 - 40, 16 - 40, 63 - 40, 20 - 40, 63 - 40, 44 - 40);
      c.stroke();

      c.beginPath();
      c.roundRect(11 - 40, 44 - 40, 12, 24, 6);
      c.stroke();

      c.beginPath();
      c.roundRect(57 - 40, 44 - 40, 12, 24, 6);
      c.stroke();
      c.restore();
    }

    function drawSmartHome(c, color) {
      c.save();
      c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.moveTo(40 - 40, 12 - 40);
      c.lineTo(67 - 40, 34 - 40);
      c.quadraticCurveTo(70 - 40, 39 - 40, 70 - 40, 42 - 40);
      c.lineTo(70 - 40, 63 - 40);
      c.quadraticCurveTo(70 - 40, 70 - 40, 63 - 40, 70 - 40);
      c.lineTo(17 - 40, 70 - 40);
      c.quadraticCurveTo(10 - 40, 70 - 40, 10 - 40, 63 - 40);
      c.lineTo(10 - 40, 42 - 40);
      c.quadraticCurveTo(10 - 40, 36 - 40, 13 - 40, 34 - 40);
      c.closePath();
      c.stroke();

      c.beginPath();
      c.arc(40 - 40, 56 - 40, 2.8, 0, 2 * Math.PI);
      c.fill();

      c.beginPath();
      c.moveTo(30 - 40, 46 - 40);
      c.bezierCurveTo(33 - 40, 40 - 40, 47 - 40, 40 - 40, 50 - 40, 46 - 40);
      c.stroke();

      c.beginPath();
      c.moveTo(22 - 40, 35 - 40);
      c.bezierCurveTo(29 - 40, 25 - 40, 51 - 40, 25 - 40, 58 - 40, 35 - 40);
      c.stroke();
      c.restore();
    }

    function drawPhone(c, color) {
      c.save();
      c.strokeStyle = color; c.fillStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.roundRect(-22, -32, 44, 64, 10);
      c.stroke();

      c.beginPath();
      c.arc(0, 20, 2.8, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    }

    function drawAirplane(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.rotate(Math.PI / 4);
      c.beginPath();
      c.moveTo(0, -28);
      c.bezierCurveTo(3, -28, 4.5, -25, 4.5, -12);
      c.lineTo(27, 6);
      c.bezierCurveTo(29, 8, 28, 10, 25, 10);
      c.lineTo(4.5, 7);
      c.lineTo(3.5, 20);
      c.lineTo(13, 27);
      c.bezierCurveTo(14, 28, 13.5, 29, 12, 29);
      c.lineTo(0, 26);
      c.lineTo(-12, 29);
      c.bezierCurveTo(-13.5, 29, -14, 28, -13, 27);
      c.lineTo(-3.5, 20);
      c.lineTo(-4.5, 7);
      c.lineTo(-25, 10);
      c.bezierCurveTo(-28, 10, -29, 8, -27, 6);
      c.lineTo(-4.5, -12);
      c.bezierCurveTo(-4.5, -25, -3, -28, 0, -28);
      c.closePath();
      c.stroke();
      c.restore();
    }

    function drawCart(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath(); c.arc(-12, 24, 4.8, 0, 2 * Math.PI); c.stroke();
      c.beginPath(); c.arc(18, 24, 4.8, 0, 2 * Math.PI); c.stroke();

      c.beginPath();
      c.moveTo(12 - 40, 18 - 40);
      c.lineTo(18 - 40, 18 - 40);
      c.quadraticCurveTo(23 - 40, 18 - 40, 24 - 40, 24 - 40);
      c.lineTo(31 - 40, 52 - 40);
      c.quadraticCurveTo(34 - 40, 56 - 40, 38 - 40, 56 - 40);
      c.lineTo(62 - 40, 56 - 40);
      c.quadraticCurveTo(66 - 40, 56 - 40, 68 - 40, 52 - 40);
      c.lineTo(74 - 40, 25 - 40);
      c.quadraticCurveTo(75 - 40, 22 - 40, 70 - 40, 22 - 40);
      c.lineTo(24 - 40, 22 - 40);
      c.stroke();

      c.beginPath();
      c.moveTo(27 - 40, 36 - 40);
      c.lineTo(71 - 40, 36 - 40);
      c.stroke();
      c.restore();
    }

    function drawTV(c, color) {
      c.save();
      c.strokeStyle = color; c.lineWidth = 3.6;
      c.lineCap = 'round'; c.lineJoin = 'round';
      c.shadowColor = color; c.shadowBlur = 14;

      c.beginPath();
      c.moveTo(0, 28 - 40); c.lineTo(25 - 40, 12 - 40);
      c.moveTo(0, 28 - 40); c.lineTo(55 - 40, 12 - 40);
      c.stroke();

      c.beginPath();
      c.roundRect(-30, -12, 60, 42, 8);
      c.stroke();
      c.restore();
    }

    const ICONS = [
      { id: 'car', color: '#0070f3', draw: drawCar },
      { id: 'camera', color: '#0088ff', draw: drawCCTV },
      { id: 'card', color: '#00a6ff', draw: drawCard },
      { id: 'headphones', color: '#00c3ff', draw: drawHeadphones },
      { id: 'smart-home', color: '#00e5ff', draw: drawSmartHome },
      { id: 'phone', color: '#00d2ff', draw: drawPhone },
      { id: 'airplane', color: '#00b4d8', draw: drawAirplane },
      { id: 'cart', color: '#0096c7', draw: drawCart },
      { id: 'tv', color: '#0077b6', draw: drawTV },
    ];

    function handleResize() {
      if (!canvas) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale circle radius and grid positions for mobile / tablet / desktop
      if (width < 768) {
        // Mobile: lower circles sit in bottom region (y >= 52% height) well below text
        circleRadius = Math.max(85, Math.min(115, Math.floor(width / 3.8)));
        gridOffset.x = width * 0.5 - circleRadius;
        gridOffset.y = height * 0.72;
        const curCenter = getCircleCenter(activeCoord.col, activeCoord.row);
        if (curCenter.y < height * 0.52) {
          activeCoord = { col: 0, row: 0 };
        }
      } else if (width < 1024) {
        // Tablet: lower circles sit in row 1 (y ~ 575px) well below text
        circleRadius = Math.max(110, Math.min(140, Math.floor(width / 5.8)));
        gridOffset.x = width * 0.60 - circleRadius;
        gridOffset.y = height * 0.48;
        const curCenter = getCircleCenter(activeCoord.col, activeCoord.row);
        if (curCenter.y < height * 0.52) {
          activeCoord = { col: 0, row: 1 };
        }
      } else {
        // Desktop: spinner is positioned in the right half of the hero
        circleRadius = Math.max(130, Math.min(165, Math.floor(width / 7.2)));
        gridOffset.x = width * 0.72 - circleRadius;
        gridOffset.y = height * 0.5;
        if (activeCoord.row !== 0) {
          activeCoord = { col: 1, row: 0 };
        }
      }

      updateTargetPos();
      activePos.x = targetPos.x;
      activePos.y = targetPos.y;
    }

    function getCircleCenter(col, row) {
      const dy = circleRadius * Math.sqrt(3);
      const y = gridOffset.y + row * dy;
      const shift = (row % 2 !== 0) ? circleRadius : 0;
      const x = gridOffset.x + col * (2 * circleRadius) + shift;
      return { x, y };
    }

    function updateTargetPos() {
      const p = getCircleCenter(activeCoord.col, activeCoord.row);
      targetPos.x = p.x;
      targetPos.y = p.y;
    }

    function switchIconTo(nextIndex) {
      if (nextIndex === currentIconIndex) return;
      previousIconIndex = currentIconIndex;
      currentIconIndex = nextIndex;
      transitionProgress = 0;
      rippleRadius = 10;
      rippleAlpha = 0.9;
    }

    function handleClick(e) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let closest = null;
      let minDistance = Infinity;

      // On tablet and mobile (width < 1024), the spinner can ONLY spin on lower circles (below text)!
      const isMobileOrTablet = width < 1024;
      const candidateCircles = isMobileOrTablet
        ? circlesList.filter((c) => c.y >= height * 0.52)
        : circlesList;

      for (const c of candidateCircles) {
        const dx = mouseX - c.x;
        const dy = mouseY - c.y;
        const dist = Math.hypot(dx, dy);
        if (dist <= circleRadius && dist < minDistance) {
          minDistance = dist;
          closest = c;
        }
      }

      if (closest) {
        activeCoord = { col: closest.col, row: closest.row };
        updateTargetPos();
        switchIconTo((currentIconIndex + 1) % ICONS.length);
      }
    }

    function easeInOutCubic(x) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    function generateVisibleCircles() {
      circlesList = [];
      const R = circleRadius;
      const dy = R * Math.sqrt(3);

      const minRow = Math.floor((-R * 2 - gridOffset.y) / dy) - 1;
      const maxRow = Math.ceil((height + R * 2 - gridOffset.y) / dy) + 1;

      for (let r = minRow; r <= maxRow; r++) {
        const shift = (r % 2 !== 0) ? R : 0;
        const minCol = Math.floor((-R * 2 - gridOffset.x - shift) / (2 * R)) - 1;
        const maxCol = Math.ceil((width + R * 2 - gridOffset.x - shift) / (2 * R)) + 1;

        for (let c = minCol; c <= maxCol; c++) {
          const center = getCircleCenter(c, r);
          circlesList.push({
            col: c, row: r,
            x: center.x, y: center.y,
            isActive: (c === activeCoord.col && r === activeCoord.row),
          });
        }
      }
    }

    function drawSingleCusp(C1, C2, C3) {
      const R = circleRadius;
      const gx = (C1.x + C2.x + C3.x) / 3;
      const gy = (C1.y + C2.y + C3.y) / 3;

      const isAdjacentToActive = C1.isActive || C2.isActive || C3.isActive;

      const a1_start = Math.atan2(C2.y - C1.y, C2.x - C1.x);
      const a1_end = Math.atan2(C3.y - C1.y, C3.x - C1.x);
      const a2_start = Math.atan2(C3.y - C2.y, C3.x - C2.x);
      const a2_end = Math.atan2(C1.y - C2.y, C1.x - C2.x);
      const a3_start = Math.atan2(C1.y - C3.y, C1.x - C3.x);
      const a3_end = Math.atan2(C2.y - C3.y, C2.x - C3.x);

      ctx.beginPath();
      ctx.arc(C1.x, C1.y, R, a1_start, a1_end, false);
      ctx.arc(C2.x, C2.y, R, a2_start, a2_end, false);
      ctx.arc(C3.x, C3.y, R, a3_start, a3_end, false);
      ctx.closePath();

      if (isAdjacentToActive) {
        const distToActive = Math.hypot(gx - activePos.x, gy - activePos.y);
        const intensity = Math.max(0.6, 1.0 - (distToActive / (R * 2.2)));

        const cuspGrad = ctx.createRadialGradient(gx, gy, 0, gx, gy, R * 0.7);
        cuspGrad.addColorStop(0, `rgba(0, 110, 255, ${0.95 * intensity})`);
        cuspGrad.addColorStop(0.7, `rgba(0, 85, 230, ${0.85 * intensity})`);
        cuspGrad.addColorStop(1, `rgba(0, 60, 190, ${0.75 * intensity})`);

        ctx.fillStyle = cuspGrad;
        ctx.fill();

        ctx.strokeStyle = `rgba(0, 210, 255, ${0.45 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(10, 30, 75, 0.45)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(30, 70, 150, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    function drawInterstitialCusps() {
      const circleMap = new Map();
      circlesList.forEach((c) => circleMap.set(`${c.col},${c.row}`, c));

      circlesList.forEach((c1) => {
        const c2 = circleMap.get(`${c1.col + 1},${c1.row}`);
        if (!c2) return;

        const topCol = (c1.row % 2 === 0) ? c1.col : c1.col + 1;
        const botCol = (c1.row % 2 === 0) ? c1.col : c1.col + 1;

        const cTop = circleMap.get(`${topCol},${c1.row - 1}`);
        const cBot = circleMap.get(`${botCol},${c1.row + 1}`);

        if (cTop) drawSingleCusp(c1, c2, cTop);
        if (cBot) drawSingleCusp(c1, cBot, c2);
      });
    }

    function drawCircles() {
      const R = circleRadius;
      circlesList.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, R, 0, 2 * Math.PI);

        if (c.isActive) {
          const innerGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, R);
          innerGrad.addColorStop(0, '#0c245c');
          innerGrad.addColorStop(0.75, '#091c45');
          innerGrad.addColorStop(1, '#071536');
          ctx.fillStyle = innerGrad;
          ctx.fill();

          ctx.strokeStyle = 'rgba(0, 220, 255, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          ctx.fillStyle = '#081a3d';
          ctx.fill();

          ctx.strokeStyle = 'rgba(32, 75, 150, 0.35)';
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      });
    }

    function drawHexEdge(p1, p2, isNearActive) {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);

      if (isNearActive) {
        ctx.strokeStyle = 'rgba(0, 160, 255, 0.4)';
        ctx.lineWidth = 1.2;
      } else {
        ctx.strokeStyle = 'rgba(30, 80, 160, 0.18)';
        ctx.lineWidth = 0.8;
      }
      ctx.stroke();
    }

    function drawHexagonalGridLines() {
      const circleMap = new Map();
      circlesList.forEach((c) => circleMap.set(`${c.col},${c.row}`, c));

      ctx.save();
      circlesList.forEach((c1) => {
        const c2 = circleMap.get(`${c1.col + 1},${c1.row}`);
        if (!c2) return;

        const topCol = (c1.row % 2 === 0) ? c1.col : c1.col + 1;
        const botCol = (c1.row % 2 === 0) ? c1.col : c1.col + 1;

        const cTop = circleMap.get(`${topCol},${c1.row - 1}`);
        const cBot = circleMap.get(`${botCol},${c1.row + 1}`);

        const p12 = { x: (c1.x + c2.x) / 2, y: (c1.y + c2.y) / 2 };

        if (cTop) {
          const gTop = { x: (c1.x + c2.x + cTop.x) / 3, y: (c1.y + c2.y + cTop.y) / 3 };
          drawHexEdge(gTop, p12, c1.isActive || c2.isActive || cTop.isActive);
        }

        if (cBot) {
          const gBot = { x: (c1.x + c2.x + cBot.x) / 3, y: (c1.y + c2.y + cBot.y) / 3 };
          drawHexEdge(gBot, p12, c1.isActive || c2.isActive || cBot.isActive);
        }
      });
      ctx.restore();
    }

    function drawRippleEffect() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(activePos.x, activePos.y, rippleRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(0, 240, 255, ${rippleAlpha * 0.7})`;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();
    }

    function drawConicDashedRing() {
      const R = circleRadius;
      const NUM_TICKS = 72;
      const innerR = R - 6;
      const outerR = R + 14;

      ctx.save();
      ctx.translate(activePos.x, activePos.y);

      const conicGrad = ctx.createConicGradient(rotationAngle, 0, 0);
      GRADIENT_STOPS.forEach((s) => conicGrad.addColorStop(s.stop, s.color));

      ctx.save();
      ctx.shadowColor = 'rgba(0, 220, 255, 0.45)';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      for (let i = 0; i < NUM_TICKS; i++) {
        const angle = (i * 2 * Math.PI) / NUM_TICKS + rotationAngle;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        ctx.moveTo(cos * innerR, sin * innerR);
        ctx.lineTo(cos * outerR, sin * outerR);
      }
      ctx.strokeStyle = conicGrad;
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.restore();

      ctx.beginPath();
      for (let i = 0; i < NUM_TICKS; i++) {
        const angle = (i * 2 * Math.PI) / NUM_TICKS + rotationAngle;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        ctx.moveTo(cos * innerR, sin * innerR);
        ctx.lineTo(cos * outerR, sin * outerR);
      }
      ctx.strokeStyle = conicGrad;
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.restore();
    }

    function drawActiveIcon() {
      ctx.save();
      ctx.translate(activePos.x, activePos.y);

      const iconBaseScale = (circleRadius / 150) * 1.25;
      const currentIcon = ICONS[currentIconIndex];
      const prevIcon = ICONS[previousIconIndex];

      if (transitionProgress < 1.0) {
        const ease = easeInOutCubic(transitionProgress);

        ctx.save();
        const prevScale = iconBaseScale * (1.0 - ease * 0.35);
        ctx.scale(prevScale, prevScale);
        ctx.globalAlpha = Math.max(0, 1.0 - ease * 1.5);
        prevIcon.draw(ctx, prevIcon.color);
        ctx.restore();

        ctx.save();
        const newScale = iconBaseScale * (0.65 + ease * 0.35);
        ctx.scale(newScale, newScale);
        ctx.globalAlpha = Math.min(1.0, ease * 1.4);
        currentIcon.draw(ctx, currentIcon.color);
        ctx.restore();
      } else {
        const breathe = 1.0 + Math.sin(Date.now() * 0.003) * 0.02;
        const scale = iconBaseScale * breathe;
        ctx.scale(scale, scale);
        currentIcon.draw(ctx, currentIcon.color);
      }

      ctx.restore();
    }

    function drawScene() {
      ctx.fillStyle = '#071738';
      ctx.fillRect(0, 0, width, height);

      const bgGlow = ctx.createRadialGradient(
        activePos.x, activePos.y, circleRadius * 0.3,
        activePos.x, activePos.y, circleRadius * 2.8
      );
      bgGlow.addColorStop(0, 'rgba(13, 42, 107, 0.65)');
      bgGlow.addColorStop(0.6, 'rgba(8, 25, 62, 0.4)');
      bgGlow.addColorStop(1, 'rgba(7, 23, 56, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      generateVisibleCircles();
      drawInterstitialCusps();
      drawCircles();
      drawHexagonalGridLines();

      if (rippleAlpha > 0.01) {
        drawRippleEffect();
      }

      drawConicDashedRing();
      drawActiveIcon();
    }

    let lastTimestamp = 0;
    function renderLoop(timestamp) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
      lastTimestamp = timestamp;

      if (isPlaying) {
        previousAngle = rotationAngle;
        rotationAngle += BASE_ROTATION_SPEED * speed * deltaTime;

        const prevTurns = Math.floor(previousAngle / (2 * Math.PI));
        const currTurns = Math.floor(rotationAngle / (2 * Math.PI));

        if (currTurns > prevTurns) {
          switchIconTo((currentIconIndex + 1) % ICONS.length);
        }
      }

      activePos.x += (targetPos.x - activePos.x) * 0.12;
      activePos.y += (targetPos.y - activePos.y) * 0.12;

      if (transitionProgress < 1.0) {
        transitionProgress = Math.min(1.0, transitionProgress + deltaTime * 2.8);
      }

      if (rippleAlpha > 0.01) {
        rippleRadius += (circleRadius * 1.15 - rippleRadius) * (deltaTime * 4.5);
        rippleAlpha = Math.max(0, rippleAlpha - deltaTime * 1.4);
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      drawScene();
      ctx.restore();

      rafId = requestAnimationFrame(renderLoop);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('click', handleClick);
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('click', handleClick);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        cursor: 'pointer',
      }}
    />
  );
}
