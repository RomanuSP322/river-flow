import React, {useState} from 'react';
import pricebg from '../../images/pricebg.png';
import tab from '../../images/desctabbg.svg';
import tabmarker from '../../images/tabmarker.png';

import './DescriptionTabs.css';

function DescriptionTabs({ data, boat, windowWidth}) {
  const [visibleTab, setVisibleTab] = React.useState(data[0].id);

  const tabWidth = document.body.clientWidth > 1400 ? 715 : document.body.clientWidth > 900 ? 620 : document.body.clientWidth > 350 ? 350 : 300
 
  const [touchPosition, setTouchPosition] = useState(null);
  const frameWidth = windowWidth > 1400 ? 635 : document.body.clientWidth > 900 ? 580 : document.body.clientWidth > 350 ? 350 : 300
  const [frameStyle, setFrameStyle] = useState({"pointerEvents": "none"});

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
      key={item.id}
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
    <div className='desc-tab__content-wrapper' key={item.id}>
      {item.desc && (
        <div className='desc-tab__content'>
          <p className='p'>{item.desc}</p>
          <p className='p'>{item.tag}</p>
        </div>
      )}
      {item.include && (
        <div className='desc-tab__content desc-tab__include'>
       
          {item.include.map((pos, idx) => (
            <div className='desc-tab__include-item' key={idx}>
              <div className='desc-tab__include-ico-wrapper'>
                <img src={pos.ico} className='desc-tab__include-ico' />
              </div>
              <p className='desc-tab__include-info'>{pos.name}{' '}{pos.name ==='Вместимость' ? (boat === 'Фавор' ? '5 гостей' : (boat === 'Sea Ray 230' ? '7 гостей' : (boat === 'Регал' ? '7 гостей' : ''))) : ''}{pos.name ==='Катер' && boat}</p>
            </div>
          ))}
        </div>
      )}
      {item.info && (
        <div className='desc-tab__content desc-tab__info'>
          {item.info.map((chapter, idx) => (
            <ul className='desc-tab__info-list' key={idx}>
              <h4 className='desc-tab__info-title'>{chapter.title}</h4>
              {chapter.strings.map((item, i) => (
                <li key={i}className='desc-tab__info-text'>{item.string}</li>
              ))}
            </ul>
          ))}
        </div>
      )}

{item.url && (  
     <div className='desc-tab__map' onClick={()=> setFrameStyle({"pointerEvents": "auto"})}>
            <iframe
            src={(boat === 'Фавор' ? item.url[0] : (boat === 'Sea Ray 230' ? item.url[1] : (boat === 'Регал' ? item.url[2] : '')))}
            width={frameWidth}
            height="280"
            frameBorder="0"                   
            style={frameStyle}
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
