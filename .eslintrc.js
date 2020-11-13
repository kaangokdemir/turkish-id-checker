module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['standard', 'plugin:jest/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'brace-style': 0,
    'no-unused-vars': 1,
    'comma-dangle': ['error', 'always-multiline'],
    quotes: [2, 'single'],
    'prefer-template': ['error'],
    'no-useless-concat': ['error'],
    'prefer-destructuring': [
      'error',
      {
        object: true,
      },
    ],
  },
}
