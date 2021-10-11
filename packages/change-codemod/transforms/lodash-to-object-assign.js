module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || { quote: 'single', trailingComma: true };
  const root = j(file.source);

  const transformLodashExtendToObjectAssign = (path) =>
    j(path).replaceWith(
      j.callExpression(
        j.memberExpression(j.identifier('Object'), j.identifier('assign')),
        path.value.arguments
      )
    );

  root
    .find(
      j.CallExpression,
      (path) =>
        (j.match(path, { callee: { object: { name: '_' }, property: { name: 'extend' } } }) ||
          j.match(path, { callee: { object: { name: '_' }, property: { name: 'assignIn' } } })) &&
        j.match(path, { arguments: [{ type: 'ObjectExpression' }] })
    )
    .filter((p) => !p.value.arguments.some((a) => a.type === 'SpreadElement'))
    .forEach(transformLodashExtendToObjectAssign);

  return root.toSource(printOptions);
};
