# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-XX

### Added

- Initial release of @sklv-labs/ts-dev-configs
- Base preset with ESLint 9 (flat config), Prettier 3.6, TypeScript 5.9, Jest 29, and Vitest 4 configurations
- React preset extending base with React-specific configurations
- NestJS preset extending base with NestJS-specific configurations
- Git configs: lint-staged, commitlint, and husky hooks
- Build tool configs: Vite 7 and Webpack base configurations
- Editor configs: .editorconfig and VS Code settings
- Main TypeScript exports with type definitions
- Comprehensive documentation and usage examples

### Features

- **ESLint 9 Flat Config**: All ESLint configs use the modern flat config format (eslint.config.mjs)
- **Node.js 24 LTS**: Optimized for Node.js 24 with ES2024 target and nodenext module resolution
- **Latest Tooling**: All configs use the latest stable versions of development tools
- **TypeScript 5.9**: Latest TypeScript features and compiler options
