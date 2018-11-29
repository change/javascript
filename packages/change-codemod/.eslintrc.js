module.exports = {
  extends: [
    'change-base',
    'prettier',
  ],

  plugins: [
    'prettier',
  ],

  rules: {
    'prettier/prettier': ['error', {
      printWidth: 120,
      singleQuote: true,
      trailingComma: 'es5'
    }],
  },
};
