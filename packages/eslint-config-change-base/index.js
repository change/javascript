module.exports = {
  env: {
    node: true,
  },

  extends: [
    'eslint-config-airbnb-base',
    './rules/overrides',
    './rules/lodash',
    './rules/mocha',
  ].map(require.resolve),

  rules: {},
};
