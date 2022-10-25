import colors from './colors';
import keyframes from './keyframes';
import animation from './animation';
import { webbTheme } from './plugin';

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      keyframes,
      animation,
    },
  },
  variants: {
    extends: {},
  },
  plugins: [
    webbTheme,
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')(),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
