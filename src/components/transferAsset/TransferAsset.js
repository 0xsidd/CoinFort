import React, { useState } from 'react';
import { Window, WindowContent, TextInput, Button, SelectNative, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import './TransferAsset.css';



const TransferAsset = () => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount] = useState('');
    const [to, setTo] = useState('');
    const [metamaskStatus, setMetamaskStatus] = React.useState(false);
    const [token, setToken] = useState("");
    const [loading, setLoading] = React.useState(false);
    const [txnHash, setTXNHash] = React.useState("0x00");

    const haveMetamask = async () => {
        setMetamaskStatus(!metamaskStatus);
    };

    const handleTokenChange = (value) => {
        setToken(value);
    };

    const handleExplorerClick = () => {};


    const handleSubmit = async () => {};

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
