import { existsSync } from "node:fs";
import path from "node:path";
import { hero } from "@/content/site";
import HeroIsotipo from "../HeroIsotipo";
import HeroMark from "../HeroMark";
import TechBackdrop from "../TechBackdrop";
import { ButtonLink, Container } from "../ui";

// Con el video del isotipo 3D (Higgsfield) en public/video/, el inicio lo usa;
// si no está, dibuja el isotipo como trazo.
const hasHeroVideo = existsSync(path.join(process.cwd(), "public", "video", "hero.mp4"));

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#081837_0%,#0A1F44_55%,#0E2A5C_100%)] pt-16 lg:pt-20"
    >
      {/* Red de nodos y resplandores radiales detrás del isotipo */}
      <TechBackdrop className="absolute inset-0 -z-10 h-full w-full" density={30} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          data-parallax="-90"
          className="absolute top-[4%] right-[8%] h-[340px] w-[340px] rounded-full bg-cyan-500/25 blur-[110px] lg:top-[6%] lg:right-[14%] lg:h-[420px] lg:w-[420px]"
        />
        <div
          data-parallax="120"
          className="absolute right-[-10%] bottom-[-8%] h-[480px] w-[480px] rounded-full bg-purple-500/30 blur-[130px] lg:right-[2%] lg:h-[640px] lg:w-[640px]"
        />
      </div>

      <Container className="grid items-center gap-10 pt-12 pb-20 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-8 lg:pb-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-ink-muted-dark sm:text-[13px]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[40px] leading-[1.04] font-extrabold text-white sm:text-[56px] lg:text-[68px]">
            {hero.titleLead} <span className="text-cyan-500">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted-dark">{hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto">Agenda un diagnóstico</ButtonLink>
            <ButtonLink href="#metodologia" variant="outline-light">
              Cómo trabajamos
            </ButtonLink>
          </div>
        </div>

        {/* mix-blend-screen va en este contenedor: el video trae fondo azul oscuro
            y así se funde con el degradado del inicio en lugar de verse como un recuadro */}
        <div data-parallax="70" className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          {hasHeroVideo ? (
            <HeroIsotipo />
          ) : (
            // Isotipo que se dibuja solo, hasta tener el video 3D
            <div className="flex aspect-square w-full items-center justify-center">
              <HeroMark className="animate-float h-[78%] w-auto drop-shadow-[0_24px_60px_rgba(123,63,228,0.45)]" />
            </div>
          )}
        </div>
      </Container>

      <div aria-hidden className="h-[2px] w-full flow-gradient" />
    </section>
  );
}
