// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/GcV0dj3ENX3ImHm5_6gcAD4ySJ7un_sT`,
      // accounts: [''],
    },
    Base: {
      url: `https://rpc.ankr.com/base_goerli`,
      accounts: [''],
    },
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [``],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
      // sepolia: 'I9NHWY6MEQIG9ZYJTEUWQ6UBPZFI9QSYFU',
      "baseGoerli": `PLACEHOLDER_STRING`
    }
  },
    hardhat: {
      allowUnlimitedContractSize: true,
      // chainId: 0
    },
  // },

};