/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cdn.prod.website-files.com'],
      formats: ['image/avif', 'image/webp'],
    },
    // Keep original image format for SVGs
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;