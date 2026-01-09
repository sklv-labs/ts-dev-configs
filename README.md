# @sklv-labs/ts-dev-configs

Unified development configurations for TypeScript projects with support for React, NestJS, and more. This package provides a consistent set of ESLint, Prettier, TypeScript, Jest, Vitest, and other development tool configurations that can be easily extended and reused across projects.

**Latest versions:** Node.js 24 LTS, TypeScript 5.9+, ESLint 9 (flat config), Prettier 3.6+, Vitest 4+, Vite 7+

## Features

- 🎯 **Preset-based architecture** - Choose from base, React, or NestJS presets
- 🔧 **Extensible configs** - All configs use the `extends` pattern for easy customization
- 📦 **Zero dependencies** - Uses peer dependencies to avoid version conflicts
- 🚀 **Framework support** - Optimized configs for React and NestJS
- 🛠️ **Additional tooling** - Includes git hooks, build tools, and editor configs

## Installation

```bash
npm install --save-dev @sklv-labs/ts-dev-configs
```

### Peer Dependencies

This package requires the following peer dependencies. Install them based on your needs:

```bash
# Required (latest versions)
npm install --save-dev typescript@^5.9.0 eslint@^9.0.0 prettier@^3.6.0

# For ESLint flat config (ESLint 9)
npm install --save-dev @eslint/js typescript-eslint globals eslint-config-prettier eslint-plugin-import-x

# For React preset
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks @vitejs/plugin-react

# For NestJS preset (optional but recommended)
npm install --save-dev @darraghor/eslint-plugin-nestjs-typed

# For testing
npm install --save-dev jest@^29.7.0 ts-jest@^29.2.0 @types/jest
# or
npm install --save-dev vitest@^4.0.0 @vitest/ui

# For Vite (React preset)
npm install --save-dev vite@^7.0.0
```

**Note:** This package requires Node.js 24 LTS or higher.

## Usage

### Base Preset

The base preset includes configurations for TypeScript, ESLint, Prettier, Jest, and Vitest.

#### TypeScript Config

```json
// tsconfig.json
{
  "extends": "@sklv-labs/ts-dev-configs/presets/base/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Note:** Preset configs only define `compilerOptions`. You must define `include` and `exclude` in your project's `tsconfig.json`.

#### ESLint Config (Flat Config - ESLint 9)

```js
// eslint.config.mjs
import baseEslint from '@sklv-labs/ts-dev-configs/eslint/base';

export default baseEslint;
```

Or extend it:

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import baseEslint from '@sklv-labs/ts-dev-configs/eslint/base';

export default defineConfig([
  ...baseEslint,
  {
    rules: {
      // Your custom rules
    },
  },
]);
```

#### Prettier Config

```js
// .prettierrc.js
module.exports = require('@sklv-labs/ts-dev-configs/presets/base/prettier.js');
```

#### Jest Config

```js
// jest.config.js
module.exports = require('@sklv-labs/ts-dev-configs/presets/base/jest.config.js');
```

#### Vitest Config

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import baseVitest from '@sklv-labs/ts-dev-configs/presets/base/vitest.config.ts';

export default defineConfig({
  ...baseVitest,
  // Your custom config
});
```

### React Preset

The React preset extends the base preset with React-specific configurations.

#### TypeScript Config

```json
// tsconfig.json
{
  "extends": "@sklv-labs/ts-dev-configs/presets/react/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules", "dist", "build"]
}
```

**Note:** Preset configs only define `compilerOptions`. You must define `include` and `exclude` in your project's `tsconfig.json`.

#### ESLint Config (Flat Config - ESLint 9)

```js
// eslint.config.mjs
import reactEslint from '@sklv-labs/ts-dev-configs/eslint/react';

export default reactEslint;
```

#### Vite Config

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import reactVite from '@sklv-labs/ts-dev-configs/presets/react/vite.config.ts';

export default defineConfig({
  ...reactVite,
  // Your custom config
});
```

### NestJS Preset

The NestJS preset extends the base preset with NestJS-specific configurations.

#### TypeScript Config

```json
// tsconfig.json
{
  "extends": "@sklv-labs/ts-dev-configs/presets/nestjs/tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test"]
}
```

**Note:** Preset configs only define `compilerOptions`. You must define `include` and `exclude` in your project's `tsconfig.json`.

#### ESLint Config (Flat Config - ESLint 9)

```js
// eslint.config.mjs
import nestjsEslint from '@sklv-labs/ts-dev-configs/eslint/nestjs';

export default nestjsEslint;
```

#### Jest Config

```js
// jest.config.js
module.exports = require('@sklv-labs/ts-dev-configs/presets/nestjs/jest.config.js');
```

