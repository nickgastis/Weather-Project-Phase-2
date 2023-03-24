import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherContainer() {
return (
<div className="weather-container">
    <div className="clicked-card">

    </div>
    <WeatherCard />
</div>
)
}

export default WeatherContainer;