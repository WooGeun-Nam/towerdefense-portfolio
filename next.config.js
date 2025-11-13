const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? "/" : "",
  assetPrefix: isProd ? "/" : "",
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
