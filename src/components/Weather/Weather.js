import "./Weather.css";

const weatherOptions = [
  {
    url: "../images/conditions/night/clearNight.svg",
    day: false,
    type: "clear",
  },
  { url: "../images/conditions/day/cloudyDay.svg", day: true, type: "cloudy" },
  {
    url: "../images/conditions/night/cloudyNight.svg",
    day: false,
    type: "cloudy",
  },
  { url: "../images/conditions/day/foggyDay.svg", day: true, type: "foggy" },
  {
    url: "../images/conditions/night/foggyNight.svg",
    day: false,
    type: "foggy",
  },
  { url: "../images/conditions/day/rainyDay.svg", day: true, type: "rainy" },
  {
    url: "../images/conditions/night/rainyNight.svg",
    day: false,
    type: "rainy",
  },
  { url: "../images/conditions/day/snowyDay.svg", day: true, type: "snowy" },
  {
    url: "../images/conditions/night/snowyNight.svg",
    day: false,
    type: "snowy",
  },
  { url: "../images/conditions/day/stormyDay.svg", day: true, type: "stormy" },
  {
    url: "../images/conditions/night/stormyNight.svg",
    day: false,
    type: "stormy",
  },
  { url: "../images/conditions/day/sunnyDay.svg", day: true, type: "sunny" },
];

const Weather = () => {
  const imageSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });
  console.log(imageSrc[0].url);
  return (
    <>
      <section id="weather">
        <div className="weather_tempature">65 F</div>
        <div>
          <img
            className="weather_conditions"
            src={require("../../images/conditions/sunnyDay.svg").default}
            alt="conditions"
          />
        </div>
      </section>
    </>
  );
};

export default Weather;
