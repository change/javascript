module.exports = {
  plugins: [
    'jest',
  ],

  env: {
    'jest/globals': true,
  },

  extends: [
    'plugin:jest/recommended',
  ],

  rules: {
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
  },
};
