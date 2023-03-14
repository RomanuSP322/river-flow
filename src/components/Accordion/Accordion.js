import React from "react";
import Panel from "../Panel/Panel";
import CallMe from "../CallMe/CallMe";
import Button from "../Button/Button";
import pricebg from "../../images/pricebg.png";
import "./Accordion.css";



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
    const openedWidth = document.body.clientWidth / 2 + 300;
    const closedWidth = openedWidth / sum - 140;

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
              className={`panel__content-wrapper  ${
                type === "horizontal" ? "panel__content-wrapper_horizontal" : ""
              }`}
              style={{
                opacity: `${activeTab === index ? `1` : `0`}`,
                "--color": `${panel.text_color}`,
                transform: `${
                  type === "horizontal"
                    ? `translateY(${activeTab * 200}px)`
                    : `translateX(${activeTab * closedWidth}px)`
                }`,
                width: `${openedWidth - 100}px`,
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
              <div className="panel__content">
                <div className="panel__photos">
                  {panel.photos.map((photo, i) => (
                    <img src={photo.img} className="panel__photo" />
                  ))}
                </div>
                <div className="panel__description-wrapper">
                  <h2
                    className={`panel__content-title ${
                      type === "horizontal" ? "" : ""
                    }`}
                  >
                    {panel.content_title}
                  </h2>

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

                {panel.include && (
                  <div className="panel__include">
                    {panel.include.map((pos) =>
                      pos.url ? (
                        <a className="panel__include-item panel__include-link" href={pos.url} target='_blank'>                          
                          <div className="panel__include-ico-wrapper">
                            <img src={pos.ico} className="panel__include-ico" />
                          </div>
                          <div className="">
                          <p className="panel__include-info">{pos.name}</p>
                          <p className="panel__map-link">на карте</p>
                          </div>
                        </a>
                      ) : (
                        <div className="panel__include-item">              
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
                      {panel.info.strings.map((item) => (
                        <li className="panel__info-item">{item.string}</li>
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
    );
  }
}

export default Accordion;
