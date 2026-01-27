import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    // Ye line icons ko automatically optimize kar degi
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  }
};

export default nextConfig;