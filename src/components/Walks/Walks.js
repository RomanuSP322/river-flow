import React from 'react';
import { walksInfo } from '../../const/info';
import Slider from '../Slider/Slider';
import walksBg from '../../images/walks-bg.png';
import './Walks.css';

function Walks() {
  return (
    <div className='walks' style={{ '--walksbg': `url(${walksBg})` }}>
      <div className='walks__intro'>
        <h2 className='h2 walks__title'>Прогулки на катере</h2>
        <h3 className='h3 walks__subtitle'>Живописные приключения</h3>
        <p className='p walks__description'>
          Один из самых красивых и романтических способов насладиться
          безмятежной атмосферой и потрясающими пейзажами вместе. Прогулки на
          катере подойдут для семейного отдыха, вечеринки или
          романтического свидания. С нашей опытной командой вы можете
          расслабиться, пока мы заботимся о деталях и обеспечиваем безопасное и
          увлекательное приключение на воде.
        </p>
      </div>
      <Slider data={walksInfo} />
    </div>
  );
}

export default Walks;
