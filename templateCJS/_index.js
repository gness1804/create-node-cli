#!/usr/bin/env node

/**
 * {{name}}
 * {{description}}
 * @author {{authorName}}
 */

const init = require('./utils/init.js');
const cli = require('./utils/cli.js');
const log = require('./utils/log.js');

const { input, flags } = cli;
const { debug } = flags;

(async () => {
  init();

  // show help if requested
  input.includes('help') && cli.showHelp(0);

  /*eslint-disable-next-line no-console */
  console.info(
    'If you can read this, the CLI works! Now on to the hard part...',
  );

  debug && log(flags);
})();
