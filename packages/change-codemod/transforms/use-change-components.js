const getDestructuredKeys = (j, path) =>
  path.value.id.properties.map((property) => {
    const propertyName = property.key.name;
    const propertyValue = property.value.name;
    const newProperty = j.property('init', j.identifier(propertyName), j.identifier(propertyValue));

    newProperty.shorthand = propertyName === propertyValue;

    return newProperty;
  });

// eslint-disable-next-line complexity
const createDesignSystemRequireKeys = (j, path) => {
  const isThemeRequire = !!path.value.init.arguments[0].value.match('design-system/theme');
  const isDestructuredRequire = !!path.value.id.properties;
  const isNakedThemeRequire = isThemeRequire && !isDestructuredRequire;
  const isDestructuredThemeRequire = isThemeRequire && isDestructuredRequire;

  // If requiring theme directly, add key for theme
  if (isNakedThemeRequire) {
    const newProperty = j.property('init', j.identifier('theme'), j.identifier(path.value.id.name));
    newProperty.shorthand = path.value.id.name === 'theme';
    return [newProperty];
  }

  // If destructuring keys from theme, put props under theme key
  if (isDestructuredThemeRequire) {
    return [
      j.property('init', j.identifier('theme'), j.objectPattern(getDestructuredKeys(j, path))),
    ];
  }

  // Wonky require statements that we'll fix manually when they break
  if (!isDestructuredRequire && !isThemeRequire) return [];

  // If requiring a component, create key for component
  return getDestructuredKeys(j, path);
};

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;

  const changeComponentsRequireProperties = [];

  const root = j(file.source);

  // Get require statemtents whose paths include design-system
  const designSystemRequires = root
    .find(j.VariableDeclarator, {
      init: {
        callee: {
          name: 'require',
        },
      },
    })
    .filter(
      (path) =>
        path.value.init.arguments[0].value &&
        path.value.init.arguments[0].value.match('design-system')
    );

  if (!designSystemRequires) return undefined;

  // Push object properties for desctructuring of require('@change/components')
  designSystemRequires.forEach((path) => {
    changeComponentsRequireProperties.push(...createDesignSystemRequireKeys(j, path));
    j(path).remove();
  });

  if (!changeComponentsRequireProperties.length) return undefined;

  // Insert new require statement after require('react');
  root
    .find(j.VariableDeclaration, {
      declarations: [
        {
          init: {
            callee: {
              name: 'require',
            },
            arguments: [
              {
                value: 'react',
              },
            ],
          },
        },
      ],
    })
    .insertAfter([
      j.variableDeclaration('const', [
        j.variableDeclarator(
          j.objectPattern(changeComponentsRequireProperties),
          j.callExpression(j.identifier('require'), [j.literal('@change/components')])
        ),
      ]),
    ]);

  return root.toSource();
};
