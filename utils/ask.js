import pkg from 'enquirer';
const { Input } = pkg;
import handleError from 'cli-handle-error';
import { existsSync } from 'fs';
import { Store } from 'data-store';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const func = async ({ name, message, hint = '', initial = '' }) => {
  try {
    const prompt = new Input({
      name,
      message,
      hint,
      initial,
      history: {
        autosave: true,
        store: new Store({
          path: path.join(__dirname, `../.history/${name}.json`),
        }),
      },
      validate(value, state) {
        if (state && state.name === 'command') return true;
        if (state && state.name === 'name') {
          // reject if name is not kebab-case.
          if (!value.match(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/))
            return 'Name must be in kebab-case.';
          // check if the dir already exists.
          if (existsSync(`./out/${value}`)) {
            return `Directory already exists: ./out/${value}`;
          } else {
            return true;
          }
        }
        return !value ? 'Please add a value.' : true;
      },
    });
    const res = await prompt
      .on('cancel', () => {
        process.exit(1);
      })
      .run();
    return res;
  } catch (error) {
    handleError('Failed to retrieve user response', error);
  }
};

export default func;
