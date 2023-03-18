import React, { useState } from 'react';
import './Navigation.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (event) => {
    const navItems = document.querySelectorAll('.menu a');
    navItems.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
  };

  return (
    <div className={`box-menu ${isMenuOpen ? 'full-menu' : ''}`} >
      <div className='wrapper' onClick={toggleMenu} >
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='menu'>
        <a  className='active' onClick={handleNavItemClick}>
  
          <span className='text'>Вейксерф</span>
        </a>
        <a  onClick={handleNavItemClick}>
    
          <span className='text'>Аренда катера</span>
        </a>
        <a  onClick={handleNavItemClick}>
          
          <span className='text'>Вейкборд и лыжи</span>
        </a>
        <a  onClick={handleNavItemClick}>
      
          <span className='text'>Прогулки на катере</span>
        </a>
        <a  onClick={handleNavItemClick}>
         
          <span className='text'>Cертификаты</span>
        </a>
        <a  onClick={handleNavItemClick}>
       
          <span className='text'>Вопросы</span>
        </a>
        <a  onClick={handleNavItemClick}>
     
          <span className='text'>Контакты</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
