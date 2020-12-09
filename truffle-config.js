require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const { INFURA_PROJECT_ID, PRIVATE_KEY_RINKEBY_2, ETHERSCAN_API_KEY } = process.env

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY_RINKEBY_2, 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID)
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4,
      skipDryRun: true,
    },
  },
  mocha: {
    enableTimeouts: false,
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
  },
  compilers: {
    solc: {
      version: '0.6.12',
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
}
