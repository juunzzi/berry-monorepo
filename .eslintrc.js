module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react', 'react-hooks', 'prettier', 'simple-import-sort'],
  rules: {
    'max-depth': ['error', 2],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
