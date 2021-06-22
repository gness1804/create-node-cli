#!/usr/bin/env node

import cli from './utils/cli.js';
import log from './utils/log.js';

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

  /*eslint-disable-next-line no-console */
  console.info(
    'If you can read this, the CLI works! Now on to the hard part...',
  );

  debug && log(flags);
})();
