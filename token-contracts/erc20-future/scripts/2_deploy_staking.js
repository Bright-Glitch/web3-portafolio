const hre = require("hardhat");

async function main() {

  const StakingFT = await hre.ethers.getContractFactory("StakingFT");
  const stakingFT = await StakingFT.deploy("0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264","0xA821f17392b77620a8b2d281a8226546959f4bE5");

  await stakingFT.deployed();

  console.log("StakingFT deployed to:", stakingFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run scripts/2_deploy_staking.js --network goerli  

  // npx hardhat verify --network goerli 0x3496F9FBD2a1eb3F7a4389F435296b0A7a07E4A3 '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264' '0xA821f17392b77620a8b2d281a8226546959f4bE5'

  // 0x3496F9FBD2a1eb3F7a4389F435296b0A7a07E4A3