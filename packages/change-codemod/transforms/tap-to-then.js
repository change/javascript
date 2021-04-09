// Convert tap to then in promise chains.
//
// Known issues: Doesn't support inline expressions unless omitting the return statement.
//
// Pass option --omit-return to omit the return in the translated tap call.
// This is useful for test files, where tap is often the last call in the chain.
export default function transformer(file, api, options) {
  const omitReturn = options['omit-return'];
  const j = api.jscodeshift;
  const root = j(file.source);
  const tapCalls = root.find(j.CallExpression, {
    callee: {
      property: {
        name: 'tap',
      },
    },
  });

  // eslint-disable-next-line complexity
  tapCalls.forEach(p => {
    // eslint-disable-next-line no-param-reassign
    p.node.callee.property.name = 'then';
    const argumentName = p.node.arguments[0].params.length
      ? p.node.arguments[0].params[0].name
      : 'result';
    const isLastInChain = !p.parentPath.value.property;

    // Add an argument to the lambda function if there is none
    if ((!isLastInChain || !omitReturn) && p.node.arguments[0].params.length === 0) {
      p.node.arguments[0].params.push('result');
    }

    if (omitReturn && !isLastInChain) return;

    // Add the return statement
    p.node.arguments[0].body.body.push(j.returnStatement(j.identifier(argumentName)));
  });
  return root.toSource();
}
