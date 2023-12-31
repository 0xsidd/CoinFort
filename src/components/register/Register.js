import React from 'react';
import { Window, WindowContent, TextInput, Button, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import factoryInstance from "../helper/factoryInstance";
import connectWallet from "../helper/connectWallet";

import { generatePoseidonHash } from "../helper/hash";


const LoginWindow = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [txnHash, setTXNHash] = React.useState("0x00");

  const handleExplorerClick = () => {
    window.open(`https://goerli.basescan.org/tx/${txnHash}`, '_blank');
  };

  const handleSubmit = async () => {
    setLoading(true);
    let wallet = await connectWallet();
    const factory = await factoryInstance();
    const poseidonHash = await generatePoseidonHash(password);
    let res;
    let txn;
    try {
      res = await factory.connect(wallet).registerUser(poseidonHash.finalHash, username);
      txn = await res.wait();
      setLoading(false);
      setTXNHash(txn.transactionHash);
      alert("User Registered");
    } catch (err) {
      setLoading(false);
      alert("txn denied");
    }

  };

  return (
    <ThemeProvider theme={original}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <GlobalStyles /> */}
        <Window className="login-window" style={{ width: '600px' }}>
          <WindowContent>
            <h2 style={{ fontSize: '24px' }}>Register Wallet</h2>
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
            <Button onClick={handleSubmit} style={{ width: '145px' }}>Register</Button>
            <Button onClick={handleExplorerClick}>View it on explorer</Button>
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

export default LoginWindow;
