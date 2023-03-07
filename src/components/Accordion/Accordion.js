import React from "react";
import Panel from "../Panel/Panel";
import "./Accordion.css";

// {` ${type === 'horizontal' ? '' : ''}`}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { panels } = this.props;
    const { type } = this.props;
    const { activeTab } = this.state;
    const sum = panels.length;
    const openedWidth = document.body.clientWidth / 2 + 50;
    const closedWidth = openedWidth / sum + 20;

    return (
      <div
        className={`accordion ${
          type === "horizontal" ? "accordion__type_horizontal" : ""
        }`}
        role="tablist"
      >
        {panels.map((panel, index) => (
          <React.Fragment key={index}>
            <Panel
              activeTab={activeTab}
              index={index}
              orientation={type}
              openedWidth={openedWidth}
              closedWidth={closedWidth}
              length={sum}
              {...panel}
              activateTab={this.activateTab.bind(null, index)}
            />
            <div
              className={`panel__content-wrapper ${
                type === "horizontal" ? "panel__content-wrapper_horizontal" : ""
              }`}
              style={{
                opacity: `${activeTab === index ? `1` : `0`}`,
                color: `${panel.text_color}`,
                transform: `${
                  type === "horizontal"
                    ? `translateY(${activeTab * 200}px)`
                    : `translateX(${activeTab * closedWidth}px)`
                }`,
              }}
            >
              <h2
                className={`panel__subtitle ${
                  type === "horizosntal" ? "panel__subtitle_disable" : ""
                }`}
              >
                {panel.subtitle}
              </h2>
              <h2
                className={`panel__content-title ${
                  type === "horizontal" ? "" : ""
                }`}
              >
                {panel.content_title}
              </h2>
              <p
                className={`panel__content ${
                  type === "horizontal" ? "panel__content_horizontal" : ""
                }`}
              >
                {panel.content}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Accordion;
