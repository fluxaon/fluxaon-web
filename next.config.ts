import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Essential Water: app de gestion desplegada como proyecto aparte.
      // Se sirve bajo fluxaon.com/essentialwater sin exponer la URL de Vercel.
      {
        source: "/essentialwater",
        destination: "https://essential-water-app.vercel.app/",
      },
      {
        source: "/essentialwater/:path*",
        destination: "https://essential-water-app.vercel.app/:path*",
      },
      // Organigrama de HIVIMAR Industrial: mismo patron, proyecto aparte.
      // Las herramientas de cada cliente cuelgan de su propio prefijo, para que
      // luego quepan /hivimar/desempeno y /hivimar/descriptivos sin rehacer esto.
      {
        source: "/hivimar/organigrama",
        destination: "https://organigrama-hivimar.vercel.app/",
      },
      {
        source: "/hivimar/organigrama/:path*",
        destination: "https://organigrama-hivimar.vercel.app/:path*",
      },
    ];
  },
  async redirects() {
    return [
      // Direccion anterior, por si alguien alcanzo a guardarla. Temporal (307)
      // a proposito: un redireccion permanente se queda cacheada en el navegador
      // y costaria revertirla.
      {
        source: "/orghivimarindustria",
        destination: "/hivimar/organigrama",
        permanent: false,
      },
      {
        source: "/orghivimarindustria/:path*",
        destination: "/hivimar/organigrama/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
