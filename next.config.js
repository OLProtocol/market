/** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin');
const nextConfig = {
  output: 'export',
  staticDirs: [{ from: 'public/raresats', to: 'out/raresats' }],
};

module.exports = nextConfig;
