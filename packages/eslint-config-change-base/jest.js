module.exports = {
  plugins: ['jest'],

  env: {
    'jest/globals': true,
  },

  extends: ['plugin:jest/recommended'],

  rules: {
    'jest/no-hooks': ['error', { allow: ['afterEach'] }],
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-have-length': 'error',
  },
};
