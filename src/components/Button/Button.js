import React from 'react';
import btnbg from '../../images/btn-grunge.svg'
import btnbgHover from '../../images/btn-grunge-hover.svg'
import './Button.css';

function Button({ name, action, color }) {
  return (
    <button onClick={action} className='button' style= {{"--normal": `url(${btnbg})`, "--hover": `url(${btnbgHover})`}}
  >
      <p className='button__name'>{name}</p>
      
    </button>
  );
}

export default Button;
