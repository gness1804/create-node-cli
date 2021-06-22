import ask from './ask.js';

const func = async () => {
  const name = await ask({
    name: 'name',
    message: 'Name of your CLI?',
    hint: 'kebab-case-only',
  });
  const command = await ask({
    name: 'command',
    message: 'CLI command',
    hint: 'Optional - if different than CLI Name.',
  });
  const description = await ask({
    name: 'description',
    message: 'Description of your CLI?',
  });
  const version = await ask({
    name: 'version',
    message: 'Version of your CLI?',
    initial: '0.1.1',
  });
  const nvmVersion = await ask({
    name: 'nvmVersion',
    message: 'node version for .nvmrc?',
    initial: '14.16.1',
  });
  const authorName = await ask({
    name: 'authorName',
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
