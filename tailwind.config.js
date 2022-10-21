/** @type {import('tailwindcss').Config} */
const sharedTailwindConfig = require('./libs/tailwind-preset/tailwind.config');

module.exports = {
  presets: [sharedTailwindConfig],
  mode: 'jit',
  content: [
    './libs/**/src/**/*.{js,jsx,ts,tsx}',
    './apps/**/src/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')(),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
