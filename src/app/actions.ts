"use server";

import { contacto } from "@/content/site";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "invalid"; errors: Partial<Record<Field, string>>; values: Partial<Record<Field, string>> }
  | { status: "unconfigured" | "error"; values: Partial<Record<Field, string>> };

type Field = "nombre" | "empresa" | "correo" | "proceso";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Envío del formulario de contacto a contacto@fluxaon.com.
 * El proveedor está pendiente (brief §6). Se activa con variables de entorno:
 *   - Resend:    RESEND_API_KEY y CONTACT_FROM (p. ej. "Fluxaon <web@fluxaon.com>", dominio verificado)
 *   - Formspree: FORMSPREE_ENDPOINT (p. ej. "https://formspree.io/f/xxxxxxx")
 * Sin ninguna, el formulario responde "unconfigured" y muestra el correo directo.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Campo trampa para bots: si viene lleno, se finge éxito sin enviar nada
  if (String(formData.get("website") ?? "").trim()) return { status: "ok" };

  const values = {
    nombre: String(formData.get("nombre") ?? "").trim().slice(0, 120),
    empresa: String(formData.get("empresa") ?? "").trim().slice(0, 160),
    correo: String(formData.get("correo") ?? "").trim().slice(0, 200),
    proceso: String(formData.get("proceso") ?? "").trim().slice(0, 4000),
  };

  const errors: Partial<Record<Field, string>> = {};
  if (!values.nombre) errors.nombre = "Escribe tu nombre.";
  if (!values.empresa) errors.empresa = "Escribe el nombre de tu empresa.";
  if (!EMAIL_RE.test(values.correo)) errors.correo = "Escribe un correo válido.";
  if (values.proceso.length < 10) errors.proceso = "Cuéntanos en pocas palabras qué proceso quieres mejorar.";
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  const subject = `Nuevo diagnóstico: ${values.empresa} (${values.nombre})`;
  const text = [
    `Nombre: ${values.nombre}`,
    `Empresa: ${values.empresa}`,
    `Correo: ${values.correo}`,
    "",
    "¿Qué proceso quiere mejorar?",
    values.proceso,
  ].join("\n");

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_FROM) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM,
          to: [contacto.email],
          reply_to: values.correo,
          subject,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
      return { status: "ok" };
    }

    if (process.env.FORMSPREE_ENDPOINT) {
      const res = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, email: values.correo, _subject: subject }),
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}: ${await res.text()}`);
      return { status: "ok" };
    }

    console.warn("[contacto] Sin proveedor de correo configurado. Mensaje no enviado:\n" + text);
    return { status: "unconfigured", values };
  } catch (err) {
    console.error("[contacto] Error al enviar:", err);
    return { status: "error", values };
  }
}
