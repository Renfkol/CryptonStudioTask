const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const [signer] = await ethers.getSigners();

    const CryptonStudioTask = await hre.ethers.getContractFactory("CryptonStudioTask");
    const cryptonStudioTask = await CryptonStudioTask.deploy();

    await cryptonStudioTask.deployed();
    console.log(cryptonStudioTask.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
