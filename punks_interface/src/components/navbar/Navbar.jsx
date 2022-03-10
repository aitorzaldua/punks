import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo_dd.svg';
import ethLogo from '../../assets/eth_logo.png';
import './navbar.css'

import useTruncatedAddress from './../../hooks/useTruncateAddress';

const Navbar = () => {

  //Check if wallet

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Connect the wallet

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const truncatedAddress = useTruncatedAddress(currentAccount);


  return (
    <div className='punks__navbar'>
        <div className='punks__navbar-links_logo'>
                <img src = {logo} alt="logo" />
        </div>
        <div className='punks__navbar-links'>
            <div className='punks__navbar-links_container'>
                <p><a href="#home"> Home</a></p>
                <p><a href="#CreateNft">Create NFT</a></p>
                <p><a href="#Collection">Collection</a></p>
            </div>
            {!currentAccount && (
              <button className="button" onClick={connectWallet}>
                Connect Wallet
              </button>
            )}
            {currentAccount && (
              <div className='account'>
                <img src={ethLogo} alt='ethLogo' />
                <p>{truncatedAddress}</p>
              </div>
            )}
        </div>

    </div>
  )
}

export default Navbar;