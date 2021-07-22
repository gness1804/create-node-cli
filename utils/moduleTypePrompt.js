import enquirer from 'enquirer';
const { Toggle } = enquirer;

const moduleTypePrompt = new Toggle({
  message: 'Use ESM (ECMAScript Modules) or CommonJS?',
  enabled: 'esm',
  disabled: 'commonjs',
});

export default moduleTypePrompt;
