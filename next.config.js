const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // GitHub Pages 프로젝트 사이트 대응
  basePath: isProd ? "/towerdefense-portfolio" : "",
  assetPrefix: isProd ? "/towerdefense-portfolio/" : "",
};

module.exports = nextConfig;
