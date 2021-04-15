// Convert return to await in 'it' blocks
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  root
    .find(j.CallExpression, {
      callee: {
        name: 'it',
      },
    })
    .filter(p => p.node.arguments.length > 1 && p.node.arguments[1].async === true)
    .find(j.ReturnStatement)
    .forEach(p => {
      p.replace(j.expressionStatement(j.awaitExpression(p.value.argument)));
    });

  return root.toSource();
}
