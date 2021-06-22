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
import enquirer from 'enquirer';
const { Toggle } = enquirer;

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

  const prompt = new Toggle({
    message: 'Preferred package manager?',
    enabled: 'yarn',
    disabled: 'npm',
  });

  const useYarn = await prompt.run();

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

      // install dependencies and clean up the output dir.
      const prodDeps = [
        'meow',
        'cli-meow-help',
        'cli-alerts',
        'cli-handle-error',
        'babel-eslint',
        'pre-commit',
      ];

      const devDeps = ['eslint', 'prettier'];

      spinner.start(
        `\n ${yellow('Installing dependencies.')} This may take a moment...`,
      );
      process.chdir(outDir);
      if (useYarn) {
        await execa('yarn', ['add', ...prodDeps]);
        await execa('yarn', ['add', ...devDeps, '-D']);
      } else {
        await execa('npm', ['install', ...prodDeps]);
        await execa('npm', ['install', ...devDeps, '-D']);
      }
      await execa('npm', ['dedupe']);
      spinner.succeed(`${green('Installation of dependencies')} succeeded.`);

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
