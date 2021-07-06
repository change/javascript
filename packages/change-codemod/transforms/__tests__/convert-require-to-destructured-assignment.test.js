const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'convert-require-to-destructured-assignment', { package: 'lodash' });
