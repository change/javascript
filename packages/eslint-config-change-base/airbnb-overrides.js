module.exports = {
  rules: {
    // Items which we prefer to be more strict than the AirBnB defaults
    complexity: ['error', { max: 6 }],
    eqeqeq: 'error',
    'max-depth': ['error', { max: 3 }],
    'max-statements': ['error', { max: 18 }],
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],

    // AirBnB attempts to set `functions` to `always-multiline`
    // which requires babel support since trailing commas in function
    // declarations or invocations are a stage 3 proposal currently.
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    // AirBnB attempts to restrict `Math.pow`, preferring the exponentiation
    // operator (`**`) which is currently a stage 3 proposal so requires a babel
    // plugin. These settings are the AirBnB version without that particular
    // rule.
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],
  },
};
