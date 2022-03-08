import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_dd.svg';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='punks__navbar'>
        <div className='punks__navbar-links'>
            <div className='punks__navbar-links_logo'>
                <img src = {logo} alt="logo" />
            </div>
            <div className='punks__navbar-links_container'>
                <p><a href="#home"> Home</a></p>
                <p><a href="#YourNft"> Your NFT</a></p>
                <p><a href="#Collections"> Collections</a></p>
                <button type='button'>Select Wallet</button>
            </div>
        </div>

    </div>
  )
}

export default Navbar;