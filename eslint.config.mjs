import { fixupConfigRules } from "@eslint/compat";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        ignores: [
            "webpack.config.js",
            "babel.config.json",
            "tsconfig.json",
            "dist/**/*",
            "node_modules/**/*"
        ]
    },
    {
        rules: {
            eqeqeq: "warn",
            "no-unused-vars": "error",
            "no-console": "warn",
            "prefer-const": [
                "error",
                {
                    ignoreReadBeforeAssign: true
                }
            ],
            "@typescript-eslint/quotes": "error",
            quotes: "error"
        }
    },
    {
        plugins: {
          "simple-import-sort": simpleImportSort,
        },
        rules: {
          "simple-import-sort/imports": "warn",
          "simple-import-sort/exports": "warn",
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.tsx", "**/*.jsx"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json"
            }
        }
    },
    ...fixupConfigRules(pluginReactConfig)
];