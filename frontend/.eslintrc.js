module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: { // C'est "globals" au pluriel ici
    process: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'], // Si vous n'utilisez pas React dans ce projet, vous pouvez enlever 'react'
  rules: {},
}
