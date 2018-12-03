module.exports = {
  plugins: ['jsx-a11y'],

  extends: ['plugin:jsx-a11y/recommended'],

  rules: {
    // Make anchor validation work with react-router Link components which take `to`
    // instead of `href`. This change is present in 'master' for the airbnb eslint config
    // but as yet unreleased.
    // TODO: Remove once airbnb release this update to their eslint config
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
