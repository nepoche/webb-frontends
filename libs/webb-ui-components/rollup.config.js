const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const modify = require('rollup-plugin-modify');

module.exports = (config) => {
  return {
    ...config,
    output: {
      ...(config.output ?? {}),
      sourcemap: false,
    },
    plugins: [
      resolve(),
      copy({
        targets: [
          {
            src: 'libs/webb-ui-components/src/icons/tokens/*',
            dest: 'dist/libs/webb-ui-components/icons/tokens',
          },
          {
            src: 'libs/webb-ui-components/src/fonts/*',
            dest: 'dist/libs/webb-ui-components/fonts/',
          },
        ],
      }),
      typescript({
        tsconfig: 'libs/webb-ui-components/tsconfig.lib.json',
      }),
      postcss({
        config: {
          path: 'libs/webb-ui-components/postcss.config.cjs',
        },
        extensions: ['.css'],
        minimize: false,
        extract: true,
        module: true,
        inject: false,
        external: ['react', 'react-dom'],
      }),
      svgr(),
      commonjs(),
      modify({
        find: '../icons/tokens/',
        replace: './icons/tokens/',
      }),
    ],
  };
};
