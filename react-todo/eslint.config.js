import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false, // Allows using babel parser without babel config
    ecmaVersion: 2025,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2025: true,
    node: true,
    jest: true, // Add this to recognize Jest globals
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Your custom rules
    "react/react-in-jsx-scope": "off",
  },
});
