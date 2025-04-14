import ora from "ora";

async function withSpinner(promise, text) {
  const spinner = ora(text).start();
  try {
    const result = await promise;
    spinner.succeed("Done");
    return result;
  } catch (err) {
    spinner.fail("Failed");
    throw err;
  }
}

export default { withSpinner };
