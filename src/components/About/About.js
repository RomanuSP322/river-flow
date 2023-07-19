import React from 'react';
import wakesurf from '../../images/wakesurf.webp';
import walks from '../../images/walks.webp';
import rent from '../../images/unsplash_sfOOhuw-K8w.webp';
import wakeboard from '../../images/wakeboard.webp';
import Chapter from '../Chapter/Chapter';
import './About.css';

function About({ refs, windowWidth }) {
  const { wakesurfRef, wakeboardRef, boatrentRef, walksRef } = refs;

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop+50,
      behavior: "smooth",
    });
  };

  const border1 =
    windowWidth > 600 ? '20px 20px 20px 115px' : '16px 16px 16px 85px';
  const titlepos1 =
    windowWidth > 600
      ? 'translate(-28%, 200px) rotate(18deg)'
      : 'translate(-30%, 140px) rotate(18deg)';

  const border2 =
    windowWidth > 600 ? '20px 115px 20px 20px ' : '16px 85px 16px 16px ';
  const titlepos2 =
    windowWidth > 600
      ? 'translate(-25%, 10px) rotate(-18deg)'
      : 'translate(-20%, 20px) rotate(-10deg)';

  const border3 =
    windowWidth > 600 ? '20px 20px 20px 115px' : '16px 16px 16px 85px';
  const titlepos3 =
    windowWidth > 600
      ? 'translate(33%, 10px) rotate(-10deg)'
      : 'translate(22%, -10px) rotate(5deg)';

  const border4 =
    windowWidth > 600 ? '20px 115px 20px 20px ' : '16px 85px 16px 16px ';
  const titlepos4 =
    windowWidth > 600
      ? 'translate(30%, 20px) rotate(18deg)'
      : 'translate(20%, 15px) rotate(10deg)';

  return (
    <div className='about'>
      <div className='about__description'>
        <h2 className='h2'>
          Развей суету<br></br>  мегаполиса
        </h2>
        <h3 className='h3'>По доступной цене</h3>
        <p className='p about__tag'>
          Испытай захватывающие эмоции от водных видов спорта или насладись
          живописной прогулкой на катере. В River Flow каждый найдет
          что-то для себя.
        </p>
      </div>

      <div className='about__chapter-wrapper about__chapter-wrapper_third' onClick={()=> scrollDown(wakesurfRef)}>
        <Chapter
          title='Вейксерф'
          price='от 4000 р'
          info='на Пироговке'
          img={wakesurf}
          border={border1}
          titlepos={titlepos1}
       
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_third' onClick={()=> scrollDown(walksRef)}>
        <Chapter
          title='Прогулки'
          price='от 3000 р'
          info='Живописные приключения'
          img={walks}
          border={border2}
          titlepos={titlepos2}
          refs={walksRef}
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half' onClick={()=> scrollDown(boatrentRef)}>
        <Chapter
          title='Аренда катера'
          price='от 3000р/ч'
          info='с капитаном и без'
          img={rent}
          border={border3}
          titlepos={titlepos3}
          refs={boatrentRef}
        />
      </div>
      <div className='about__chapter-wrapper about__chapter-wrapper_half' onClick={()=> scrollDown(wakeboardRef)}>
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
