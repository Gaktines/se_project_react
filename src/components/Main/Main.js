import "./Main.css";
import Weather from "../Weather/Weather";
import ItemCard from "../ItemCard/ItemCard";
import React, {  useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";



function Main({ weatherTemp, onSelectCard, clothingItems}) {
  const currentTemperatureUnit = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temp?.[currentTemperatureUnit];
  const weatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };
  console.log(clothingItems);
  const sortedCards = clothingItems?.filter((item) => {
    console.log(item.weather.toLowerCase(), weatherType());
  return item.weather.toLowerCase() === weatherType();
  });
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
