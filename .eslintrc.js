module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'], // extending recommended config and config derived from eslint-config-prettier
  plugins: [],
  rules: {
    eqeqeq: 'warn',
    'react/prop-types': 'warn',
  },
};
