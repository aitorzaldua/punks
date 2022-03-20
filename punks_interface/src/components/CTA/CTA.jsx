import React, { useState } from 'react';
import './cta.css';
import { ethers } from 'ethers';
import abi from '../../config/ethers/Abi.json';

const CTA = () => {

    const contractAddress = "0xDE79Fe425A2AFA4dc9FDb665f5430d23008F91D0";
    const contractABI = abi.abi;

   //Function 01: Mint

   const [isMinting, setIsMinting] = useState(false);

   const minting = async() => {
     const {ethereum} = window;
     if (ethereum){
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const punksContract = new ethers.Contract(contractAddress, contractABI, signer);

      const balance = await signer.getBalance();
      const balance2 = ethers.utils.formatEther(balance);
      const myAddress = await signer.getAddress();
       console.log("all good : ",balance2, myAddress );


       punksContract.mint();

      const balance3 = await signer.getBalance();
      const balance4 = ethers.utils.formatEther(balance);

     const filter = punksContract.filters.Transfer(null, myAddress);
      console.log ("a ver que es esto : ", filter);

      console.log(balance2, "ahora", balance4);


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
    </div>
  )
}

export default CTA;