import ask from './ask.js';

const func = async () => {
  const name = await ask({
    message: 'Name of your CLI?',
    hint: 'kebab-case-only',
  });
  const command = await ask({
    message: 'CLI command',
    hint: 'Optional - if different than CLI Name.',
  });
  const description = await ask({
    message: 'Description of your CLI?',
  });
  const version = await ask({
    message: 'Version of your CLI?',
    initial: '0.1.1',
  });
  const nvmVersion = await ask({
    message: 'node version for .nvmrc?',
    initial: '14.16.1',
  });
  const authorName = await ask({
    message: 'Name of the author?',
  });

  const vars = {
    name,
    command: command ? command : name,
    description,
    version,
    nvmVersion,
    authorName,
  };

  return vars;
};

export default func;
