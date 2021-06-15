#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');
const copy = require('copy-template-dir');
const handleError = require('cli-handle-error');
const { bold, dim } = require('chalk');
const alert = require('cli-alerts');

const init = require('./utils/init');
const ask = require('./utils/ask');

(async () => {
  init();

  try {
    const name = await ask({
      message: 'Name of your CLI?',
      hint: 'kebab-case-only',
    });
    const command = await ask({
      message: 'CLI command',
      hint: 'Optional - if different than CLI Name.',
    });
    const description = await ask({
      message: 'Description of your CLI?',
    });
    const version = await ask({
      message: 'Version of your CLI?',
      initial: '0.1.1',
    });
    const nvmVersion = await ask({
      message: 'node version for .nvmrc?',
      initial: '14.16.1',
    });
    const authorName = await ask({
      message: 'Name of the author?',
    });

    const vars = {
      name,
      command: command ? command : name,
      description,
      version,
      nvmVersion,
      authorName,
    };
    const outDir = `out/${vars.name}`;
    const inDirPath = path.join(__dirname, 'template');
    const outDirPath = path.join(process.cwd(), outDir);

    copy(inDirPath, outDirPath, vars, (err, createdFiles) => {
      if (err) throw err;

      console.log(`\nCreating files in ${bold.green(outDir)}:`);

      createdFiles.forEach((filePath) => {
        const file = path.basename(filePath);
        console.log(`- ${file}`);
      });

      alert({
        type: 'success',
        name: 'Done!',
        msg: `\n\n${createdFiles.length} files were created in ${dim(outDir)}.`,
      });
    });
  } catch (error) {
    handleError('Failed to create new CLI', error);
  }
})();
