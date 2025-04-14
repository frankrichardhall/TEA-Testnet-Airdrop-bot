const { loadPrivateKeys } = require("./utils/privateKeyLoader");
const WalletManager = require("./core/WalletManager");
const { showMainMenu } = require("./ui/cli");

async function run() {
  const privateKeys = loadPrivateKeys();

  for (const key of privateKeys) {
    const walletManager = new WalletManager(key);
    await walletManager.init();
    await showMainMenu(walletManager);
  }
}

module.exports = { run };
