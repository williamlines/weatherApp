const Weather = require("./weather.js");

describe("weather", () => {
  describe("mocking", () => {
    it("can return weather data from a mock api", () => {
      const mockedApi = {
        fetchWeatherData: (city, cb) => {
          cb({
            name: 'Gondor',
            main: {
              temp: 20,
              feels_like: 18
            }
          })
        }
      }
      weather = new Weather(mockedApi)
      weather.fetch('Gondor')
      expect(weather.getWeatherData().name).toEqual('Gondor')
    });
  });
});
