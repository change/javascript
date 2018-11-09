# eslint-config-change-base

This package provides Change.org's base eslint configuration.  It extends
`eslint-config-airbnb-base`, but also wraps in some overrides to that, and some additional rules for
lodash, mocha and promises.

It requires several peer dependencies:
 * `eslint`
 * `eslint-plugin-import`
 * `eslint-plugin-lodash`
 * `eslint-plugin-promise`
 * `eslint-plugin-security`

See the currently required versions by running this:
```
	npm info eslint-config-change-base@latest peerDependencies
```

In addition, these can be treated as _optional_ peer dependencies (depending on whether the
corresponding exports are being used):
 * `eslint-plugin-jest`
 * `eslint-plugin-mocha`

To use, just include this module (and any peer dependencies from above) as devDependencies in your
package.json, and then add
```
  "extends": "change-base"
```
to your eslintrc.

The settings for `mocha` and `jest` are exported independently, so they must be included separately
as appropriate.  For example:
```
  "extends": ["change-base", "change-base/mocha"]
```
Or:
```
  "extends": ["change-base", "change-base/jest"]
```

By default we assume you are using lodash 4.x.  If you are instead using 3.x, then also make sure to
include this in your eslintrc:
```
  "settings": {
    "lodash": {
      "version": 3
    }
  }
```

## Contributing

Note that `airbnb-overrides.js` includes some rule definitions that are _copied_ from the AirBnB
config with slight modifications.  We risk drifting from the base configuration if we don't keep an
eye on the upstream configuration for these rules.  When we bump the version of `airbnb-config`,
these rules should be checked to make sure they still reflect mostly the AirBnB defaults.
