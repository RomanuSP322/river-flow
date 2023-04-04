import React, { useState, useEffect } from 'react';
import arrowRight from '../../images/arrow-right.png';
import arrowLeft from '../../images/arrow-left.png';
import './ImagePopup.css';

function reduceImageSize(images) {
  return Promise.all(
    images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 70;
          canvas.height = 50;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL('image/png');
          resolve({ src: image, reduced: dataUrl });
        };
        img.src = image;
      });
    })
  );
}

function ImagePopup(props) {
  const [images, setImages] = useState([]);
  const [reducedImages, setReducedImages] = useState([]);
  const windowWidth = document.body.clientWidth;
  const isMobile = windowWidth < 900;
  const [currentImageIndex, setCurrentImageIndex] = useState(props.card.index);
  const [touchPosition, setTouchPosition] = useState(null);
  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handleClose = () => {
    props.onClose();
    setCurrentImageIndex(0);
    
  };

  const next = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevState) => prevState - 1);
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

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const photos = props.card.photos;
    setImages(photos);
  }, [props]);

  useEffect(() => {
    reduceImageSize(images).then((newImages) => {
      setReducedImages(newImages);
    });
  }, [images]);

  return (
    <div
      className={`popup image-popup ${
        props.card.title !== '' && 'popup_is-opened'
      }`}
      onClick={(e) => e.currentTarget === e.target && handleClose()}
      style={{
        '--color': `${props.card.color}`,
      }}
    >
      {props.title !== '' && (
        <div className='popup__image-container noselect'>
          <button
            type='button'
            className='popup__close-button'
            onClick={() => handleClose()}
          />
          <button
            type='button'
            className='popup__button popup__slider-button_prev'
            onClick={handlePrevClick}
            disabled={currentImageIndex === 0}
          >
            <img
              src={arrowLeft}
              alt='grunge arrow'
              className={`slider__button-img ${
                currentImageIndex === 0 && 'slider__button-img__inactive'
              }`}
            />
          </button>
          <button
            type='button'
            className='popup__button popup__slider-button_next'
            onClick={handleNextClick}
            disabled={currentImageIndex === images.length - 1}
          >
            <img
              src={arrowRight}
              alt='grunge arrow'
              className={`slider__button-img ${
                currentImageIndex === images.length - 1 &&
                'slider__button-img__inactive'
              }`}
            />
          </button>
          {isMobile &&        <p className='popup__image-counter'>
                  {currentImageIndex + 1}/{images.length}
                </p>}
          <div className='popup__slide '    onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>
     
            <h2 className='popup__image-title'>{props.card.title}</h2>
            
            <img
              src={images[currentImageIndex]}
              alt='Фото лодки'
              className='popup__image noselect'
              data-index={currentImageIndex}
            />

            {!isMobile && (
              <div className='popup__navigation'>
                <div className='popup__navbar'>
                  {reducedImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.reduced}
                      alt='reduced image'
                      className={`popup__nav-image ${
                        index === currentImageIndex
                          ? 'popup__nav-image_current'
                          : ''
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
                <p className='popup__image-counter'>
                  {currentImageIndex + 1}/{images.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;
