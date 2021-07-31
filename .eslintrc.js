module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'key-spacing': 'error',
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'line-comment-position': 'error',
    'object-curly-newline': 'error',
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'operator-linebreak': 'error',
    // 不允许出行多余空格
    'no-multi-spaces': 'error',
    // 强制数组元素间出现换行
    'array-element-newline': ['error', 'consistent'],
    // 注释中首字母大写
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    // 最后一个元素使用逗号
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1 ,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    'max-len': ['error', { code: 100 }],
    'multiline-comment-style': 'off',
  },
};
