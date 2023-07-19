import React, { useState } from 'react';
import './Slider.css';
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import pricebgLine from '../../images/pricebg-line.png';
import Button from '../Button/Button';
import CallMe from '../CallMe/CallMe';

function Slider({ data, panels, onPhotoClick, onContactClick }) {
  const [visibleTab, setVisibleTab] = useState(0);
  const windowWidth = document.body.clientWidth;
  const isMobile = windowWidth < 500;
  const slideWidth = isMobile ? windowWidth - 40 : 1150;
  const openedWidth = !isMobile ? windowWidth / 2 - slideWidth / 2 : 0;

  const [touchPosition, setTouchPosition] = useState(0);
  const [transition, setTransition] = useState(0);
  const length = data.length - 1;
  const [posX, setPosX] = useState(0);

  const next = () => {
    if (visibleTab < length) {
      setVisibleTab((prevState) => prevState + 1);
      setPosX((visibleTab + 1) * slideWidth);
    }
  };

  const prev = () => {
    if (visibleTab > 0) {
      setVisibleTab((prevState) => prevState - 1);
      setPosX((visibleTab - 1) * slideWidth);
    }
  };

  const handleTouchStart = (e) => {
    setTransition(0.4);
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

    if (diff > 6) {
      next();
    }

    if (diff < -6) {
      prev();
    }

    setTouchPosition(null);
  };

  const photoBoatHandler = (boat) => {
    const boatpanel = panels.find((panel) => panel.label === boat);

    onPhotoClick({
      title: boatpanel.label,
      photos: boatpanel.photos,
      color: boatpanel.text_color,
    });
  };

  const slideHandler = (item) => {
    onPhotoClick({
      title: item.title,
      photos: item.photos,
      color: '#0E2A36',
    });
  };

  const listTitles = data.map((item) => (
    <li
      key={item.id}
      onClick={() => {
        setPosX(item.id * slideWidth);
        setVisibleTab(item.id);
        setTransition(0.6);
      }}
      className={
        visibleTab === item.id
          ? 'slider__title slider__title_active'
          : 'slider__title'
      }
    >
      {item.title}
    </li>
  ));

  const listContent = data.map((item) => (
    <div
      className='slider-item'
      key={item.id}     
    >
      <div
        className='slider-item__columns noselect'
        style={{
          width: `${slideWidth}px`,
        }}
      >
        <div className='slider-item__clumn_left' onClick={item.photos ? () => slideHandler(item) : undefined}>
          <img
            src={item.img}
            alt={item.title}
            className='slider-item__img noselect'
          />
          <div className='slider-item__btn'>
            <Button
              name='Забронировать'
              width='200'
              height='50'
              action={(e) => {
                e.stopPropagation();
                onContactClick('Забронировать прогулку по телефону:')}
              }
            />
          </div>
        </div>

        <div className='slider-item__clumn_right'>
          <div className='slider-item__section'>
            <p className='slider-item__title'>{item.title}</p>
            <p
              className='slider-item__price slider-item__price_active'
              style={{ '--pricebg-line': `url(${pricebgLine})` }}
              onClick={() => onPhotoClick({
                title: item.price,
                photos: item.maps,
                
              })}
              title={
                item.id === 0
                  ? ''
                  : 'За указанную продолжительность. Можно изменить.'
              }
            >
               {item.price}
            </p>
          </div>
          <p className='p slider-item__description' onClick={item.photos ? () => slideHandler(item) : null}>{item.description}</p>
          {item.include && (
            <div className='slider-item__include'  onClick={item.photos ? () => slideHandler(item) : null}>
              {item.include.map((pos, i) => (
                <div
                  className={`slider-item__include-item ${
                    i === 0 && 'slider-item__boat-item'
                  }`}
                  key={i}
                  onClick={
                    i === 0 ? () => photoBoatHandler(item.boat) : null
                  }
                >
                  <div className='slider-item__include-ico-wrapper'>
                    <img src={pos.ico} className='slider-item__include-ico' />
                  </div>
                  <p className='slider-item__include-info'>{pos.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className='slider'>
      <ul className='slider__titles'>{listTitles}</ul>

      <div className='slider__content'>
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          className='slider-item__content-wrapper'
          // style={{
          //   transform: `translateX(${visibleTab * -slideWidth + openedWidth + diff}px)`,
          // }}
          style={{
            transform: `translateX(${openedWidth - posX}px)`,
            transition: `all ${transition}s cubic-bezier(0.65, 0, 0.076, 1)`,
          }}
        >
          {listContent}
        </div>
        <div className='slider__navigation'>
          <div className='slider__buttons'>
            <button
              className='slider__button slider__button_left '
              onClick={() => {
                prev();
                setTransition(0.6);
              }}
              disabled={visibleTab === 0}
            >
              <img
                src={arrowLeft}
                alt='grunge arrow'
                className={`slider__button-img ${
                  visibleTab === 0 && 'slider__button-img__inactive'
                }`}
              />
            </button>
            <button
              className='slider__button slider__button_right'
              onClick={() => {
                next();
                setTransition(0.6);
              }}
              disabled={visibleTab === length}
            >
              <img
                src={arrowRight}
                alt='grunge arrow'
                className={`slider__button-img ${
                  visibleTab === length && 'slider__button-img__inactive'
                }`}
              />
            </button>
          </div>
          <div className='slider__callme'>
            <CallMe bg={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
