/**
 * Maquetas animadas que aparecen al pasar el mouse por una tarjeta de Soluciones.
 * Son HTML y CSS (nada de imágenes): pesan cero, se ven nítidas en cualquier
 * pantalla y se animan solas al entrar el puntero en la tarjeta (`group`).
 */

export type Vista = "tablero" | "app" | "flujo" | "conversacion";

/** Retraso escalonado para que los elementos aparezcan uno tras otro */
const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

export default function SolucionPreview({ vista }: { vista: Vista }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-control border border-border bg-navy-900 p-3">
      {vista === "tablero" && <Tablero />}
      {vista === "app" && <App />}
      {vista === "flujo" && <Flujo />}
      {vista === "conversacion" && <Conversacion />}
    </div>
  );
}

function Tablero() {
  const barras = [38, 62, 46, 80, 58, 92];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex gap-2">
        {[0, 1].map((i) => (
          <div key={i} className="flex-1 rounded-[4px] bg-white/[0.06] px-2 py-1.5">
            <span className="block h-1 w-6 rounded-full bg-white/20" />
            <span
              className="mt-1 block h-1.5 w-10 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
              style={{ ...delay(120 + i * 90), background: i ? "var(--color-purple-400)" : "var(--color-cyan-500)" }}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-end gap-1.5 rounded-[4px] bg-white/[0.04] p-2">
        {barras.map((h, i) => (
          <span
            key={i}
            className="flex-1 origin-bottom scale-y-0 rounded-[2px] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-y-100"
            style={{
              height: `${h}%`,
              ...delay(180 + i * 70),
              background: `linear-gradient(180deg, var(--color-cyan-500), var(--color-purple-500))`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[4px] bg-white/[0.05]">
      <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
        <span className="ml-2 h-1 w-14 rounded-full bg-white/15" />
      </div>
      <div className="flex flex-1 gap-2 p-2">
        <div className="flex w-8 flex-col gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 rounded-full bg-white/10" />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="flex h-4 translate-y-2 items-center gap-2 rounded-[3px] bg-white/[0.07] px-1.5 opacity-0 transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:translate-y-0 group-hover:opacity-100"
              style={delay(120 + i * 90)}
            >
              <span className="h-1 flex-1 rounded-full bg-white/20" />
              <span className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-purple-400" : "bg-cyan-500/80"}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Flujo() {
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="flujo-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
      </defs>
      <path d="M22 45 H60 M100 45 H138" stroke="#ffffff" strokeOpacity="0.15" strokeWidth="2" strokeLinecap="round" />
      <path
        className="origin-left scale-x-0 transition-transform delay-100 duration-700 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
        d="M22 45 H138"
        stroke="url(#flujo-grad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[22, 80, 138].map((cx, i) => (
        <g key={cx}>
          <rect
            x={cx - 13}
            y={32}
            width="26"
            height="26"
            rx="7"
            fill="#0E2A5C"
            stroke="#ffffff"
            strokeOpacity="0.16"
          />
          <circle
            cx={cx}
            cy={45}
            r="4"
            className="opacity-30 transition-opacity duration-500 group-hover:opacity-100"
            style={delay(150 + i * 200)}
            fill={i === 2 ? "#7B3FE4" : "#00C2FF"}
          />
        </g>
      ))}
    </svg>
  );
}

function Conversacion() {
  const burbujas = [
    { w: "w-16", mine: false },
    { w: "w-20", mine: true },
    { w: "w-12", mine: false },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-1.5 px-1">
      {burbujas.map((b, i) => (
        <span
          key={i}
          className={`flex h-5 items-center rounded-full px-2 transition-all duration-500 ease-[var(--ease-out-soft)] ${b.w} ${
            b.mine
              ? "ml-auto translate-x-2 bg-purple-500/70"
              : "translate-x-[-8px] border border-white/10 bg-white/[0.07]"
          } opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}
          style={delay(120 + i * 220)}
        >
          <span className="h-1 w-full rounded-full bg-white/30" />
        </span>
      ))}
    </div>
  );
}
