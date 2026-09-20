"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import Logo from "./Logo";
import { ButtonLink, Container } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? "border-b border-white/10 bg-navy-900/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between lg:h-24">
        <a href="#inicio" aria-label="Fluxaon, ir al inicio" className="logo-reveal shrink-0">
          <Logo onDark priority className="h-9 w-auto lg:h-11" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-muted-dark transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href="#contacto" variant="white">
            Agenda un diagnóstico
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-control text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
        </button>
      </Container>

      {open && (
        <nav id="menu-movil" aria-label="Principal" className="border-t border-white/10 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-control px-2 py-3 text-base font-medium text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-control bg-white px-5 text-[15px] font-semibold text-navy-900"
            >
              Agenda un diagnóstico
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
