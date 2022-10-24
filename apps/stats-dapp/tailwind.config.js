/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('@nepoche/tailwind-preset');

module.exports = {
  presets: [sharedTailwindConfig],
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
};
