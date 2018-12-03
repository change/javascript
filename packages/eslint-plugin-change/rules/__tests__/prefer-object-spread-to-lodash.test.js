const { RuleTester } = require('eslint');
const rule = require('../prefer-object-spread-to-lodash');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('prefer-object-spread-to-lodash', rule, {
  valid: [
    {
      code: "_.extend(foo, { bar: 'baz' });",
    },
    {
      code: "_.assignIn(foo, { bar: 'baz' });",
    },
    {
      code: '_.extend({}, ...foo);',
    },
    {
      code: '_.assignIn({}, ...foo);',
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
