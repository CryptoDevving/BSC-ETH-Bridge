import express from "express";
import logger from "../utils/logger";
import { getWeb3 } from "../utils/web3";

export const mintETH = async (req: express.Request, res: express.Response) => {
  try {
    const { txHash } = req.body;
    const web3 = getWeb3("ETH");
    const receipt = await web3.eth.getTransactionReceipt(txHash);
    console.log(receipt);

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

export const mintBSC = async (req: express.Request, res: express.Response) => {
  try {
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