import '../styles/components/Forecast.scss'; 
import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';

function Forecast({title, type, data}) {
    return (
    <div className="Forecast">
        <div className="forecast-container">
                <h3>{title}</h3>
                <div className="widget-container">
                    {data.map(({singleData}) => (
                        <div key={singleData.date}>
                            {type === 'hourly' ? (
                                <HourlyForecastWidget data={singleData} />
                            ) : (
                                <DailyForecastWidget data={singleData} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
         </div>
  );
}
export default Forecast;