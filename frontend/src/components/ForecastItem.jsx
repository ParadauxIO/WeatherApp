// {
//     time: item.dt,
//     currentTemp: item.main.temp,
//     currentFeelsLike: item.main.feels_like,
//     minTemp: item.main.temp_min,
//     maxTemp: item.main.temp_max,
//     weatherHeader: item.weather[0].main,
//     weatherSubHeader: item.weather[0].description,
//     icon: item.weather[0].icon,
//     windSpeed: item.wind.speed,
//     windDirection: item.wind.deg,
//     visability: item.visability,
//     localTime: item.dt_txt
// }

import "./ForecastItem.scss"

const WEATHER_ICON_LINK = "http://openweathermap.org/img/wn/%s@2x.png";

export default function ForecastItem({ item, index }) {
    console.log(item);
    return (
        <div className="forecast-item">
            <div className="forecast-title">
                {index === 0 && <h3> (Now) </h3>}
                {index !== 0 && <h3> (+ {index} day{index !== 1 ? "s" : ""})</h3>}
                <h3> </h3>
                <h3>{item.weather[0].main}</h3>
                <img src={WEATHER_ICON_LINK.replace("%s", item.weather[0].icon)} width="40px" />
            </div>
            {index !== 0 && (
                <div className="forecast-info">
                    <span className="forecast-key">Time</span>
                    <span className="forecast-value">{item.dt_txt}</span>
                </div>
            )}
            <div className="forecast-info">
                <span className="forecast-key">Temperature</span>
                <span className="forecast-value">{(parseInt(item.main.temp)-273.15).toFixed(2)}°C</span>
            </div>
            <div className="forecast-info">
                <span className="forecast-key">Feels like</span>
                <span className="forecast-value">{(parseInt(item.main.feels_like)-273.15).toFixed(2)}°C</span>
            </div>
            <div className="forecast-info">
                <span className="forecast-key">Wind Speed</span>
                <span className="forecast-value">{item.wind.speed}</span>
            </div>
            <div className="forecast-info">
                <span className="forecast-key">Wind Direction</span>
                <span className="forecast-value">{item.wind.deg}</span>
            </div>
        </div>
    )
}