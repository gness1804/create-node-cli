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
import cli from './utils/cli.js';
import questions from './utils/questions.js';

const { input, showHelp } = cli;

(async () => {
  init();

  if (input.includes('help')) showHelp(0);

  const vars = await questions();

  try {
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
