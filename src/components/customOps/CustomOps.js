import React from 'react';
import { Window, WindowContent, TextInput, Button, Checkbox, Hourglass } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';



const CustomOps = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [metamaskStatus, setMetamaskStatus] = React.useState(false);
  const [inputString, setInputString] = React.useState('');
  const [callData, setCallData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [txnHash, setTXNHash] = React.useState("0x00");


  const handleSubmit = async () => { };

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
            />
            <Button onClick={handleSubmit} style={{ width: '145px' }}>Hit</Button>
            <Button >View it on explorer</Button>
            <Checkbox label='metamask?' className="Toggle" checked={metamaskStatus} />
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


