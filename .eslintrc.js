module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // TypeScript ESLint recommended rules
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // Disable the rule
  },
};
