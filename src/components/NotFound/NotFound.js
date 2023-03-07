import React, {useEffect} from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notfoundBg from "../../images/notfound.png";

function NotFound() {
  const styles = {
    "--normal": `url(${notfoundBg})`,
  };

  useEffect(() => {
    document.title = 'Страница не найдена | ЦТИ';
  });

  return (
    <div className="notfound">
      <div className="notfound-wrapper" style={styles}>
        <h3 className="notfound__status">404</h3>
        <p className="notfound__message">Страница не найдена</p>
        <Link className="notfound__link" to="/">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
