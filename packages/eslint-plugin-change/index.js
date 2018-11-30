const preferObjectSpreadToLodash = require('./rules/prefer-object-spread-to-lodash');
const noAsyncWithCallback = require('./rules/no-async-with-callback')

module.exports = {
  rules: {
    'prefer-object-spread-to-lodash': preferObjectSpreadToLodash,
    'no-async-with-callback': noAsyncWithCallback,
  },
};
