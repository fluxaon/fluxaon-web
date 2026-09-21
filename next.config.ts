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
    ];
  },
};

export default nextConfig;
