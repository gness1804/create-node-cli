const { Input } = require('enquirer');
const handleError = require('cli-handle-error');

module.exports = async ({ message, hint }) => {
  try {
    const prompt = new Input({
      message,
      hint,
      // TODO: add validation.
    });
    const res = await prompt.run();
    return res;
  } catch (error) {
    handleError('Failed to retrieve user response', error);
  }
};
