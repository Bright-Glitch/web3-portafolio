const hre = require("hardhat");

async function main() {

  const Reward = await hre.ethers.getContractFactory("Reward");
  const reward = await Reward.deploy();

  await reward.deployed();

  console.log("Reward deployed to:", reward.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0xA821f17392b77620a8b2d281a8226546959f4bE5