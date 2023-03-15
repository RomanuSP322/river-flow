import React, { useEffect, useState } from "react";
import "./Slider.css";
import arrowLeft from '../../images/arrow-left.png';
import arrowRight from '../../images/arrow-right.png';
import pricebgLine from "../../images/pricebg-line.png";
import Button from "../Button/Button";

function Slider({ data }) {
  const [visibleTab, setVisibleTab] = useState(0);
  const openedWidth = document.body.clientWidth / 2 - 1150 / 2;

  const [touchPosition, setTouchPosition] = useState(0);
  
  const length = data.length-1;

  const next = () => {
    if (visibleTab < length) {
      setVisibleTab((prevState) => prevState + 1);
    }

  };

  const prev = () => {
    if (visibleTab > 0) {
      setVisibleTab((prevState) => prevState - 1);
    }
  };
  

  const handleClickStart = (e) => {
    const touchDown = e.pageX;
    setTouchPosition(touchDown);    
  };


  const handleClickMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.pageX;
    const diff = touchDown - currentTouch;
 
    if (diff > 2) {
      next();

    }

    if (diff < -2) {
      prev();
    }

    setTouchPosition(null);
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

    if (diff > 5) {
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
      className={
        visibleTab === item.id
          ? "slider__title slider__title_active"
          : "slider__title"
      }
    >
      {item.title}
    </li>
  ));

  const listContent = data.map((item) => (
    <div className="slider-item">
      <div className="slider-item__columns noselect">
        <div className="slider-item__clumn_left">
          <img src={item.img} alt={item.title} className="slider-item__img noselect" />
          <div className="slider-item__btn">
            <Button name="Забронировать" width="200" height="50" />
          </div>
        </div>

        <div className="slider-item__clumn_right">
          <div className="slider-item__section">
            <p className="slider-item__title">{item.title}</p>
            <p
              className="slider-item__price"
              style={{ "--pricebg-line": `url(${pricebgLine})` }}
            >
              <span className="slider-item__price-span">Цена</span> {item.price}
            </p>
          </div>
          <p className="p slider-item__description">{item.description}</p>
          {item.include && (
            <div className="slider-item__include">
              {item.include.map((pos) => (
                <div className="slider-item__include-item">
                  <div className="slider-item__include-ico-wrapper">
                    <img src={pos.ico} className="slider-item__include-ico" />
                  </div>
                  <p className="slider-item__include-info">{pos.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="slider">
      <ul className="slider__titles">{listTitles}</ul>

      <div className="slider__content">
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove} 

          onMouseDown={handleClickStart}   
     
          onMouseMove={handleClickMove}
         
          className="slider-item__content-wrapper"
          style={{ 
            transform: `translateX(${visibleTab * -1150 + openedWidth }px)`,
          }}
        >
          {listContent}
        </div>
        <div className='slider__buttons'>
        <button className='slider__button slider__button_left ' onClick={prev}><img src={arrowLeft} alt="grunge arrow" className={`slider__button-img ${visibleTab === 0 && 'slider__button-img__inactive'}`}/></button>
        <button className='slider__button slider__button_right' onClick={next}><img src={arrowRight} alt="grunge arrow" className={`slider__button-img ${visibleTab === length && 'slider__button-img__inactive'}`}/></button>        
        </div>
       
      </div>
    </div>
  );
}

export default Slider;
