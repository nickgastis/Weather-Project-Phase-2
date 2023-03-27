import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherContainer({ cityData }) {
    console.log(cityData)




return (
<div className="weather-container-card">
  <div className="current-weather">
    <h1>{cityData.city}</h1>
    <button className="Save">Save</button>
    <img className='emoji' src={cityData.current_condition_icon}></img>
    <h2 className='temperature'>{cityData.current_temp_f} F°</h2>
    <h3 className="condition">Condition: {cityData.current_condition_text}</h3>
    <h3 className="feels-like">Feels Like: {cityData.current_feel_f}</h3>
  </div>
  
  <div className="forcast-weather">
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
    <div className="box"></div>
  </div>
</div>

)
}

export default WeatherContainer;