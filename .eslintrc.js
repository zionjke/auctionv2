module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
    ],
    rules: {
        'no-console': 'warn',
        'react/jsx-indent': [2, 4],
        // error, number of space
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', 'ts', 'tsx'],
        }],
        'import/no-unresolved': 'off',
        'no-return-await': 'off',
        'no-unused-vars': 'warn',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'max-len': ['warn', {
            ignoreComments: true,
            code: 230,
        }],
        'react/react-in-jsx-scope': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-lone-blocks': 'off',
        'react/button-has-type': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'react/prop-types': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off', // говорим что в тестах отключаем это правило
        },
    }],
};
