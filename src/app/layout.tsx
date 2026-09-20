import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import ScrollMotion from "@/components/ScrollMotion";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fluxaon.com"),
  title: "Fluxaon · Transformamos procesos. Construimos soluciones.",
  description:
    "Firma de transformación empresarial para empresas medianas e industriales en Ecuador y México: consultoría de procesos, indicadores, automatización, software e inteligencia artificial.",
  // QUITAR AL LANZAR: mientras el sitio está en revisión no debe salir en Google
  robots: { index: false, follow: false },
  openGraph: {
    title: "Fluxaon · Transformamos procesos. Construimos soluciones.",
    description:
      "Diagnosticamos cómo funciona tu empresa, rediseñamos lo que frena el crecimiento y construimos la tecnología que lo sostiene.",
    url: "https://www.fluxaon.com",
    siteName: "Fluxaon",
    locale: "es_EC",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1F44",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: el script de abajo añade la clase `js` antes de hidratar
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <head>
        {/* Marca que hay JS antes del primer pintado, para ocultar lo que aparecerá con animación */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <RevealObserver />
        <ScrollMotion />
      </body>
    </html>
  );
}
