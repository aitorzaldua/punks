import React from 'react';
import './header.css';
import heroImage from '../../assets/heroimage.png'

const Header = () => {
  return (
    <div className='header section_padding' id='home'>

      <div className='header__content'>
        <h1 className='h1__headerText'>Create, Sell & Collect Your Own Creative NFT</h1>
        <p>The best place to create, expose and shell your own NFT creates with the powerful tool of your own mind</p>

        <div className='header__buttons'>
          <button className='button01' type='button'>Create Now</button>
          <button className='button02' type='button'>Explore Gallery</button>
        </div>

      </div>

      <div className='header__image'>
        <img src={ heroImage }  alt="HeaderImage"/>
      </div>
    </div>
  )
}

export default Header