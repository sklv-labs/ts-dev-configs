const path = require('path');

module.exports = {
    eslint: path.resolve(__dirname, 'eslint.config.mjs'),
    prettier: path.resolve(__dirname, '../base/prettier.js'),
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    jest: path.resolve(__dirname, 'jest.config.js'),
    vitest: path.resolve(__dirname, '../base/vitest.config.ts'),
};
