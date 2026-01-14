// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-exports': 'off',
    'no-param-reassign': 'off',
    'import/no-absolute-path': 'off',
    'consistent-return': 'off',
    'import/no-cycle': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-alert': 'off',

    // off правила, требующие parserServices и др.
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
  },
};
