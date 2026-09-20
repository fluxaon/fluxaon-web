"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** Nodos por cada millón de píxeles de superficie */
  density?: number;
  /** Opacidad general del dibujo */
  opacity?: number;
};

/**
 * Red de nodos que se desplaza lentamente detrás de las secciones oscuras.
 * Se detiene cuando no está en pantalla, en pestañas ocultas y con movimiento reducido.
 */
export default function TechBackdrop({ className = "", density = 26, opacity = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(rect.width * dpr));
      h = Math.max(1, Math.round(rect.height * dpr));
      canvas.width = w;
      canvas.height = h;
      const count = Math.round(((w * h) / (1_000_000 * dpr)) * density);
      nodes = Array.from({ length: Math.min(90, Math.max(14, count)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (Math.random() - 0.5) * 0.12 * dpr,
        r: (Math.random() * 1.6 + 0.9) * dpr,
      }));
    };

    const link = 150 * dpr;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = opacity;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > link) continue;
          const t = 1 - d / link;
          ctx.strokeStyle = `rgba(${Math.round(0 + 123 * (a.x / w))},${Math.round(194 - 131 * (a.x / w))},${Math.round(255 - 27 * (a.x / w))},${0.16 * t})`;
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const t = n.x / w;
        ctx.fillStyle = `rgba(${Math.round(123 * t)},${Math.round(194 - 131 * t)},${Math.round(255 - 27 * t)},0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    const io = new IntersectionObserver((e) => (visible = e[0].isIntersecting), { rootMargin: "120px" });
    io.observe(canvas);
    build();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density, opacity]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none ${className}`} />;
}
