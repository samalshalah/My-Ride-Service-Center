import type { NextConfig } from "next";
import path from "path";

const rawBasePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  allowedDevOrigins: ["*.replit.dev", "*.kirk.replit.dev"],
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
