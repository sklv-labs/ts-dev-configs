const path = require('path');

module.exports = {
  editorconfig: path.resolve(__dirname, '.editorconfig'),
  vscode: {
    settings: path.resolve(__dirname, 'vscode/settings.json'),
    extensions: path.resolve(__dirname, 'vscode/extensions.json'),
  },
};
