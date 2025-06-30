import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import reactRefresh from 'eslint-plugin-react-refresh';
import stylistic from '@stylistic/eslint-plugin';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default defineConfig([
    globalIgnores([
        '.expo',
        'node_modules',
        '**/node_modules',
        '**/package.json',
        '**/yarn.lock',
        'ios/**',
        'android/**',
        'assets/**',
        '.vscode',
        '.expo-shared',
    ]),
    reactHooks.configs['recommended-latest'],
    reactRefresh.configs['recommended'],
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        commaDangle: 'only-multiline',
        severity: 'error',
        arrowParens: 'always',
    }),
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...reactNative.environments['react-native']['react-native'],
            },
            parser: babelParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: './tsconfig.json',
            },
        },
        plugins: {
            // 'react-hooks': fixupPluginRules(reactHooks),
            'react-native': reactNative,
            // 'react-refresh': fixupPluginRules(reactRefresh),
            '@stylistic': stylistic,
        },
        rules: {
            // React
            'react-refresh/only-export-components': 'warn',
            // 'react-hooks/rules-of-hooks': 'warn',
            // 'react-hooks/exhaustive-deps': 'error',

            // Stylistic rules
            // '@stylistic/semi': 'warn',
            // '@stylistic/indent': ['warn', 2],
            // '@stylistic/quotes': ['warn', 'single'],
            // '@stylistic/comma-dangle': ['warn', 'always-multiline'],
        },
    },
]);
