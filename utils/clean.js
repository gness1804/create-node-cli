import enquirer from 'enquirer';
const { Toggle } = enquirer;
import rimraf from 'rimraf';

(async () => {
  const prompt = new Toggle({
    message: 'Do you want to delete all generated CLIs in the /out directory?',
  });

  const res = await prompt.run();
  if (res) {
    rimraf('./out', () => {
      /*eslint-disable-next-line no-console */
      console.info('Deleted all generated CLIs.');
    });
  } else {
    /*eslint-disable-next-line no-console */
    console.info("You didn't delete all your out CLIs. Whew! That was close!");
  }
})();
