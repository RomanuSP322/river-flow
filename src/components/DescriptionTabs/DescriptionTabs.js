import React from 'react';
import pricebg from '../../images/pricebg.png';
import activetab from '../../images/pricetabbg.png';


import './DescriptionTabs.css';

function DescriptionTabs(props) {
  const [visibleTab, setVisibleTab] = React.useState(props.data[0].id);

  const listTitles = props.data.map((item) => (
    <li
      onClick={() => setVisibleTab(item.id)}
      style={{ '--activetab': `url(${activetab})` }}
      className={
        visibleTab === item.id ? 'tab__title tab__title_active' : 'tab__title'
      }
    >

    </li>
  ));

  const listContent = props.data.map((item) => (
    <div className={`tabs__content ${visibleTab === item.id ? `tab__content_active` : ``} `}>

    </div>
  ));

  return (
    <div className='tabs' style={{ '--pricebg': `url(${pricebg})` }}>
      <ul className='tabs__titles'>{listTitles}</ul>
      <div className='tab__content'>{listContent}</div>
    </div>
  );
}

export default DescriptionTabs;
