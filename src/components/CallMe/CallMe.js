import React from 'react';
import callbg from '../../images/callbg.png'
import phoneico from '../../images/phoneico.svg'
import './CallMe.css';

function CallMe({bg}) {
  return (
    <div className={`callme  ${bg ? `callme__bg` : ``}`} style={{"--callmebg": `url(${callbg})`}}
  >
      <p className={`callme__title  ${bg ? `callme__title_white` : ``}`}>Остались вопросы?</p>
       <button className='callme__button'>Звоните <img className='callme__ico' src={phoneico}/></button>
    </div>
  );
}

export default CallMe;
