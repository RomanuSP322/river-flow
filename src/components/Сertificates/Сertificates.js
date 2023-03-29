import React from 'react';

import certificatesImg from '../../images/certificates.png';
import Button from '../Button/Button';
import './Сertificates.css';

function Certificates({windowWidth}) {
  
  const isMobile = windowWidth < 500

  return (
    <div className='certificates'>
      <div className='certificates__columns'>
        <div className='certificates__column_left'>
          <h2 className='h2 certificates__title'>Подарочные сертификаты</h2>
          <h3 className='h3 certificates__subtitle'>Дарите приключения</h3>
          { isMobile && 
          <img
            src={certificatesImg}
            alt='Подарочные сертификат River Flow'
            className='certificates__img'
          />
   }
          <p className='p certificates__info'>
            Ищете уникальный и запоминающийся подарок для кого-то особенного?
            Обратите внимание на наши подарочные сертификаты на речные
            развлечения! Наши подарочные сертификаты предлагают отличную
            возможность испытать захватывающие эмоции от вейкбординга,
            вейксерфинга, водных лыж и многого другого, находясь в окружении
            природной красоты реки.
          </p>
          <br></br>
          <p className='p certificates__info'>
            С подарочным ваучером от River's Flow у вашего близкого человека
            будет возможность сделать незабываемые впечатления и попробовать
            что-то новое. Наши сертификаты могут быть изготовлены по
            индивидуальному заказу и использованы для любых наших услуг, включая
            аренду лодок и речные прогулки с гидом.
          </p>
          <br></br>
          <p className='p certificates__info'>
            Так зачем ждать? Подарите приключение с помощью подарочного ваучера
            River's Flow уже сегодня!
          </p>
          <div className='certificates__button'>
            <Button name='Оформить сертификат' width={360} height={75} />
          </div>
        </div>
  { !isMobile && <div className='certificates__column_right'>
          <img
            src={certificatesImg}
            alt='Подарочные сертификат River Flow'
            className='certificates__img'
          />
        </div>}
      </div>
    </div>
  );
}

export default Certificates;
