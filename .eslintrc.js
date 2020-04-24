module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        'import',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'jest'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended'
    ],
    rules: {
        "quotes": ["error", "double"],
        "import/no-default-export": 2,
        "import/no-unresolved": 2,
        "import/named": 2,
        "no-unused-vars": 2,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "@typescript-eslint/interface-name-prefix": [
            "error",
            {
                "prefixWithI": "always",
                "allowUnderscorePrefix": true
            }
        ]
    },
    settings: {
        react: {
            "version": "detect"
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "directory": "./"
            },
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    }
};
