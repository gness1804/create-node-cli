import enquirer from 'enquirer';
const { Toggle } = enquirer;

const packagePrompt = new Toggle({
  message: 'Preferred package manager?',
  enabled: 'yarn',
  disabled: 'npm',
});

export default packagePrompt;
