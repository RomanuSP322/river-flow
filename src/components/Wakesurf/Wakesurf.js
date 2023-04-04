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
  const frameWidth = windowWidth > 1215 ? 480 : windowWidth > 500 ? 400 : 320;
  const [frameStyle, setFrameStyle] = useState({ 'pointer-events': 'none' });

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
            onClick={() => setFrameStyle({ 'pointer-events': 'auto' })}
            className='frame'
          >
            {visibleBoat === 'Regal Session 22' && (
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3Adda236157aa315486602678d6bf3c09d59fe7ebad5037745381ee885e806b9f7&amp;source=constructor'
                width={frameWidth}
                height='250'
                frameborder='0'
                className='frame'
                style={frameStyle}
              ></iframe>
            )}
            {visibleBoat === 'MasterCraft\n X-star' && (
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3A1a4fd4b3640fa7df6c4ddeb8c41b6136413c4831d3ea4c50fefc3b9a71155212&amp;source=constructor'
                width={frameWidth}
                height='250'
                frameborder='0'
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
