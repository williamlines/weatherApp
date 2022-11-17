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
const client = new WeatherClient();

// client.fetchWeatherData("Paris", (weatherData) => {
//   console.log(weatherData);
// });

class Weather {
  constructor(api) {
    this.api = api;
    this.weatherData = "";
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (weatherData) => {
      this.weatherData = weatherData;
    });
  }

  getWeatherData() {
    console.log(this.weatherData);
  }
}

const weather = new Weather(client);

weather.fetch("Liverpool");

setTimeout(() => {
  weather.getWeatherData();
}, 2000);
