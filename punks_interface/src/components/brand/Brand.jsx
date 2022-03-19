import React from 'react';
import './brand.css';
import { ethereumLogo, infura, reactLogo, solidity } from './import';


const Brand = () => {
  return (
    <div className="brand section__padding">
    <div>
      <img src={ethereumLogo} alt='google'/>
    </div>
    <div>
      <img src={solidity} alt='slack'/>
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

export default Brand;