function myFunction() {
  _.extend(foo, { bar: 'baz' });
  Object.assign({}, foo, { bar: 'baz' });

  _.assignIn(foo, { bar: 'baz' });
  Object.assign({}, foo, { bar: 'baz' });
}
