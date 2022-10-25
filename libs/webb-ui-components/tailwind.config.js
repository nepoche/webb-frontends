/** @type {import('tailwindcss').Config} */
const preset = require('../../tailwind.config');

module.exports = {
  presets: [preset],
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
};
