const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'add-require-for-global-identifier', { identifier: 'sinon' });
defineTest(__dirname, 'add-require-for-global-identifier', { identifier: '_', packageName: 'lodash' }, 'add-require-for-global-identifier-with-existing-require-statement');
