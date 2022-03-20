import React from 'react';
import './brands.css';
import { infura, reactLogo, solidity, ethereumLogo, metamask } from './import';


const Brands = () => {
  return (
    <div className="brands">
   <div>
      <img src={metamask} alt='google'/>
    </div> 
    <div>
      <img src={ethereumLogo} alt='slack'/>
    </div>
    <div>
      <img src={infura} alt='atlassian'/>
    </div>
    <div>
      <img src={reactLogo} alt='dropbox'/>
    </div>
  </div>
  )
}

export default Brands;