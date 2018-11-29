function myFunction() {
  _.extend(foo, { bar: 'baz' });
  _.extend({}, foo, { bar: 'baz' });

  _.assignIn(foo, { bar: 'baz' });
  _.assignIn({}, foo, { bar: 'baz' });
}
