import React from 'react';

import vk from '../../images/vk-logo.svg';
import tg from '../../images/telegram-logo.svg';
import inst from '../../images/instagram-logo.svg';
import phone from '../../images/phone-logo.svg';
import './Socials.css';

function Socials() {
  return (
    <div className='socials'>
      <ul className='socials__list'>
        <li className='socials__item'>
          <a href='https://vk.com/' target='_blank' className='socials__link'>
            <img
              src={vk}
              alt='логотип группы вконтакте'
              className='socials__ico'
            />
          </a>
        </li>
        <li className='socials__item'>
          <a href='#' target='_blank' className='socials__link'>
            <img src={inst} alt='логотип инст' className='socials__ico' />
          </a>
        </li>
        <li className='socials__item'>
          <a href='#' target='_blank' className='socials__link'>
            <img
              src={tg}
              alt='логотип группы телеграмм'
              className='socials__ico'
            />
          </a>
        </li>
        <li className='socials__item'>
          <a href='#' target='_blank' className='socials__link'>
            <img
              src={phone}
              alt='логотип номера телефона'
              className='socials__ico'
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
