import "./Weather.css";
import {weatherOptions} from "../../utils/constants.js";


const Weather = ({day, type, weatherTemp}) => {
  const imageSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <>
      <section id="weather">
        <div className="weather_tempature">{weatherTemp}</div>
        <div>
          <img
            className="weather_conditions"
            src={imageSrcUrl}
            alt="conditions"
          />
        </div>
      </section>
    </>
  );
};

export default Weather;
