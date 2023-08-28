import logo from './logo.svg';
import React from 'react';
import Title from './Title';
import './App.css';

function App(){
  return (
    <div className='App'>
      <header className='App-Header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <Title/>
      </header>
    </div>
  );
}


export default App;
