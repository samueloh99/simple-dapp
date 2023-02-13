const hre = require("hardhat");

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  console.log(
    "Account balance:",
    (await deployer.getBalance()).toString()
  );

  const Transaction = await hre.ethers.getContractFactory(
    "Transactions"
  );

  const transaction = await Transaction.deploy();

  await transaction.deployed();

  console.log("Transaction deployed to:", transaction.address);
};

const runMain = async () => {
  try {
    await main();
    process.exitCode = 0;
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

runMain();
