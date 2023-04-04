import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-etherscan'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'

dotenvConfig({ path: resolve(__dirname, './.env') })

// Ensure that we have all the environment variables we need.
const pkey: string | undefined = process.env.PRIVATE_KEY
if (!pkey) {
  throw new Error('Please set your PRIVATE_KEY in a .env file')
}

const infuraApiKey: string | undefined = process.env.INFURA_API_KEY
if (!infuraApiKey) {
  throw new Error('Please set your INFURA_API_KEY in a .env file')
}

const bscscanApiKey: string | undefined = process.env.BSCSCAN_API_KEY
if (!bscscanApiKey) {
  throw new Error('Please set your BSCSCAN_API_KEY in a .env file')
}

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraApiKey}`,
      accounts: [pkey]
    },
    bsc_testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [pkey]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: bscscanApiKey
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5'
  }
}

export default config
