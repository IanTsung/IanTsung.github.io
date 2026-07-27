"use client";
import React, { useEffect, useRef } from "react";

const DOT_SPACING = 42;
const REPEL_RADIUS = 140;
const MAX_DISPLACEMENT = 22;
const SPRING = 0.11;
const FRICTION = 0.78;

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    if (!ctx || !parent) return;

    let rafId = 0;
    let dots = [];
    let width = 0;
    let height = 0;
    let dotRgb = "134 134 139";

    const readDotColor = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--apple-dim-rgb")
        .trim();
      if (value) dotRgb = value;
    };

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / DOT_SPACING) + 1;
      const rows = Math.ceil(height / DOT_SPACING) + 1;
      const offsetX = (width - (cols - 1) * DOT_SPACING) / 2;
      const offsetY = (height - (rows - 1) * DOT_SPACING) / 2;

      dots = new Array(cols * rows);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const bx = offsetX + c * DOT_SPACING;
          const by = offsetY + r * DOT_SPACING;
          dots[r * cols + c] = { bx, by, x: bx, y: by, vx: 0, vy: 0 };
        }
      }
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onPointerLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const radSq = REPEL_RADIUS * REPEL_RADIUS;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        const dx = dot.bx - mx;
        const dy = dot.by - my;
        const distSq = dx * dx + dy * dy;

        let targetX = dot.bx;
        let targetY = dot.by;
        let size = 1;
        let alpha = 0.28;

        if (distSq < radSq) {
          const dist = Math.sqrt(distSq) || 0.0001;
          const force = 1 - dist / REPEL_RADIUS;
          const nx = dx / dist;
          const ny = dy / dist;
          targetX = dot.bx + nx * force * MAX_DISPLACEMENT;
          targetY = dot.by + ny * force * MAX_DISPLACEMENT;
          size = 1 + force * 1.6;
          alpha = 0.28 + force * 0.55;
        }

        dot.vx = (dot.vx + (targetX - dot.x) * SPRING) * FRICTION;
        dot.vy = (dot.vy + (targetY - dot.y) * SPRING) * FRICTION;
        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${dotRgb} / ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(loop);
    };

    readDotColor();
    setup();
    loop();

    const ro = new ResizeObserver(() => setup());
    ro.observe(parent);

    const themeObserver = new MutationObserver(readDotColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default HeroCanvas;
