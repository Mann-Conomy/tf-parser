const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config({
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
    ],
    ignores: [
        "dist/**/*",
        "examples/*.js",
        "test/**/*.ts",
        "eslint.config.js",
        "jest.config.ts"
    ],
    rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always",
            {
                "omitLastInOneLineClassBody": true
            }
        ],
        "no-control-regex": "off"
    }
});
