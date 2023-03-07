import React from "react";
import "./ScrollDown.css";

function ScrollDown({ refProp }) {
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrolldown" onClick={() => scrollDown(refProp)}>
      <div className="scrolldown__ico"></div>
      <div className="scrolldown__ico"></div>
      <div className="scrolldown__ico"></div>
    </div>
  );
}

export default ScrollDown;
