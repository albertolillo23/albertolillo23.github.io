import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Se la tua repository su github NON si chiama tuo-username.github.io ma per esempio "PersonalSite",
  // DECOMMENTA la riga qui sotto e inserisci il nome della tua repository:
  // basePath: "/PersonalSite",
};

export default nextConfig;
