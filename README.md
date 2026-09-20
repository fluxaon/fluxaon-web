# fluxaon-web

Sitio de [www.fluxaon.com](https://www.fluxaon.com). Next.js (App Router, TypeScript) + Tailwind CSS v4 + GSAP.
El contenido y la identidad visual salen de `BRIEF-fluxaon.md` (carpeta superior).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
npm run lint
```

## Estructura

| Ruta | Qué contiene |
|---|---|
| `src/content/site.ts` | **Todos los textos y datos editables** (menú, hero, 9 pasos, soluciones, contacto) |
| `src/app/globals.css` | Tokens de marca: colores, tipografías, radios, animaciones |
| `src/components/sections/` | Las 7 secciones del inicio |
| `src/app/actions.ts` | Envío del formulario a contacto@fluxaon.com |
| `public/brand/` | Logos listos para web (generados con `../assets-marca/preparar_logos.py`) |
| `scripts/media.mjs` | Convierte los videos de Higgsfield en lo que usa el sitio |

## Pendientes del brief

1. **WhatsApp y agenda**: poner los valores en `src/content/site.ts` → `contacto.whatsapp` y `contacto.agenda`.
   Los botones aparecen solos cuando dejan de ser `null`.
2. **Envío del formulario**: copiar `.env.example` a `.env.local` y activar Resend o Formspree.
   Mientras tanto el formulario valida, no envía y muestra el correo directo.
3. **Video del inicio**: dejar `hero.mp4` en `../assets-marca/video/` y ejecutar `npm run media`
   (requiere ffmpeg). Genera `public/video/hero.mp4` y el inicio lo usa en lugar del isotipo animado,
   sin tocar código.

## Movimiento

- **Metodología**: los 9 pasos avanzan solos cada 5,2 s y se puede hacer clic en cualquiera.
  **No bloquea el scroll**: se baja normal en todo momento. Se pausa al pasar el mouse o al enfocar,
  y solo corre cuando la sección está en pantalla. Cada paso muestra su imagen de fondo
  (`public/metodologia/pasos/0X.webp`, generadas con Higgsfield) con fundido y acercamiento lento.
- **Fondo de red de nodos** (`TechBackdrop`) en el inicio, la metodología y el bloque "Por qué Fluxaon".
- **Parallax con el scroll** (`ScrollMotion`): los elementos con `data-parallax="N"` se desplazan N píxeles
  mientras pasan por pantalla, con GSAP ScrollTrigger.
- Todo se apaga con `prefers-reduced-motion: reduce`.

## Despliegue

Vercel (framework Next.js, sin configuración extra). El DNS del dominio va en Cloudflare
con los registros de Vercel en modo **DNS only** (nube gris).
