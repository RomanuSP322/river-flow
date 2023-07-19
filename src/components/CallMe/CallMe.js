import React from 'react';
import callbg from '../../images/callbg.png'
import phoneico from '../../images/phoneico.svg'
import wa from '../../images/whatsappico.svg';
import tg from '../../images/telegram-logo.svg';
import './CallMe.css';

function CallMe({bg}) {
  return (
    <div className={`callme  ${bg ? `callme__bg` : ``}`} style={{"--callmebg": `url(${callbg})`}}
  >
      <p className={`callme__title  ${bg ? `callme__title_white` : ``}`}>Задай вопросы</p>
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
       {/* <p className={`callme__subtitle  ${bg ? `callme__subtitle_white` : ``}`}>Мы быстро отвечаем</p> */}
    </div>
  );
}

export default CallMe;
