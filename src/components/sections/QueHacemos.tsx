import { Check } from "lucide-react";
import { areas } from "@/content/site";
import { Container, SectionHeading } from "../ui";

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="section-y relative isolate scroll-mt-16 overflow-hidden bg-surface-alt">
      <div
        aria-hidden
        data-parallax="90"
        className="pointer-events-none absolute -top-32 -right-24 -z-10 h-[420px] w-[420px] rounded-full bg-purple-100 blur-[90px]"
      />
      <Container>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Primero entendemos el negocio. Después construimos la tecnología."
        />

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {areas.map((area, i) => {
            const dark = area.tone === "dark";
            return (
              <article
                key={area.number}
                data-reveal
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
                className={`card-hover rounded-card border p-7 sm:p-9 ${
                  dark ? "border-navy-900 bg-navy-900 text-white" : "border-border bg-surface"
                }`}
              >
                <p className={`font-display text-sm font-bold tracking-[0.1em] ${dark ? "text-purple-400" : "text-purple-500"}`}>
                  {area.number}
                </p>
                <h3 className="mt-3 text-2xl font-bold sm:text-[28px]">{area.title}</h3>
                <p className={`mt-4 text-base leading-relaxed ${dark ? "text-ink-muted-dark" : "text-ink-muted"}`}>
                  {area.body}
                </p>
                <ul className={`mt-7 space-y-3 border-t pt-6 ${dark ? "border-white/10" : "border-border"}`}>
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] font-medium">
                      <span
                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          dark ? "bg-purple-500/20 text-purple-400" : "bg-purple-100 text-purple-500"
                        }`}
                      >
                        <Check size={14} strokeWidth={2.2} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
