import { ethers } from 'ethers';
const abi = new ethers.utils.AbiCoder();

export const transferETH = async (address, value) => {
    let opData = abi.encode(["address", "uint256", "bytes"], [address, value, "0x"]);
    return opData
}

export const approve = async (approveTo, tokenContract, tokenAmount) => {
    let ABI = ["function approve(address spender, uint256 amount)"];
    let iface = new ethers.utils.Interface(ABI);
    let incData = iface.encodeFunctionData("approve", [approveTo, tokenAmount.toString()]);
    let opData = abi.encode(["address", "uint256", "bytes"], [tokenContract, "0", incData]);
    return opData
}

export const tokenTransfer = async (tokenAddress, to, tokenAmount) => {
    let ABI = ["function transfer(address to, uint256 amount)"];
    let iface = new ethers.utils.Interface(ABI);
    let incData = iface.encodeFunctionData("transfer", [to, tokenAmount.toString()]);
    let opData = abi.encode(["address", "uint256", "bytes"], [tokenAddress, "0", incData]);
    return opData
}

export const swapCallData = async (amountIn, fromToken, toToken, toAddress, uniswapRouter) => {
    const router = uniswapRouter;

    let ETH = process.env.REACT_APP_ETH_ADDRESS;
    let WETH = "0x4200000000000000000000000000000000000006";

    let amount = amountIn.toString();
    if (fromToken !== toToken) {
        if (fromToken === ETH) {
            let ABI = ["function swapExactETHForTokens(uint256 amountOutMin, address[] calldata path, address to, uint256 deadline)"];
            let iface = new ethers.utils.Interface(ABI);
            let incData = iface.encodeFunctionData("swapExactETHForTokens", [0, [WETH, toToken], toAddress, "1985853996"]);
            let opData = abi.encode(["address", "uint256", "bytes"], [router, amount, incData]);
            let fakeRefundData = await transferETH(ETH, ethers.utils.parseEther("0.000000001"));
            return [opData, fakeRefundData];
        }
        else if (fromToken !== ETH) {
            if (toToken === ETH) {
                let ABI = ["function swapExactTokensForETH(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)"];
                let iface = new ethers.utils.Interface(ABI);
                let incData = iface.encodeFunctionData("swapExactTokensForETH", [amount, 0, [fromToken, WETH], toAddress, "1985853996"]);
                let opData = abi.encode(["address", "uint256", "bytes"], [router, "0", incData]);
                let approveCalldata = await approve(router, fromToken, amount);
                let fakeRefundData = await transferETH(ETH, ethers.utils.parseEther("0.000000001"));
                return [approveCalldata, opData, fakeRefundData];
            }
            else {
                let ABI = ["function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline)"];
                let iface = new ethers.utils.Interface(ABI);
                let incData = iface.encodeFunctionData("swapExactTokensForTokens", [amount, 0, [fromToken, toToken], toAddress, "1985853996"]);
                let opData = abi.encode(["address", "uint256", "bytes"], [router, "0", incData]);
                let approveCalldata = await approve(router, fromToken, amountIn.toString());
                let fakeRefundData = await transferETH(ETH, ethers.utils.parseEther("0.000000001"));
                return [approveCalldata, opData, fakeRefundData];
            }
        }
    }
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
