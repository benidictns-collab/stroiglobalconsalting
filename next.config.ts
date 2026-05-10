import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Разрешаем все хосты для деплоя на Timeweb Cloud
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
