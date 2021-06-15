const alert = require('cli-alerts');

module.exports = (info) => {
  alert({
    type: 'warning',
    name: 'DEBUG LOG',
    msg: '',
  });

  /*eslint-disable-next-line no-console */
  console.info('info:', info);
};
