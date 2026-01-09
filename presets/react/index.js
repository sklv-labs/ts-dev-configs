const path = require('path');

module.exports = {
  eslint: path.resolve(__dirname, 'eslint.config.mjs'),
  prettier: path.resolve(__dirname, '../base/prettier.js'),
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  vite: path.resolve(__dirname, 'vite.config.ts'),
  jest: path.resolve(__dirname, '../base/jest.config.js'),
  vitest: path.resolve(__dirname, '../base/vitest.config.ts'),
};
