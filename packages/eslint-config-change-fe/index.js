module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
  },

  extends: [
    'eslint-config-airbnb',
    'eslint-config-change-base',
  ].map(require.resolve),

  rules: {},
};
