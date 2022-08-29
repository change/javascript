# Change.org JavaScript Style Guide/Tools

We use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) as a foundation for
our own JavaScript code style recommendations, and [eslint](https://www.npmjs.com/package/eslint)
for enforcement.

This repo includes some npm [packages](packages/) that encapsulate a couple of different flavours of
eslint configs, which themselves inherit from `eslint-config-airbnb*` but also bring in a handful of
other relevant plugins and overrides.

* [eslint-config-change-base](packages/eslint-config-change-base) - use for Node.js projects
* [eslint-config-change-fe](packages/eslint-config-change-fe) - use for front-end projects

Additionally, this repo contains `change-codemod` and `eslint-plugin-change` to transform Javascript code and enforce the transformations (as well as other custom rules).

## Release process

1. eslint-config-change-base
   1. bump @change-org/eslint-plugin-change
   1. bump version (`npm version minor`)
   1. release to npm (`npm publish`)
1. eslint-config-change-fe
   1. bump eslint-config-change-base and @change-org/eslint-plugin-change
   1. bump version (`npm version minor`)
   1. release to npm (`npm publish`)
1. eslint-plugin-change
   1. bump eslint-config-change-base
   1. bump version (`npm version minor`)
   1. release to npm (`npm publish`)
1. change-codemod
   1. bump eslint-config-change-base and @change-org/eslint-plugin-change
   1. bump version (`npm version minor`)
   1. release to npm (`npm publish`)
