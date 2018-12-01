module.exports = {
  env: {
    browser: true,
    jquery: true,
    node: true,
  },

  extends: ['eslint-config-airbnb', 'eslint-config-change-base', './jsx-a11y', './react'].map(
    require.resolve
  ),
};
