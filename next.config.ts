import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/3dPortfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
