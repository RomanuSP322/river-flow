import React from "react";
import PriceTabs from "../PriceTabs/PriceTabs";
import "./Events.css";

function Event({ item }) {
  return (
    <div className="slider-item" key={item.id}>
      <div
        className="slider-item__columns noselect"
        style={{
          width: `${}px`,
        }}
      >
        <div className="slider-item__clumn_left">
          <img
            src={item.img}
            alt={item.title}
            className="slider-item__img noselect"
          />
        </div>

        <div className="slider-item__clumn_right">
          <div className="slider-item__section">

          </div>
          <p className="p slider-item__description">{item.description}</p>
          {item.include && (
            <div className="slider-item__include">
              {item.include.map((pos, i) => (
                <div className={`slider-item__include-item`} key={i} >
                  <div className="slider-item__include-ico-wrapper">
                    <img src={pos.ico} className="slider-item__include-ico" />
                  </div>
                  <p className="slider-item__include-info">{pos.name}</p>
                </div>
              ))}
            </div>
          )}
           <PriceTabs />
        </div>
      </div>
    </div>
  );
}

const Events = ({ events }) => {
  const [cur, setCur] = React.useState(0);



  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = events.length - 1;
    } else if (newIndex >= events.length) {
      newIndex = 0;
    }

    setCur(newIndex);
  };



  return (
    <section className="events">
      {!events || events.length === 0 ? null : (
        <>
          <h2 className="events__title">Катер на</h2>

          {events.map((event, idx) => {
            return (
              <event
                classy={idx === cur ? "event event_active" : "event"}
                key={idx}
                {...event}
                
              />
            );
          })}

          <div className="events__indicators">
            {events.map((event, index) => {
              return (
                <button
                  key={index}
                  className={`events__indicator ${
                    index === cur ? "events__indicator_active" : ""
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}          
                >          
                  <p className="event__title">{event.title}</p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Events;
