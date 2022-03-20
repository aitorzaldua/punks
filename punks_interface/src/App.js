import React from 'react';
import './App.css';


import { Collection, Footer, Header, YourNFT } from './containers';
import { Navbar, CTA, Brands } from './components';

const App = () => {


  return (
    <div className='App'>
      <div className='home_navbar'>
        <Navbar />
        <Header />
      </div>
      <Brands />
      <YourNFT />
      <Collection />
      <Footer />
    </div>
  )
}

export default App;