import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import colors from './colors';
import keyframes from './keyframes';
import animation from './animation';

export const webbTheme = plugin(
  function ({ addBase, addComponents, theme, e }) {
    const darkheading = {
      textColor: `${theme('colors.mono.40') ?? ''}`,
    };
    const darktext = {
      textColor: `${theme('colors.mono.60') ?? ''}`,
    };
    const darkcard = {
      backgroundColor: `${theme('colors.mono.200') ?? ''}`,
    };
    const darkshadowsm = {
      shadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    };
    const darkshadowmd = {
      shadow: '0 6px 12px 0 rgba(0,0,0,0.2)',
    };
    const darkmain = {
      overflow: 'visible',
    };
    const darkhtml = {
      backgroundColor: `${theme('colors.mono.200') ?? ''}`,
      minHeight: '100%',
      minWidth: '100%',
      scrollbarColor: `${theme('colors.mono.120') ?? ''}`,
      overflow: 'visible',
    };

    addBase({
      h1: {
        textColor: theme('colors.mono.200'),
      },
      h2: {
        textColor: theme('colors.mono.200'),
      },
      h3: {
        textColor: theme('colors.mono.200'),
      },
      h4: {
        textColor: theme('colors.mono.200'),
      },
      h5: {
        textColor: theme('colors.mono.200'),
      },
      p: {
        textColor: theme('colors.mono.160'),
      },
      span: {
        textColor: theme('colors.mono.160'),
      },
      label: {
        textColor: theme('colors.mono.160'),
      },
      html: {
        overflow: 'visible',
      },
      body: {
        overflow: 'visible',
      },
      div: {
        overflow: 'visible',
      },
      main: {
        overflow: 'visible',
      },
      '.h1': {
        textColor: theme('colors.mono.200'),
      },
      '.h2': {
        textColor: theme('colors.mono.200'),
      },
      '.h3': {
        textColor: theme('colors.mono.200'),
      },
      '.h4': {
        textColor: theme('colors.mono.200'),
      },
      '.h5': {
        textColor: theme('colors.mono.200'),
      },
      '.body1': {
        textColor: theme('colors.mono.160'),
      },
      '.body2': {
        textColor: theme('colors.mono.160'),
      },
      '.body3': {
        textColor: theme('colors.mono.160'),
      },
      '.body4': {
        textColor: theme('colors.mono.160'),
      },
      '.mono1': {
        textColor: theme('colors.mono.160'),
      },
      '.mono2': {
        textColor: theme('colors.mono.160'),
      },
      '.card': {
        backgroundColor: theme('colors.mono.0'),
      },
      '.webb-shadow-sm': {
        shadow: '0 4px 8px 0 rgba(0,0,0,0.08)',
      },
      '.webb-shadow-md': {
        shadow: '0 4px 4px 0 rgba(0,0,0,0.25)',
      },
      '.dark': {
        h1: darkheading,
        h2: darkheading,
        h3: darkheading,
        h4: darkheading,
        h5: darkheading,
        p: darktext,
        span: darktext,
        label: darktext,
        '.body1': darktext,
        '.body2': darktext,
        '.body3': darktext,
        '.body4': darktext,
        '.mono1': darktext,
        '.mono2': darktext,
        '.card': darkcard,
        '.webb-shadow-sm': darkshadowsm,
        '.webb-shadow-md': darkshadowmd,
        html: darkhtml,
        body: darkhtml,
        div: darkmain,
      },
    });

    addComponents({
      '.h1': {
        fontSize: '64px',
        lineHeight: '96px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.h2': {
        fontSize: '48px',
        lineHeight: '72px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.h3': {
        fontSize: '36px',
        lineHeight: '54px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.h4': {
        fontSize: '24px',
        lineHeight: '36px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.h5': {
        fontSize: '18px',
        lineHeight: '27px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.body1': {
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.body2': {
        fontSize: '14px',
        lineHeight: '21px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.body3': {
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.body4': {
        fontSize: '10px',
        lineHeight: '15px',
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      '.mono1': {
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: '"Cousine", monospace',
      },
      '.mono2': {
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: '"Cousine", monospace',
      },
      /* Used for subtitles and buttons */
      '.label': {
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
      },
      /* Default type size, used for paragraphs and inputs */
      '.para1': {
        fontSize: '16px',
        lineHeight: '24px',
      },
      /* Used for details, and small informational components */
      '.para2': {
        fontSize: '14px',
        lineHeight: '21px',
      },
      /* Small utility used for labels and warnings */
      '.utility': {
        fontSize: '12px',
        lineHeight: '15px',
      },
      '@media screen and (max-width: 800px)': {
        '.h1': {
          fontSize: '46px',
          lineHeight: '69px',
        },
        '.h2': {
          fontSize: '34px',
          lineHeight: '51px',
        },
        '.h3': {
          fontSize: '24px',
          lineHeight: '36px',
        },
        '.h4': {
          fontSize: '20px',
          lineHeight: '30px',
        },
        '.h5': {
          fontSize: '15px',
          lineHeight: '22px',
        },
      },
      '.drawer-content': {},
      html: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      body: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      h1: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      h2: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      h3: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      h4: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      h5: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      p: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      table: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      ol: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      ul: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      li: {
        fontFamily: '"BreezeSans", Arial, sans-serif',
      },
      code: {
        fontFamily: '"Cousine", monospace',
        fontSize: '16px',
      },
    });
  },

  {
    content: [],
    theme: {
      fontFamily: {
        sans: ['BreezeSans', ...defaultTheme.fontFamily.sans],
        mono: ['Cousine', ...defaultTheme.fontFamily.mono],
      },
      extend: {
        colors,
        animation,
        keyframes,
      },
    },
  }
);
