/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

console.log('content: ', [
  join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
  ...createGlobPatternsForDependencies(__dirname),
]);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('../../tailwind.config.js')],
  mode: 'jit',
  darkMode: 'class',
};
