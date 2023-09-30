import React, { useState } from 'react';
import { Window, WindowContent, TextInput, Button, SelectNative, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import './TransferAsset.css';
import { ethers } from "ethers";
import axios from 'axios';


import { getProof } from "../helper/generateProof";
import connectWallet from "../helper/connectWallet";
import { transferETH, tokenTransfer } from "../helper/generateCalldata";
import { generateContractParams } from "../helper/generateContractParams";
import { transact } from "../helper/transact";

import dotenv from 'dotenv';
dotenv.config();

const WETH = process.env.REACT_APP_WETH_ADDRESS;
const USDC = process.env.REACT_APP_USDC_ADDRESS;
const UNI = process.env.REACT_APP_UNI_ADDRESS;
const ETH = process.env.REACT_APP_ETH_ADDRESS;

const tokens = [
    { value: WETH, label: 'WETH' },
    { value: ETH, label: 'ETH' },
    { value: USDC, label: 'USDC' },
    { value: UNI, label: 'UNI' }
];


const TransferAsset = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');
    const [to, setTo] = useState('');
    const [metamaskStatus, setMetamaskStatus] = React.useState(false);
    const [token, setToken] = useState(ETH);
    const [loading, setLoading] = React.useState(false);
    const [txnHash, setTXNHash] = React.useState("0x00");

    const haveMetamask = async () => {
        setMetamaskStatus(!metamaskStatus);
    };

    const handleTokenChange = (value) => {
        setToken(value);
    };

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
        const rpc = process.env.REACT_APP_SEPOLIA_RPC;
        const sponsor = process.env.REACT_APP_SPONSOR;
        const API = (process.env.REACT_APP_PAYMASTER_API).toString();
        const provider = new ethers.providers.JsonRpcProvider(rpc.toString());
        const network = await provider.getNetwork();

        let proof;
        let calldata = [];
        if (token.value === ETH) {
            let transferCalldata = await transferETH(to, ethers.utils.parseEther(amount));
            let fakeRefundData = await transferETH(sponsor, ethers.utils.parseEther("0.000000001"));
            calldata = [transferCalldata, fakeRefundData]
            // console.log(calldata);
        }
        else {
            let transferCalldata = await tokenTransfer(token.value, to, ethers.utils.parseEther(amount));
            let fakeRefundData = await transferETH(sponsor, ethers.utils.parseEther("0.000000001"));
            calldata = [transferCalldata, fakeRefundData]
            // console.log(calldata[0]);
        }

        if (metamaskStatus) {
            let wallet = await connectWallet();
            proof = await getProof(password, calldata, network.chainId);
            let txData = await generateContractParams(wallet, proof, userid, calldata, password, network.chainId, await wallet.getAddress());
            if (txData) {
                let res = await transact(wallet, txData.proofFinal, txData.calldata, userid, txData.gasPrice, txData.estimatedGas);
                if (res) {
                    setLoading(false);
                    alert("Asset Transfered");
                    setTXNHash(res);
                } else {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }
        else {
            let wallet;
            // console.log("----------");
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
            let res = await axios.post(API, payload);
            if (res.status === 200) {
                setLoading(false);
                alert("Asset Transferred");
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
                        <h2 style={{ fontSize: '24px' }}>Transfer Assets</h2>
                        <br />
                        <label style={{ textAlign: 'left' }}>From</label>
                        <SelectNative
                            defaultValue={'eth'}
                            options={tokens}
                            menuMaxHeight={160}
                            width={160}
                            onChange={handleTokenChange}
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
                        <label style={{ textAlign: 'left' }}>To</label>
                        <TextInput
                            label="To"
                            type="To"
                            onChange={(e) => setTo(e.target.value)}
                        />
                        <label style={{ textAlign: 'left' }}>Amount</label>
                        <TextInput
                            label="Amount"
                            type="Amount"
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <Button onClick={handleSubmit} style={{ width: '145px' }}>Transfer</Button>
                        <Button onClick={handleExplorerClick}>View it on explorer</Button>
                        <br />
                        <br />
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

export default TransferAsset;
