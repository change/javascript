const { defineTest } = require('jscodeshift/dist/testUtils');

defineTest(__dirname, 'use-change-components');
defineTest(__dirname, 'use-change-components', null, 'use-change-components-theme-destructure');
