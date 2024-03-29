module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  rules: {
    // js/ts
    'no-console': ['warn', { allow: ['error'] }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    camelcase: ['error', { properties: 'never' }],

    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-void': 'error',
    'prefer-const': [
      'warn',
      { destructuring: 'all', ignoreReadBeforeAssign: true }
    ],
    'prefer-template': 'error',
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true }
    ],
    'block-scoped-var': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],

    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // vue
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',

    // prettier
    'prettier/prettier': 'error'
  }
}
