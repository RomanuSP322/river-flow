import React from "react";
import linegrunge from "../../images/grungeline.png"
import Button from "../Button/Button";

class Panel extends React.Component {
  render() {
    const {
      label,
      text_color,
      activeTab,
      index,
      activateTab,
      imgurl,
      openedWidth,
      closedWidth,
      orientation,
      length,
      icons,
      color
    } = this.props;

    const isActive = activeTab === index;

    const innerStyleV = {
      width: `${isActive ? `${openedWidth}px` : `${closedWidth}px`}`,
      backgroundImage: `url(${imgurl})`,
      color: text_color,
    };
    const innerStyleH = {
      height: `${isActive ? `${500}px` : `200px`}`,
      backgroundImage: `url(${imgurl})`,
      color: text_color,
    };

    return (
      <div
        className={`panel ${orientation === "horizontal" ? "" : ""} ${
          index === length - 1 ? "" : "panel__border"
        }`}
        style={{ "--line": `url(${linegrunge})`, "--color": `${text_color}` }}
        aria-expanded={isActive}
      >
        <div
          className={`panel__inner ${
            orientation === "horizontal" ? "panel__inner_horizontal" : ""
          }`}
          style={orientation === "horizontal" ? innerStyleH : innerStyleV}
          aria-hidden={!isActive}
        >
          <button
            className={`panel__label ${
              orientation === "horizontal" ? "panel__label_horizontal" : ""
            }`}
            role="tab"
            onClick={activateTab}
          >
            <h3
              className={`panel__title ${
                orientation === "horizontal" ? "panel__title_horizontal" : ""                
              } ${
                isActive ? "" : "panel__title_active"                
              }`}
              style={{       
                color: `${text_color}`}}
            >
              {label}
            </h3>
            <div className="panel__label-icons">
                  {icons.map((ico, i) => (
                    <img src={ico.img} className="panel__label-icon" />
                  ))}
                </div>
                <div className="panel__button">
                <Button bg={color} name='Подробнее' width="140" height='50'  />
                </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;
