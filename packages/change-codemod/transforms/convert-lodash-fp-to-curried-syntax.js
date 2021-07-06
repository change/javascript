// Convert lodash fp to curried syntax
// This will apply to all usage with two arguments.
//
// Known issues: Unfortunately expressions will have semicolons in unfortunate
// and syntactically incorrect places which need to be cleaned up manually
// (text search and replace works well for most cases).
module.exports = function transformer(file, api, _options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  function convertToCurriedSyntax(node) {
    if (node.value && node.value.arguments.length <= 1) return;
    const otherArgs = node.value.arguments.splice(1, 10);
    node.replace(j.expressionStatement(j.callExpression(node.value, otherArgs)));
  }

  root
    .find(j.CallExpression, {
      callee: {
        object: {
          name: "fp"
        }
      }
    })
    .forEach(convertToCurriedSyntax);

  return root.toSource();
}
