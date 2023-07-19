import React, { useState, useRef } from 'react';

import { wakesurfPrice } from '../../const/prices';
import { wakesurfInfo } from '../../const/info';
import wakesurfboard from '../../images/wakesurfboard.png';
import wakesurfboardMobile from '../../images/wakeboardfull.png';
import wakesurfPhotos from '../../images/photoswakesurf3.webp';
import PriceTabs from '../PriceTabs/PriceTabs';


import './Wakesurf.css';
import DescriptionTabs from '../DescriptionTabs/DescriptionTabs';
import Button from '../Button/Button';
import CallMe from '../CallMe/CallMe';
const LazyVideo = React.lazy(() => import('./Video'));
function Wakesurf({ windowWidth, panels, onPhotoClick}) {
  const [visibleBoat, setVisibleBoat] = React.useState(wakesurfPrice[0].boat);
  const boat = (r) => {
    setVisibleBoat(r);
  };
  const frameWidth = windowWidth > 1215 ? 480 : windowWidth > 1000 ? 280 : windowWidth > 500 ? 400 : windowWidth;
  const [frameStyle, setFrameStyle] = useState({ 'pointerEvents': 'none' });

  const videoRef = useRef(null); // Create a ref for the video element

  const handleButtonClick = () => {
    // Pause or stop the video based on its current state
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
     
    }
  };

  return (
    <div className='wakesurf' id="wakesurf">
      <div
        className='wakesurf__info'
        style={{
          '--wakesurf': `url(${wakesurfboard})`,
          '--wakesurf-mobile': `url(${wakesurfboardMobile})`,
        }}
      >
        <div className='wakesurf__board'>
          <h2 className='h2'>Вейксерф</h2>
          <h3 className='h3 wakesurf__subtitle'>На пироговском вдхр</h3>
          <PriceTabs data={wakesurfPrice} boat={boat} panels={panels} onPhotoClick={onPhotoClick}/>
          <div className='wakesurf__desc-tabs'>
            <DescriptionTabs data={wakesurfInfo} boat={visibleBoat} />
          </div>
          <Button name='Онлайн запись' booking={true} url={visibleBoat==="Regal 22"  ? "https://w931543.yclients.com/widgetJS":"https://w931544.yclients.com/widgetJS"}/>
        </div>
      </div>
      <div className='wakesurf__photos' onClick={handleButtonClick}>
        <div className='wakesurf__photos-wrapper' >         
        <img src={wakesurfPhotos} className='wakesurf__photos-img' />        
<LazyVideo videoRef={videoRef} />

     
       
        </div>
        <div className='wakesurf__contact'>
          <div
            onClick={() => setFrameStyle({ 'pointerEvents': 'auto' })}
            className='frame'
          >
           
              <iframe
                src='https://yandex.ru/map-widget/v1/?um=constructor%3Adda236157aa315486602678d6bf3c09d59fe7ebad5037745381ee885e806b9f7&amp;source=constructor'
                width={frameWidth}
                height='280'
                frameBorder='0'
                className='frame'
                style={frameStyle}
              ></iframe>
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
