module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'off',
    'jsdoc/no-types': 'error',
    'import/no-unresolved': 'off',
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'return'}
    ]
  }
}
