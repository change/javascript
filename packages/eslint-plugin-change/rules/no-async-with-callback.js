const callbackNames = ['callback', 'done', 'cb', 'next'];

const doCheck = context => node => {
  if (node.async) {
    const paramNames = node.params.filter(n => n.type === 'Identifier').map(n => n.name);

    const callbackParamName = paramNames.find(param => callbackNames.includes(param));
    if (callbackParamName) {
      context.report(node, 'Do not supply a callback to an async function.');
    }
  }
};

module.exports.create = context => ({
  ArrowFunctionExpression: doCheck(context),

  FunctionDeclaration: doCheck(context),

  FunctionExpression: doCheck(context),
});
