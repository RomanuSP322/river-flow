import React, { useState } from 'react';
import { wakesurfPrice } from '../../const/prices';
import { wakesurfInfo } from '../../const/info';
import wakesurfboard from '../../images/wakesurfboard.png';
import wakesurfboardMobile from '../../images/wakeboardfull.png';
import wakesurfPhotos from '../../images/photoswakesurf.png';
import PriceTabs from '../PriceTabs/PriceTabs';

import './Wakesurf.css';
import DescriptionTabs from '../DescriptionTabs/DescriptionTabs';
import Button from '../Button/Button';
import CallMe from '../CallMe/CallMe';

function Wakesurf({ windowWidth }) {
  const [visibleBoat, setVisibleBoat] = React.useState(wakesurfPrice[0].boat);
  const boat = (r) => {
    setVisibleBoat(r);
  };
  const frameWidth = windowWidth > 1215 ? 480 : windowWidth > 500 ? 400 : windowWidth;
  const [frameStyle, setFrameStyle] = useState({ 'pointerEvents': 'none' });

  return (
    <div className='wakesurf'>
      <div
        className='wakesurf__info'
        style={{
          '--wakesurf': `url(${wakesurfboard})`,
          '--wakesurf-mobile': `url(${wakesurfboardMobile})`,
        }}
      >
        <div className='wakesurf__board'>
          <h2 className='h2'>Вейксерф</h2>
          <h3 className='h3 wakesurf__subtitle'>Твоя бесконечная волна</h3>
          <PriceTabs data={wakesurfPrice} boat={boat} />
          <div className='wakesurf__desc-tabs'>
            <DescriptionTabs data={wakesurfInfo} boat={visibleBoat} />
          </div>
          <Button name='Записаться' />
        </div>
      </div>
      <div className='wakesurf__photos'>
        <img src={wakesurfPhotos} className='wakesurf__photos-img' />
        <div className='wakesurf__contact'>
          <div
            onClick={() => setFrameStyle({ 'pointerEvents': 'auto' })}
            className='frame'
          >
            {visibleBoat === 'Regal Session 22' && (
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A1b7269cb565ad9b029b871f543a12b8d06c4609e1b89d40a09fdf6d97e529947&amp;source=constructor'
                width={frameWidth}
                height='280'
                frameBorder='0'
                className='frame'
                style={frameStyle}
              ></iframe>
            )}
            {visibleBoat === 'MasterCraft\n X-star' && (
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2cb7bf31e340136ebd28f430374e2c75763b1a77b4c411ccfaf8386d0bf83cc0&amp;source=constructor"
                width={frameWidth}
                height='280'
                frameBorder='0'
                className='frame'
                style={frameStyle}
              ></iframe>        
            )}
          </div>
          <div className='wakesurf__callme'>
            <CallMe bg={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wakesurf;
