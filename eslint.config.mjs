// @vendors
import nextPlugin from '@next/eslint-plugin-next';
import { configs as airbnbConfigs } from 'eslint-config-airbnb-extended/legacy';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['.next/**', 'node_modules/**', 'public/**']),

  // Airbnb's original rules (React, JSX a11y, hooks), ported to ESLint 9
  ...airbnbConfigs.react.recommended,
  ...airbnbConfigs.react.hooks,

  // Airbnb's legacy port targets an older ECMAScript version; the code uses newer syntax such as optional chaining
  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaVersion: 'latest' },
      sourceType: 'module',
    },
  },

  // Next.js rules (previously `next/core-web-vitals`)
  nextPlugin.configs['core-web-vitals'],

  // Alphabetical sorting of imports, named imports, JSX props and object keys
  perfectionist.configs['recommended-alphabetical'],

  // What `eslint-config-next` 13 used to adjust on top of Airbnb, kept so behavior matches the old setup
  {
    rules: {
      'import/no-anonymous-default-export': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react/display-name': 'error',
      'react/jsx-key': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
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
      // perfectionist sorts imports instead
      'import/order': 'off',
      'import/prefer-default-export': 0,
      'jsx-quotes': 'off',
      'linebreak-style': 'off',
      'max-len': [1, 180, 2, { ignoreComments: true, ignoreStrings: true }],
      'no-console': 'off',
      'no-param-reassign': 'off',
      'no-undef': 'warn',
      'no-unused-vars': 'warn',
      'object-curly-newline': 'off',
      // Keep the `// @vendors`, `// @components`, ... import sections; sort within each one, with `react` first and `next` second
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [
            { elementNamePattern: '^react$', groupName: 'react' },
            { elementNamePattern: '^next(/|$)', groupName: 'next' },
          ],
          groups: [
            'react',
            'next',
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown',
          ],
          newlinesBetween: 'ignore',
          partitionByComment: true,
          type: 'alphabetical',
        },
      ],
      // `key` first, then the rest alphabetically
      'perfectionist/sort-jsx-props': [
        'error',
        {
          customGroups: [{ elementNamePattern: '^key$', groupName: 'key' }],
          groups: ['key', 'unknown'],
          type: 'alphabetical',
        },
      ],
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': [
        2,
        {
          namedComponents: [
            'arrow-function',
            'function-declaration',
            'function-expression',
          ],
          unnamedComponents: ['arrow-function', 'function-expression'],
        },
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/no-array-index-key': 'off',
      'react/no-unescaped-entities': 'off',
      'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
      'spaced-comment': 'off',
    },
  },

  // CommonJS config file (defines `module`)
  {
    files: ['next.config.js'],
    languageOptions: { sourceType: 'commonjs' },
  },

  // The import resolver can't follow package "exports" subpaths like `eslint/config`
  {
    files: ['eslint.config.mjs'],
    rules: { 'import/no-unresolved': 'off' },
  },
]);
