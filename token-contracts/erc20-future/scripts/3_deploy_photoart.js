const hre = require("hardhat");

async function main() {

  const PhotoArt = await hre.ethers.getContractFactory("PhotoArt");
  const photoArt = await PhotoArt.deploy();

  await photoArt.deployed();

  console.log("PhotoArt deployed to:", photoArt.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run scripts/3_deploy_photoart.js --network goerli  

  // npx hardhat verify --network goerli 0xD0E2124F296e3967532D5340e91474733C6dBE2a

  // 0xD0E2124F296e3967532D5340e91474733C6dBE2a