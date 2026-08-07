/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/kass2026",
  assetPrefix: "/kass2026/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
