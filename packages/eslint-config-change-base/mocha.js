module.exports = {
  plugins: ['mocha'],

  env: {
    mocha: true,
  },

  rules: {
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-identical-title': 'error',
    'mocha/no-nested-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-synchronous-tests': 'error',
  },
};
