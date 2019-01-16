import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import copy from 'rollup-plugin-copy';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

// Helpers
const createHash = () =>
  Math.random()
    .toString(36)
    .slice(2, 7);

const tryThen = (fn, then) => {
  try {
    return fn();
  } catch {
    return then;
  }
};

const ENV = tryThen(() => process.env.NODE_ENV || 'development', 'development');
const production = ENV === 'production';
const hash = createHash();

export default {
  // Entrypoint
  input: './src/index.tsx',

  // Output
  output: {
    file: `dist/bundle-${hash}.js`,
    format: 'iife',
    sourcemap: true,
  },

  // Workflow
  plugins: [
    // Clear previous dist
    del({ targets: 'dist/*' }),

    // Replace process.env.NODE_ENV
    replace({ 'process.env.NODE_ENV': JSON.stringify(ENV) }),

    // Compile away typescript types
    typescript(),

    // PostCSS
    postcss({
      extract: `dist/styles.css`,
      plugins: [require('postcss-import')()],
      minimize: production,
    }),

    // Resolve node imports
    resolve({ jsnext: true, browser: true }),

    // Turn commonjs bundles into es2015 bundles
    commonjs({
      namedExports: {
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react/index.js': ['createElement', 'useState', 'useEffect', 'useContext', 'createContext'],
      },
    }),

    // Minify js
    !production && terser(),

    // Seed index.html with the build script
    htmlTemplate({
      template: 'src/index.html',
      target: 'index.html',
    }),

    // Copy assets to dist
    copy({
      'src/assets': 'dist/assets',
    }),

    // Serve App when not in production
    production
      ? analyze()
      : serve({
          contentBase: 'dist',
          port: 1234,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
          historyApiFallback: true,
        }),
  ],
};
