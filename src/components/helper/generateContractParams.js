import { ethers } from "ethers";
import { transferETH } from "./generateCalldata";
import factoryInstance from "../helper/factoryInstance";
import { getProof } from "../helper/generateProof";
import dotenv from 'dotenv';
dotenv.config();


const rpc = process.env.REACT_APP_SEPOLIA_RPC;
const provider = new ethers.providers.JsonRpcProvider(rpc.toString());


export const generateContractParams = async (wallet, proof, userId, calldata, password, chainid, sponsor) => {
    const factory = await factoryInstance();
    let gasPriceHex = await provider.getGasPrice();
    let gasPrice = parseInt(gasPriceHex._hex, 16)+25000000;
    let estimatedGasHex;
    try {
        estimatedGasHex = await factory.estimateGas.callWallet(proof[0], proof[1], proof[2], proof[3], userId, calldata);
    } catch (err) {
        console.log(err);
        alert("txn failed")
    }

    if (estimatedGasHex) {
        let estimatedGas = parseInt(estimatedGasHex._hex, 16)+15000;
        let txCost = (estimatedGas + 12400) * (gasPrice);
        let txCalldata = await transferETH(sponsor, txCost);
        let len = calldata.length;
        calldata[len - 1] = txCalldata
        let proofFinal = await getProof(password, calldata, chainid);
        return { proofFinal, calldata, gasPrice, estimatedGas }
    } else {
        return false;
    }


}