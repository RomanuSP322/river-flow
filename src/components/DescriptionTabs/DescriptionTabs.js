import React, {useEffect, useState} from 'react';
import pricebg from '../../images/pricebg.png';
import tab from '../../images/desctabbg.svg';
import tabmarker from '../../images/tabmarker.png';

import './DescriptionTabs.css';

function DescriptionTabs({ data, boat, windowWidth}) {
  const [visibleTab, setVisibleTab] = React.useState(data[0].id);

  const tabWidth = document.body.clientWidth > 1400 ? 715 : document.body.clientWidth > 1200 ? 620 : document.body.clientWidth > 350 ? 350 : 300
  const markerWidth = document.body.clientWidth > 1400 ? 230 : document.body.clientWidth > 1200 ? 200 : document.body.clientWidth > 350 ? 120 : 100
  const [touchPosition, setTouchPosition] = useState(null);
  const frameWidth = windowWidth > 800 ? 480 : 280;


  const next = () => {
    if (visibleTab < 2) {
      setVisibleTab((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (visibleTab > 0) {
      setVisibleTab((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 4) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  
  
  
  
  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      style={{ '--tab': `url(${tab})` }}
      className={
        visibleTab === item.id
          ? 'desc-tabs__title desc-tabs__title_active'
          : 'desc-tabs__title'
      }
    >
      {item.title}
    </li>
  ));

 
  const listContent = data.map((item) => (
    <div className='desc-tab__content-wrapper'>
      {item.desc && (
        <div className='desc-tab__content'>
          <p className='p'>{item.desc}</p>
          <p className='p'>{item.tag}</p>
        </div>
      )}
      {item.include && (
        <div className='desc-tab__content desc-tab__include'>
       
          {item.include.map((pos) => (
            <div className='desc-tab__include-item'>
              <div className='desc-tab__include-ico-wrapper'>
                <img src={pos.ico} className='desc-tab__include-ico' />
              </div>
              <p className='desc-tab__include-info'>{pos.name}{' '}{pos.name ==='Вместимость' ? (boat === 'Favourit 480' ? '5 гостей' : (boat === 'Sea Ray 230' ? '7 гостей' : (boat === 'Regal Session 22' ? '7 гостей' : ''))) : ''}{pos.name ==='Катер' && boat}</p>
            </div>
          ))}
        </div>
      )}
      {item.info && (
        <div className='desc-tab__content desc-tab__info'>
          {item.info.map((chapter) => (
            <ul className='desc-tab__info-list'>
              <h4 className='desc-tab__info-title'>{chapter.title}</h4>
              {chapter.strings.map((item) => (
                <li className='desc-tab__info-text'>{item.string}</li>
              ))}
            </ul>
          ))}
        </div>
      )}

{item.url && (  
     <div className='desc-tab__map'>
            <iframe
            src={(boat === 'Favourit 480' ? item.url[0] : (boat === 'Sea Ray 230' ? item.url[1] : (boat === 'Regal Session 22' ? item.url[2] : '')))}
            width={frameWidth}
            height="210"
            frameborder="0"
          ></iframe>
          </div>
      
      )} 
    </div>
  ));





  return (
    <div
      className='desc-tabs'
      style={{
        '--pricebg': `url(${pricebg})`,
        '--tabmarker': `url(${tabmarker})`,
      }}

      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <span
        className='desc-tabs__marker'
        style={{ transform: `translateX(${visibleTab * markerWidth}px)` }}
      ></span>
      <ul className='desc-tabs__titles'>{listTitles}</ul>

      <div
        className='desc-tabs__content'
        style={{ transform: `translateX(${visibleTab * - tabWidth}px)` }}
      >
        {listContent}
      </div>
    </div>
  );
}

export default DescriptionTabs;
