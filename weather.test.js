const Weather = require("./weather.js");
const WeatherClient = require("./weatherclient.js");

describe("weather", () => {
  describe("mocking", () => {
    it("can return weather data from a mock api", () => {
      client = new WeatherClient();
      weather = new Weather(client);
      weather.fetch("London");
      setTimeout(() => {
        expect(weather.getWeatherData().name).toEqual("London");
      }, 2000);
    });
  });
});
