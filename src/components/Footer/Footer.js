import React from 'react';
import { contactsInfo } from '../../const/info';
import footerBg from '../../images/footerbg.png';
import logoWhite from '../../images/logo-white.png';
import location from '../../images/map.svg';
import Socials from '../Socials/Socials';
import phoneIcon from '../../images/phone-logo.svg';
import emailIcon from '../../images/email-logo.svg';
import './Footer.css';

function Footer() {
  const styles = {
    '--footer-bg': `url(${footerBg})`,
  };

  return (
    <footer style={styles} className='footer'>
      <div className='footer__content'>
        <div className='footer__socials'>
          <img src={logoWhite} alt='RiverFlow logo' className='footer__logo' />
          <Socials row={true} />
        </div>
        <div className='footer__maps'>
          {contactsInfo.locations.map((item, idx) => {
            return (
              <a href={item.url} target='_blank' className='footer__maps-link'>
                <div className='footer__ico-wrapper'>
                  <img src={location} className='footer__maps-ico' />
                  <p className='footer__maps-value footer__maps-name'>{item.name}</p>
                </div>
                <p className='footer__maps-value '>{item.value}</p>
              </a>
            );
          })}
        </div>
        <div className='footer__contacts'>
          <h3 className='footer__contacts-title'>Контакты:</h3>
          <div className='footer__contacts-item'>
            <a
              className='footer__contacts-link'
              href={`tel: ${contactsInfo.phone}`}
            >
              <img src={phoneIcon} alt='' className='footer__contacts-ico' />
              <p className='footer__contacts-value'>{contactsInfo.phone}</p>
            </a>
          </div>
          <div className='footer__contacts-item'>
            <a
              className='footer__contacts-link'
              href={`mailto: ${contactsInfo.email}`}
            >
              <img src={emailIcon} alt='' className='footer__contacts-ico' />
              <p className='footer__contacts-value'>{contactsInfo.email}</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
