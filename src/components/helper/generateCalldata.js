import { ethers } from 'ethers';
const abi = new ethers.utils.AbiCoder();

export const transferETH = async (address, value) => {
    let opData = abi.encode(["address", "uint256", "bytes"], [address, value, 0x00]);
    return opData
}

export const tokenTransfer = async (tokenAddress, to, tokenAmount) => {
    let ABI = ["function transfer(address to, uint256 amount)"];
    let iface = new ethers.utils.Interface(ABI);
    let incData = iface.encodeFunctionData("transfer", [to, tokenAmount.toString()]);
    let opData = abi.encode(["address", "uint256", "bytes"], [tokenAddress, "0", incData]);
    return opData
}

export const calldataHash = async (calldata) => {
    const params = abi.encode(
        ["bytes[]"], // encode as address array
        [calldata]
    );
    const hash = ethers.utils.keccak256(params);
    return hash;
};
export const combineArrays = async (...arrays) => {
    return [].concat(...arrays);
}