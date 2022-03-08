import React from 'react';
import './App.css';

import { Brand, Collection, Footer, Header, YourNFT } from './containers';
import { Navbar } from './components';
 
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <YourNFT />
      <Collection />
      <Footer />
    </div>
  )
}

export default App;