const execa = require('execa');
const { Toggle } = require('enquirer');

(async () => {
  const prompt = new Toggle({
    message: 'Do you want to delete all generated CLIs in the /out directory?',
  });

  const res = await prompt.run();
  if (res) {
    await execa('rm', ['-rf', './out']);
    /*eslint-disable-next-line no-console */
    console.info('Deleted all generated CLIs.');
  } else {
    /*eslint-disable-next-line no-console */
    console.info("You didn't delete all your out CLIs. Whew! That was close!");
  }
})();
