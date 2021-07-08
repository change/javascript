// When an identifier is detected in a file, add a require (with the identifier name) to the
// top of the file.  Useful when needing to add requires for global identifiers.
//
// The identifier must be specified using the --identifier option, e.g. --identifier=sinon
// The argument for the new require statement can be specified separately from
// the targeting identifier, e.g. --identifier=_ --packageName=lodash
module.exports = (file, api, options) => {
  const { identifier } = options;
  if (!identifier)
    throw new Error(
      'Please specify the name of the identifier name you would like to detect using the --identifier option.'
    );

  const packageName = options.packageName || identifier;
  const j = api.jscodeshift;
  const root = j(file.source);

  const alreadyHasRequireDeclaration =
    root
      .find(j.CallExpression, { callee: { name: 'require' } })
      .filter(n => n.node.arguments.length >= 1 && n.node.arguments[0].value === packageName)
      .size() > 0;
  if (alreadyHasRequireDeclaration) return root.toSource();

  const found =
    root
      .find(j.Identifier, {
        name: identifier,
      })
      .size() > 0;

  if (found) {
    // Add a require for the identifier to the top of the file
    const variableDec = j.variableDeclaration('const', [
      j.variableDeclarator(
        j.identifier(identifier),
        j.callExpression(j.identifier('require'), [j.literal(packageName)])
      ),
    ]);
    root.find(j.Program).forEach(p => {
      p.value.body.unshift(variableDec);
    });
  }
  return root.toSource();
};