#### TypeScript Config for Tests

```json
// tsconfig.spec.json
{
  "extends": "@sklv-labs/ts-dev-configs/presets/nestjs/tsconfig.spec.json",
  "compilerOptions": {
    "rootDir": "./src"
  },
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts"
  ]
}
```

## Additional Configs

### Git Hooks

#### Lint-Staged

```js
// .lintstagedrc.js
module.exports = require('@sklv-labs/ts-dev-configs/configs/git/lint-staged.js');
```

#### Commitlint

```js
// commitlint.config.js
module.exports = require('@sklv-labs/ts-dev-configs/configs/git/commitlint.js');
```

#### Husky Hooks

Copy the husky hooks from `@sklv-labs/ts-dev-configs/configs/git/husky/` to your `.husky/` directory.

### Build Tools

#### Vite Base Config

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import viteBase from '@sklv-labs/ts-dev-configs/configs/build/vite.base';

export default defineConfig({
  ...viteBase,
  // Your custom config
});
```

#### Webpack Base Config

```js
// webpack.config.js
const webpackBase = require('@sklv-labs/ts-dev-configs/configs/build/webpack.base');

module.exports = {
  ...webpackBase,
  // Your custom config
};
```

### Editor Configs

#### EditorConfig

Copy `.editorconfig` from `@sklv-labs/ts-dev-configs/configs/editor/.editorconfig` to your project root.

#### VS Code Settings

Copy the VS Code settings from `@sklv-labs/ts-dev-configs/configs/editor/vscode/` to your `.vscode/` directory.

## Extending Configs

All configs are designed to be extended. You can override specific rules or settings:

### Extending ESLint (Flat Config)

```js
// eslint.config.mjs
import { defineConfig } from 'eslint/config';
import reactEslint from '@sklv-labs/ts-dev-configs/eslint/react';

export default defineConfig([
  ...reactEslint,
  {
    rules: {
      // Override or add rules
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);
```

### Extending TypeScript Config

```json
// tsconfig.json
{
  "extends": "@sklv-labs/ts-dev-configs/presets/react/tsconfig.json",
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true
  }
}
```

### Extending Prettier

```js
// .prettierrc.js
module.exports = {
  ...require('@sklv-labs/ts-dev-configs/presets/base/prettier.js'),
  printWidth: 120, // Override
};
```

## Programmatic Usage

You can also import configs programmatically:

```ts
import { presets, configs } from '@sklv-labs/ts-dev-configs';

// Access preset paths
const baseEslintPath = presets.base.eslint;
const reactTsconfigPath = presets.react.tsconfig;

// Access config paths
const lintStagedPath = configs.git.lintStaged;
const viteBasePath = configs.build.vite;
```

## Project Structure

```
@sklv-labs/ts-dev-configs/
├── presets/
│   ├── base/          # Base preset (ESLint, Prettier, TypeScript, Jest, Vitest)
│   ├── react/         # React preset (extends base + React-specific)
│   └── nestjs/        # NestJS preset (extends base + NestJS-specific)
├── configs/
│   ├── git/           # Git hooks (husky, lint-staged, commitlint)
│   ├── build/         # Build tools (Vite, Webpack)
│   └── editor/        # Editor configs (.editorconfig, VS Code)
└── src/
    └── index.ts       # Main exports
```

## Local Development with Yalc

For local development and testing, this package uses [yalc](https://github.com/wclr/yalc) to link the package locally without publishing to npm.

### Setup

1. **In the `ts-dev-configs` package directory:**

   ```bash
   cd ts-dev-configs
   npm install
   ```

2. **Publish to yalc local repository:**

   ```bash
   npm run yalc:publish
   ```

   Or force update if already published:

   ```bash
   npm run yalc:publish:force
   ```

3. **In your consuming project (e.g., `ts-nestjs-openapi`):**

   ```bash
   cd ../ts-nestjs-openapi
   npm run yalc:link
   ```

   This will replace the npm version with the local yalc version.

4. **Update when you make changes:**

   In `ts-dev-configs`:
   ```bash
   npm run yalc:publish
   ```

   In the consuming project:
   ```bash
   npm run yalc:update
   ```

5. **Remove yalc link and restore npm version:**

   ```bash
   npm run yalc:remove
   npm install
   ```

### Workflow

1. Make changes to `ts-dev-configs`
2. Run `npm run yalc:publish` in `ts-dev-configs`
3. Run `npm run yalc:update` in consuming projects
4. Test your changes
5. Repeat as needed

**Note:** After using yalc, remember to remove the link before committing changes to ensure the package.json doesn't reference the local yalc version.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [sklv-labs](https://github.com/sklv-labs)
