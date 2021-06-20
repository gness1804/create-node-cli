#!/usr/bin/env node
/* eslint-disable no-console */

import path from 'path';
import execa from 'execa';
import copy from 'copy-template-dir';
import handleError from 'cli-handle-error';
import chalk from 'chalk';
const { bold, dim, yellow, green } = chalk;
import alert from 'cli-alerts';
import { fileURLToPath } from 'url';
import ora from 'ora';

import init from './utils/init.js';
import cli from './utils/cli.js';
import questions from './utils/questions.js';
import log from './utils/log.js';

const { flags, input, showHelp } = cli;
const { debug } = flags;

const spinner = ora({ text: '' });

(async () => {
  init();

  if (input.includes('help')) showHelp(0);

  const vars = await questions();

  try {
    debug && log(flags);

    const outDir = `out/${vars.name}`;
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const inDirPath = path.join(__dirname, 'template');
    const outDirPath = path.join(process.cwd(), outDir);

    copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
      if (err) throw err;

      console.log(`\nCreating files in ${bold.green(outDir)}:`);

      createdFiles.forEach((filePath) => {
        const file = path.basename(filePath);
        console.log(`- ${file}`);
      });

      // clean up the output dir.
      spinner.start(`${yellow('Dedupe command')} running...`);
      process.chdir(outDir);
      await execa('npm', ['dedupe']);
      spinner.succeed(`${green('Dedupe command')} succeeded.`);

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
