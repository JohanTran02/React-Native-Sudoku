// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "eslint:recommended", "plugin:react-hooks/recommended", "prettier"],
  env: {
    "node": true,
    "react-native/react-native": true
  },
  plugins: ['react-hooks', "react", "react-native", "react-refresh", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'prettier/prettier': 'error',
  }
};
