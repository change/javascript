const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'tap-to-then');
defineTest(__dirname, 'tap-to-then', { 'omit-return': true }, 'tap-to-then-with-omit-return');
