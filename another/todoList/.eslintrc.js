module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 14,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': 'webpack',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'react/no-unused-class-component-methods': 'off',
    'no-shadow': 'off',
  },
};
