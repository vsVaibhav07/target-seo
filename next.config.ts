import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ye line icons ko automatically optimize kar degi
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;