import React from 'react';
import pricebg from '../../images/pricebg.png';
import tab from '../../images/desctabbg.svg';
import tabmarker from '../../images/tabmarker.svg';

import './DescriptionTabs.css';

function DescriptionTabs({ data }) {
  const [visibleTab, setVisibleTab] = React.useState(data[0].id);

  const listTitles = data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      style={{ '--tab': `url(${tab})` }}
      className={
        visibleTab === item.id
          ? 'desc-tabs__title desc-tabs__title_active'
          : 'desc-tabs__title'
      }
    >
      {item.title}
    </li>
  ));

  const listContent = data.map((item) => (
    <div className='desc-tab__content-wrapper'>
      {item.desc && (
        <div className='desc-tab__content'>
          <p className='p'>{item.desc}</p>
          <p className='p'>{item.tag}</p>
        </div>
      )}
      {item.include && (
        <div className='desc-tab__content desc-tab__include'>
          {' '}
          {item.include.map((pos) => (
            <div className='desc-tab__include-item'>
              <div className='desc-tab__include-ico-wrapper'>
                <img src={pos.ico} className='desc-tab__include-ico' />
              </div>
              <p className='desc-tab__include-info'>{pos.name}</p>
            </div>
          ))}
        </div>
      )}
      {item.info && (
        <div className='desc-tab__content desc-tab__info'>
          {item.info.map((chapter) => (
            <ul>
              <h4 className='desc-tab__info-title'>{chapter.title}</h4>
              {chapter.strings.map((item) => (
                <li className='desc-tab__info-text'>{item.string}</li>
              ))}
            </ul>
          ))}
        </div>
      )}
    </div>
  ));

  return (
    <div
      className='desc-tabs'
      style={{
        '--pricebg': `url(${pricebg})`,
        '--tabmarker': `url(${tabmarker})`,
      }}
    >
      <span
        className='desc-tabs__marker'
        style={{ transform: `translateX(${visibleTab * 230}px)` }}
      ></span>
      <ul className='desc-tabs__titles'>{listTitles}</ul>

      <div
        className='desc-tabs__content'
        style={{ transform: `translateX(${visibleTab * -715}px)` }}
      >
        {listContent}
      </div>
    </div>
  );
}

export default DescriptionTabs;
