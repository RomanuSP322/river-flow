import React from 'react';
import wakesurf from '../../images/wakesurf.png';
import walks from '../../images/walks.png';
import rent from '../../images/rent.png';
import wakeboard from '../../images/wakeboard.png';
import Chapter from '../Chapter/Chapter';
import './About.css';

function About() {
  return (
    <div className='about'>
      <div className='about__description'>
        <h2 className='h2'>
          Окунись в мир<br></br> водных развлечений
        </h2>
        <h3 className='h3'>По доступной цене</h3>
        <p className='p'>
          Являетесь ли вы опытным спортсменом, ищущим прилив адреналина, или
          новичком, который начинает знакомство с водными видами спорта, в
          River's Flow каждый найдет что-то для себя. Присоединяйся к нам, чтобы
          отправиться в незабываемое приключение и оставить воспоминания на всю
          жизнь.
        </p>
      </div>

      <div className='about__chapter-wrapper about__chapter-wrapper_third'>
        <Chapter
          title='Вейксерф'
          price='Сет от 6000 р'
          info='Спот в Мякинино'
          img={wakesurf}
          border='20px 20px 20px 115px'
          titlepos='translate(-28%, 200px) rotate(18deg)'
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_third'>
        <Chapter
          title='Прогулки'
          price='от 5000 р/ч'
          info='Спот в Мякинино'
          img={walks}
          border='20px 115px 20px 20px '
          titlepos='translate(-25%, 10px) rotate(-18deg)'
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half'>
        <Chapter
          title='Аренда катера'
          price='от 5000 р/ч'
          info='Спот в Мякинино'
          img={rent}
          border='20px 20px 20px 115px '
          titlepos='translate(32%, 10px) rotate(-10deg)'
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half'>
        <Chapter
          title='Вейкборд и лыжи'
          price='от 5000 р/ч'
          info='Спот в Мякинино'
          img={wakeboard}
          border='20px 115px 20px 20px '
          titlepos='translate(30%, 20px) rotate(18deg)'
        />
      </div>
    </div>
  );
}

export default About;
