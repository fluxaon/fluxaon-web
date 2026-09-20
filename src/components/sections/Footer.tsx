import { contacto } from "@/content/site";
import Logo from "../Logo";
import { Container } from "../ui";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="h-7 w-auto" />
        <div className="flex flex-col gap-1 text-sm text-ink-muted sm:items-end">
          <p>Ecuador · México</p>
          <a href={`mailto:${contacto.email}`} className="hover:text-purple-500">
            {contacto.email}
          </a>
          <p>© 2026 Fluxaon</p>
        </div>
      </Container>
    </footer>
  );
}
