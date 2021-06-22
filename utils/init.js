import welcome from 'cli-welcome';
// import pkg from '../package.json';
import unhandled from 'cli-handle-unhandled';

const func = () => {
  unhandled();
  welcome({
    title: 'create-node-cli',
    tagLine: 'by Graham, sort of',
    description: '',
    version: '',
    bgColor: '#6cc24a',
    color: '#000',
    bold: true,
    clear: true,
  });
};

export default func;
