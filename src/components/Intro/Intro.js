import React from 'react';
import logoGradient from '../../images/logo-gradient.svg';
import './Intro.css';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

function Intro({refs}) {

  const { 
    boatrentRef,
  } = refs;

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop + 50,
      behavior: 'smooth',
    });
  };
  return (
    <div className='intro'>
       <div className='intro__socials'>
        <Socials />
      </div>
      <div className='intro__heading'>
        <img src={logoGradient} alt='River flow logo gradient' className='intro__logo' />
        <h2 className='h1'>Катера Вейк и Прогулки</h2>
        <h3 className='h3'>В Москве и Подмосковье</h3>
      </div>
      <div className='intro__button'>
        <p className='intro__price'>Катер от 3000 р/ч</p>
        <Button name={"Выбрать"} action={() => scrollDown(boatrentRef)}/>
      </div>
    </div>
  );
}

export default Intro;
