import React from 'react';
import phoneico from '../../images/phoneico.svg';
import wa from '../../images/whatsappico.svg';
import tg from '../../images/telegram-logo.svg';
import Button from '../Button/Button';
import ContactForm from '../ContactForm/FormContact';
import './ContactPopup.css';
function ContactPopup(props) {
  const handleClose = () => {
    props.onClose();
  };
  return (
    <div
      className={`popup  ${props.phone && 'popup_is-opened'}`}
      onClick={(e) => e.currentTarget === e.target && handleClose()}
    >
      <div className='popup__contact-container'>
      <ContactForm />
        <button
          type='button'
          className='popup__close-button'
          onClick={() => handleClose()}
        />
     
        <p className='h3 popup__contact-title'>Наши контакты</p>
        <a href='tel:+79936981995' className='popup__contact-link'>
        +7 993 698 19 95
        </a>
        
        <div className='callme__links'>
        <a href="tel:+79936981995" className='callme__button'><img className='callme__ico' src={phoneico}/></a>
       <a href='https://t.me/MNMikhail' target='_blank' className='callme__button'>
            <img
              src={tg}
              alt='логотип группы телеграмм'
              className='callme__ico'
            />
          </a>
       <a href="https://wa.me/9859870696" className='callme__button'><img className='callme__ico' src={wa}/></a>
        </div>
        <div className='callme__online' onClick={() => handleClose()}>
          <Button
            name='Онлайн бронь'
            width='200'
            height='60'
            booking={true}
            bg={'blue'}
          />
        
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
