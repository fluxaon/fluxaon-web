/**
 * Isotipo del inicio dibujado como una sola línea que avanza, se forma,
 * se borra y vuelve a empezar. El trazo sigue el recorrido de la cinta del logo.
 */

/** Recorrido central de la cinta, en el sistema de la imagen del isotipo (423 × 640) */
const RIBBON = "M348 62 L74 192 L322 318 L76 450 L76 586";

export default function HeroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 423 640"
      className={className}
      role="img"
      aria-label="Isotipo de Fluxaon dibujándose"
      fill="none"
    >
      <defs>
        <linearGradient id="fluxaon-ribbon" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="55%" stopColor="#4A8CF7" />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
        <filter id="fluxaon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Rastro tenue del recorrido completo */}
      <path
        d={RIBBON}
        stroke="#ffffff"
        strokeOpacity="0.07"
        strokeWidth="126"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Trazo que se dibuja y se borra en bucle */}
      <path
        className="hero-mark-draw"
        d={RIBBON}
        pathLength={1}
        stroke="url(#fluxaon-ribbon)"
        strokeWidth="126"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#fluxaon-glow)"
      />

      {/* Punto de luz que va por delante de la línea */}
      <circle className="hero-mark-dot" r="9" fill="#ffffff" />
    </svg>
  );
}
