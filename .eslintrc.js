module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'valid-jsdoc': [0],
    'react/display-name': [0],
    'operator-linebreak': ['error', 'before'],
    'object-curly-spacing': ['error', 'always'],
    'react/prop-types': [0],
    'require-jsdoc': [0],
    'linebreak-style': [0],
    'indent': ['error', 2],
    'max-len': ['error', 200],
  },
};
