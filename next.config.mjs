/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Served from the root of kasseehomolka.com, so no basePath/assetPrefix.
  // If this ever moves back to a GitHub Pages project URL, restore both here
  // and set BASE_PATH in lib/config.js to match.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;
