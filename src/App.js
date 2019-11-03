import React from 'react';
import './App.css';
import CryptoList from './components/CryptoList.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <CryptoList />
    </div>
  );
}

export default App;
