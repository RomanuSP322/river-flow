import React, {useState } from "react";
import "./Slider.css";
import arrowLeft from "../../images/arrow-left.png";
import arrowRight from "../../images/arrow-right.png";
import pricebgLine from "../../images/pricebg-line.png";
import Button from "../Button/Button";

function Slider({ data }) {
  const [visibleTab, setVisibleTab] = useState(0);
  const windowWidth = document.body.clientWidth;
  const isMobile = windowWidth < 500;
  const slideWidth = isMobile ? windowWidth - 40 : 1150;
  const openedWidth = !isMobile ? windowWidth / 2 - slideWidth / 2 : 0;
  const [isDragging, setIsDragging] = useState(false);
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

  const handleClickStart = (e) => {
    const touchDown = e.clientX;
    setTouchPosition(touchDown);
    setIsDragging(true);
    setTransition(0);
  };

  const handleMouseUp = (event) => {
    setIsDragging(false);
    setTransition(0.4);
    setPosX(visibleTab * slideWidth);
  };

  const handleMouseEnter = (event) => {
    setTransition(0);
  };

  const handleClickMove = (e) => {
    if (isDragging) {
      const touchDown = touchPosition;
      if (touchDown === null) {
        return;
      }
      const currentTouch = e.clientX;
      const diff = touchDown - currentTouch;
      const newPosX = posX + diff * 1.5;

      if (newPosX > 0 && newPosX < length * slideWidth) {
        setPosX(newPosX);
        setTouchPosition(e.clientX);
        setVisibleTab(Math.round(newPosX / slideWidth));
      }
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
    key={item.id}
      onClick={() => {
        setPosX(item.id * slideWidth);
        setVisibleTab(item.id);
        setTransition(0.6);
      }}
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
    <div className="slider-item" key={item.id}>
      <div
        className="slider-item__columns noselect"
        style={{
          width: `${slideWidth}px`,
        }}
      >
        <div className="slider-item__clumn_left">
          <img
            src={item.img}
            alt={item.title}
            className="slider-item__img noselect"
          />
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
              {item.include.map((pos, i) => (
                <div className="slider-item__include-item" key={i}>
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
          onMouseUp={handleMouseUp}
          onMouseEnter={handleMouseEnter}
          className="slider-item__content-wrapper"
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
        <div className="slider__buttons">
          <button
            className="slider__button slider__button_left "
            onClick={() => {
              prev();
              setTransition(0.6);
            }}
            disabled={visibleTab === 0}
          >
            <img
              src={arrowLeft}
              alt="grunge arrow"
              className={`slider__button-img ${
                visibleTab === 0 && "slider__button-img__inactive"
              }`}
            />
          </button>
          <button
            className="slider__button slider__button_right"
            onClick={() => {
              next();
              setTransition(0.6);
            }}
            disabled={visibleTab === length}
          >
            <img
              src={arrowRight}
              alt="grunge arrow"
              className={`slider__button-img ${
                visibleTab === length && "slider__button-img__inactive"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
