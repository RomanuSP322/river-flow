import React, { useState, useRef } from 'react';

const Slider = ({ slides }) => {
  const [posX, setPosX] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef(null);
  
  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const newPosX = event.clientX - sliderRect.left;
    const maxPosX = sliderRect.width - sliderWidth;
    
    if (newPosX >= 0 && newPosX <= maxPosX) {
      setPosX(newPosX);
    }
  };
  
  const handleMouseUp = (event) => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  const handleSliderRef = (element) => {
    if (element !== null) {
      setSliderWidth(element.getBoundingClientRect().width);
    }
    sliderRef.current = element;
  };
  
  return (
    <div className="slider-container">
      <div className="slider" ref={handleSliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ transform: `translateX(-${posX}px)` }}>
            {slide}
          </div>
        ))}
      </div>
      <div className="slider-bar" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Slider;