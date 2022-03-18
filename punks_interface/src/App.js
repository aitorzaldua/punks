import React from 'react';
import './App.css';


import { Collection, Footer, Header } from './containers';
import { Navbar, CTA } from './components';

const App = () => {


  return (
    <div className='App'>
      <div className='home_navbar'>
        <Navbar />
        <Header />
        <CTA />
      </div>
      <Collection />
      <Footer />
    </div>
  )
}

export default App;