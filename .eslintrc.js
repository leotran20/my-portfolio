module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        // 'standard-with-typescript',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-sort-props': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
