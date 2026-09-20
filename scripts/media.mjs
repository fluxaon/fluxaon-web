/**
 * Prepara los videos de Higgsfield para la web.
 *
 *   npm run media
 *
 * Entrada (carpeta de marca, junto a este proyecto):
 *   ../assets-marca/video/hero.mp4 → public/video/hero.mp4 (H.264, sin audio, optimizado para web)
 *
 * El video del inicio reemplaza al isotipo animado en cuanto existe el archivo:
 * no hay que tocar código.
 *
 * Las imágenes de los 9 pasos de la metodología viven en public/metodologia/pasos/01.webp…09.webp
 * y se generan con Higgsfield (ver README).
 *
 * Requiere ffmpeg en el PATH (o la variable FFMPEG con la ruta al ejecutable).
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const brand = path.resolve(root, "..", "assets-marca", "video");
const ffmpeg = process.env.FFMPEG || "ffmpeg";

const hero = path.join(brand, "hero.mp4");
if (!existsSync(hero)) {
  console.log(`(sin ${path.relative(root, hero)}: el inicio usa el isotipo animado)`);
  process.exit(0);
}

const out = path.join(root, "public", "video");
mkdirSync(out, { recursive: true });
console.log("Hero → H.264 sin audio…");
execFileSync(
  ffmpeg,
  [
    "-hide_banner", "-loglevel", "error", "-y",
    "-i", hero,
    "-an",
    "-vf", "scale='min(1080,iw)':-2:flags=lanczos",
    "-c:v", "libx264", "-preset", "slow", "-crf", "26", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    path.join(out, "hero.mp4"),
  ],
  { stdio: "inherit" },
);
console.log("✓ public/video/hero.mp4");
