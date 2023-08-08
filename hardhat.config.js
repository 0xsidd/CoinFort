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
  },
  etherscan: {
    apiKey: {
      sepolia: 'I9NHWY6MEQIG9ZYJTEUWQ6UBPZFI9QSYFU'
    }
  },
    hardhat: {
      allowUnlimitedContractSize: true,
      // chainId: 0
    },
  // },

};