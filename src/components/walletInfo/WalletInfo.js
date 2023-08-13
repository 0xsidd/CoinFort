import React from 'react';
import { Window, WindowContent, TextInput, Button, TableHead, TableRow, TableHeadCell, TableDataCell, Table, TableBody, Hourglass, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import { BigNumber, ethers } from "ethers";
import factoryInstance from "../helper/factoryInstance";
import ERC20ABI from "../helper/abi/ERC20.json";

import dotenv from 'dotenv';
dotenv.config();

const WalletInfo = () => {
  const [username, setUsername] = React.useState('');
  const [eth, setETH] = React.useState(0);
  const [usdc, setUSDC] = React.useState(0);
  const [uni, setUNI] = React.useState(0);
  const [weth, setWeth] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [userWalletAddress, setUserWalletAddress] = React.useState("Wallet");

  let USDC;
  let UNI;
  let WETH;
  const rpcUrl = process.env.REACT_APP_SEPOLIA_RPC;
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wethAddress = process.env.REACT_APP_WETH_ADDRESS;
  const usdcAddress = process.env.REACT_APP_USDC_ADDRESS;
  const uniAddress = process.env.REACT_APP_UNI_ADDRESS;

  const handleSubmit = async () => {
    setLoading(true);
    setETH(0);
    setUSDC(0);
    setUNI(0);
    setWeth(0);

    UNI = new ethers.Contract(uniAddress, ERC20ABI, provider);
    USDC = new ethers.Contract(usdcAddress, ERC20ABI, provider);
    WETH = new ethers.Contract(wethAddress, ERC20ABI, provider);

    const factory = await factoryInstance();
    const userWallet = await factory.usernameToWalletAddress(username);
    if (userWallet === "0x0000000000000000000000000000000000000000") {
      alert("invalid username");
      setLoading(false);
    } else {
      const usdcBal = await USDC.balanceOf(userWallet);
      const UNIBal = await UNI.balanceOf(userWallet);
      const ethBal = await provider.getBalance(userWallet);
      const wethBal = await WETH.balanceOf(userWallet);
      setETH((parseInt(ethBal._hex, 16) / 1e18).toFixed(4));
      setUSDC((parseInt(usdcBal._hex, 16) / 1e18).toFixed(7));
      setUNI((parseInt(UNIBal._hex, 16) / 1e18).toFixed(7));
      setWeth((parseInt(wethBal._hex, 16) / 1e18).toFixed(7));      // setUSDC((usdcBal / 1e18).toFixed(7));
      setUserWalletAddress(userWallet);
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={original}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Window className="login-window" style={{ width: '600px' }}>
          <WindowContent>
            <h2 style={{ fontSize: '24px' }}>Wallet Info</h2>
            <br />
            <label style={{ textAlign: 'left' }}>Username</label>
            <TextInput
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div style={{ marginTop: '10px' }}>
              <Button onClick={handleSubmit}>Get Wallet info.</Button>
            </div>
            <div style={{ marginTop: '20px' }}>
              <WindowHeader>{loading ? <Hourglass /> : userWalletAddress}</WindowHeader>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeadCell style={{ width: '100px' }} >Asset</TableHeadCell>
                    <TableHeadCell>Level</TableHeadCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='LEAF'>
                        ETH
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : eth}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='lightning'>
                        WETH
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : weth}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='fire'>
                        USDC
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : usdc}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='lightning'>
                        UNI
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : uni}</TableDataCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </WindowContent>
        </Window>
      </div>
    </ThemeProvider>
  );
};

export default WalletInfo;
