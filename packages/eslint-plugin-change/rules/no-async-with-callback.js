const callbackNames = ['callback', 'done', 'cb', 'next'];

const doCheck = context => node => {
  if (node.async) {
    const paramNames = node.params.filter(n => n.type === 'Identifier').map(n => n.name);

    const callbackParamName = paramNames.find(param => callbackNames.includes(param));
    if (callbackParamName) {
      context.report(
        node,
        `The parameter '${callbackParamName}' appears to be a callback. Do not supply a callback to an async function.`
      );
    }
  }
};

module.exports = {
  meta: {
    docs: {
      url: 'https://github.com/change/javascript/blob/master/docs/rules/no-async-with-callback.md',
    },
  },

  create: context => ({
    ArrowFunctionExpression: doCheck(context),

    FunctionDeclaration: doCheck(context),

    FunctionExpression: doCheck(context),
  }),
};
