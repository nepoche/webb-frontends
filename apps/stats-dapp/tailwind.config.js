/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const preset = require('../../tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
};
