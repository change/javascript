// Convert return to await in 'it' blocks
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const results = root
    .find(j.CallExpression, {
      callee: {
        name: "it"
      }
    })
    .filter((p) => {
      return p.node.arguments.length > 1 && p.node.arguments[1].async === true;
    })
    .find(j.ReturnStatement)
    .forEach((p) => {
      p.replace(j.expressionStatement(j.awaitExpression(p.value.argument)));
    });

  return root.toSource();
}
