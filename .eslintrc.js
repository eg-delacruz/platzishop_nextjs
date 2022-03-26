module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0,
    //0 = ignorar reglas y errores al hacer npm run lint
    //1 = warning
    //2 = obligado totalmente a cumplirlo
  },
};
