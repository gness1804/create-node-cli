const welcome = require('cli-welcome');
const pkg = require('../package.json');

const unhandled = require('cli-handle-unhandled');
const updateNotifier = require('update-notifier');

const func = () => {
  unhandled();
  welcome({
    title: '{{name}}',
    tagLine: 'by {{authorName}}',
    description: pkg.description,
    version: pkg.version,
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear: true,
  });

  updateNotifier({ pkg }).notify();
};

module.exports = func;
