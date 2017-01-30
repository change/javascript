module.exports = {
  env: {
    node: true,
  },

  extends: [
    'eslint-config-airbnb-base',
    './rules/overrides',
    './rules/lodash',
    './rules/mocha',
    './rules/promise',
  ].map(require.resolve),

  rules: {},
};
