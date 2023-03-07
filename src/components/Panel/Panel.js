import React from "react";

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
              }`}
            >
              {label}
            </h3>
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;
