const fs = require("fs");

function loadProxies() {
  return new Promise((resolve, reject) => {
    fs.readFile("proxies.txt", "utf-8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.warn("⚠️  proxies.txt not found. Continuing without proxy.");
          return resolve([]);
        }
        return reject(err);
      }

      const proxies = data
        .split("\n")
        .map(p => p.trim())
        .filter(Boolean);

      resolve(proxies);
    });
  });
}

function getRandomProxy(proxies) {
  if (!proxies || proxies.length === 0) return null;
  return proxies[Math.floor(Math.random() * proxies.length)];
}

function parseProxy(proxy) {
  if (!proxy) return null;
  if (!proxy.includes("@")) return `http://${proxy}`;
  const [auth, address] = proxy.split("@");
  return `http://${auth}@${address}`;
}

module.exports = {
  loadProxies,
  getRandomProxy,
  parseProxy,
};
