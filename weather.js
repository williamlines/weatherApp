const WeatherClient = require("./weatherClient");

class Weather {
  constructor(api) {
    this.api = api;
    this.weatherData = null;
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

const client = new WeatherClient();
const weather = new Weather(client);

weather.fetch("Madrid");

setTimeout(() => {
  weather.getWeatherData();
}, 2000);
