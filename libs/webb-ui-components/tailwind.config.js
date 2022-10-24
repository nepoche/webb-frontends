/** @type {import('tailwindcss').Config} */

const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind.config');

console.log('sharedTailwindConfig: ', sharedTailwindConfig);

module.exports = {
  presets: [sharedTailwindConfig],
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx,css}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
};
