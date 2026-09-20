import Image from "next/image";
import logoLight from "../../public/brand/logo-light.png";
import logoDark from "../../public/brand/logo-dark.png";

/** Logo horizontal. `onDark` usa la versión con texto blanco (para fondos azul marino). */
export default function Logo({ onDark = false, className = "h-8 w-auto", priority = false }: {
  onDark?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={onDark ? logoDark : logoLight}
      alt="Fluxaon"
      className={className}
      priority={priority}
      sizes="160px"
    />
  );
}
