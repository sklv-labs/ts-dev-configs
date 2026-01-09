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

# For NestJS preset
npm install --save-dev @nestjs/eslint-plugin-nestjs

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
  }
}
```

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
  }
}
```

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
  }
}
```

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [sklv-labs](https://github.com/sklv-labs)
