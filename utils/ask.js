const { Input } = require('enquirer');
const handleError = require('cli-handle-error');

module.exports = async ({ message, hint = '', initial = '', authorName }) => {
  try {
    const prompt = new Input({
      message,
      hint,
      initial,
      authorName,
      // TODO: add validation.
    });
    const res = await prompt.run();
    return res;
  } catch (error) {
    handleError('Failed to retrieve user response', error);
  }
};
