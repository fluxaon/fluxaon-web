"use client";

import { CircleCheck, LoaderCircle } from "lucide-react";
import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions";
import { contacto } from "@/content/site";

const fieldBase =
  "mt-2 block w-full rounded-control border bg-surface px-4 py-3 text-[15px] text-navy-900 placeholder:text-ink-muted/60 transition-colors focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none";

export default function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  if (state.status === "ok") {
    return (
      <div role="status" className="flex flex-col items-start rounded-card border border-border bg-surface p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-500">
          <CircleCheck size={26} strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 text-2xl font-bold">Gracias, recibimos tu mensaje.</h3>
        <p className="mt-2 text-ink-muted">Te escribiremos pronto para coordinar el diagnóstico.</p>
      </div>
    );
  }

  const values = "values" in state ? state.values : {};
  const errors = state.status === "invalid" ? state.errors : {};

  const field = (name: keyof typeof labels, props: { type?: string; autoComplete?: string } = {}) => (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-navy-900">
        {labels[name]}
      </label>
      <input
        id={name}
        name={name}
        required
        defaultValue={values[name]}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        className={`${fieldBase} ${errors[name] ? "border-red-500" : "border-border"}`}
        {...props}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form action={action} noValidate className="rounded-card border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("nombre", { autoComplete: "name" })}
        {field("empresa", { autoComplete: "organization" })}
      </div>
      <div className="mt-5">{field("correo", { type: "email", autoComplete: "email" })}</div>
      <div className="mt-5">
        <label htmlFor="proceso" className="text-sm font-semibold text-navy-900">
          {labels.proceso}
        </label>
        <textarea
          id="proceso"
          name="proceso"
          rows={4}
          required
          defaultValue={values.proceso}
          aria-invalid={!!errors.proceso}
          aria-describedby={errors.proceso ? "proceso-error" : undefined}
          placeholder="Por ejemplo: pedidos, inventario, cobranza, reportes de producción…"
          className={`${fieldBase} resize-y ${errors.proceso ? "border-red-500" : "border-border"}`}
        />
        {errors.proceso && (
          <p id="proceso-error" className="mt-1.5 text-sm text-red-600">
            {errors.proceso}
          </p>
        )}
      </div>

      {/* Trampa para bots: oculta a personas y lectores de pantalla */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          No completar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {(state.status === "unconfigured" || state.status === "error") && (
        <p role="alert" className="mt-5 rounded-control border border-border bg-surface-alt px-4 py-3 text-sm text-ink-muted">
          {state.status === "error" ? "No pudimos enviar tu mensaje." : "El envío del formulario aún no está activo."}{" "}
          Escríbenos directamente a{" "}
          <a className="font-semibold text-purple-500 underline" href={`mailto:${contacto.email}`}>
            {contacto.email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control bg-purple-500 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-purple-600 disabled:opacity-70 sm:w-auto"
      >
        {pending && <LoaderCircle size={18} className="animate-spin" />}
        {pending ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}

const labels = {
  nombre: "Nombre",
  empresa: "Empresa",
  correo: "Correo",
  proceso: "¿Qué proceso quieres mejorar?",
};
