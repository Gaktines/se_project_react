import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import Weather from "../Weather/Weather";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);
  const sortedCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <Weather day={true} type="stormy" weatherTemp={weatherTemp} />

      <section className="card__section">
        Today is {weatherTemp} F.You may want to wear:
        <div className="card__items">
          {sortedCards.map((x) => (
            <ItemCard x={x} key={x?.id || x?._id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
