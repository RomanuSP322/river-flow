import React from "react";
import btnbg from "../../images/btngrunge.png";
import btnbgRed from "../../images/btngrungered.png";
import btnbgYellow from "../../images/btngrungeyellow.png";
import btnbgBlue from "../../images/btngrungedark.png";
import btnbgHover from "../../images/btngrungehover.png";
import "./Button.css";

function Button({ name, action, width, height, bg }) {
  const color =  bg === 'red' ? btnbgRed : (bg === 'yellow' ? btnbgYellow : (bg === 'blue' ? btnbgBlue : btnbg));
  const styles = {
    "--normal": `url(${color})`,
    "--hover": `url(${btnbgHover})`,
    "--height": `${height ? height : 70}px`,
    "--width": `${width ? width : 200}px`,
  };
  return (
    <button onClick={action} className="button" style={styles}>
      <p className="button__name">{name}</p>
    </button>
  );
}

export default Button;
