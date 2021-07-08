// Convert tap to then in promise chains.  This helps to get your promise chains
// compliant with the native Promise API.  Which then enables use of other
// codemods to convert promises to async/await.
//
// Known issues: Inline expressions like `.tap(inlineIdentifier)` will not be modified.
//
// Pass option --omit-return to omit the return in the translated tap call if it
// is the last call in the chain.  This is useful for test files where tap is often
// the last call in the chain and we don't need to return a value from the promise chain.
module.exports = function transformer(file, api, options) {
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
    if (p.node.arguments[0].type === 'Identifier') return;

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

    if (omitReturn && isLastInChain) return;

    // Add the return statement
    if (p.node.arguments[0].body.body)
      p.node.arguments[0].body.body.push(j.returnStatement(j.identifier(argumentName)));
  });
  return root.toSource();
};
