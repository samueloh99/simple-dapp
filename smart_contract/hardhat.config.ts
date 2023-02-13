import * as dotenv from "dotenv";
dotenv.config();

require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
