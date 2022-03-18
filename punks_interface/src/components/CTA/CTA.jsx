import React, { useState } from 'react';
import './cta.css';
import { ethers } from 'ethers';
import abi from '../../config/ethers/Abi.json';

const CTA = () => {

    const contractAddress = "0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0";
    const contractABI = abi.abi;

   

  return (
    <div className='punks__CTA' id="CTA">
        <div className='punks__CTA-content'>
        <h3>Click to obtain your NFT</h3>
        </div>

        <div className='punks__CTA-btn'>
            <button type="button">Mint Now!</button>
        </div>
    </div>
  )
}

export default CTA;