import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logoold.svg";
import "./Logo.css";

function Logo() {
  return (
    <Link className="logo__link" to="/">
      <img className="logo" src={logo} alt="Логотип" />
    </Link>
  );
}

export default Logo;
