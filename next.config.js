/** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin');
const nextConfig = {
  output: 'export',
  distDir: 'out',
  strictMode: false,
  trailingSlash: true,
  staticDirs: [
    { from: 'public/raresats', to: 'out/raresats' },
    { from: 'public/icon', to: 'out/icon' },
  ],
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
