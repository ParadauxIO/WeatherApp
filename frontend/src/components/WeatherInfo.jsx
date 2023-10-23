import { useEffect, useState } from "react";
import { format, addSeconds } from "date-fns";
import "./WeatherInfo.scss"
import ForecastItem from "./ForecastItem";

const WEATHER_API_KEY = import.meta.env.VITE_PUBLIC_WEATHER_API_KEY;
const WEAHTER_API_QUERY = "https://api.openweathermap.org/data/2.5/weather?q={query}&appid=" + encodeURIComponent(WEATHER_API_KEY);
const FORECAST_API_QUERY = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + encodeURIComponent(WEATHER_API_KEY);

const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function WeatherInfo({ currentCity }) {
    const [weatherData, setWeatherData] = useState();
    const [forecastData, setForecastData] = useState();

    useEffect(() => {
        async function load() {
            const response = await fetch(WEAHTER_API_QUERY.replace("{query}", encodeURIComponent(currentCity)));
            setWeatherData(await response.json());
        }

        load();
    }, [currentCity])

    useEffect(() => {
        async function load() {
            console.log("canon", weatherData);
            const response = await fetch(FORECAST_API_QUERY.replace("{lat}", encodeURIComponent(weatherData.coord.lat))
                .replace("{lon}", encodeURIComponent(weatherData.coord.lon)));

            setForecastData(await response.json());
        }

        if (weatherData) load();
    }, [weatherData])


    if (!weatherData || !forecastData) {
        return (
            "Loading..."
        )
    }

    const forecast = [];

    for (let i = 0; i < forecastData.list.length; i +=8 ) {
        forecast.push((
            <ForecastItem
                item={forecastData.list[i]}
                index={i}
            />
        ))
    }

    console.log(forecast)

    return (
        <div className="weather-info">
            <h1>
                Weather Forecast for <span>{weatherData.name}</span>
            </h1>

            <div className="weather-content">
                <div className="left-bar">
                    <div className="info-box">
                        <h2> City Information </h2>
                        <hr />
                        <div className="info-content">
                            <span className="info-key">
                                Coordinates: {" "}
                            </span>
                            <span className="info-value">
                                {weatherData.coord.lat}°N, {weatherData.coord.lon} °W
                            </span>
                        </div>
                        <div className="info-content">
                            <span className="info-key">
                                Country: {" "}
                            </span>
                            <span className="info-value">
                                {weatherData.sys.country}
                            </span>
                        </div>
                    </div>

                    <div className="info-box">
                        <h2> Packing Guide </h2>
                        <hr />
                        
                    </div>
                </div>

                <div className="right-bar">
                    <div className="info-box">
                        <h2>Forecast</h2>
                        <hr />
                        <div className="forecast-content">
                            {forecast}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}