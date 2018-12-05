module.exports = {
  env: {
    node: true,
  },

  plugins: ['@change-org/change'],

  extends: [
    'eslint-config-airbnb-base',
    './airbnb-overrides',
    './lodash',
    './promise',
    './security',
  ].map(require.resolve),

  rules: {
    // Prefer object spread syntax to _.extend when creating new objects
    '@change-org/change/prefer-object-spread-to-lodash': 'error',
  },
};
