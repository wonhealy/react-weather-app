import WeatherIcon from "./WeatherIcon";
function HourlyForecastWidget({data}){
    const {date,icon, summary, temperature,precipitaion,wind} =
     data;
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
          weekday: 'short',
          day:'2-digit',
          month:'2-digit', }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date().setMinutes(0)),
    };
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
             weekday: 'short',
            day:'2-digit',
        month:'2-digit', }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit',
        }).format(new Date(date).setMinutes(0)),
    };
    weather_date.day = weather_date.day === now_date.day ? 'Today' : weather_date.day;
    weather_date.time = weather_date.time === now_date.time ? 'Now' : weather_date.time;
    return(
        <div className="widget"> 
            <div className="day">{weather_date.day}</div>
            <div className="time">{weather_date.time}</div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} summary={summary}/>
                </div>
                <div className="temperature">{temperature}°C
                </div>
            </div>
            <div className="precipitaion">
            {Math.round(precipitaion.total)}mm/h
            </div>
            <div className="wind">
               <div className="speed"> {Math.round(wind.speed)} mph</div>
               <div className="dir" style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
               <i className="bi bi-send-fill"></i>
           </div>
        </div>
       </div> 
       
    );
}
export default HourlyForecastWidget;