import enquirer from 'enquirer';
const { Toggle } = enquirer;
import rimraf from 'rimraf';

// all CLI dirs generated for testing purposes should have this namespace to easily delete them when no longer needed
// change to whatever suits you
const dummyFolderPath = 'dirtest*';

(async () => {
  const prompt = new Toggle({
    message: 'Do you want to delete all generated CLIs?',
  });

  const res = await prompt.run();
  if (res) {
    rimraf(dummyFolderPath, () => {
      /*eslint-disable-next-line no-console */
      console.info('Deleted all generated CLIs.');
    });
  } else {
    /*eslint-disable-next-line no-console */
    console.info("You didn't delete all your out CLIs. Whew! That was close!");
  }
})();
