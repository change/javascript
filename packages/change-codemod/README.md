# change-codemod

Codemods for automated JS code maintenance.

## Setup

```
npm install
```

## Available codemods

### lodash-to-object-spread
```
TARGET=path/to/your/js/repo npm run lodash-to-object-spread
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

#### Implementing an npm script for your codemod

```
    "lodash-to-object-spread": "TRANSFORM_PATH=path/to/your/transform.js npm run codemod && TRANSFORM_PATH=path/to/another/transform.js npm run codemod"
```
