// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import { uglify } from "rollup-plugin-uglify";

const path = process.env.BUILD;
const dev = process.env.BUILD === 'dev';

export default {
  input: "src/js/main.js",
  output: {
    file: `${path}/bundle.js`,
    format: "iife"
  },
  plugins: [resolve({ jsnext: true }), commonjs()]
};