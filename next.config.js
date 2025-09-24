const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/towerdefense-portfolio" : "",
  assetPrefix: isProd ? "/towerdefense-portfolio" : "",
  trailingSlash: true,
  output: "export", // 추가된 부분
};

module.exports = nextConfig;
