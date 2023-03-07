import React, { useLayoutEffect, useState, useRef } from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header() {
  const ref = useRef();
  const sticky = useStickyHeader(10);
  const headerClasses = `header ${sticky ? "header_sticky" : ""}`;

  return (
    <header ref={ref} className={headerClasses}>
      <Logo />
      <Navigation />
    </header>
  );
}

function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false);

  const handleScroll = () => {
    setStick(window.scrollY > offset);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return stick;
}

export default Header;
