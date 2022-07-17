module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // For usage of imports statements
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',  // eslint-plugin-import for ES6+ import/export syntax & misspelling in filepath names 
    'plugin:import/warnings', 
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y adds accessibility standards in realtime
    'prettier/@typescript-eslint', 
    'plugin:prettier/recommended', // runs prettier as eslint rule
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}