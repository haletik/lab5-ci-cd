import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "@eslint/config-helpers";

export default defineConfig({
  // ⛔ Ігноруємо конкретний файл
  // ignores: ["src/main.tsx"],

  // ✅ Масив конфігів, які застосовуються
  configs: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: {
        react: reactPlugin,
        "react-hooks": reactHooks,
      },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: "./tsconfig.app.json",
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        // 🔧 Основні правила
        "react/react-in-jsx-scope": "off",
        "no-console": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
      },
    },
  ],
});
