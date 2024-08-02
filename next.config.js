/** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin');
const nextConfig = {
  output: 'export',
  staticDirs: [
    { from: 'public/raresats', to: 'out/raresats' },
    { from: 'public/icon', to: 'out/icon' },
  ],
};

module.exports = nextConfig;
