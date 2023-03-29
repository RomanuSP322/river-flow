import React from 'react';
import logoGradient from '../../images/logo-gradient.svg';
import './Intro.css';
import Socials from '../Socials/Socials';
import Button from '../Button/Button';

function Intro() {


  return (
    <div className='intro'>
       <div className='intro__socials'>
        <Socials />
      </div>
      <div className='intro__heading'>
        <img src={logoGradient} alt='River flow logo gradient' className='intro__logo' />
        <h2 className='h1'> Поймай речную волну</h2>
        <h3 className='h3'>В Москве и Подмосковье</h3>
      </div>
      <div className='intro__button'>
        <p className='intro__price'>Сет от 3000р</p>
        <Button name={"Записаться"}/>
      </div>
    </div>
  );
}

export default Intro;
