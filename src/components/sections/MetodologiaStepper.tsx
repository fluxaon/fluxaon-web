"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import TechBackdrop from "../TechBackdrop";
import { Container, Eyebrow } from "../ui";

type Paso = { title: string; body: string };

/** Duración de cada paso cuando avanza solo */
const STEP_MS = 3200;
/** Tras un clic o toque, el paso se queda quieto este tiempo (para pantallas sin mouse) */
const HOLD_MS = 12000;
const TITLE = "Un flujo de nueve pasos, del diagnóstico al resultado.";
const pad = (n: number) => String(n).padStart(2, "0");
const imageFor = (i: number) => `/metodologia/pasos/${pad(i + 1)}.webp`;

export default function MetodologiaStepper({ pasos, hasImages }: { pasos: Paso[]; hasImages: boolean }) {
  const total = pasos.length;
  const [step, setStep] = useState(0);
  const [onScreen, setOnScreen] = useState(false);
  /** true mientras el puntero (o el foco del teclado) está sobre la lista de pasos */
  const [held, setHeld] = useState(false);
  const holdUntil = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  const go = useCallback(
    (i: number) => {
      setStep(((i % total) + total) % total);
    },
    [total],
  );

  // Solo avanza cuando la sección está en pantalla
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => setOnScreen(entries[0].isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = onScreen && !held;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (document.hidden || Date.now() < holdUntil.current) return;
      setStep((s) => (s + 1) % total);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [playing, total, step]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(step + 1);
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(step - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="metodologia"
      className="relative isolate scroll-mt-16 overflow-hidden bg-navy-950 py-16 lg:py-24"
    >
      <TechBackdrop className="absolute inset-0 -z-10 h-full w-full" opacity={0.9} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-parallax="-60"
          className="absolute top-[-6%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/12 blur-[120px]"
        />
        <div
          data-parallax="80"
          className="absolute right-[-8%] bottom-[-10%] h-[520px] w-[520px] rounded-full bg-purple-500/18 blur-[130px]"
        />
      </div>

      <Container>
        <div data-reveal className="max-w-3xl">
          <Eyebrow onDark>Metodología</Eyebrow>
          <h2 className="mt-4 text-[32px] leading-[1.1] font-extrabold text-white sm:text-[40px] lg:text-[48px]">{TITLE}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted-dark">
            El flujo avanza solo. Toca cualquier paso para verlo en detalle.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10">
          {/* Escenario: imagen del paso con fundido y acercamiento lento */}
          <div data-reveal className="order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative aspect-[16/11] overflow-hidden rounded-block border border-white/10 bg-navy-900 lg:aspect-[16/12]">
            {hasImages &&
              pasos.map((p, i) => (
                <Image
                  key={p.title}
                  src={imageFor(i)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  priority={i === 0}
                  className={`object-cover transition-[opacity,transform] duration-[1200ms] ease-[var(--ease-out-soft)] ${
                    i === step ? "scale-105 opacity-100" : "scale-100 opacity-0"
                  }`}
                />
              ))}
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,55,0.1)_45%,rgba(8,24,55,0.92)_100%)]" />

            <div key={step} className="absolute inset-x-0 bottom-0 animate-[step-in_0.6s_var(--ease-out-soft)_both] p-6 sm:p-8">
              <p className="font-display text-sm font-bold tracking-[0.12em] text-cyan-500">
                PASO {pad(step + 1)} <span className="text-ink-muted-dark">/ {pad(total)}</span>
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white sm:text-[28px]">{pasos[step].title}</h3>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink-muted-dark sm:text-base">{pasos[step].body}</p>
              </div>
            </div>
          </div>

          {/* Lista de pasos: se puede hacer clic y marca el avance automático */}
          {/* Se detiene mientras el puntero está sobre la lista y sigue al salir */}
          <ol
            className="order-2 lg:order-1"
            onKeyDown={onKey}
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={() => {
              holdUntil.current = 0;
              setHeld(false);
            }}
            onFocusCapture={() => setHeld(true)}
            onBlurCapture={() => setHeld(false)}
          >
            {pasos.map((p, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <li key={p.title}>
                  <button
                    type="button"
                    onMouseEnter={() => go(i)}
                    onFocus={() => go(i)}
                    onClick={() => {
                      go(i);
                      holdUntil.current = Date.now() + HOLD_MS;
                    }}
                    aria-current={active ? "step" : undefined}
                    className={`group relative flex w-full items-start gap-4 rounded-card px-4 py-3.5 text-left transition-colors duration-300 ${
                      active ? "bg-white/[0.07]" : "hover:bg-white/[0.04]"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold transition-colors duration-300 ${
                        active
                          ? "bg-purple-500 text-white"
                          : done
                            ? "bg-cyan-500/15 text-cyan-500"
                            : "bg-white/5 text-ink-muted-dark"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[17px] font-bold transition-colors duration-300 ${
                          active ? "text-white" : "text-ink-muted-dark group-hover:text-white"
                        }`}
                      >
                        {p.title}
                      </span>
                      {/* Barra de avance del paso activo */}
                      <span aria-hidden className="mt-3 block h-px w-full bg-white/10">
                        <span
                          key={`${i}-${step}-${playing}`}
                          className={`block h-px w-0 flow-gradient ${
                            active && playing ? "animate-[step-progress_var(--step-ms)_linear_forwards]" : ""
                          } ${(active && !playing) || done ? "w-full" : ""}`}
                          style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}
                        />
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
