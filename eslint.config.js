import globals from "globals";
import standard from "eslint-config-standard";

export default [
  standard,
  {
    rules: {
      semi: ["warn", "always"],
      quotes: ["error", "double"]
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  }
];
