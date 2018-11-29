const { RuleTester } = require('eslint');
const rule = require('../prefer-object-spread-to-lodash');

const ruleTester = new RuleTester();

ruleTester.run('prefer-object-spread-to-lodash', rule, {
  valid: [
    {
      code: "_.extend(foo, { bar: 'baz' });",
    },
    {
      code: "_.assignIn(foo, { bar: 'baz' });",
    },
  ],
  invalid: [
    {
      code: "_.extend({}, foo, { bar: 'baz' });",
      errors: [{ message: 'Use object spread syntax instead of _.extend on object literals.' }],
    },
    {
      code: "_.assignIn({}, foo, { bar: 'baz' });",
      errors: [{ message: 'Use object spread syntax instead of _.assignIn on object literals.' }],
    },
  ],
});
