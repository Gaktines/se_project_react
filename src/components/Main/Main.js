import "./Main.css";
import { defaultClothingItems } from "../../utils/constants";
import Weather from "../Weather/Weather";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";



function Main({ weatherTemp, onSelectCard }) {
  const {currentTemperatureUnit} = useContext(CurrentTemperatureUnitContext);
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit >= 86) {
      return "hot";
    } else if (currentTemperatureUnit >= 66 && currentTemperatureUnit <= 85) {
      return "warm";
    } else if (currentTemperatureUnit <= 65) {
      return "cold";
    }
  }, [weatherTemp], );
  const sortedCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  
  const temp = weatherTemp?.temp?.[currentTemperatureUnit];
  
  return (
    <main className="main">
      <Weather day={true} type="stormy" weatherTemp={weatherTemp.temp} />
      <section className="card__section">
        Today is {temp}.  You may want to wear:
        <div className="card__items">
          {sortedCards.map((x) => (
            <ItemCard item={x} key={x?.id || x?._id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
