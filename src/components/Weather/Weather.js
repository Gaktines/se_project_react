import "./Weather.css";
import { weatherOptions } from "../../utils/constants.js";

const Weather = ({ day, type, weatherTemp }) => {
  const imageSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });
  //const {weatherTemperature} = weatherTemp;
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section id="weather">
     <div className="weather_tempature"></div>
      <div>
        <img className="weather_conditions" src={imageSrcUrl} alt={type} />
      </div>
    </section>
  );
};

export default Weather;
