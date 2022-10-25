'use strict';

var defaultTheme = require('tailwindcss/defaultTheme');
var plugin = require('tailwindcss/plugin');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var defaultTheme__default = /*#__PURE__*/_interopDefaultLegacy(defaultTheme);
var plugin__default = /*#__PURE__*/_interopDefaultLegacy(plugin);

const colors = {
    mono: {
        0: '#fff',
        20: '#F7F8F7',
        40: '#E2E5EB',
        60: '#D3D8E2',
        80: '#C2C8D4',
        100: '#9CA0B0',
        120: '#6C7180',
        140: '#4E5463',
        160: '#3A3E53',
        170: '#2E3244',
        180: '#2B2F40',
        190: '#252836',
        200: '#1F1D2B',
    },
    purple: {
        0: '#F6F4FF',
        10: '#F6F4FF',
        20: '#D5CDFF',
        30: '#E7E2FF',
        40: '#B5A9F2',
        50: '#C6BBFA',
        60: '#9F90EA',
        70: '#624FBE',
        80: '#7968D0',
        90: '#624FBE',
        100: '#4B3AA4',
        110: '#37268D',
        120: '#2E284D',
        DEFAULT: '#9F90EA',
    },
    blue: {
        0: '#ECF4FF',
        10: '#D5E6FF',
        20: '#B8D6FF',
        30: '#9BC5FC',
        40: '#81B3F7',
        50: '#67A0EE',
        60: '#4e8cdf',
        70: '#3D7BCE',
        80: '#2864B5',
        90: '#1C529A',
        100: '#0F4285',
        110: '#153A69',
        120: '#252D39',
        DEFAULT: '#4e8cdf',
    },
    green: {
        0: '#E5FFE7',
        10: '#C7FFCC',
        20: '#ACF1B3',
        30: '#85DC8E',
        40: '#6CCA76',
        50: '#4CB457',
        60: '#3B9E46',
        70: '#288E32',
        80: '#038311',
        90: '#00710C',
        100: '#01550A',
        110: '#0F4214',
        120: '#0F3413',
        DEFAULT: '#038311',
    },
    yellow: {
        0: '#FFF5D8',
        10: '#FFF2CA',
        20: '#FFEAA6',
        30: '#FFE07C',
        40: '#F8D567',
        50: '#F9CE46',
        60: '#F4C328',
        70: '#F4C328',
        80: '#D2A618',
        90: '#AF8C1E',
        100: '#8D721A',
        110: '#634F11',
        120: '#3F3517',
        DEFAULT: '#F4C328',
    },
    red: {
        0: '#FFEDE4',
        10: '#FFCEB7',
        20: '#FFB18B',
        30: '#FF874D',
        40: '#FC6015',
        50: '#EF570D',
        60: '#DD4800',
        70: '#C64A17',
        80: '#B6400F',
        90: '#A0370B',
        100: '#892F0A',
        110: '#622910',
        120: '#422417',
        DEFAULT: '#DD4800',
    },
};

