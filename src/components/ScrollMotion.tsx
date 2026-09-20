"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

/**
 * Movimiento ligado al scroll, sin bloquearlo:
 *  - [data-parallax="-60"] se desplaza esa cantidad de píxeles mientras pasa por pantalla.
 *  - [data-scroll-scale] crece levemente al entrar.
 * Se desactiva con prefers-reduced-motion.
 */
export default function ScrollMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const distance = Number(el.dataset.parallax) || 0;
        gsap.fromTo(
          el,
          { y: -distance / 2 },
          {
            y: distance / 2,
            ease: "none",
            scrollTrigger: { trigger: el.closest("section") ?? el, start: "top bottom", end: "bottom top", scrub: 0.6 },
          },
        );
      });

      document.querySelectorAll<HTMLElement>("[data-scroll-scale]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.08 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "top 40%", scrub: 0.6 },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
