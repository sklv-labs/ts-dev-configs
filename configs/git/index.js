const path = require('path');

module.exports = {
  lintStaged: path.resolve(__dirname, 'lint-staged.js'),
  commitlint: path.resolve(__dirname, 'commitlint.js'),
  husky: {
    preCommit: path.resolve(__dirname, 'husky/pre-commit'),
    commitMsg: path.resolve(__dirname, 'husky/commit-msg'),
  },
};
