import React from 'react';
import './App.css';

import { Collection, Footer, Header, YourNFT } from './containers';
import { Navbar, Brand, CreateNFT } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='home_navbar'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <YourNFT />
      <CreateNFT />
      <Collection />
      <Footer />
    </div>
  )
}

export default App;