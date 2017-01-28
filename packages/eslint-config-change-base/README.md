# eslint-config-change-base

This package provides Change.org's base eslint configuration.  It extends
`eslint-config-airbnb-base`, but also wraps in some overrides to that, and some additional rules for
lodash and mocha.

It requires several peer dependencies:
 * `eslint`
 * `eslint-plugin-import`
 * `eslint-plugin-lodash`
 * `eslint-plugin-mocha`

See package.json for the currently required versions.

To use, just include this module as a devDependency, and then add
```
  "extends": "change-base"
```
to your eslintrc.
