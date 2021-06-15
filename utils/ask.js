const { Input } = require('enquirer');
const handleError = require('cli-handle-error');

module.exports = async ({ message, hint, initial = '' }) => {
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
