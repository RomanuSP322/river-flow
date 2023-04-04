import React from "react";

import { wakeboardInfo } from "../../const/info";
import { wakeboardPrice } from "../../const/prices";
import wakeboardBg from "../../images/wakeboard-bg2.png";
import wakeboardBgMobile from "../../images/wakeboard-bg-mobile.png";
import PriceTabs from "../PriceTabs/PriceTabs";

import "./Wakeboard.css";
import DescriptionTabs from "../DescriptionTabs/DescriptionTabs";
import Button from "../Button/Button";
import CallMe from "../CallMe/CallMe";


function Wakeboard({windowWidth}) {
  const [visibleBoat, setVisibleBoat] = React.useState(wakeboardPrice[0].boat);
  const boat = (r) => {
    setVisibleBoat(r);
  };

  return (
    <div className="wakeboard">
      <div className="wakeboard__columns"  style={{ "--wakeboard": `url(${wakeboardBg})`, "--wakeboard-mobile": `url(${wakeboardBgMobile})`  }}>
        <div className="wakeboard__column_left" >       
        </div>
        <div className="wakeboard__column_right">
          <h2 className="h2 wakeboard__title">Вейкборд и лыжи</h2>
          <h3 className="h3 wakeboard__subtitle">Обуздай течение реки</h3>
          <p className="p wakeboard__description">
            Вейкбординг и водные лыжи - два самых популярных и захватывающих
            вида водного спорта. Оба вида спорта обеспечивают уникальный и
            завораживающий способ получить удовольствие от водных развлечений,
            независимо от того, ищете ли вы адреналиновый драйв или более
            спокойный опыт. Будь ты опытным профессионалом или новичком, эти
            виды спорта подходят для людей любого уровня подготовки и возраста.
          </p>
          <DescriptionTabs data={wakeboardInfo} boat={visibleBoat} windowWidth= {windowWidth}/>
          <div className="wakeboard__info">
            <div className="wakeboard__prices">
            <PriceTabs data={wakeboardPrice} boat={boat}/>
           
            <Button name='Забронировать' height={60}/>
           
          </div>
          <CallMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wakeboard;
