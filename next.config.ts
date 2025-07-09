/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/kucingliaw.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/kucingliaw.github.io/" : "",
};

module.exports = nextConfig;
