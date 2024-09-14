import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) { ... }
        '4xl': '2048px',
        // => @media (min-width: 2048px) { ... }
      },
      backdropOpacity: {
        15: '.15',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
