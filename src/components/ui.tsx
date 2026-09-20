import type { ReactNode } from "react";

type ButtonVariant = "primary" | "white" | "outline-light";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-purple-500 text-white hover:bg-purple-600",
  white: "bg-white text-navy-900 hover:bg-purple-100",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function ButtonLink({ href, variant = "primary", children, className = "" }: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-control px-5 py-2.5 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/** Etiqueta en mayúsculas sobre los titulares de sección. */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${
        onDark ? "text-purple-400" : "text-purple-500"
      }`}
    >
      <span aria-hidden className="h-px w-6 flow-gradient" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, onDark = false, className = "" }: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div data-reveal className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-[32px] leading-[1.1] font-extrabold sm:text-[40px] lg:text-[48px] ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${onDark ? "text-ink-muted-dark" : "text-ink-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}
