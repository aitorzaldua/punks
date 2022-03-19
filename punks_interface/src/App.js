import React from 'react';
import './App.css';


import { Collection, Footer, Header, YourNFT } from './containers';
import { Navbar, CTA, Brand } from './components';

const App = () => {


  return (
    <div className='App'>
      <div className='home_navbar'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <YourNFT />
      <Footer />
    </div>
  )
}

export default App;