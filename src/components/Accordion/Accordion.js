import React, { useState } from "react";
import Panel from "./Panel";
import CallMe from "../CallMe/CallMe";
import Button from "../Button/Button";
import pricebg from "../../images/pricebg.png";
import boatbg from "../../images/btngrungebg.png";
import "./Accordion.css";

function Accordion(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const { panels, type, onPhotoClick, windowWidth } = props;
  const isMobile = windowWidth < 500;

  const sum = panels.length;
  const openedWidth = windowWidth > 500 ? windowWidth / 2 + 300 : windowWidth;
  const closedWidth = openedWidth / sum - 150;
  const galeryCount = windowWidth > 500 ? 4 : sum;
  const [accordionTouchPosition, setAccordionTouchPosition] = useState(null);
  const [photoTouchPosition, setPhotoTouchPosition] = useState(null);

  const sliderWidth =
    type === "slider" ? { width: `${openedWidth - 20}px` } : {};

  const activateTab = (index) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  const next = () => {
    if (activeTab < 2) {
      setActiveTab((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (activeTab > 0) {
      setActiveTab((prevState) => prevState - 1);
    }
  };

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

    if (diff > 3) {
      next();
    }

    if (diff < -3) {
      prev();
    }

    setAccordionTouchPosition(null);
  };

  const nextPhoto = () => {
    if (activeTab < 3) {
      setActivePhoto((prevState) => prevState + 1);
    }
  };

  const prevPhoto = () => {
    if (activeTab > 0) {
      setActivePhoto((prevState) => prevState - 1);
    }
  };


  return (
    <div
      className={`accordion-wrapper ${
        type === "slider" ? "accordion-wrapper__type_slider" : ""
      }`}
      onTouchStart={handleAccordionTouchStart}
      onTouchMove={handleAccordionTouchMove}
    >
      <div
        className={`accordion ${
          type === "slider" ? "accordion__type_slider" : ""
        }`}
        role="tablist"
        style={
          type === "slider"
            ? {
                transform: `translateX(-${openedWidth * activeTab}px)`,
              }
            : {}
        }
      >
        {panels.map((panel, index) => (
          <React.Fragment key={index}>
            {windowWidth > 500 && (
              <Panel
                activeTab={activeTab}
                index={index}
                orientation={type}
                openedWidth={openedWidth}
                closedWidth={closedWidth}
                length={sum}
                {...panel}
                activateTab={() => activateTab(index)}
              />
            )}

            <div
              className={`panel__content-wrapper  ${
                type === "slider" ? "panel__content-wrapper_slider" : ""
              }`}
              style={{
                opacity: `${
                  activeTab === index || type === "slider" ? `1` : `0`
                }`,
                "--color": `${panel.text_color}`,
                transform: `${
                  type === "slider"
                    ? ``
                    : `translateX(${activeTab * closedWidth}px)`
                }`,

                width: `${openedWidth}px`,
                "--boat-img": `url(${panel.imgurl})`,
              }}
              aria-expanded={activeTab === index}
            >
              <h2
                className={`h2 panel__subtitle ${
                  type === "horizosntal" ? "panel__subtitle_disable" : ""
                }`}
              >
                {panel.title}
              </h2>
              <h3
                className={`h3 panel__subtitle_span ${
                  type === "horizosntal" ? "panel__subtitle_disable" : ""
                }`}
                style={{ color: `${panel.text_color}` }}
              >
                {panel.subtitle}
              </h3>
              <div
                className={`panel__content  ${
                  type === "slider" ? "panel__content_slider" : ""
                }`}
                style={sliderWidth}
              >
                {windowWidth > 500 && (
                  <div
                    className="panel__photos"
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
                        className="panel__photo"
                        key={i}
                      />
                    ))}
                  </div>
                )}
                <div className="panel__description-wrapper">
                  <h2
                    className={`panel__content-title ${
                      type === "horizontal" ? "" : ""
                    }`}
                    style={{
                      "--title-bg": `url(${boatbg})`,
                    }}
                  >
                    {panel.content_title}
                  </h2>
                  {isMobile && (
                    <div className="panel__label-icons">
                      {panel.icons.map((ico, i) => (
                        <img
                          key={i}
                          src={ico.img}
                          className="panel__label-ico"
                        />
                      ))}
                    </div>
                  )}
                  <p
                    className={`panel__description ${
                      type === "horizontal"
                        ? "panel__description_horizontal"
                        : ""
                    }`}
                  >
                    {panel.content}
                  </p>
                </div>
                {isMobile && (
                  <div
                    className="panel__photos-wrapper"
                    style={{
                      width: `${openedWidth*0.95}px`,
                    }}

                  >
                    <div
                      className="panel__photos"
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
                          className="panel__photo"
                          key={i}
                          style={{
                            "--photo-width": `${openedWidth}px`,                            
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {panel.include && (
                  <div className="panel__include">
                    {panel.include.map((pos, i) =>
                      pos.url ? (
                        <a
                          className="panel__include-item panel__include-link"
                          href={pos.url}
                          target="_blank"
                          key={i}
                        >
                          <div className="panel__include-ico-wrapper">
                            <img src={pos.ico} className="panel__include-ico" />
                          </div>
                          <div className="">
                            <p className="panel__include-info">{pos.name}</p>
                            <p className="panel__map-link">на карте</p>
                          </div>
                        </a>
                      ) : (
                        <div className="panel__include-item" key={i}>
                          <div className="panel__include-ico-wrapper">
                            <img src={pos.ico} className="panel__include-ico" />
                          </div>
                          <p className="panel__include-info">{pos.name}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
                {panel.info && (
                  <div className="panel__info">
                    <h4 className="panel__info-title">{panel.info.title}</h4>
                    <ul className="panel__info-list">
                      {panel.info.strings.map((item, i) => (
                        <li className="panel__info-item" key={i}>
                          {item.string}
                        </li>
                      ))}
                    </ul>
                    <div className="panel__callme">
                      <CallMe />
                    </div>
                  </div>
                )}
                <div
                  className="panel__prices"
                  style={{ "--pricebg": `url(${pricebg})` }}
                >
                  <table className="panel-table">
                    <tbody>
                      {panel.prices.map((price, i) => (
                        <tr className="panel-table__string" key={i}>
                          <td className="panel-table__name">{price.name}</td>
                          <td
                            className="panel-table__value"
                            style={{ color: `${panel.text_color}` }}
                          >
                            {price.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p
                    className="panel__prices-discount"
                    style={{ color: `${panel.text_color}` }}
                  >
                    Скидка 10% при аренде от 3х часов
                  </p>
                  <Button name="Забронировать" bg={panel.color} />
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
