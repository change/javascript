# eslint-config-change-fe

This package provides Change.org's front-end eslint configuration.  It extends
`eslint-config-airbnb` and `eslint-config-change-base`.

It requires these modules as peer dependencies:
 * `eslint`
 * `eslint-import-resolver-node`
 * `eslint-plugin-import`
 * `eslint-plugin-jsx-a11y`
 * `eslint-plugin-lodash`
 * `eslint-plugin-jest`
 * `eslint-plugin-mocha`
 * `eslint-plugin-promise`
 * `eslint-plugin-react`

See the currently required versions by running this:
```
	npm info eslint-config-change-fe@latest peerDependencies
```

To use, just include this module as a devDependency, and then add
```
  "extends": "change-fe"
```
to your eslintrc.
