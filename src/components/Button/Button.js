import React from "react";
import btnbg from "../../images/btngrunge.png";
import btnbgRed from "../../images/btngrungered.png";
import btnbgYellow from "../../images/btngrungeyellow.png";
import btnbgBlue from "../../images/btngrungedark.png";
import btnbgHover from "../../images/btngrungehover.png";
import btnbgLightBlue from "../../images/btngrungeblue.png";
import "./Button.css";

function Button({ name, action, width, height, bg, booking, url, type }) {
  const color = bg === 'red' ? btnbgRed : (bg === 'yellow' ? btnbgYellow : (bg === 'blue' ? btnbgBlue : (bg === 'lightblue' ? btnbgLightBlue : btnbg) ));
  const styles = {
    "--normal": `url(${color})`,
    "--hover": `url(${btnbgHover})`,
    "--height": `${height ? height : 70}px`,
    "--width": `${width ? width : 200}px`,
  };
  return (    
    <button onClick={action} className={`button ${booking && "ms_booking"}` }  data-url={url} style={styles} type={type} >
      <p className="button__name">{name}</p>
    </button>
  );
}

export default Button;
