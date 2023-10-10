import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import React, { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems, setSelectedCard }) {
  const currentTemperatureUnit = useContext(CurrentTemperatureUnitContext);
  const temp =
    weatherTemp?.temp?.[currentTemperatureUnit.currentTemperatureUnit];
  const weatherType = useMemo(() => {
    if (currentTemperatureUnit.currentTemperatureUnit === "F") {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  } else if (currentTemperatureUnit.currentTemperatureUnit === "C") {
    if (temp >= 30) {
      return "hot";
    } else if (temp >= 19 && temp <= 29) {
      return "warm";
    } else if (temp <= 18) {
      return "cold";
    }
  }
  }, [temp, currentTemperatureUnit.currentTemperatureUnit]);
  console.log(clothingItems);
  const sortedCards = clothingItems?.filter((item) => {
    console.log(item);
    console.log(item.weather.toLowerCase);
    console.log(weatherType);
    return item.weather.toLowerCase() === weatherType;
    
  });
  console.log(sortedCards);
    return (
    <main className="main">
      <WeatherCard day={true} type="stormy" weatherTemp={weatherTemp.temp} />
      <section className="card__section">
        Today is {temp}°{currentTemperatureUnit.currentTemperatureUnit}. You may
        want to wear:
        <div className="card__items">
          {sortedCards.map((x) => (
            <ItemCard
              item={x}
              key={x.id}
              onSelectCard={onSelectCard}
              onClick={() => {
                setSelectedCard(x)
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
