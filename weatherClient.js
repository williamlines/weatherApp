const got = require("got");
const apiKey = require("./apikeys");
const city = "London";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

class WeatherClient {
  constructor() {}

  fetchWeatherData(city, cb) {
    got(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    ).then((response) => {
      weatherData = JSON.parse(response.body);
      cb(weatherData);
    });
  }
}

module.exports = WeatherClient;
