require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",  // or whatever version your contract uses
  networks: {
    moonbeam: {
      url: "https://rpc.api.moonbeam.network", // Moonbeam mainnet
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    moonbase: {
      url: "https://rpc.api.moonbase.moonbeam.network", // Moonbase Alpha (testnet)
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
