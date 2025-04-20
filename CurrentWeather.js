import {getCurrentWeather} from '../api';
import WeatherIcon from './WeatherIcon'; // Importing the WeatherIcon component to display weather icons
import '../styles/components/CurrentWeather.scss'; // Importing CSS styles for the CurrentWeather component
function CurrentWeather() {
    const data = getCurrentWeather();
    const {
        cloud_cover,
        feels_like,
        humidity,
        precipitation,
        summary,
        temperature,
        uv_index,visibility,wind,icon_num} = data;
    const otherInfoWidgets = [

        {
            id: 0,
            icon: 'droplet',
            name: 'Precipitation',
            value: Math.round(precipitation.total),
            unit: 'in/h',
        },
        {
            id: 1,
            icon: 'wind',
            name: 'Wind',
            value: Math.round(wind.speed),
            unit: 'km/h',
        },
        {
            id: 2,
            icon: 'moisture',
            name: 'Humidity',
            value: Math.round(humidity),
            unit: '%',
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: 'UV Index',
            value: Math.round(uv_index),
            unit: '%',
        },
        {
            id: 4,
            icon: 'cloud-fill',
            name: 'Cloud Cover',
            value: Math.round(cloud_cover),
            unit: '%',
        },
        {
            id: 5,
            icon: 'eye',
            name: 'Visibility',
            value: Math.round(visibility),
            unit: 'km/h',
        },
       
        
    ]
    return (
     <div className='CurrentWeather'>
        <div className='temperature'>
          <div className = "weather-icon">
               <WeatherIcon iconNumber={icon_num} summary={summary}/>
             </div>
             <div className ='value'>
            
                <div className='real'>{temperature}°C</div>
                <div className='feels_like'>feels like {feels_like}°C
                </div>
        
                <div className='summary'>{summary}</div>
                <div className='wind'>Wind: {wind.speed}km/h</div>     
                </div>
             </div>
        <div className='other-infos'>
            {otherInfoWidgets.map(({id,icon,name,value,unit}) => (
                <div className='widget' key={id}>
                    <div className='widget-container'>
                        <div className='info'>
                            <div className='icon'>
                              <i className={`bi bi-${icon}`}></i>
                            </div>
                            <div className='value'>
                            {value} {unit}
                            </div>    
                        </div>
                        <div className = 'name'>{name}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
}
export default CurrentWeather;
