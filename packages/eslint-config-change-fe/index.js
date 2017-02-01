module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
  },

  extends: [
    'eslint-config-airbnb',
    'eslint-config-change-base',
    './rules/overrides',
  ].map(require.resolve),

  rules: {},
};
