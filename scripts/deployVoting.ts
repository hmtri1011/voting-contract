import { ethers } from 'hardhat'

async function main() {
  const Voting = await ethers.getContractFactory('Voting')
  const tokenAddress = '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd' // usdt
  const voting = await Voting.deploy(tokenAddress)

  await voting.deployed()

  console.log(`Voting contract deployed to ${voting.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
