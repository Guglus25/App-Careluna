// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintConfigExpo = require("eslint-config-expo");
const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = defineConfig([
  expoConfig,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigExpo.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": ["error"],
    },
  },
]);
