module.exports = {
  plugins: [
    'lodash',
  ],

  rules: {
    'lodash/callback-binding': 'error',
    'lodash/collection-method-value': 'error',
    'lodash/collection-return': 'error',
    'lodash/identity-shorthand': 'error',
    'lodash/matches-prop-shorthand': 'error',
    'lodash/matches-shorthand': ['error', 'always', 3, true],
    'lodash/no-commit': 'error',
    'lodash/no-double-unwrap': 'error',
    'lodash/no-extra-args': 'error',
    'lodash/no-unbound-this': 'error',
    'lodash/prefer-compact': 'error',
    'lodash/prefer-flat-map': 'error',
    'lodash/prefer-map': 'error',
    'lodash/prefer-reject': 'error',
    'lodash/prefer-thru': 'error',
    'lodash/prefer-wrapper-method': 'error',
    'lodash/prop-shorthand': 'error',
    'lodash/unwrap': 'error',
  },

  settings: {
    lodash: {
      pragma: '_',
    },
  },
};
