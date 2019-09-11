module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "prettier/standard",
    "prettier/babel",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["babel", "prettier", "react"],
  rules: {
    "react/jsx-filename-extension": [0],
    "no-use-before-define": [0],
    "no-unused-vars": [0],
    "react/prop-types": [0],
  },
};
