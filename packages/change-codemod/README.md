# change-codemod

Codemods for automated JS code maintenance.

## Setup

```
npm install
```

## Available codemods

### lodash-to-object-spread
```
make lodash-to-object-spread path=path/to/your/js/repo
```
#### Description
Converts non-mutating usees of `_.extend` and `_.assignIn` to use object spread syntax.

#### Associated lint rule
`change/prefer-object-spread-to-lodash`

## Development

### Run tests
```
npm test
```

### Creating a new codemod

#### Writing your codemod

TODO

https://astexplorer.net/ is very helpful here.

#### Testing your codemod

See https://github.com/facebook/jscodeshift#unit-testing

#### Implementing a make task for your codemod

```
mod-name:
	make run-codemod transform=path/to/your/transform.js path=$(path)
	make run-codemod transform=path/to/another/transform.js path=$(path)
	@echo "Done! Enable the change/name-of-enforcing-lint-rule rule to enforce this change."
```