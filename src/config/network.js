const stTeaContractAddress = "0x50899f8b0f95cbe278b664a7fd09a2f2ba9e21be";
const stTeaABI = require('../abi/stTeaABI.json');

const network = {
  rpc: "https://tea-sepolia.g.alchemy.com/public",
};

module.exports = {
  network,
  stTeaContractAddress,
  stTeaABI,
};