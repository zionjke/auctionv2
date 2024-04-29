import globals from 'globals'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

import path from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended})

export default [
    {
        languageOptions:
            {
                globals: globals.browser
            }
    },

    ...compat.extends('standard-with-typescript'),
    pluginReactConfig,
    {
        files: ['**/*.tsx', '**/*.ts'],
        rules: {
            semi: "error",
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': ['error'],
            "@typescript-eslint/strict-boolean-expressions": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "no-unsafe-argument": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-unsafe-argument": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "react/no-deprecated": "off",
            "@typescript-eslint/naming-convention": "off",
        },
        globals: {
            __IS_DEV__: true
        }
    }
]
