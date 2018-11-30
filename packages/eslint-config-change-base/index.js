module.exports = {
  env: {
    node: true,
  },

  extends: ['eslint-config-airbnb-base', './airbnb-overrides', './lodash', './promise', './security'].map(
    require.resolve
  ),
};
