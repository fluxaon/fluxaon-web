import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import TechBackdrop from "@/components/TechBackdrop";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { soluciones } from "@/content/site";

export const metadata: Metadata = {
  title: "Soluciones · Fluxaon",
  description:
    "Dashboards, aplicaciones web, portales de clientes, automatización, integraciones, inteligencia artificial, chatbots y analítica de datos: qué incluye cada uno y cuándo conviene.",
};

export default function SolucionesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Portada */}
        <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#081837_0%,#0A1F44_100%)] pt-[72px] lg:pt-24">
          <TechBackdrop className="absolute inset-0 -z-10 h-full w-full" density={26} />
          <div
            aria-hidden
            data-parallax="80"
            className="pointer-events-none absolute right-[-6%] bottom-[-20%] -z-10 h-[420px] w-[420px] rounded-full bg-purple-500/25 blur-[120px]"
          />
          <Container className="py-14 lg:py-20">
            <Link
              href="/#soluciones"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted-dark transition-colors hover:text-white"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              Volver al inicio
            </Link>
            <div className="mt-6 max-w-3xl">
              <Eyebrow onDark>Soluciones</Eyebrow>
              <h1 className="mt-4 text-[34px] leading-[1.08] font-extrabold text-white sm:text-[44px] lg:text-[54px]">
                Qué construimos, qué incluye y cuándo conviene.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted-dark">
                Cada solución nace de un proceso ya diagnosticado y rediseñado. Aquí está el detalle de las ocho, con
                las señales que suelen indicar que tu empresa la necesita.
              </p>
            </div>

            {/* Índice de las 8 */}
            <ul className="mt-10 flex flex-wrap gap-2">
              {soluciones.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-ink-muted-dark transition-colors hover:border-purple-400/60 hover:text-white"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
          <div aria-hidden className="h-[2px] w-full flow-gradient" />
        </section>

        {/* Las 8 soluciones, una tras otra */}
        {soluciones.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`section-y scroll-mt-24 ${i % 2 === 0 ? "bg-surface" : "bg-surface-alt"}`}
          >
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                <div data-reveal>
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/soluciones/${s.icon}.webp`}
                      alt=""
                      width={160}
                      height={160}
                      className="h-16 w-16 object-contain"
                    />
                    <span className="font-display text-sm font-bold tracking-[0.12em] text-purple-500">
                      {String(i + 1).padStart(2, "0")} / 08
                    </span>
                  </div>
                  <h2 className="mt-5 text-[28px] leading-[1.12] font-extrabold sm:text-[34px]">{s.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-muted">{s.resumen}</p>
                </div>

                <div data-reveal className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  <div className="rounded-card border border-border bg-surface p-6">
                    <h3 className="text-base font-bold">Qué incluye</h3>
                    <ul className="mt-4 space-y-3">
                      {s.incluye.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-500">
                            <Check size={12} strokeWidth={2.4} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-card border border-navy-900 bg-navy-900 p-6 text-white">
                    <h3 className="text-base font-bold">Señales de que lo necesitas</h3>
                    <ul className="mt-4 space-y-3">
                      {s.senales.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-muted-dark">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contacto-soluciones"
                      className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple-400 hover:underline"
                    >
                      Me pasa esto, quiero hablarlo
                      <ArrowRight size={16} strokeWidth={1.8} />
                    </a>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}

        {/* Cierre */}
        <section id="contacto-soluciones" className="section-y scroll-mt-24 bg-surface">
          <Container>
            <div className="relative isolate overflow-hidden rounded-block bg-navy-900 px-6 py-14 text-center sm:px-10 lg:px-14">
              <TechBackdrop className="absolute inset-0 -z-10 h-full w-full" density={18} opacity={0.7} />
              <h2 className="mx-auto max-w-2xl text-[28px] leading-[1.1] font-extrabold text-white sm:text-[36px]">
                Empecemos por entender tu proceso, no por elegir la herramienta.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted-dark">
                Cuéntanos qué te está costando tiempo o control y te proponemos por dónde empezar.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/#contacto">Agenda un diagnóstico</ButtonLink>
                <ButtonLink href="/#metodologia" variant="outline-light">
                  Cómo trabajamos
                </ButtonLink>
              </div>
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] flow-gradient" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
