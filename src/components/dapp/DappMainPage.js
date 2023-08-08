import React, { useState } from 'react';
import { useNavigate, BrowserRouter } from 'react-router-dom';
import { MenuListItem, MenuList, styleReset, Separator } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import original from 'react95/dist/themes/original';

import "./DappMainPage.css"

import Register from '../register/Register';
import SwapAssetsWindow from "../swap/Swap";


const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export const DappMainPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        setActiveWindow('register');
        navigate('/register');
    };

    const handleSwapAssets = () => {
        setActiveWindow('swapAssets');
        navigate('/swap');
    };

    const handleTransferAssets = () => {
        setActiveWindow('transferAssets');
        navigate('/transfer-assets');
    };

    const handleCustomOperations = () => {
        setActiveWindow('customOperations');
        navigate('/custom-operations');
    };
    const handleWalletInfo = () => {
        setActiveWindow('walletInfo');
        navigate('/wallet-info');
    };

    const [activeWindow, setActiveWindow] = useState('register');

    return (
        <div className="main-page-container">
            <div style={{ width: '650px' }}>
                <GlobalStyles />
                <ThemeProvider theme={original}>
                    <MenuList style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <MenuListItem style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleRegister}>
                            Register
                        </MenuListItem>
                        <Separator orientation='vertical' size='43px' />
                        <MenuListItem style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleSwapAssets} >
                            Swap Assets
                        </MenuListItem>
                        <Separator orientation='vertical' size='43px' />
                        <MenuListItem style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            Transfer Assets
                        </MenuListItem>
                        <Separator orientation='vertical' size='43px' />
                        <MenuListItem style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Custom operations
                        </MenuListItem>
                        <Separator orientation='vertical' size='43px' />
                        <MenuListItem style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Wallet info.
                        </MenuListItem>
                    </MenuList>
                    {activeWindow === 'register' && <Register />}
                    {activeWindow === 'swapAssets' && <SwapAssetsWindow />}
                </ThemeProvider>
            </div>
        </div>
    );
};

const Dapp = () => {
    return (
        <BrowserRouter>
            <DappMainPage />
        </BrowserRouter>
    );
};

export default Dapp;
