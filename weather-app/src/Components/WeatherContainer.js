import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherContainer({cities}) {
    

    const newCitys = cities.map((city, index) => {
        return <WeatherCard key={index} newCity={city} />
    })



return (
<div className="weather-container">
    <div className="clicked-card">
        <h1>WeatherContainer</h1>
    </div>
    {newCitys}
</div>
)
}

export default WeatherContainer;