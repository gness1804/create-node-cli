import pkg from 'enquirer';
const { Input } = pkg;
import handleError from 'cli-handle-error';

const func = async ({ name, message, hint = '', initial = '' }) => {
  try {
    const prompt = new Input({
      name,
      message,
      hint,
      initial,
      validate(value, state) {
        if (state && state.name === 'command') return true;
        // if (message === 'Name of your CLI?') {
        //   // reject name if not kebab case
        //   if (!value.match(/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/)) return false;
        // }
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
