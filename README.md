# Change.org JavaScript Style Guide

We use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) as a foundation for
our own JavaScript code style recommendations, and [eslint](https://www.npmjs.com/package/eslint)
for enforcement.

This repo includes some npm [packages](packages/) that encapsulate a couple of different flavours of
eslint configs, which themselves inherit from `eslint-config-airbnb*` but also bring in a handful of
other relevant plugins and overrides.

* [eslint-config-change-base](packages/eslint-config-change-base) - use for Node.js projects
* [eslint-config-change-fe](packages/eslint-config-change-fe) - use for front-end projects
