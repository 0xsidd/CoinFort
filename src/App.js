import React from 'react';
import './App.css';
import Header from './components/header/Header';
import DappMainPage from "./components/dapp/DappMainPage"


const App = () => {
  return (
    <div className="App">
      <Header />
      <DappMainPage />
    </div>
  );
}

export default App;
