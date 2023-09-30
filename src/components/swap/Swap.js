import React, { useState } from 'react';
import { Window, WindowContent, TextInput, Button, SelectNative, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import './Swap.css';
import { ethers } from "ethers";
import axios from 'axios';
import { getProof } from "../helper/generateProof";
import factoryInstance from "../helper/factoryInstance";
import connectWallet from "../helper/connectWallet";
import { swapCallData } from "../helper/generateCalldata";
import { generateContractParams } from "../helper/generateContractParams";
import { transact } from "../helper/transact";
import dotenv from 'dotenv';
dotenv.config();


const WETH = process.env.REACT_APP_WETH_ADDRESS;
const USDC = process.env.REACT_APP_USDC_ADDRESS;
const UNI = process.env.REACT_APP_UNI_ADDRESS;
const ETH = process.env.REACT_APP_ETH_ADDRESS;

const tokens = [
    { value: ETH, label: 'ETH' },
    { value: WETH, label: 'WETH' },
    { value: USDC, label: 'USDC' },
    { value: UNI, label: 'UNI' }
];

const SwapAssetsWindow = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');
    const [fromToken, setFromToken] = useState(tokens[0]);
    const [toToken, setToToken] = useState(tokens[0]);
    const [metamaskStatus, setMetamaskStatus] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [txnHash, setTXNHash] = React.useState("0x00");


    const haveMetamask = async () => {
        setMetamaskStatus(!metamaskStatus);
    };

    const handleFromTokenChange = async (value) => {
        setFromToken(value);
    }

    const handleToTokenChange = async (value) => {
        setToToken(value);
    }

    const handleExplorerClick = () => {
        if (txnHash === "0x00") {
            alert("no transaction found");
        }
        else {
            window.open(`https://goerli.basescan.org/tx/${txnHash}`, '_blank');
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        // let wallet = await connectWallet();
        const factory = await factoryInstance();
        const rpc = process.env.REACT_APP_SEPOLIA_RPC;
        const sponsor = process.env.REACT_APP_SPONSOR;
        const API = (process.env.REACT_APP_PAYMASTER_API).toString();
        const provider = new ethers.providers.JsonRpcProvider(rpc.toString());
        const network = await provider.getNetwork();
        const router = process.env.REACT_APP_UNISWAPV2ROUTER;
        let proof;
        let userWallet = await factory.usernameToWalletAddress(userid);

        let calldata = [];
        // console.log("---------------------------",fromToken.value, toToken.value);
        calldata = await swapCallData(ethers.utils.parseEther(amount), fromToken.value, toToken.value, userWallet, router);
        if (metamaskStatus) {
            let wallet = await connectWallet();
            proof = await getProof(password, calldata, network.chainId);
            let txData = await generateContractParams(wallet, proof, userid, calldata, password, network.chainId, await wallet.getAddress());
            if (txData) {
                let res = await transact(wallet, txData.proofFinal, txData.calldata, userid, txData.gasPrice, txData.estimatedGas);
                if (res) {
                    setLoading(false);
                    alert("Asset Traded");
                    setTXNHash(res);
                } else {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }

        }
        else {
            let wallet = "0x00"
            proof = await getProof(password, calldata, network.chainId);
            let txData = await generateContractParams(wallet, proof, userid, calldata, password, network.chainId, sponsor);
            const payload =
            {
                proof0: txData.proofFinal[0],
                proof1: txData.proofFinal[1],
                proof2: txData.proofFinal[2],
                proof3: txData.proofFinal[3],
                username: userid,
                calldata: txData.calldata,
                gasPrice: txData.gasPrice,
                gasLimit: txData.estimatedGas
            }
            let res;
            try {
                res = await axios.post(API, payload);
            } catch (err) {
                setLoading(false);
                alert("Transaction Failed");
            }
            if (res.status === 200) {
                setLoading(false);
                alert("Asset Traded");
                setTXNHash(res.data.transactionHash);
            }
            else {
                setLoading(false);
                alert("Transaction Failed");
            }
        }
    };

    return (
        <ThemeProvider theme={original}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Window className="login-window" style={{ width: '600px' }}>
                    <WindowContent>
                        <h2 style={{ fontSize: '24px' }}>Swap Assets</h2>
                        <br />
                        <label style={{ textAlign: 'left' }}>From</label>
                        <SelectNative
                            options={tokens}
                            defaultValue={tokens[0]}
                            menuMaxHeight={160}
                            width={160}
                            onChange={handleFromTokenChange}
                        />
                        <label style={{ textAlign: 'left' }}>To</label>
                        <SelectNative
                            label="To Token"
                            defaultValue={tokens[0]}
                            options={tokens}
                            onChange={handleToTokenChange}
                            width={160}
                        />
                        <br />
                        <br />
                        <label style={{ textAlign: 'left' }}>Username</label>
                        <TextInput
                            label="User ID"
                            value={userid}
                            onChange={(e) => setUserid(e.target.value)}
                        />
                        <label style={{ textAlign: 'left' }}>Password</label>
                        <TextInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label style={{ textAlign: 'left' }}>Amount</label>
                        <TextInput
                            label="Amount"
                            type="Amount"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <Button onClick={handleSubmit} style={{ width: '145px' }}>Swap Assets</Button>
                        <Button onClick={handleExplorerClick}>View it on explorer</Button>
                        <ThemeProvider theme={original}>
                            <Checkbox label='metamask?' className="Toggle" checked={metamaskStatus} onChange={haveMetamask} />
                        </ThemeProvider>
                        {loading ? (
                            <div style={{ textAlign: 'center' }}>
                                <Hourglass />
                            </div>
                        ) : (
                            <div style={{ marginTop: '37px' }} />
                        )}
                    </WindowContent>
                </Window>
            </div>
        </ThemeProvider>
    );
};

export default SwapAssetsWindow;
