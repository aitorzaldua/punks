import React, { useState } from 'react';
import './cta.css';
import { ethers } from 'ethers';
import abi from '../../config/ethers/Abi.json';

const CTA = () => {

    const contractAddress = "0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0";
    const contractABI = abi.abi;

   //Function 01: Mint

   /* const [message, setMessage] = useState(false); */

   const minting = async() => {
     const {ethereum} = window;
     if (ethereum){

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const punksContract = new ethers.Contract(contractAddress, contractABI, signer);

       punksContract.mint();

       const punkToken = punksContract.tokenId;

       console.log(punkToken);

       /* const minted = "See your new NFT on the Gallery abow or in testnets.opensea.io/"; */

       /* setMessage(minted); */


     }




       
     else {console.log("nothing good")}
   }


  return (
    <div className='punks__CTA' id="CTA">
        <div className='punks__CTA-content'>
        <h3>Click to obtain your NFT</h3>
        </div>

        <div className='punks__CTA-btn'>
               <button 
                type="button" 
                onClick={minting}
                >Mint Now!
                </button>
        </div> 
        {/* <h3>{message}</h3> */}
    </div>
  )
}

export default CTA;
