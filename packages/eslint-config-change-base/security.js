module.exports = {
  plugins: [
    'security',
  ],

  extends: [
    'plugin:security/recommended',
  ],
  
  rules: {
    // This is already done by import/no-dynamic-require
    'security/detect-non-literal-require': 'off',
    
    // This rule matches `fs` function names like ('exists', 'truncate')
    // regardless of whether invoked against the `fs` module and triggers
    // false positives for innocuous code like `_.truncate(someString)`
    'security/detect-non-literal-fs-filename': 'off',
  },
};
