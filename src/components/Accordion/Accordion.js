import React from 'react';
import Panel from '../Panel/Panel';
import Button from '../Button/Button';
import './Accordion.css';

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
    const openedWidth = document.body.clientWidth / 2 + 300;
    const closedWidth = openedWidth / sum - 140;

    return (
      <div
        className={`accordion ${
          type === 'horizontal' ? 'accordion__type_horizontal' : ''
        }`}
        role='tablist'
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
                type === 'horizontal' ? 'panel__content-wrapper_horizontal' : ''
              }`}
              style={{
                opacity: `${activeTab === index ? `1` : `0`}`,
                color: `${panel.text_color}`,
                transform: `${
                  type === 'horizontal'
                    ? `translateY(${activeTab * 200}px)`
                    : `translateX(${activeTab * closedWidth}px)`
                }`,
              }}
              aria-expanded={activeTab === index}
            >
              <h2
                className={`h2 panel__subtitle ${
                  type === 'horizosntal' ? 'panel__subtitle_disable' : ''
                }`}
              >
                {panel.title}
              </h2>
              <h3
                className={`h3 panel__subtitle_span ${
                  type === 'horizosntal' ? 'panel__subtitle_disable' : ''
                }`}
              >
                {panel.subtitle}
              </h3>
              <div className='panel__content'>
                <div className='panel__photos'>
                  {panel.photos.map((photo, i) => (
                    <img src={photo.img} />
                  ))}
                </div>
                <div>
                  <h2
                    className={`panel__content-title ${
                      type === 'horizontal' ? '' : ''
                    }`}
                  >
                    {panel.content_title}
                  </h2>
                  <Button name='Фотографии' />
                </div>
                <p
                  className={`panel__description ${
                    type === 'horizontal' ? 'panel__description_horizontal' : ''
                  }`}
                >
                  {panel.content}
                </p>
                <table className='tab-table'>
                  <tbody>
                    {panel.prices.map((price, i) => (
                      <tr className='tab-table__string' key={i}>
                        <td className='tab-table__name'>{price.name}</td>
                        <td className='tab-table__value'>{price.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Button name='Забронировать' />
                {panel.info && (
                  <div className='desc-tab__content desc-tab__info'>
                    <ul>
                      <h4 className='desc-tab__info-title'>
                        {panel.info.title}
                      </h4>
                      {panel.info.strings.map((item) => (
                        <li className='desc-tab__info-text'>{item.string}</li>
                      ))}
                    </ul>

                    {panel.include && (
                      <div className='desc-tab__content desc-tab__include'>
                        {' '}
                        {panel.include.map((pos) => (
                          <div className='desc-tab__include-item'>
                            <div className='desc-tab__include-ico-wrapper'>
                              <img
                                src={pos.ico}
                                className='desc-tab__include-ico'
                              />
                            </div>
                            <p className='desc-tab__include-info'>{pos.name}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Accordion;
