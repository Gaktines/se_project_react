import "./Weather.css";
import weatherOptions from "../../../src/utils/constants";

const Weather = ({day, type}) => {
  const imageSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <>
      <section id="weather">
        <div className="weather_tempature">65 F</div>
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
