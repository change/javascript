const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'convert-return-to-await-in-async-it-blocks');
