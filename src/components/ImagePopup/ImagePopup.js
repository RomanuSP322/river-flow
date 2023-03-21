import React, { useState, useEffect } from 'react';
import './ImagePopup.css'

function reduceImageSize(images) {
  return Promise.all(
    images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width / 4;
          canvas.height = img.height / 4;
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
  console.log(props)

  useEffect(() => {
    const photos = props.card.photos;
    setImages(photos)
  }, [props]);

  useEffect(() => {
    reduceImageSize(images).then((newImages) => {
      setReducedImages(newImages);
    });
  }, [images]);

  return (
    <div className={`popup image-popup ${props.card.title !== '' && 'popup_is-opened'}`}  onClick={(e) => (e.currentTarget === e.target) && props.onClose()} >
      {props.card.title !== '' &&
      <div className="popup__image-container">
        <button type="button" className="popup__close-button" onClick={props.onClose} />  
        <img src={images[1]} alt="Картинка Места" className="popup__image" draggable="false" />
        {reducedImages.map((image) => (
        <img src={image.reduced} alt="reduced image" className="popup__image"/>
      ))}   
        <h2 className="popup__image-title" draggable="false" >{props.card.title} <br></br><br></br>{props.card.title}</h2>     
      </div>
}
    </div>
  )
}

export default ImagePopup;