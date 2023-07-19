import React from 'react';

import vk from '../../images/vk-logo.svg';
import tg from '../../images/telegram-logo.svg';
import inst from '../../images/instagram-logo.svg';
import phone from '../../images/phone-logo.svg';
import wa from '../../images/whatsapp-logo.svg';
import './Socials.css';

function Socials({row}) {
  return (
    <div className='socials'>
      <ul className={`socials__list ${row && 'socials__list_row'}`}>
      <li className='socials__item'>
          <a href='https://wa.me/9859870696' target='_blank' className='socials__link'>
            <img
              src={wa}
              alt='логотип whatsapp'
              className='socials__ico'
            />
          </a>
        </li>
        {/* <li className='socials__item'>
          <a href='https://vk.com/riverflow_msk' target='_blank' className='socials__link'>
            <img
              src={vk}
              alt='логотип группы вконтакте'
              className='socials__ico'
            />
          </a>
        </li> */}
         <li className='socials__item'>
          <a href='https://instagram.com/river_flow.ru?igshid=MzNlNGNkZWQ4Mg==' target='_blank' className='socials__link'>
            <img src={inst} alt='логотип инст' className='socials__ico' />
          </a>
        </li> 
        <li className='socials__item'>
          <a href='https://t.me/MNMikhail' target='_blank' className='socials__link'>
            <img
              src={tg}
              alt='логотип группы телеграмм'
              className='socials__ico'
            />
          </a>
        </li>

        <li className='socials__item'>
          <a href="tel:+79936981995" className='socials__link'>
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
