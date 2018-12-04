const { RuleTester } = require('eslint');

const rule = require('../no-async-with-callback');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } });

ruleTester.run('no-async-with-callback', rule, {
  valid: [
    { code: 'const myFunc = async (arg1) => {}' },
    { code: 'const myFunc = (arg1, callback) => {}' },
    { code: 'const myFunc = async function (arg1) {}' },
    { code: 'const myFunc = function (arg1, callback) {}' },
    { code: 'async function myFunc(arg1) {}' },
    { code: 'function myFunc(arg1, callback) {}' },
    { code: 'const someObj = { async myAction(arg1) {} }' },
    { code: 'const controller = {  myAction(arg1, callback) {} }' },
    { code: 'const someObj = {  myAction: async (arg1) => {} }' },
    { code: 'const controller = {  myAction: (arg1, callback) => {} }' },
    { code: 'const someObj = {  myAction: async function(arg1) {} }' },
    { code: 'const controller = {  myAction: function(arg1, callback) {} }' },
  ],
  invalid: [
    {
      code: 'const myFunc = async (arg1, callback) => {}',
      errors: [
        {
          message:
            "The parameter 'callback' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },
    {
      code: 'const myFunc = async function (arg1, callback) {}',
      errors: [
        {
          message:
            "The parameter 'callback' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },
    {
      code: 'async function myFunc (arg1, callback) {}',
      errors: [
        {
          message:
            "The parameter 'callback' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },
    {
      code: 'const controller = { async myAction(arg1, callback) {} }',
      errors: [
        {
          message:
            "The parameter 'callback' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },
    {
      code: 'const controller = { myAction: async function(arg1, callback) {} }',
      errors: [
        {
          message:
            "The parameter 'callback' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },

    {
      code: 'const controller = { myAction: async function(arg1, done) {} }',
      errors: [
        {
          message:
            "The parameter 'done' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },

    {
      code: 'const controller = { myAction: async function(arg1, next) {} }',
      errors: [
        {
          message:
            "The parameter 'next' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },

    {
      code: 'const controller = { myAction: async function(arg1, cb) {} }',
      errors: [
        {
          message:
            "The parameter 'cb' appears to be a callback. Do not supply a callback to an async function.",
        },
      ],
    },
  ],
});
