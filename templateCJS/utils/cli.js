const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: 'Print debug info.',
  },
  version: {
    type: 'boolean',
    alias: 'v',
    desc: 'Print CLI version.',
  },
};

const commands = {
  help: {
    desc: 'Show help info.',
  },
};

const helpText = meowHelp({
  name: '{{command}}',
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

const func = meow(helpText, options);
module.exports = func;
