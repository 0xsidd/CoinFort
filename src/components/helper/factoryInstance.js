import FactoryABI from "./abi/FactoryABI.json";
import { ethers } from "ethers";
import dotenv from 'dotenv';
dotenv.config()

const factoryInstance = async () => {
  try {
    const factoryAddress = process.env.REACT_APP_FACTORY_ADDRESS;
    const rpcUrl = process.env.REACT_APP_SEPOLIA_RPC;

    if (!factoryAddress || !rpcUrl) {
      throw new Error("Factory address or RPC URL not found in environment variables.");
    }

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const factoryContract = new ethers.Contract(factoryAddress, FactoryABI, provider);

    return factoryContract;
  } catch (error) {
    console.error('Failed to create contract instance:', error);
    // Additional error handling or logging can be done here
    throw error; // Rethrow the error to be caught by the caller
  }
};

export default factoryInstance;
