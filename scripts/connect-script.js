const hre = require("hardhat");
const abi = require("../artifacts/contracts/Greeter.sol/Greeter.json").abi;

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.MATIC_TESTNET_RPC_URL
  );

  const signer = new ethers.Wallet(
    process.env.MATIC_TESTNET_PRIVATE_KEY,
    provider
  );
  console.log(`signer ${signer.address}`);

  const greeter = await new hre.ethers.Contract(
    "0x3438e1A81a33ee00a32B8bE22811B9037568977a",
    abi,
    signer
  );
  tx = await greeter.setGreeting("Heero Punjabi 1");
  await tx.wait();

  const output = await greeter.greet();
  console.log("value is ", output);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
