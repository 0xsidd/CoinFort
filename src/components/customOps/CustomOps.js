import React from 'react';
import { Window, WindowContent, TextInput, Button, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import { ethers } from "ethers";
import axios from 'axios';

import { getProof } from "../helper/generateProof";
import connectWallet from "../helper/connectWallet";
import { transferETH } from "../helper/generateCalldata";
import { generateContractParams } from "../helper/generateContractParams";
import { transact } from "../helper/transact";


const CustomOps = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [metamaskStatus, setMetamaskStatus] = React.useState(false);
  const [inputString, setInputString] = React.useState('');
  const [callData, setCallData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [txnHash, setTXNHash] = React.useState("0x00");

  const handleExplorerClick = () => {
    if (txnHash === "0x00") {
      alert("no transaction found");
    }
    else {
      window.open(`https://sepolia.etherscan.io/tx/${txnHash}`, '_blank');
    }
  };

  const haveMetamask = async () => {
    setMetamaskStatus(!metamaskStatus);
  };

  const handleInputChange = (e) => {
    setInputString(e.target.value);
    handleConvertToArray();
  };

  const handleConvertToArray = () => {
    try {
      const array = inputString.split(',');
      setCallData(array);
    } catch (error) {
      console.error('Invalid input format:', error);
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

    let calldata = [];
    let proof;
    let fakeRefundData = await transferETH(sponsor, ethers.utils.parseEther("0.000000001"));
    // console.log("callData",callData);
    callData.push(fakeRefundData);
    // console.log("mewCalldata",callData);
    calldata = [callData]

    if (metamaskStatus) {
      let wallet = await connectWallet();
      proof = await getProof(password, calldata[0], network.chainId);
      // console.log("71");
      let txData = await generateContractParams(wallet, proof, username, calldata[0], password, network.chainId, await wallet.getAddress());
      // console.log("----------------------------------------");
      if (txData) {
        let res = await transact(wallet, txData.proofFinal, txData.calldata, username, txData.gasPrice, txData.estimatedGas);
        if (res) {
          setLoading(false);
          alert("Action Successfull");
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
      proof = await getProof(password, calldata, network.chainId);
      let txData = await generateContractParams(wallet, proof, username, calldata, password, network.chainId, sponsor);
      const payload =
      {
        proof0: txData.proofFinal[0],
        proof1: txData.proofFinal[1],
        proof2: txData.proofFinal[2],
        proof3: txData.proofFinal[3],
        username: username,
        calldata: txData.calldata,
        gasPrice: txData.gasPrice,
        gasLimit: txData.estimatedGas
    }
      let res = await axios.post(API, payload);
      if (res.status === 200) {
        setLoading(false);
        alert("Action Successfull");
        setTXNHash(res.data.transactionHash);
      }
      else {
        setLoading(false);
      }
    }
  };

  return (
    <ThemeProvider theme={original}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Window className="login-window" style={{ width: '600px' }}>
          <WindowContent>
            <h2 style={{ fontSize: '24px' }}>Custom Operations</h2>
            <br />
            <label style={{ textAlign: 'left' }}>Username</label>
            <TextInput
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label style={{ textAlign: 'left' }}>Password</label>
            <TextInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label style={{ textAlign: 'left' }}>Calldata</label>
            <TextInput
              label="CallData"
              type="Calldata"
              value={callData}
              onChange={handleInputChange}
            />
            <Button onClick={handleSubmit} style={{ width: '145px' }}>Hit</Button>
            <Button onClick={handleExplorerClick}>View it on explorer</Button>
            <Checkbox label='metamask?' className="Toggle" checked={metamaskStatus} onChange={haveMetamask} />
          </WindowContent>
          {loading ? (
            <div style={{ textAlign: 'center' }}>
              <Hourglass />
            </div>
          ) : (
            <div style={{ marginTop: '37px' }} />
          )}
        </Window>
      </div>
    </ThemeProvider>
  );
};

export default CustomOps;


//0x000000000000000000000000b4d883a737e126d1a1ced4be61d258146a8879d600000000000000000000000000000000000000000000000000038d7ea4c68000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000