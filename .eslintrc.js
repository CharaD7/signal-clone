module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    // '@react-native-community',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['!.*', '**/*.js', 'dist', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['jest', 'import', 'react', 'react-native', 'simple-import-sort'],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '~hooks/**',
            group: 'external',
          },
          {
            pattern: '~components/**',
            group: 'external',
          },
          {
            pattern: '~constants/**',
            group: 'external',
          },
          {
            pattern: '~navigations/**',
            group: 'external',
          },
          {
            pattern: '~assets/**',
            group: 'external',
          },
          {
            pattern: '~screens/**',
            group: 'external',
          },
          {
            pattern: './**',
            group: 'external',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'linebreak-style': 'off',
    'no-extra-semi': ['error'],
    'no-use-before-define': 'off',
    // quotes: ['error', 'double'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['~assets', './assets'],
          ['~components', './components'],
          ['~constants', './constants'],
          ['~hooks', './hooks'],
          ['~navigation', './navigation'],
          ['~screens', './screens'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
};
