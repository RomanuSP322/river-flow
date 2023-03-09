import React from 'react';
import wakesurfPrice from '../../const/prices';
import wakesurfboard from '../../images/wakesurfboard.png';
import PriceTabs from '../PriceTabs/PriceTabs';

import './Wakesurf.css';


function Wakesurf() {


  return (
    <div className='wakesurf' style={{ '--wakesurf': `url(${wakesurfboard})` }}>
      <div className='wakesurf__content'>
      <h2 className='h2'>Вейксерф</h2>
      <h3 className='h3 wakesurf__subtitle'>Твоя бесконечная волна</h3>
      <PriceTabs data={wakesurfPrice} />
      </div>
    </div>
  );
}

export default Wakesurf;
