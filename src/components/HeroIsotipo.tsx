"use client";

import { useRef, useState, useSyncExternalStore } from "react";

/** true si la persona pidió movimiento reducido en su sistema */
function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

/** Safari no reproduce WebM con transparencia: ahí se usa el MP4 fundido con el fondo */
function useNeedsBlend() {
  return useSyncExternalStore(
    () => () => {},
    () => document.createElement("video").canPlayType('video/webm; codecs="vp9"') === "",
    () => false,
  );
}

/**
 * Isotipo del inicio. El video (con fondo transparente) muestra cómo se forma la
 * cinta una sola vez y se detiene en su último cuadro: el isotipo queda ahí,
 * flotando apenas. No hay imagen de respaldo detrás, para no tapar el fondo.
 */
export default function HeroIsotipo() {
  const reduced = useReducedMotion();
  const blend = useNeedsBlend();
  const [formed, setFormed] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex aspect-square w-full items-center justify-center">
      <video
        ref={ref}
        className={`h-full w-full object-contain ${formed ? "animate-float-soft" : ""} ${
          blend ? "mix-blend-screen" : ""
        }`}
        autoPlay={!reduced}
        muted
        playsInline
        preload="auto"
        aria-hidden
        onEnded={() => setFormed(true)}
        onLoadedMetadata={(e) => {
          // Con movimiento reducido no se anima: se muestra el isotipo ya formado
          if (reduced) {
            const v = e.currentTarget;
            v.currentTime = Math.max(0, v.duration - 0.05);
            v.pause();
          }
        }}
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
