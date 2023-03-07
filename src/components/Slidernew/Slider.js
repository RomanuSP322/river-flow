import React, { useEffect } from "react";
import "./Slider.css";

const Slide = ({
  classy,
  title_first,
  subtitle_first,
  title_second,
  subtitle_second,
  title_third,
  subtitle_third,
  image,
}) => (
    <div className={classy}>
      <div className="" >
        <img src={image} alt="img" className="slide__image" draggable="false" />
        <div className="">
          <h3 className="">{title}</h3>
          <p className="">{description}</p>
          <button className="">Подробнее</button>
        </div>
      </div>
    </div>
  
);

const Slider = ({ slides }) => {
  const [cur, setCur] = React.useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setCur(newIndex);
  };

  const nextMoving = () => {
    if (cur >= slides.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };
  const prevMoving = () => {
    if (cur <= 0) {
      setCur(slides.length - 1);
    } else {
      setCur(cur - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(cur + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <section className="slider">
      {!slides || slides.length === 0 ? null : (
        <>
          <div className="indicators">
            {slides.map((slide, index) => {
              return (
                <button
                  className={`indicator ${
                    index === cur ? "indicator_active" : ""
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <p className="indicator__title">{slide.indicator}</p>
                </button>
              );
            })}
          </div>
          {slides.map((slide, idx) => {
            return (
              <Slide
                classy={idx === cur ? "slide active" : "slide"}
                key={idx}
                {...slide}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default Slider;
