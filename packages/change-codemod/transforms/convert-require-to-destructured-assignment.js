const loggingEnabled = false;

function log(...args) {
  // eslint-disable-next-line no-console
  if (loggingEnabled) console.log(...args);
}

function findMemberExpressionsForVariable(path, j, variableName) {
  return path.find(j.MemberExpression, {
    object: {
      name: variableName,
    },
  });
}

function convertMemberExpressionToIdentifier(path, j, variableName) {
  findMemberExpressionsForVariable(path, j, variableName).replaceWith((p) =>
    j.identifier(p.value.property.name)
  );
}

// Return the names of methods accessed on a variable
function findMethodsAccessedOnVariable(path, j, variableName) {
  const methods = new Set();
  findMemberExpressionsForVariable(path, j, variableName).forEach((p) => {
    methods.add(p.value.property.name);
  });
  return methods;
}

// Find a require statement for a given package.
// Assumes only one require in a file.  Only matches requires that are variable assignments.
function findRequireForPackage(path, j, packageName) {
  const matches = path
    .find(j.CallExpression, { callee: { name: 'require' } })
    .filter(
      (n) =>
        n.node.arguments.length >= 1 &&
        n.node.arguments[0].value === packageName &&
        n.parentPath.value.id &&
        n.parentPath.value.id.type === 'Identifier'
    );
  if (matches.length) return matches.get(0);
  return undefined;
}

// Convert a variable declaration with identifier to variable declaration with
// object pattern
function convertAssignmentToObjectExpansion(path, j, methods) {
  log(path);
  const propertyNodes = Array.from(methods.values(), (method) => {
    const property = j.property('init', j.identifier(method), j.identifier(method));
    property.shorthand = true;
    return property;
  });
  log('propertyNodes', propertyNodes);

  // eslint-disable-next-line no-param-reassign
  path.value.id = j.objectPattern(propertyNodes);
}

// Use the --package=name option to convert usages for that package
module.exports = function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { package: packageName } = options;
  if (!packageName)
    throw new Error(
      'Please specify the name of the package you would like to convert using the --package option.'
    );

  const requireNode = findRequireForPackage(root, j, packageName);
  if (!requireNode) return root.toSource();

  log('requireNode', requireNode);

  const variableName = requireNode.parentPath.parentPath.value.id.name;
  log('variableName', variableName);

  const methods = findMethodsAccessedOnVariable(root, j, variableName);
  log('methods', methods);

  convertAssignmentToObjectExpansion(requireNode.parentPath.parentPath, j, methods);
  convertMemberExpressionToIdentifier(root, j, variableName);

  return root.toSource();
};
