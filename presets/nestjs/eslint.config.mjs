import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import-x';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

import eslintNestJs from '@darraghor/eslint-plugin-nestjs-typed';

export default defineConfig([
    // Base recommended configs
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,

    // NestJS Typed plugin recommended rules
    ...eslintNestJs.configs.flatRecommended,

    // Global ignores
    {
        ignores: ['dist/**', 'build/**', 'node_modules/**', '*.config.js', '*.config.ts', '*.config.mjs'],
    },

    // TypeScript files configuration
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.es2024,
            },
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'import-x': importPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            // TypeScript specific rules
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
            'prefer-const': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',
            '@typescript-eslint/interface-name-prefix': 'off',

            '@darraghor/nestjs-typed/provided-injected-should-match-factory-parameters': 'off',

            // General best practices
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'no-unused-expressions': 'error',
            'prefer-const': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-template': 'error',

            // Import order rules
            'import-x/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            'import-x/no-duplicates': 'error',
            'import-x/no-unresolved': 'off', // TypeScript handles this

            // Prettier rules
            'prettier/prettier': 'error',
        },
    },

    // Prettier config (must be last to override formatting rules)
    prettier,
]);
