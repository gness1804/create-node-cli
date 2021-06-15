#!/usr/bin/env node

const cli = require('./utils/cli');
const log = require('./utils/log');

const { input, flags } = cli;
const { debug } = flags;

/**
 * {{name}}
 * {{description}}
 * @author {{authorName}}
 */

(async () => {
  // show help if requested
  input.includes('help') && cli.showHelp(0);

  debug && log(flags);
})();
