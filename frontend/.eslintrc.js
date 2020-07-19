module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'react-app' 
    ],
    globals: {
        Atomics: readonly,
        SharedArrayBuffer: readonly
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
        ecmaVersion: 2018,
        sourceType: module
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/prefer-default-export': 'off',
        '@typescript/no-unused-expressions': 'off'
    }
};