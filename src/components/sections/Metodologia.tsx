import { existsSync } from "node:fs";
import path from "node:path";
import { pasos } from "@/content/site";
import MetodologiaStepper from "./MetodologiaStepper";

/**
 * Las imágenes de cada paso están en public/metodologia/pasos/01.webp … 09.webp.
 * Si faltan, la sección funciona igual y muestra solo el fondo animado.
 */
const hasImages = pasos.every((_, i) =>
  existsSync(path.join(process.cwd(), "public", "metodologia", "pasos", `${String(i + 1).padStart(2, "0")}.webp`)),
);

export default function Metodologia() {
  return <MetodologiaStepper pasos={pasos} hasImages={hasImages} />;
}
