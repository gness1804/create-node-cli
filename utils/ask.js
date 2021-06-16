import pkg from 'enquirer';
const { Input } = pkg;
import handleError from 'cli-handle-error';

const func = async ({ message, hint = '', initial = '' }) => {
  try {
    const prompt = new Input({
      message,
      hint,
      initial,
      // TODO: add validation.
    });
    const res = await prompt.run();
    return res;
  } catch (error) {
    handleError('Failed to retrieve user response', error);
  }
};

export default func;
