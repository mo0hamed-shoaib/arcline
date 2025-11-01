// eslint.config.mjs
import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import tailwind from "eslint-plugin-tailwindcss";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
    {
        ignores: ["node_modules", ".next", "out", "dist"],
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json",
            },
        },
        plugins: {
            "@next/next": nextPlugin,
            react: reactPlugin,
            "react-hooks": reactHooks,
            "@typescript-eslint": tsPlugin,
            prettier: prettierPlugin,
            tailwindcss: tailwind,
            "simple-import-sort": simpleImportSort,
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            // --- Next.js best practices ---
            ...nextPlugin.configs["core-web-vitals"].rules,

            // --- React ---
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "react/prop-types": "off",

            // --- Hooks ---
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // --- TypeScript ---
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/no-explicit-any": "warn",

            // --- Tailwind ---
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/no-custom-classname": "off",

            // --- Import Sorting ---
            "simple-import-sort/imports": [
                "warn",
                {
                    groups: [
                        // Side effects
                        ["^\\u0000"],
                        // Packages
                        ["^react", "^next", "^@?\\w"],
                        // Internal aliases (e.g. @/components)
                        ["^(@|@/)(.*)$"],
                        // Parent imports
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Sibling imports
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Style imports
                        ["^.+\\.s?css$"],
                    ],
                },
            ],
            "simple-import-sort/exports": "warn",

            // --- Prettier ---
            "prettier/prettier": [
                "warn",
                {
                    printWidth: 100,
                    semi: true,
                    singleQuote: false,
                    trailingComma: "es5",
                    tabWidth: 2,
                    endOfLine: "auto",
                },
            ],
        },
    },
]);
