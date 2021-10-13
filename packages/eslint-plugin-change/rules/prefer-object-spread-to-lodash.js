const fp = require('lodash/fp');

const isLodashCall = (node) =>
  node.callee && node.callee.type === 'MemberExpression' && node.callee.object.name === '_';
const isExtendOrAssignInCall = (node) =>
  isLodashCall(node) &&
  (node.callee.property.name === 'extend' || node.callee.property.name === 'assignIn');
const firstArgumentIsObjectExpression = (node) =>
  node.arguments && node.arguments[0].type === 'ObjectExpression';
const hasSpreadArgument = (node) =>
  fp.some((argument) => argument.type === 'SpreadElement')(node.arguments);

module.exports = {
  create(context) {
    return {
      CallExpression(node) {
        if (
          isExtendOrAssignInCall(node) &&
          firstArgumentIsObjectExpression(node) &&
          !hasSpreadArgument(node)
        ) {
          context.report(
            node,
            `Use object spread syntax instead of _.${node.callee.property.name} on object literals.`
          );
        }
      },
    };
  },
};
