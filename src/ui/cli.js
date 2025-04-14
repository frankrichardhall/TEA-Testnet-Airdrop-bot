const inquirer = require("inquirer").default;
const figlet = require("figlet");
const gradient = require("gradient-string");
const { withSpinner } = require("../utils/spinner").default;

function banner() {
  console.clear();
  const title = figlet.textSync("TEA Testnet Airdrop", {
    horizontalLayout: "full",
  });
  console.log(gradient.rainbow(title));
}

async function confirmTransaction(info) {
  console.table(info);

  const { confirm } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: "Proceed with transaction?",
    },
  ]);

  return confirm;
}

async function showMainMenu(walletManager) {
  banner();

  const balances = await withSpinner(
    walletManager.getBalance(),
    "Fetching balances..."
  );

  console.log("\nWallet:", walletManager.wallet.address);
  console.log("Proxy:", walletManager.proxy || "None");
  console.log("Balance:", balances);

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Select an action:",
      choices: ["Stake", "Exit"],
    },
  ]);

  if (action === "Stake") {
    const { amount } = await inquirer.prompt([
      {
        type: "input",
        name: "amount",
        message: "Enter amount of TEA to stake:",
        validate: (val) =>
          !isNaN(val) && Number(val) > 0
            ? true
            : "Please enter a valid number greater than 0",
      },
    ]);

    await withSpinner(
      walletManager.stake(amount),
      `Staking ${amount} TEA...`
    );
  }

  console.log("Done.");
}

module.exports = {
  banner,
  confirmTransaction,
  showMainMenu,
};
