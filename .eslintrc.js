import parser from '@typescript-eslint/parser';

export default {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    programs: [parser.createProgram('./tsconfig.json')],
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
