import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo-black.svg';
import Navigation from '../Navigation/Navigation';
import '../Navigation/navbar.css';
function Header({ refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {
    wakesurfRef,
    wakeboardRef,
    boatrentRef,
    walksRef,
    faqRef,
    contactsRef,
    certificatsRef,
  } = refs;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop + 50,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      
      if (window.pageYOffset > 950) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('scroll', toggleVisibility);

    // cleanup function to remove event listener
    return () => {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <header className='header'>
      <img src={logo} alt='RiverFlow logo' className='header__logo' />
      {windowWidth > 1000 && <Navigation refs={refs} scrollDown={scrollDown} />}
      {(isVisible || windowWidth < 1000) &&
        
          <div
            className={`box-menu ${isMenuOpen ? 'full-menu' : ''}`}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className='wrapper' onClick={toggleMenu}>
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className='menu'>
              <a className='active' onClick={() => scrollDown(wakesurfRef)}>
                <span className='text'>Вейксерф</span>
              </a>
              <a onClick={() => scrollDown(boatrentRef)}>
                <span className='text'>Аренда катера</span>
              </a>
              <a onClick={() => scrollDown(wakeboardRef)}>
                <span className='text'>Вейкборд и лыжи</span>
              </a>
              <a onClick={() => scrollDown(walksRef)}>
                <span className='text'>Прогулки на катере</span>
              </a>
              <a onClick={() => scrollDown(certificatsRef)}>
                <span className='text'>Cертификаты</span>
              </a>
              <a onClick={() => scrollDown(faqRef)}>
                <span className='text'>Вопросы</span>
              </a>
              <a onClick={() => scrollDown(contactsRef)}>
                <span className='text'>Контакты</span>
              </a>
            </div>
          </div>
       }
    </header>
  );
}

export default Header;
