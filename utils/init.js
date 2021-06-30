import welcome from 'cli-welcome';

// allows requiring .json files to avoid the error "TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".json""
// see https://stackoverflow.com/questions/60205891/import-json-extension-in-es6-node-js-throws-an-error, Mustafa Agha's answer
import { createRequire } from 'module'; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const pkg = require('../package.json'); // use the require method

import unhandled from 'cli-handle-unhandled';
import updateNotifier from 'update-notifier';

const func = () => {
  unhandled();
  welcome({
    title: '@gness1804/create-node-cli',
    tagLine: `by ${pkg.author}`,
    description: pkg.description,
    version: pkg.version,
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear: true,
  });

  updateNotifier({ pkg }).notify();
};

export default func;
