function processNode(j, root, p) {
  // Only process nodes where the argument is an identifier
  if (p.node.arguments && p.node.arguments[0].type !== 'Identifier') return;

  // Convert tap to then
  // eslint-disable-next-line no-param-reassign
  p.node.callee.property.name = 'then';

  // Rewrite the identifier to an inline method call
  const identifier = p.node.arguments[0];
  // eslint-disable-next-line no-param-reassign
  p.node.arguments = [
    j.arrowFunctionExpression(
      [j.identifier('result')],
      j.blockStatement([j.returnStatement(j.callExpression(identifier, [j.identifier('result')]))]),
      true
    ),
  ];
}

// Convert tap and then with identifiers to use inline method
// Tap is converted to then but will be non-standard since the original
// method likely does not return a value, which is expected of then.
module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const tapCalls = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'tap',
      },
    },
  });
  const thenCalls = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'then',
      },
    },
  });

  tapCalls.forEach(p => processNode(j, root, p));
  thenCalls.forEach(p => processNode(j, root, p));
  return root.toSource();
}
