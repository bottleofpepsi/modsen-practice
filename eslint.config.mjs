import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

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
            "no-console": "error",
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