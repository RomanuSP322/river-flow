import React from 'react';
import './Header.css';
import logo from '../../images/logo-black.svg';
import Navigation from '../Navigation/Navigation';

function Header({ refs }) {
  return (
    <header className='header'>
   
      <img src={logo} alt='RiverFlow logo' className='header__logo' />
     
      <Navigation refs={refs} />
    </header>
  );
}

export default Header;
