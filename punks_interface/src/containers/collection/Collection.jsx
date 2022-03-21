import React from 'react';
import { useCallback, useEffect, useState } from "react";
import './collection.css';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connector } from  '../../config/web3';
import useTruncatedAddress from '../../hooks/useTruncateAddress';

const Collection = () => {
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
    <div className='collection' section_margin id="Collection">
      <div className='collection__title'>
        <h3>Explore the Collection</h3>
        <p className='account'>{truncatedAddress} ~ {balance} ETH</p>
      </div>
      <div className='collection__images'>

      </div>
    </div>
  )
}

export default Collection;