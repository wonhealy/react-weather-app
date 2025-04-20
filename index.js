import currentweather from "./current-weather.json";
import dailyForecast from "./daily-forecast.json";
import hourlyForecast from "./hourly-forecast.json";


function getCurrentWeather() {
  return currentweather.current;
}
function getDailyForecast() {
  return dailyForecast.daily.data;
}
function getHourlyForecast() {
  return hourlyForecast.hourly.data; 
}
export default { getCurrentWeather, getDailyForecast, getHourlyForecast };
