// require('babel-register')
// require('babel-polyfill')
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    goerli: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase:
              'cup toward bike ripple end chuckle hungry guilt next girl ready very'
          },
          providerOrUrl:
            'https://goerli.infura.io/v3/3287b5dd61ed4ee1afeef74ecd8a129c'
        }),
      network_id: 5,
      gas: 5500000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.11',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
