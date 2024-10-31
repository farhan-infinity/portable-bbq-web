/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // Add this line
    "prettier",
  ],
  parser: "@typescript-eslint/parser", // Add this line
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"], // Add @typescript-eslint plugin
  rules: {
    "prettier/prettier": "error",
    "no-debugger": "off", // Allow debugger statements
    // Add any additional rules you want to customize here
  },
  settings: {
    react: {
      version: "detect", // Automatically picks the version you have installed
    },
  },
};
