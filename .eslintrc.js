module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier/@typescript-eslint",
    'prettier',
  ],
	env: {
		browser: true,
    node: true,
    es6: true,
    jest: true,
	},
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
          'prefixWithI': 'always'
      }
    ],
    semi: ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    //'typescript/no-use-before-define': 'warn',
    //'typescript/no-unused-vars': 'warn',
  }
};