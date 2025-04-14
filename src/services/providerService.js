const { ethers } = require("ethers");
const { HttpsProxyAgent } = require("https-proxy-agent");
const { network } = require("../config/network");
const {
  loadProxies,
  getRandomProxy,
  parseProxy,
} = require("../utils/proxy");

async function getProvider(privateKey) {
  const proxies = await loadProxies();
  const proxy = getRandomProxy(proxies);
  const proxyUrl = parseProxy(proxy);

  let provider;

  if (proxyUrl) {
    const agent = new HttpsProxyAgent(proxyUrl);
    provider = new ethers.providers.JsonRpcProvider({
      url: network.rpc,
      agent,
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
  } else {
    provider = new ethers.providers.JsonRpcProvider(network.rpc);
  }

  const wallet = new ethers.Wallet(privateKey, provider);

  return { provider, wallet, proxy };
}

module.exports = { getProvider };
