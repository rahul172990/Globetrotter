import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
