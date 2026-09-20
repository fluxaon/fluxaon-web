import { razones } from "@/content/site";
import { icons } from "../icons";
import TechBackdrop from "../TechBackdrop";
import { Container, SectionHeading } from "../ui";

export default function PorQue() {
  return (
    <section id="por-que" className="section-y bg-surface">
      <Container>
        <div className="relative isolate overflow-hidden rounded-block bg-navy-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <TechBackdrop className="absolute inset-0 -z-10 h-full w-full" density={20} opacity={0.75} />
          <div
            aria-hidden
            data-parallax="60"
            className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-purple-500/25 blur-[100px]"
          />
          <SectionHeading
            onDark
            eyebrow="Por qué Fluxaon"
            title="No somos una agencia de desarrollo. Somos el puente entre el negocio y la tecnología."
          />
          {/* Las razones con texto van en columnas; la de sectores ocupa todo el ancho */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:gap-5">
            {razones
              .filter((r) => !("sectores" in r))
              .map((r, i) => {
                const Icon = icons[r.icon];
                return (
                  <article
                    key={r.title}
                    data-reveal
                    style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
                    className="card-hover rounded-card border border-white/10 bg-navy-700 p-6 text-white"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-white/10 text-purple-400">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-muted-dark">{"body" in r ? r.body : null}</p>
                  </article>
                );
              })}
          </div>

          {razones
            .filter((r) => "sectores" in r)
            .map((r) => {
              const Icon = icons[r.icon];
              return (
                <article
                  key={r.title}
                  data-reveal
                  className="card-hover mt-4 rounded-card border border-white/10 bg-navy-700 p-6 text-white lg:mt-5 lg:p-8"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-white/10 text-purple-400">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg font-bold sm:text-xl">{r.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {r.sectores.map((sector) => (
                      <li
                        key={sector}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white transition-colors duration-300 hover:border-purple-400/50 hover:bg-purple-500/15 sm:text-sm"
                      >
                        {sector}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] flow-gradient" />
        </div>
      </Container>
    </section>
  );
}
