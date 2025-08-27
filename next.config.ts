import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized for production builds
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
