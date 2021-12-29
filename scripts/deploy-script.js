// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MATIC_TESTNET_RPC_URL
  );

  const signer = new ethers.Wallet(
    process.env.MATIC_TESTNET_PRIVATE_KEY,
    provider
  );
  const Greeter = await hre.ethers.getContractFactory("Greeter", signer);
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  await greeter.deployTransaction.wait();

  console.log("Greeter deployed at --> ", greeter.address);

  const contracts = [
    {
      name: "Greeter",
      address: greeter.address,
    },
  ];
  await hre.tenderly.verify(...contracts);
  await hre.tenderly.push(...contracts);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
