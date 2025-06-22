import type { NextConfig } from "next";
import type { PWAConfig } from "next-pwa";

/**
 * PWA configuration with TypeScript typings
 * @see {@link https://nextjs.org/docs/app/api-reference/next-config-js/pwa Next.js PWA Documentation}
 */
const pwaConfig: PWAConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/fonts\.googleapis\.com/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts-cache",
      },
    },
  ],
};

const withPWA = (await import("next-pwa")).default(pwaConfig);

const nextConfig: NextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
});

export default nextConfig;
