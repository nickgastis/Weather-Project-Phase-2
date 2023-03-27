import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherContainer({ cityData }) {
    console.log(cityData)




return (
<div className="weather-container">
    <h1>{cityData.city}</h1>
</div>
)
}

export default WeatherContainer;