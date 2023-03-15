import React from "react";
import { walksInfo } from "../../const/info";
import Slider from "../Slider/Slider";
import walksBg from "../../images/walks-bg.png"
import "./Walks.css";

function Walks() {
  return (
    <div className="walks" style={{ "--walksbg": `url(${walksBg})` }}>
      <div className="walks__intro">
      <h2 className="h2 walks__title">Прогулки на катере</h2>
      <h3 className="h3 walks__subtitle">Живописные приключения</h3>
      <p className="p walks__description">
        Один из самых красивых и романтических способов насладиться красотой
        реки. Наша компания предлагает аренду катеров для индивидуальных и
        групповых прогулок. Наши катера оснащены всем необходимым для
        комфортного и безопасного плавания. Мы предлагаем маршруты с различной
        длительностью и сложностью, от краткой прогулки до дневного
        экскурсионного маршрута. Прогулки на катере идеально подходят для
        семейного отдыха, деловых мероприятий или романтического свидания.
      </p>
      </div>
     <Slider data={walksInfo}/>
    </div>
  );
}

export default Walks;
