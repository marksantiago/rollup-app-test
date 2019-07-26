// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.BUILD === 'production';

export default (async () => ({
  input: 'src/js/main.js',
  output: {
    file: 'dist/js/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
  plugins: [resolve(), commonjs(), isProduction && (await terser())]
}))();
