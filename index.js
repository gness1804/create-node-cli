#!/usr/bin/env node
/* eslint-disable no-console */

import path from 'path';
import copy from 'copy-template-dir';
import handleError from 'cli-handle-error';
import pkg from 'chalk';
const { bold, dim } = pkg;
import alert from 'cli-alerts';
import { fileURLToPath } from 'url';

import init from './utils/init.js';
import ask from './utils/ask.js';
import cli from './utils/cli.js';

const { input, showHelp } = cli;

(async () => {
  init();

  if (input.includes('help')) showHelp(0);

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
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
