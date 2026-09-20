import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { contacto } from "@/content/site";
import { Container, SectionHeading } from "../ui";
import ContactForm from "./ContactForm";

export default function Contacto() {
  const extras = [
    contacto.whatsapp && {
      href: `https://wa.me/${contacto.whatsapp}`,
      label: "Escríbenos por WhatsApp",
      Icon: MessageCircle,
    },
    contacto.agenda && { href: contacto.agenda, label: "Agenda una reunión", Icon: CalendarDays },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Mail }[];

  return (
    <section id="contacto" className="section-y scroll-mt-16 bg-surface-alt">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Empecemos por un diagnóstico."
            intro="Cuéntanos qué proceso quieres mejorar. Revisamos tu caso y te proponemos cómo empezar."
          />
          <ul data-reveal className="mt-8 space-y-3">
            <li>
              <a
                href={`mailto:${contacto.email}`}
                className="inline-flex items-center gap-3 text-base font-semibold text-navy-900 hover:text-purple-500"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-purple-100 text-purple-500">
                  <Mail size={20} strokeWidth={1.8} />
                </span>
                {contacto.email}
              </a>
            </li>
            {extras.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base font-semibold text-navy-900 hover:text-purple-500"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-control bg-purple-100 text-purple-500">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="relative">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
