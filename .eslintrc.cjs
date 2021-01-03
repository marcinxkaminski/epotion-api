module.exports = {
  env: {
    jest: true,
    node: true,
    es2020: true,
  },
  plugins: [
    'xss',
    'html',
    'jest',
    'sonarjs',
    'unicorn',
    'jest-dom',
    'security',
    'markdown',
    'prettier',
    'no-secrets',
    'no-unsanitized',
    'eslint-comments',
    'simple-import-sort',
  ],
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest-dom/recommended',
    'plugin:security/recommended',
    'plugin:markdown/recommended',
    'plugin:eslint-comments/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
  settings: { jest: { version: 26 } },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['error'],
    'simple-import-sort/sort': 'error',
    'import/prefer-default-export': 'off',
    'no-secrets/no-secrets': [
      'error',
      // eslint-disable-next-line no-secrets/no-secrets
      { additionalRegexes: { 'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*' } },
    ],
    'xss/no-mixed-html': 2,
    'xss/no-location-href-assign': 2,
    'import/extensions': 0,
  },
};
