import colors from './colors';
import keyframes from './keyframes';
import animation from './animation';
import plugin from './plugin';

export default {
  darkMode: 'class' as const,
  content: [] as string[],
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
    plugin,
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')(),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
