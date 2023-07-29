import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const Weather = ({ day, type, weatherTemp }) => {
  const imageSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.[currentTemperatureUnit];

  return (
    <section id="weather">
      <div className="weather_tempature">
        {temp}°{currentTemperatureUnit.currentTemperatureUnit}
      </div>
      <div>
        <img className="weather_conditions" src={imageSrcUrl} alt={type} />
      </div>
    </section>
  );
};

export default Weather;