const keyframes = {
    // Dropdown menu
    'scale-in': {
        '0%': { opacity: '0', transform: 'scale(0)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
    },
    'slide-down': {
        '0%': { opacity: '0', transform: 'translateY(-10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'slide-up': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    // Tooltip
    'slide-up-fade': {
        '0%': { opacity: '0', transform: 'translateY(2px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'slide-right-fade': {
        '0%': { opacity: '0', transform: 'translateX(-2px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    'slide-down-fade': {
        '0%': { opacity: '0', transform: 'translateY(-2px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'slide-left-fade': {
        '0%': { opacity: '0', transform: 'translateX(2px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    // Navigation menu
    'enter-from-right': {
        '0%': { transform: 'translateX(200px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    'enter-from-left': {
        '0%': { transform: 'translateX(-200px)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    'exit-to-right': {
        '0%': { transform: 'translateX(0)', opacity: '1' },
        '100%': { transform: 'translateX(200px)', opacity: '0' },
    },
    'exit-to-left': {
        '0%': { transform: 'translateX(0)', opacity: '1' },
        '100%': { transform: 'translateX(-200px)', opacity: '0' },
    },
    'scale-in-content': {
        '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: '0' },
        '100%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
    },
    'scale-out-content': {
        '0%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
        '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' },
    },
    'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
    },
    'fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
    },
    // Toast
    'toast-hide': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
    },
    'toast-slide-in-right': {
        '0%': { transform: `translateX(calc(100% + 1rem))` },
        '100%': { transform: 'translateX(0)' },
    },
    'toast-slide-in-bottom': {
        '0%': { transform: `translateY(calc(100% + 1rem))` },
        '100%': { transform: 'translateY(0)' },
    },
    'toast-swipe-out': {
        '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
        '100%': {
            transform: `translateX(calc(100% + 1rem))`,
        },
    },
    // Drawer Content
    'drawer-content-right-slide-in': {
        from: { transform: 'translate3d(100%,0,0)' },
        to: { transform: 'translate3d(0,0,0)' },
    },
    'drawer-content-right-slide-out': {
        from: { transform: 'translate3d(0,0,0)' },
        to: { transform: 'translate3d(100%,0,0)' },
    },
};

const animation = {
    // Dropdown menu
    'scale-in': 'scale-in 0.2s ease-in-out',
    'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    // Tooltip
    'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-right-fade': 'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    // Navigation menu
    'enter-from-right': 'enter-from-right 0.25s ease',
    'enter-from-left': 'enter-from-left 0.25s ease',
    'exit-to-right': 'exit-to-right 0.25s ease',
    'exit-to-left': 'exit-to-left 0.25s ease',
    'scale-in-content': 'scale-in-content 0.2s ease',
    'scale-out-content': 'scale-out-content 0.2s ease',
    'fade-in': 'fade-in 0.2s ease',
    'fade-out': 'fade-out 0.2s ease',
    // Toast
    'toast-hide': 'toast-hide 100ms ease-in forwards',
    'toast-slide-in-right': 'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    'toast-slide-in-bottom': 'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards',
    // Drawer
    'drawer-overlay-open': 'fade-in 150ms cubic-bezier(0.22, 1, 0.36, 1)',
    'drawer-overlay-close': 'fade-out 150ms cubic-bezier(0.22, 1, 0.36, 1)',
    'drawer-content-right-open': 'drawer-content-right-slide-in 150ms cubic-bezier(0.22, 1, 0.36, 1)',
    'drawer-content-right-close': 'drawer-content-right-slide-out 150ms cubic-bezier(0.22, 1, 0.36, 1)',
};

const webbTheme = plugin__default["default"](function ({ addBase, addComponents, theme, e }) {
    var _a, _b, _c, _d, _e;
    const darkheading = {
        textColor: `${(_a = theme('colors.mono.40')) !== null && _a !== void 0 ? _a : ''}`,
    };
    const darktext = {
        textColor: `${(_b = theme('colors.mono.60')) !== null && _b !== void 0 ? _b : ''}`,
    };
    const darkcard = {
        backgroundColor: `${(_c = theme('colors.mono.200')) !== null && _c !== void 0 ? _c : ''}`,
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
        backgroundColor: `${(_d = theme('colors.mono.200')) !== null && _d !== void 0 ? _d : ''}`,
        minHeight: '100%',
        minWidth: '100%',
        scrollbarColor: `${(_e = theme('colors.mono.120')) !== null && _e !== void 0 ? _e : ''}`,
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
}, {
    content: [],
    theme: {
        fontFamily: {
            sans: ['BreezeSans', ...defaultTheme__default["default"].fontFamily.sans],
            mono: ['Cousine', ...defaultTheme__default["default"].fontFamily.mono],
        },
        extend: {
            colors,
            animation,
            keyframes,
        },
    },
});

var preset = {
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

module.exports = preset;
