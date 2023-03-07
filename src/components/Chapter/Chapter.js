import React from 'react';
import Button from '../Button/Button';
import './Chapter.css';

function Chapter({title, price, info, img, border, titlepos}) {
  return (
    <figure className=' chapter' style={{"border-radius": `${border}`}}>
    <img className='chapter-image'
      src={img}
      alt='img21'
    />
    <figcaption className='chapter-description'>
      <h2 className='chapter-title' style={{"--titlepos": `${titlepos}`}}>
       {title}
      </h2>
      <div className='chapter-info__wrapper'>
        <p className='chapter-info'>{price}</p>
        <p className='chapter-info'>{info}</p>           
      </div>
      <div className='chapter-btn'>
        <Button name="Подробнее"/>
        </div>     
    </figcaption>
  </figure>
  );
}

export default Chapter;


