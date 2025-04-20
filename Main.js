import '../styles/components/Main.scss'; // Importing CSS styles for the Main component
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast'; // Importing the Forecast component
import {getHourlyForecast, getDailyForecast} from '../api'; // Importing the getCurrentWeather 


function Main() {
  return (
    <div className="Main">
     <CurrentWeather/>
     <Forecast 
      type= 'hourly'
      title='HOURLY FORECAST'
      data={getHourlyForecast()} />

     <Forecast
      type='daily' 
      title= '21 DAYS FORECAST'
      data={getDailyForecast()}
      />
    </div>
  );
}
export default Main;