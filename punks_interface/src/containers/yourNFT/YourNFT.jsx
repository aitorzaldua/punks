import React from 'react';
import CTA from '../../components/CTA/CTA';
import './yourNFT.css';

import { useState } from 'react';

import abi from '../../config/ethers/Abi.json';
import { ethers } from 'ethers';

const YourNFT = () => {

  const contractAddress = "0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0";
  const contractABI = abi.abi;

  //Function 01: Punk Now! button
  const [punkNow, getPunkNow] = useState();

  const visualizePunk = async () => {
    try {
      const { ethereum } = window;
      if (ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const punksContract = new ethers.Contract(contractAddress, contractABI, signer);

        const totalSupply = await punksContract.totalSupply();
        const dnaPreview = await punksContract.deterministicPseudoRandomDNA(totalSupply, contractAddress);
        const image = await punksContract.imageByDNA(dnaPreview);

        const totalSupplyNumber = totalSupply.toNumber();

        getPunkNow(image);
      }else {
        console.log("Ethereum object doesn't exist!");
      }
    }
    catch(error){
      console.log(error);
    }
  }

  //End of Funtion01

  return (
    <div className="YourNFT section__margin" id="YourNFT">
      <div className="YourNFT__punkNow">
        <div className='YourNFT__punkNow--button'>
          <div className='YourNFT__punkNow--button-visualize'>
            <div className='YourNFT__punkNow--button-visualize-content'>
              <h3>Click to explore your posible NFT</h3>
            </div>
            <div className='YourNFT__punkNow--button-visualize-btn'>
              <button type="button" onClick={visualizePunk}>Visualize</button>
            </div>
          </div>
          <div className="YourNFT__CTA">
            <CTA/>
          </div>
        </div>
        <div className="YourNFT__image">
          <img src={punkNow}/>
        </div>
      </div>
    </div>
  )
}

export default YourNFT;