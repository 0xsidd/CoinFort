import React from 'react';
import { Window, WindowContent, TextInput, Button, TableHead, TableRow, TableHeadCell, TableDataCell, Table, TableBody, Hourglass,WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

const WalletInfo = () => {
  const [username, setUsername] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [userWalletAddress, setUserWalletAddress] = React.useState("Wallet");



  const handleSubmit = async () => {};

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
                        a
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : "a"}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='lightning'>
                        b
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : "b"}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='fire'>
                        c
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : "c"}</TableDataCell>
                  </TableRow>
                  <TableRow>
                    <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='lightning'>
                        d
                      </span>
                    </TableDataCell>
                    <TableDataCell>{loading ? <Hourglass /> : "d"}</TableDataCell>
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
