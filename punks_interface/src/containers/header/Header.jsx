import React from 'react';
import './header.css';
import heroImage from '../../assets/pixlr-bg-result.png'
import { useState, useEffect } from 'react';

import abi from '../../config/ethers/Abi.json';
import { ethers } from 'ethers';



const Header = () => {

  const contractAddress = "0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0";
  const contractABI = abi.abi;

  //ALERT!: MaxSupply function. We have to render it better. 
  //We have to create a better reference in the browser

  const [maxSupply, setMaxSupply] = useState();
  

  const getMaxSupply = async () => {
      try {
          const { ethereum } = window;
          if (ethereum) {
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const punksContract = new ethers.Contract(contractAddress, contractABI, signer);

              const maxSupply = await punksContract.maxSupply();

              const maxSupplyNumber = maxSupply.toNumber();

              setMaxSupply(maxSupplyNumber);
          } else {
            console.log("Ethereum object doesn't exist!");
          }

      }
      catch(error){
          console.log(error);
      }

  }

  getMaxSupply();

  //End of MaxSupply function.


  return (
    <div className='header section_padding' id='home'>

      <div className='header__content'>

        <h1 className='h1__headerText'>Create, Sell & Collect Your Own Creative NFT</h1>
        <p>Draft Digital Punks is a collection of randomized Avatars whose metadata is stored on-chain. They have unique characteristics and there are only {maxSupply} in existence.</p>
        <p>Each Punk is generated sequentially based on your address and current id, so it is unique, exclusive to you. To find out what your Punk would be if you mint right now, click the Punk Now! button.</p>
        <div className='header__buttons'>
          <button className='button01' type='button' onClick={null}>Punk Now!</button>
        </div>

      </div>

      <div className='header__image'>
        <img src={ heroImage }  alt="HeaderImage"/>
      </div>
    </div>
  )
}

export default Header;