const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const svgr = require('@svgr/rollup');
const postcss = require("rollup-plugin-postcss");
const copy = require("rollup-plugin-copy");

module.exports = (config) => {
  console.log('rollupConfig: ', config);
  return {
    ...config,
    plugins: [
      resolve(),
      copy({
        targets: [
          { src: 'libs/webb-ui-components/src/tailwind.css', dest: 'dist/libs/webb-ui-components/' },
          { src: 'libs/webb-ui-components/src/fonts/*', dest: 'dist/libs/webb-ui-components/fonts/' },
          { src: 'libs/webb-ui-components/src/css/*', dest: 'dist/libs/webb-ui-components/css/' }
        ]
      }),
      typescript({ tsconfig: 'libs/webb-ui-components/tsconfig.lib.json' }),
      postcss({
        config: {
          path: "postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        extract: "styles.css",
        external: ["react", "react-dom"],
      }),
      svgr(),
      commonjs()
    ]
  }
};
