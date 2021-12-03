import { Request, Response } from "express";
import Web3 from "web3";
import logger from "../utils/logger";
import { getWeb3 } from "../utils/web3";

const amountFetcher = async (txHash: string, web3: Web3) => {
  const receipt = await web3.eth.getTransaction(txHash);
  let amount = web3.utils.hexToNumberString(`0x${receipt.input.slice(35)}`);
  amount = web3.utils.fromWei(amount, "ether");
  return amount;
};

export const mintETH = async (req: Request, res: Response) => {
  try {
    const { txHash } = req.body;
    console.log(txHash);
    setTimeout(() => logger.info("Waiting for block to be added!"), 3000);
    const burnedAmount = await amountFetcher(txHash, getWeb3("ETH"));

    res.status(200).json({
      message: "Minting in progress!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};

export const mintBSC = async (req: Request, res: Response) => {
  try {
    const { txHash } = req.body;
    console.log(txHash);
    setTimeout(() => logger.info("Waiting for block to be added!"), 3000);
    const web3 = getWeb3("BSC");
    const receipt = await web3.eth.getTransaction(txHash);
    console.log(receipt.input);

    res.status(200).json({
      message: "working!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};
