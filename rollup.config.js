// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import postcssEasyImport from 'postcss-easy-import';
import precss from 'precss';
import postcssPresetEnv from 'postcss-preset-env';
import syntax from 'postcss-scss';
import stripInlineComments from 'postcss-strip-inline-comments';

const isProduction = process.env.BUILD === 'production';

export default (async () => ({
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [
    postcss({
      plugins: [
        postcssEasyImport(),
        stripInlineComments(),
        precss(),
        postcssPresetEnv({ stage: 3 })
      ],
      parser: syntax,
      extensions: ['.css'],
      extract: 'dist/css/main.css',
      sourceMap: true
    }),
    resolve(),
    commonjs(),
    isProduction && (await terser())
  ]
}))();
