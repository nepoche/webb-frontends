/** @type {import('tailwindcss').Config} */
const preset = require('../../tailwind.config');

console.log('preset of tailwind.config in webb-ui-components: ', preset);

module.exports = {
  presets: [preset],
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
};
