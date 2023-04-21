import React from 'react';
import pricebg from '../../images/pricebg.png';
import activetab from '../../images/pricetabbg.png';
import location from '../../images/map.svg';

import './PriceTabs.css';

function PriceTabs(props) {
  const [visibleTab, setVisibleTab] = React.useState(props.data[0].id);
  const setboat = props.boat;
  const listTitles = props.data.map((item) => (
    <li
      onClick={() => { setVisibleTab(item.id);  setboat(item.boat)}}
      key={item.id}
      style={{ '--activetab': `url(${activetab})`, "--active-color": `${item.color}` }}
      className={
        visibleTab === item.id ? 'tab__title tab__title_active' : 'tab__title'
      }
    >
      <svg
        className={
          visibleTab === item.id ? 'tab__ico tab__ico_active' : 'tab__ico'
        }
        width='34'
        height='20'
        xmlns='http://www.w3.org/2000/svg'
        fill=''
      >
        <path d='M3.628 19.636c.508-2.192.975-4.04 1.38-5.886.163-.71.528-1.096 1.239-1.258 1.035-.244 2.05-.61 3.084-.853 2.111-.487 3.796-1.806 5.643-2.821 1.826-.994 3.572-2.09 5.378-3.125.446-.264.812-.285 1.157.284.609.974 1.299 1.928 2.07 2.76.386.406 1.055.771 1.603.791a78.7 78.7 0 0 0 6.19 0c1.807-.06 1.949.812 1.441 2.294-.974 2.841-3.024 4.85-5.439 6.515-.264.182-.71.182-1.075.162-1.3-.06-2.456.223-3.654.812-.75.365-2.009.325-2.8-.061-1.908-.934-3.613-.974-5.541 0-.812.406-2.11.325-2.963-.04-1.928-.833-3.653-1.036-5.52.1-.528.346-1.34.224-2.193.326ZM22.747 9.569c-.73-.954-1.198-1.624-1.746-2.233-.162-.182-.629-.304-.811-.202-1.705.974-3.37 2.009-5.054 3.044.02.081.04.142.06.223 2.416-.243 4.831-.528 7.55-.832ZM10.894 9.833c.182-.284.324-.589.527-.853a510.71 510.71 0 0 1 5.095-6.494c.507-.63.608-1.137-.041-1.685.69-1.035 1.481-1.075 2.314-.08-.508.588-.61 1.176.04 1.805.426.406.751.914 1.035 1.441.122.224-.04.61-.08.914-.285-.081-.65-.061-.833-.244-.447-.426-.812-.933-1.238-1.481-2.293 2.212-3.552 5.378-6.82 6.677ZM3.547 13.506c-.264 1.279-.487 2.436-.75 3.593-.184.771-.447 1.542-.67 2.313-.204.71-.792.65-1.198.467-.365-.142-.832-.588-.853-.913a32.484 32.484 0 0 1 0-4.445c.02-.365.548-.893.914-.974.75-.142 1.583-.04 2.557-.04Z' />
      </svg>
      {item.boat}
    </li>
  ));

  const listContent = props.data.map((item) => (
    <div key={item.id} className={`tab__content ${visibleTab === item.id ? `tab__content_active` : ``} `}>
      <table className='tab-table'   style={{"--active-color": `${item.color}` }}>
        <tbody>
          {item.prices.map((price, i) => (
            <tr className='tab-table__string' key={i}>
              <td className='tab-table__name'>{price.name}</td>
              <td className='tab-table__value'>{price.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href={item.location.url} target='_blank' className='tab-table__link' >
        <img src={location}  className='tab__ico'/>
        <p className='tab-table__name tab-table__location-name'>{item.location.name}</p>
        <p className='tab-table__value tab-table__location'>{item.location.value}</p>
      </a>
    </div>
  ));

  return (
    <div className='tabs' style={{ '--pricebg': `url(${pricebg})` }}>
      <ul className='tabs__titles'>{listTitles}</ul>
      <div className='tabs__content'>{listContent}</div>
    </div>
  );
}

export default PriceTabs;
