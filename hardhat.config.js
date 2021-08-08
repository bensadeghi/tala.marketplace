require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({path: "./.env"});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    hardhat_hdwallet: {
      chainId: 1337,
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    ropsten: {
      chainId: 3,
      url: process.env.INFURA_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}