const networks = {};

// DEV/testnet
if (
  process.env.MATIC_TESTNET_RPC_URL &&
  process.env.MATIC_TESTNET_PRIVATE_KEY
) {
  networks.testnet_matic = {
    url: process.env.MATIC_TESTNET_RPC_URL,
    chainId: 80001,
    accounts: [process.env.MATIC_TESTNET_PRIVATE_KEY],
  };
}

module.exports = networks;
