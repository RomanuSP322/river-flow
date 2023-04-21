import React from 'react';
import wakesurf from '../../images/wakesurf.png';
import walks from '../../images/walks.png';
import rent from '../../images/rent.png';
import wakeboard from '../../images/wakeboard.png';
import Chapter from '../Chapter/Chapter';
import './About.css';

function About({refs, windowWidth}) {
  const { wakesurfRef, wakeboardRef, boatrentRef, walksRef } = refs;
  const border1 = windowWidth > 600 ? '20px 20px 20px 115px' : '16px 16px 16px 85px';
  const titlepos1 = windowWidth > 600 ?  'translate(-28%, 200px) rotate(18deg)' : 'translate(-30%, 160px) rotate(18deg)';
 
  const border2 = windowWidth > 600 ? '20px 115px 20px 20px ' : '16px 85px 16px 16px ';
  const titlepos2 = windowWidth > 600 ?  'translate(-25%, 10px) rotate(-18deg)' : 'translate(-20%, 20px) rotate(-10deg)';
 
  const border3 = windowWidth > 600 ? '20px 20px 20px 115px' : '16px 16px 16px 85px';
  const titlepos3 = windowWidth > 600 ?  'translate(32%, 10px) rotate(-10deg)' : 'translate(25%, 15px) rotate(10deg)';

  const border4 = windowWidth > 600 ? '20px 115px 20px 20px ' : '16px 85px 16px 16px ';
  const titlepos4 = windowWidth > 600 ?  'translate(30%, 20px) rotate(18deg)' : 'translate(20%, 15px) rotate(10deg)';
 
  return (
    <div className='about'>
      <div className='about__description'>
        <h2 className='h2'>
          Окунись в мир<br></br> водных развлечений
        </h2>
        <h3 className='h3'>По доступной цене</h3>
        <p className='p about__tag'>
          Являешься ли ты опытным спортсменом, ищущим прилив адреналина, или
          новичком, который начинает знакомство с водными видами спорта, в
          River Flow каждый найдет что-то для себя. 
        </p>
      </div>

      <div className='about__chapter-wrapper about__chapter-wrapper_third'>
        <Chapter
          title='Вейксерф'
          price='от 6000 р'
          info='в Мякинино и Мытищах'
          img={wakesurf}
          border={border1}
          titlepos={titlepos1}
          refs={wakesurfRef}
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_third'>
        <Chapter
          title='Прогулки'
          price='от 15000 р'
          info='Идеи для праздника'
          img={walks}
          border={border2}
          titlepos={titlepos2}
          refs={walksRef}
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half'>
        <Chapter
          title='Аренда катера'
          price='от 5000р/ч'
          info='с капитаном и без'
          img={rent}
          border={border3}
          titlepos={titlepos3}
          refs={boatrentRef}
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half'>
        <Chapter
          title='Вейкборд и лыжи'
          price='от 3000 р'
          info='за катером'
          img={wakeboard}
          border={border4}
          titlepos={titlepos4}
          refs={wakeboardRef}
        />
      </div>
    </div>
  );
}

export default About;
