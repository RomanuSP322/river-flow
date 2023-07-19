import React, { useState, useEffect } from 'react';
import Panel from './Panel';
import Geo from '../Geo/Geo';
import CallMe from '../CallMe/CallMe';
import Button from '../Button/Button';
import TypeWriter from '../TypeWriter/TypeWriter';
import pricebg from '../../images/pricebg.webp';
import boatbg from '../../images/btngrungebg.webp';
import './Accordion.css';

function Accordion(props) {
  const { panels, type, onPhotoClick} = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 900;
  const [activeTab, setActiveTab] = useState(isMobile ? 0 : 0);
  const [activePhoto, setActivePhoto] = useState(0);
  const [more, setMore] = useState(true);
  const [space, setSpace] = useState(isMobile ? 30 : 0);
  const sum = 4;
  const [openedWidth, setOpenedWidth] = useState(
    windowWidth > 1920 ? 1350 : windowWidth > 900 ? windowWidth / 2 + 300 : windowWidth - space
  );
  const [closedWidth, setClosedWidth] = useState(openedWidth / sum - 150);
  const galeryCount = windowWidth > 900 ? 4 : 4;
  const [accordionTouchPosition, setAccordionTouchPosition] = useState(null);

  let photoStyle = {'--photo-width': `${openedWidth - 10}px`};

  const staticText = ['Для'];
  const words = ['прогулок', 'вейксерфинга', 'праздника', 'вейкбординга', 'вечеринки'];

  const sliderWidth =
    type === 'slider' ? { width: `${openedWidth - 10}px` } : {};

  const activateTab = (index) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  const next = () => {
    if (activeTab < 3) {
      setActiveTab((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (activeTab > 0) {
      setActiveTab((prevState) => prevState - 1);
    
    }
  };

  const toggleMore = ()=> {
    setMore(!more);
  }

  const handleAccordionTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setAccordionTouchPosition(touchDown);
  };

  const handleAccordionTouchMove = (e) => {
    const touchDown = accordionTouchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 8) {
      next();
    }

    if (diff < -8) {
      prev();
    }

    setAccordionTouchPosition(null);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSpace((prevState) => (prevState !== 0 ? 0 : prevState));
      setOpenedWidth(windowWidth - space);
      setMore(false)
    }
  }, [activeTab]);

  useEffect(() => {    
    setOpenedWidth(windowWidth > 1920 ? 1350 :windowWidth > 900 ? windowWidth / 2 + 300 : windowWidth - space);
  }, [windowWidth]);



  return (
    <div
      className={`accordion-wrapper ${
        type === 'slider' ? 'accordion-wrapper__type_slider' : ''
      }`}
      onTouchStart={handleAccordionTouchStart}
      onTouchMove={handleAccordionTouchMove}
      id='boatrent'
    >
      {' '}
      { ( <div className='panel__mobile-nav-wrapper'>
        <div className='panel__desc'>
        <h2 className='h2'>Аренда Катеров</h2>
        <TypeWriter staticText={staticText} words={words}/>
        <p className='p panel__mobile_about'>
        Наш флот скоростных катеров позволит насладиться живописной прогулкой или вейкбордингом, вейксерфингом и водными лыжами. Каждый катер оснащен отопителем салона и ветровым тентом, а все спортивное снаряжение уже включено в стоимость аренды. 
<br></br><br></br>
</p>
</div>

<div className='panel__mobile-nav'>
            {panels.slice(0, 4).map((panel, index) => (
              <div key={index} className={`panel__mobile-nav_item  ${
                activeTab === index ? 'panel__mobile-nav_item_active' : ''}`} onClick={()=> activateTab(index)}        style={{
                    '--color': `${panel.text_color}`,
                  }}>
                <h3
                  className='panel__mobile-title'
           
                >
                  {panel.label}
                </h3>
                <img src={panel.imgurl} className='panel__mobile-nav_image'/>
                <div className='panel__label-icons panel__nav-icons'>
                  {panel.icons.map((ico, i) => (
                    <img key={i} src={ico.img} className='panel__label-ico panel__nav-icon' />
                  ))}
                </div>
                <p className='panel__mobile-nav_price'>от {windowWidth < 430 &&<br></br>} {panel.prices.find(price => price.name === 'Будни').value}</p>
              </div>
            ))}
          </div>
          </div>
        )}

      <div
        className={`accordion ${
          type === 'slider' ? 'accordion__type_slider' : ''
        }`}
        role='tablist'
        style={
          type === 'slider'
            ? {
                transform: `translateX(-${
                  (windowWidth - space) * activeTab
                }px)`,
              }
            : {}
        }
      >
      
        {panels.slice(0, 4).map((panel, index) => (
          <React.Fragment key={index}>
            {!isMobile && (
              <Panel
                activeTab={activeTab}
                index={index}
                orientation={type}
                openedWidth={openedWidth}
                closedWidth={closedWidth}
                length={sum}
                onContactClick={props.onContactClick}
                {...panel}
                activateTab={() => activateTab(index)}
              />
            )}

            <div
              className={`panel__content-wrapper  ${
                type === 'slider' ? 'panel__content-wrapper_slider ' : ''
              }`}
              style={{
                opacity: `${
                  activeTab === index || type === 'slider' ? `1` : `0`
                }`,
                '--color': `${panel.text_color}`,
                transform: `${
                  type === 'slider'
                    ? ``
                    : `translateX(${activeTab * closedWidth}px)`
                }`,
                width: `${openedWidth}px`,
                '--boat-img': `url(${panel.imgurl})`,
              }}
              aria-expanded={activeTab === index}
            >
    
              <div
                className={`panel__content  ${
                  type === 'slider' ? 'panel__content_slider' : ''
                }`}
                style={sliderWidth}
              >
                {!isMobile && (
                  <div
                    className='panel__photos'
                    onClick={() =>
                      onPhotoClick({
                        title: panel.label,
                        photos: panel.photos,
                        color: panel.text_color,
                      })
                    }
                  >
                    {panel.photos.slice(0, galeryCount).map((photo, i) => (
                      <img
                        src={photo}
                        alt={panel.label}
                        className='panel__photo'
                        key={i}
                      />
                    ))}
                  </div>
                )}
                <div className='panel__description-wrapper'>
                  <h2
                    className={`panel__content-title ${
                      type === 'horizontal' ? '' : ''
                    }`}
                    style={{
                      '--title-bg': `url(${boatbg})`,
                    }}
                  >
                    {panel.content_title}
                  </h2>
                  {/* {isMobile && <h3
                className={`panel__subtitle_span ${
                  type === 'horizosntal' ? 'panel__subtitle_disable' : ''
                }`}
                
              >
                {panel.subtitle}
              </h3>} */}
                  {isMobile && (
                    <div
                      className='panel__photos-wrapper'
                      style={{
                        width: `${openedWidth * 0.95}px`,
                      }}
                    >
                                   
                                   <svg xmlns="http://www.w3.org/2000/svg" onClick={() =>
                          onPhotoClick({
                            title: panel.label,
                            photos: panel.photos,
                            color: panel.text_color,
                          })
                        }  width='20px' className='panel__scale'   version="1.1" viewBox="0 0 40.6 40.6"><path fill={panel.text_color} d="M30.3 40.6h-3.9c-.2 0-.4-.1-.5-.1-2.1-.1-3.8-1.7-4-3.8-.3-3.6-.3-7.2 0-10.9.1-2 1.6-3.6 3.6-3.9.8-.1 1.5-.2 2.3-.2 3-.1 6-.2 9 .1 1.8.2 3.3 1.6 3.6 3.4.1.6.1 1.2.1 1.9.1 2.9-.1 5.8-.5 8.7-.3 2.1-1.9 3.9-4 4.3-1.2.2-2.5.3-3.8.4-.6 0-1.2.1-1.9.1zM14.1 40.6h-3.8c-.1 0-.2 0-.3-.1-1.7-.1-3.4-.3-5.1-.4-2.2-.2-4-1.9-4.4-4.1-.2-1.2-.3-2.4-.4-3.7 0-.6-.1-1.3-.1-2v-3.8c0-.2.1-.4.1-.7 0-1.1.5-2 1.3-2.8.9-.9 2.1-1.2 3.3-1.2 3.3-.2 6.7-.2 10 .1 2 .1 3.7 1.6 4 3.6.1.8.2 1.5.2 2.3.1 3 .2 6-.1 9-.2 1.8-1.6 3.4-3.4 3.7-.5 0-.9.1-1.3.1zM0 14.2v-3.9c0-.1 0-.3.1-.4.1-1.7.3-3.3.4-5C.7 2.6 2.6.8 4.8.5c3.3-.4 6.7-.6 10-.4 1 .1 1.8.4 2.5 1.1 1 1 1.4 2.2 1.4 3.5.1 3.3.2 6.6-.1 9.9-.1 2.1-1.6 3.7-3.6 4.1-.7.1-1.5.1-2.2.2-3 .1-6 .2-9-.1C2 18.6.4 17.2.1 15.4c0-.5-.1-.8-.1-1.2zM31.2 18.9c-1.6-.1-3.4-.1-5.3-.2-2.1-.1-3.8-1.8-4-3.9-.3-3.6-.3-7.3 0-10.9.2-2.1 1.9-3.7 4-3.8 3.3-.2 6.6 0 9.8.4 2.3.3 4.1 2.1 4.4 4.4.4 2.9.5 5.9.5 8.8 0 .6 0 1.1-.1 1.7-.3 1.8-1.8 3.2-3.7 3.4-.2 0-.5.1-.8.1-1.5-.1-3 0-4.8 0z"/></svg>
                      <div
                        className='panel__photos'
                        style={{
                          transform: `${`translateX(-${
                            activePhoto * openedWidth
                          }px)`}`,
                        }}
                        onClick={() =>
                          onPhotoClick({
                            title: panel.label,
                            photos: panel.photos,
                            color: panel.text_color,
                          })
                        }
                      >
                        
                        {panel.photos.slice(0, galeryCount).map((photo, i) => (
                          <img
                            src={photo}
                            alt={panel.label}
                            className='panel__photo'
                            key={i}
                            style={photoStyle}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <p
                    className={`panel__description ${
                      type === 'horizontal'
                        ? 'panel__description_horizontal'
                        : ''
                    }`}
                  >
                    {panel.content}
                  </p>
                </div>                
                {isMobile && !more && (<Button name='О катере'
                    bg={panel.color}
                    width={150}
                    height={45}
                    action={toggleMore}                 
                    />)}
                 {more && (
                  <div className='panel__include'>
                    {panel.include.map((pos, i) =>
                      pos.url ? (
                        <a
                          className='panel__include-item panel__include-link'
                          href={pos.url}
                          target='_blank'
                          key={i}
                        >
                          <div className='panel__include-ico-wrapper'>
                            <Geo color={panel.text_color}/>
                          </div>
                          <div className=''>
                            <p className='panel__include-info'>{pos.name}</p>
                            <p className='panel__map-link'>на карте</p>
                          </div>
                        </a>
                      ) : (
                        <div className='panel__include-item' key={i}>
                          <div className='panel__include-ico-wrapper'>
                            <img src={pos.ico} className='panel__include-ico' />
                          </div>
                          <p className='panel__include-info'>{pos.name}</p>
                        </div>
                      )
                    )}
                  </div>
              )}
                {more && (
                  <div className='panel__info'>
                    <h4 className='panel__info-title'>{panel.info.title}</h4>
                    <ul className='panel__info-list'>
                      {panel.info.strings.map((item, i) => (
                        <li className='panel__info-item' key={i}>
                          {item.string}
                        </li>
                      ))}
                    </ul>
                    {!isMobile && (
                      <div className='panel__callme'>
                        <CallMe bg={true} />
                      </div>
                    )}
                  </div>
                
                )}
              
                <div
                  className='panel__prices'
                  style={{ '--pricebg': `url(${pricebg})` }}
                >
                  <table className='panel-table'>
                    <tbody>
                      {panel.prices.map((price, i) => (
                        <tr className='panel-table__string' key={i}>
                          <td className='panel-table__name'>{price.name}</td>
                          <td
                            className='panel-table__value'
                            style={{ color: `${panel.text_color}` }}
                          >
                            {price.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p
                    className='panel__prices-discount'
                    style={{ color: `${panel.text_color}` }}
                  >
                    Скидки при аренде свыше 3х часов
                  </p>
                  <Button
                    name='Забронировать'
                    bg={panel.color}
                    action={props.onContactClick}                 
                    url={panel.url}
                    width={220}
                  />
                </div>
                {isMobile && (
                  <div className='panel__callme'>
                    <CallMe bg={true} />
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
