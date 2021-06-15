#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');
const copy = require('copy-template-dir');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const ask = require('./utils/ask');

(async () => {
  init();

  try {
    const name = await ask({
      message: 'Name of your CLI?',
      hint: 'kebab-case-only',
    });

    const vars = {
      name,
      description: 'Something to groom aspects of a CLI.',
      version: '0.1.1',
    };
    const inDir = path.join(__dirname, 'template');
    const outDir = path.join(process.cwd(), `out/${vars.name}`);

    copy(inDir, outDir, vars, (err, createdFiles) => {
      if (err) throw err;
      console.log();
      console.log(`Creating files in ./${vars.name}`);
      createdFiles.forEach((filePath) => {
        const file = path.basename(filePath);
        console.log(file);
      });
      console.info('done!');
      console.log();
    });
  } catch (error) {
    handleError('Failed to create new CLI', error);
  }
})();
