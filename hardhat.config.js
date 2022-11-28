require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },

  // Verificare il codice su etherscan
  etherscan: { apiKey: process.env.ETHERSCAN_API_KEY || "key" },

  // Per vedere quanto gas costa ogni transazione che facciamo
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    // Per vedere il prezzo in USD
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || "key",
  },
};
