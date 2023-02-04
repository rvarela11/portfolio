module.exports = {
  extends: ['airbnb', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
    'default-param-last': 'off',
    'func-names': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-named-default': 'off',
    'import/no-unresolved': [2, { ignore: ['@'] }],
    'import/prefer-default-export': 0,
    'jsx-quotes': 'off',
    'linebreak-style': 'off',
    'max-len': [1, 180, 2, { ignoreComments: true }],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'object-curly-newline': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/function-component-definition': [2, {
      namedComponents: ['arrow-function', 'function-declaration', 'function-expression'],
      unnamedComponents: ['arrow-function', 'function-expression'],
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/no-unescaped-entities': 'off',
    'spaced-comment': 'off',
  },
};
