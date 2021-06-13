const welcome = require('cli-welcome');
const pkg = require('../package.json');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
  unhandled();
  welcome({
    title: 'create-node-cli',
    tagLine: 'by Graham, sort of',
    description: pkg.description,
    version: pkg.version,
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear: true,
  });
};
