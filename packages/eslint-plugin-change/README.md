# change-codemod

Custom lint rules for change javascript repos.

## Setup

```
npm install
```

## Available rules

### change/prefer-object-spread-to-lodash

#### Valid
```
_.extend(foo, { bar: 'baz' });
_.assignIn(foo, { bar: 'baz' });
```

#### Invalid
```
_.extend({}, foo, { bar: 'baz' });
_.assignIn({}, foo, { bar: 'baz' });
```

##### Suggested fix
```
{
  ...foo,
  bar: 'baz',
};
```

## Development

### Run tests
```
npm test
```

### Creating a new rule

#### Writing your rule

TODO

https://astexplorer.net/ is very helpful here.

#### Testing your rule

See https://eslint.org/docs/developer-guide/nodejs-api#ruletester