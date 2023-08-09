import React from 'react';
import './Header.css';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';



const Header = ()=>{
    return (
        <header className="header">
            <ThemeProvider theme={original}>
                <h1 className='header-text'>Coin Fort</h1>
            </ThemeProvider>
        </header>
    );
}

export default Header;
