import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export const getWeb3 = (network: "ETH" | "BSC") => {
  return new Web3(
    network === "ETH"
      ? process.env.ETH_PROVIDER!
      : process.env.BSC_PROVIDER!
  );
};
