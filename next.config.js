/** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin');
const nextConfig = {
  output: 'export',
  // distDir: 'out',
  webpack: (config, { isServer }) => {
    // 启用 WebAssembly 实验特性
    config.experiments = {
      ...config.experiments,
      syncWebAssembly: true, // 使用异步 WebAssembly
      // 或者启用 syncWebAssembly，但它已经被弃用
      // syncWebAssembly: true, // Webpack 4 风格的同步 WebAssembly
    };

    return config;
  },
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
