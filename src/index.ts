/**
 * @sklv-labs/ts-dev-configs
 * Unified development configurations for TypeScript projects
 */

// Note: Paths are relative to package root
// Users can resolve them using require.resolve() or import.meta.resolve()

// Preset paths (for extends in config files)
export const presets = {
  base: {
    eslint: '@sklv-labs/ts-dev-configs/presets/base/eslint.config.mjs',
    prettier: '@sklv-labs/ts-dev-configs/presets/base/prettier.js',
    tsconfig: '@sklv-labs/ts-dev-configs/presets/base/tsconfig.json',
    jest: '@sklv-labs/ts-dev-configs/presets/base/jest.config.js',
    vitest: '@sklv-labs/ts-dev-configs/presets/base/vitest.config.ts',
  },
  react: {
    eslint: '@sklv-labs/ts-dev-configs/presets/react/eslint.config.mjs',
    prettier: '@sklv-labs/ts-dev-configs/presets/base/prettier.js',
    tsconfig: '@sklv-labs/ts-dev-configs/presets/react/tsconfig.json',
    vite: '@sklv-labs/ts-dev-configs/presets/react/vite.config.ts',
    jest: '@sklv-labs/ts-dev-configs/presets/base/jest.config.js',
    vitest: '@sklv-labs/ts-dev-configs/presets/base/vitest.config.ts',
  },
  nestjs: {
    eslint: '@sklv-labs/ts-dev-configs/presets/nestjs/eslint.config.mjs',
    prettier: '@sklv-labs/ts-dev-configs/presets/base/prettier.js',
    tsconfig: '@sklv-labs/ts-dev-configs/presets/nestjs/tsconfig.json',
    jest: '@sklv-labs/ts-dev-configs/presets/nestjs/jest.config.js',
    vitest: '@sklv-labs/ts-dev-configs/presets/base/vitest.config.ts',
  },
} as const;

// Config paths
export const configs = {
  git: {
    lintStaged: '@sklv-labs/ts-dev-configs/configs/git/lint-staged.js',
    commitlint: '@sklv-labs/ts-dev-configs/configs/git/commitlint.js',
    husky: {
      preCommit: '@sklv-labs/ts-dev-configs/configs/git/husky/pre-commit',
      commitMsg: '@sklv-labs/ts-dev-configs/configs/git/husky/commit-msg',
    },
  },
  build: {
    vite: '@sklv-labs/ts-dev-configs/configs/build/vite.base.ts',
    webpack: '@sklv-labs/ts-dev-configs/configs/build/webpack.base.js',
  },
  editor: {
    editorconfig: '@sklv-labs/ts-dev-configs/configs/editor/.editorconfig',
    vscode: {
      settings: '@sklv-labs/ts-dev-configs/configs/editor/vscode/settings.json',
      extensions: '@sklv-labs/ts-dev-configs/configs/editor/vscode/extensions.json',
    },
  },
} as const;

// Type definitions
export type PresetName = 'base' | 'react' | 'nestjs';
export type ConfigCategory = 'git' | 'build' | 'editor';
