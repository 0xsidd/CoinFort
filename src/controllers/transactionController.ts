import { Request, Response } from 'express';
import { ethers } from 'ethers';
import FACTORYABI from "../abi/FactoryABI.json";
import dotenv from 'dotenv';
dotenv.config();

export const sendTransaction = async (req: Request, res: Response) => {
  try {
    let FactoryAddress = process.env.WALLET_FACTORY;
    const PrivateKey = process.env.PRIVATE_KEY;
    const Provider = process.env.SEPOLIA_RPC;
    const FactoryABI = FACTORYABI;

    if (!PrivateKey || !FactoryAddress || !Provider) {
      return res.status(500).json({ error: 'Private key not found.' });
    }
    let provider = new ethers.providers.JsonRpcProvider(Provider?.toString());
    let wallet = new ethers.Wallet(PrivateKey, provider);
    let FactoryContract = new ethers.Contract(FactoryAddress, FactoryABI, provider);    
    let proof0 = req.body.proof0;
    let proof1 = req.body.proof1;
    let proof2 = req.body.proof2;
    let proof3 = req.body.proof3;
    let callData = req.body.calldata;
    let username = req.body.username;
    let gasPriceTx = req.body.gasPrice;
    let gasLimitTx = req.body.gasLimit;
    
    const transaction = {
      to: FactoryAddress,
      data: FactoryContract.interface.encodeFunctionData('callWallet', [proof0, proof1, proof2, proof3, username, callData]),
      gasPrice: gasPriceTx,
      gasLimit: gasLimitTx
    };
    const sendResult = await wallet.sendTransaction(transaction);
    const txn = await sendResult.wait();
    
    return res.status(200).json({ transactionHash: txn.transactionHash });
  } catch (error) {
    console.error('Error sending transaction:', error);
    return res.status(500).json({ error: 'Failed to send transaction.' });
  }
};