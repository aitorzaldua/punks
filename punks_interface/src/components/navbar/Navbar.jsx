import { useCallback, useEffect, useState } from "react";
import logo from '../../assets/logo_dd.svg';
import ethLogo from '../../assets/eth_logo.png';
import './navbar.css'
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connector } from  '../../config/web3';
import useTruncatedAddress from '../../hooks/useTruncateAddress';

const Navbar = () => {

  const { active, activate, deactivate, account, error, library } = useWeb3React();

  const connect = () => {
    activate(connector);
  }

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const truncatedAddress = useTruncatedAddress(account);

  const [balance, setBalance] = useState(0);

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => { 
    if (active) getBalance();
  }, [active, getBalance]);

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
            <div>
              {active?(
                <p className='account'>{truncatedAddress} ~ {balance} ETH</p>
              ) : (
                <button
                  type="button" 
                  onClick={connect}
                  disabled={isUnsupportedChain}
                >{isUnsupportedChain ? "Chain no soportada" : "connectar wallet"}
                </button>
              )
              }
            </div>
        </div>

    </div>
  )
}

export default Navbar;