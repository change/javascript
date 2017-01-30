# eslint-config-change-base

This package provides Change.org's base eslint configuration.  It extends
`eslint-config-airbnb-base`, but also wraps in some overrides to that, and some additional rules for
lodash, mocha and promises

It requires several peer dependencies:
 * `eslint`
 * `eslint-plugin-import`
 * `eslint-plugin-lodash`
 * `eslint-plugin-mocha`
 * `eslint-plugin-promise`

See package.json for the currently required versions.

To use, just include this module as a devDependency, and then add
```
  "extends": "change-base"
```
to your eslintrc.


## Contributing

Note that `rules/overrides.js` includes some rule definitions that are _copied_ from the AirBnB
config with slight modifications.  We risk drifting from the base configuration if we don't keep an
eye on the upstream configuration for these rules.  When we bump the version of `airbnb-config`,
these rules should be checked to make sure they still reflect mostly the AirBnB defaults.
