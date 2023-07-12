// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}

const latitude = "38.674125";
const longitude = "-104.695793";
const ApiKey = "7f96f2d4b96960318fad545f3825e605";

const getWeatherForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${ApiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject( `Error: ${res.status}`);
    }
  });
  return weatherApi;
};

const sortWeatherData = (data) => {
const main = data.main;
const temp = main && main.temp;
return Math.ceil(temp);
}

export {getWeatherForecast};
export {sortWeatherData};