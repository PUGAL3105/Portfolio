import { useEffect, useRef } from 'react';

function initMeshBackground(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let lastTime = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // Large ambient blobs coordinates
  const blobs = [
    { x: 0.2, y: 0.3, rx: 0.25, ry: 0.35, vx: 0.02, vy: 0.015, color: 'rgba(59, 130, 246, 0.05)' }, // Indigo/Blue
    { x: 0.8, y: 0.7, rx: 0.3, ry: 0.4, vx: -0.015, vy: -0.02, color: 'rgba(200, 170, 130, 0.04)' } // Soft Gold
  ];

  function render(timestamp: number) {
    if (!lastTime) lastTime = timestamp;
    const elapsed = timestamp - lastTime;

    // Throttle frame rate on mobile to save battery, desktop stays smooth
    const fpsThreshold = width < 768 ? 32 : 15;
    if (elapsed < fpsThreshold) {
      animationFrameId = requestAnimationFrame(render);
      return;
    }

    lastTime = timestamp;
    const time = timestamp / 1000;

    // Draw main black background to match the website style
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);

    if (!prefersReduced) {
      // Update and Draw ambient blobs
      for (const b of blobs) {
        b.x += b.vx * (elapsed / 1000);
        b.y += b.vy * (elapsed / 1000);

        // Boundary checks
        if (b.x < 0.05 || b.x > 0.95) b.vx *= -1;
        if (b.y < 0.05 || b.y > 0.95) b.vy *= -1;

        const bx = b.x * width;
        const by = b.y * height;
        const brad = Math.max(width, height) * 0.45;

        const blobGrad = ctx.createRadialGradient(bx, by, 0, bx, by, brad);
        blobGrad.addColorStop(0, b.color);
        blobGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = blobGrad;
        ctx.beginPath();
        ctx.arc(bx, by, brad, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw subtle animated grid mesh
    const gridSize = 64;
    const gridOffset = prefersReduced ? 0 : (time * 12) % gridSize;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)'; // Very faint white lines
    ctx.lineWidth = 1;

    // We use a radial mask for the grid lines so they fade at edges
    const maskGrad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) * 0.7);
    maskGrad.addColorStop(0, 'rgba(255, 255, 255, 0.05)');
    maskGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.02)');
    maskGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = maskGrad;

    // Draw vertical lines
    for (let x = gridOffset; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = gridOffset; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    if (!prefersReduced) {
      animationFrameId = requestAnimationFrame(render);
    }
  }

  window.addEventListener('resize', resize);
  resize();
  animationFrameId = requestAnimationFrame(render);

  return () => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationFrameId);
  };
}

export default function AmberCascades() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initMeshBackground(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none', // Prevents blocking clicks on elements below
      }}
    />
  );
}
