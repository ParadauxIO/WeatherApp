import { useState } from "react";
import "./IndexPage.scss"
import WeatherInfo from "../components/WeatherInfo";

export default function IndexPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentCity, setCurrentCity] = useState("Dublin");

    function onSubmit(e) {
        e.preventDefault();
        console.log("Form Submitted");
        setCurrentCity(searchQuery);
    }

    return (
        <div className="index-page">
            <h1>Rían's Weather App</h1>
            <div className="index-card">
                {
                    !currentCity && (
                        <form onSubmit={onSubmit}>
                            <input
                                placeholder="Enter a city.."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                type="text"
                            />
                            <input type="submit" value="submit" />
                        </form>
                    )
                }
                {
                    currentCity && (
                        <WeatherInfo
                            currentCity={currentCity}
                        />
                    )
                }
            </div>


        </div>
    )
}