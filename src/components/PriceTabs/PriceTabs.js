import React from 'react';
import pricebg from '../../images/pricebg.png';
import activetab from '../../images/pricetabbg.png';
import location from '../../images/map.svg';

import './PriceTabs.css';

function PriceTabs({data, boat, panels, onPhotoClick }) {
  const [visibleTab, setVisibleTab] = React.useState(data[0].id);
  const setboat = boat;

  const photoBoatHandler = (boat) => {
    const boatpanel = panels.find(panel => panel.label === boat);   
    onPhotoClick({
      title: boatpanel.label,
      photos: boatpanel.photos,
      color: boatpanel.text_color,
    })
  };

  const listTitles = data.map((item) => (
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
          visibleTab === item.id ? 'tab__ico tab__boat-ico tab__ico_active' : 'tab__ico tab__boat-ico '
        }
        width='34'
        height='20'
        xmlns='http://www.w3.org/2000/svg'
        fill=''
      >
        <path d='M3.628 19.636c.508-2.192.975-4.04 1.38-5.886.163-.71.528-1.096 1.239-1.258 1.035-.244 2.05-.61 3.084-.853 2.111-.487 3.796-1.806 5.643-2.821 1.826-.994 3.572-2.09 5.378-3.125.446-.264.812-.285 1.157.284.609.974 1.299 1.928 2.07 2.76.386.406 1.055.771 1.603.791a78.7 78.7 0 0 0 6.19 0c1.807-.06 1.949.812 1.441 2.294-.974 2.841-3.024 4.85-5.439 6.515-.264.182-.71.182-1.075.162-1.3-.06-2.456.223-3.654.812-.75.365-2.009.325-2.8-.061-1.908-.934-3.613-.974-5.541 0-.812.406-2.11.325-2.963-.04-1.928-.833-3.653-1.036-5.52.1-.528.346-1.34.224-2.193.326ZM22.747 9.569c-.73-.954-1.198-1.624-1.746-2.233-.162-.182-.629-.304-.811-.202-1.705.974-3.37 2.009-5.054 3.044.02.081.04.142.06.223 2.416-.243 4.831-.528 7.55-.832ZM10.894 9.833c.182-.284.324-.589.527-.853a510.71 510.71 0 0 1 5.095-6.494c.507-.63.608-1.137-.041-1.685.69-1.035 1.481-1.075 2.314-.08-.508.588-.61 1.176.04 1.805.426.406.751.914 1.035 1.441.122.224-.04.61-.08.914-.285-.081-.65-.061-.833-.244-.447-.426-.812-.933-1.238-1.481-2.293 2.212-3.552 5.378-6.82 6.677ZM3.547 13.506c-.264 1.279-.487 2.436-.75 3.593-.184.771-.447 1.542-.67 2.313-.204.71-.792.65-1.198.467-.365-.142-.832-.588-.853-.913a32.484 32.484 0 0 1 0-4.445c.02-.365.548-.893.914-.974.75-.142 1.583-.04 2.557-.04Z' />
      </svg>
      {item.boat}
      <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='tab__about-ico' onClick={() => photoBoatHandler(item.boat)}>
<path d="M11.6324 13.0891H9.39124C9.39709 12.5618 9.43811 12.1077 9.51428 11.7268C9.59631 11.3401 9.73401 10.9915 9.92737 10.6809C10.1266 10.3704 10.3903 10.0627 10.7184 9.75806C10.9938 9.51196 11.234 9.27759 11.4391 9.05493C11.6442 8.83228 11.8053 8.60376 11.9225 8.36938C12.0397 8.12915 12.0983 7.86255 12.0983 7.56958C12.0983 7.22974 12.0455 6.94849 11.9401 6.72583C11.8405 6.49731 11.6881 6.32446 11.483 6.20728C11.2838 6.09009 11.0319 6.03149 10.7272 6.03149C10.4752 6.03149 10.2408 6.08716 10.024 6.19849C9.80725 6.30396 9.62854 6.46802 9.48792 6.69067C9.35315 6.91333 9.28284 7.2063 9.27698 7.56958H6.72815C6.74573 6.76685 6.9303 6.10474 7.28186 5.58325C7.63928 5.05591 8.11682 4.66626 8.71448 4.41431C9.31213 4.15649 9.98303 4.02759 10.7272 4.02759C11.5475 4.02759 12.2506 4.16235 12.8365 4.43188C13.4225 4.69556 13.8707 5.08521 14.1813 5.60083C14.4918 6.1106 14.6471 6.73169 14.6471 7.46411C14.6471 7.97388 14.5475 8.42798 14.3483 8.82642C14.149 9.21899 13.8883 9.58521 13.566 9.92505C13.2438 10.2649 12.8893 10.6165 12.5026 10.9797C12.1686 11.2786 11.9401 11.592 11.817 11.9202C11.6998 12.2483 11.6383 12.6379 11.6324 13.0891ZM9.12756 15.8049C9.12756 15.4299 9.25647 15.1194 9.51428 14.8733C9.77209 14.6213 10.1178 14.4954 10.5514 14.4954C10.9791 14.4954 11.3219 14.6213 11.5797 14.8733C11.8434 15.1194 11.9752 15.4299 11.9752 15.8049C11.9752 16.1682 11.8434 16.4758 11.5797 16.7278C11.3219 16.9797 10.9791 17.1057 10.5514 17.1057C10.1178 17.1057 9.77209 16.9797 9.51428 16.7278C9.25647 16.4758 9.12756 16.1682 9.12756 15.8049Z" fill="#47B48F"/>
<path d="M20.1083 10.0002C20.1083 14.9207 15.8823 19.0002 10.5542 19.0002C5.22614 19.0002 1.00012 14.9207 1.00012 10.0002C1.00012 5.07981 5.22614 1.00024 10.5542 1.00024C15.8823 1.00024 20.1083 5.07981 20.1083 10.0002Z" stroke="#47B48F" stroke-width="2"/>
</svg>

    </li>
  ));

  const listContent = data.map((item) => (
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
        <img src={location}  className='tab__ico tab-table__location-ico' />
        <p className='tab-table__name tab-table__location-name'>{item.location.name}</p>
        <p className='tab-table__value tab-table__location'>{item.location.value}</p>
      </a>
    </div>
  ));

  return (
    <div className='tabs' style={{ '--pricebg': `url(${pricebg})` }}>
      <h4 className='tabs__choice'>Выбери катер</h4>
      <ul className='tabs__titles'>{listTitles}</ul>
      <div className='tabs__content'>{listContent}</div>
    </div>
  );
}

export default PriceTabs;
