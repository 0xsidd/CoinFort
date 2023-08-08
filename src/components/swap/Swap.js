import React, { useState } from 'react';
import { Window, WindowContent, TextInput, Button, SelectNative, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import './Swap.css';


const SwapAssetsWindow = () => {
    return (
        <ThemeProvider theme={original}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Window className="login-window" style={{ width: '600px' }}>
                    <WindowContent>
                        <h2 style={{ fontSize: '24px' }}>Swap Assets</h2>
                        <br />
                        <label style={{ textAlign: 'left' }}>From</label>
                        <SelectNative
                            menuMaxHeight={160}
                            width={160}
                        />
                        <label style={{ textAlign: 'left' }}>To</label>
                        <SelectNative
                            label="To Token"
                            width={160}
                        />
                        <br />
                        <br />
                        <label style={{ textAlign: 'left' }}>Username</label>
                        <TextInput
                            label="User ID"
                        />
                        <label style={{ textAlign: 'left' }}>Password</label>
                        <TextInput
                            label="Password"
                            type="password"
                        />
                        <label style={{ textAlign: 'left' }}>Amount</label>
                        <TextInput
                            label="Amount"
                            type="Amount"
                        />
                        <Button style={{ width: '145px' }}>Swap Assets</Button>
                        <Button>View it on explorer</Button>
                        <ThemeProvider theme={original}>
                            <Checkbox label='metamask?' className="Toggle" />
                        </ThemeProvider>
                    </WindowContent>
                </Window>
            </div>
        </ThemeProvider>
    );
};

export default SwapAssetsWindow;
