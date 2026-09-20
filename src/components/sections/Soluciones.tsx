import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { soluciones } from "@/content/site";
import { Container, SectionHeading } from "../ui";

export default function Soluciones() {
  return (
    <section id="soluciones" className="section-y relative isolate scroll-mt-16 overflow-hidden bg-surface-alt">
      <div
        aria-hidden
        data-parallax="-80"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-purple-100 blur-[90px]"
      />
      <div
        aria-hidden
        data-parallax="60"
        className="pointer-events-none absolute -top-24 right-[-10%] -z-10 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <Container>
        <SectionHeading
          eyebrow="Soluciones"
          title="Tecnología a la medida del proceso, no al revés."
          intro="Todo lo que construimos sale de un proceso ya entendido y rediseñado. Toca cualquiera para ver en detalle cómo trabajamos."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {soluciones.map((s, i) => (
            <Link
              key={s.slug}
              href={`/soluciones#${s.slug}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 90 + Math.floor(i / 4) * 60}ms` } as React.CSSProperties}
              className="card-hover group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-purple-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <Image
                src={`/soluciones/${s.icon}.webp`}
                alt=""
                width={160}
                height={160}
                loading="lazy"
                className="relative h-20 w-20 object-contain transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1 group-hover:scale-110"
              />

              <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
              <p className="relative mt-2 flex-1 text-[15px] leading-relaxed text-ink-muted">{s.body}</p>

              <span className="relative mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple-500">
                Ver en detalle
                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <span
                aria-hidden
                className="mt-4 block h-px w-0 flow-gradient transition-[width] duration-500 ease-[var(--ease-out-soft)] group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        <p data-reveal className="mt-10 text-center text-[15px] text-ink-muted">
          ¿Tu caso no está en la lista?{" "}
          <a href="#contacto" className="inline-flex items-center gap-1.5 font-semibold text-purple-500 hover:underline">
            Cuéntanos qué proceso quieres mejorar
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </p>
      </Container>
    </section>
  );
}
