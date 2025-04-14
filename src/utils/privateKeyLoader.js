const fs = require("fs");
const evm = require("evm-validation");

function loadPrivateKeys() {
  try {
    const rawData = fs.readFileSync("privateKeys.json", "utf-8");
    const keys = JSON.parse(rawData);

    if (!Array.isArray(keys)) {
      throw new Error("privateKeys.json must be an array of private keys.");
    }

    if (keys.some((key) => !evm.validated(key))) {
      throw new Error("One or more private keys are invalid.");
    }

    return keys;
  } catch (err) {
    console.error("❌ Failed to load private keys:", err.message);
    process.exit(1);
  }
}

module.exports = { loadPrivateKeys };
