/* eslint-env node */

module.exports = {
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'prefer-const': 'error',
    'eqeqeq': 'error',
    'curly': ['error', 'multi-line', 'consistent'],
    'dot-notation': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'wrap-iife': ['error', 'inside'],
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': ['error', {
      overrides: {
        for: { after: false },
        if: { after: false },
        switch: { after: false },
        while: { after: false },
        catch: { after: false }
      }
    }],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-useless-computed-key': 'error',
    'no-var': 'error',
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error'
  }
};
