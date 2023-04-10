import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';

const extensions = ['.js', '.ts'];

export default {
  input: 'index.ts',
  output: {
    file: 'dist/utilities.esm.js',
    format: 'es',
  },
  plugins: [],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      extensions,
      babelHelpers: 'bundled',
    }),
  ],
};
