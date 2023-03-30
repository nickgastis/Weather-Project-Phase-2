import React from "react";
import WeatherCard from "./WeatherCard";
import  uuid  from 'react-uuid';
import { Children } from "react";

function WeatherContainer({ cityData, isHome, handleButton, isFahrenheit}) {
    
    

    // const localtime = parseInt(cityData.time[0].slice(11, 13)) - 1
    // [cityData.temp_f[i], cityData.feelslike_f[i]]
    const hourMerger = () => {
        const mergedHours = []
        for (let i = 0; i < 11; i++){
            mergedHours.push([cityData.temp_f[i], cityData.time[i].slice(11, 13), cityData.forecast_condition_icon[i]])
        }
        return mergedHours
    }
    // console.log(localtime)
    const timeConverter = (el) => {
      if (el <= 12 && el !== 0){
        return ` ${el} am`
      } else if (el > 12){
        return `${el - 12} pm `
      } else {return `12 am`}
    }

    const tempMapped = hourMerger().map((hourlyData) => {
        return <div className="box" key={uuid()}>
                <img className='icon-hour'src={hourlyData[2]}></img>
                <h1 className='temp-hour'style={{fontSize: 10}} >{hourlyData[0]}°</h1>
                <h1 className='hour' style={{fontSize: 10}} >{timeConverter(hourlyData[1])}</h1>
            </div>
    })

//   > 12 ? `${hourlyData[2] - 12} pm`: `${hourlyData[2]} am`}
return (
<div className="weather-container-card">
  <div className="current-weather">
    <h1 className="city">{cityData.city}</h1>
    <button className="button-main card-button" onClick={() => (handleButton(cityData))} >{isHome ? "save": "remove"}</button>
    <img className='emoji' src={cityData.current_condition_icon}></img>
    <h2 className='temperature'>{isFahrenheit ? cityData.current_temp_f : cityData.current_temp_c} {isFahrenheit ? 'F°' : 'C°'}</h2>
    <h3 className="condition">Condition: {cityData.current_condition_text}</h3>
    <h3 className="feels-like">Feels Like: {isFahrenheit ? cityData.current_feel_f : cityData.current_feel_c} {isFahrenheit ? 'F°' : 'C°'}</h3>
  </div>
  
  <div className="forcast-weather">
    <div className="box">
        <img className="icon-hour" src={cityData.current_condition_icon}></img>
        <h1 className='temp-hour'style={{fontSize: 10}}>{cityData.current_temp_f}°</h1>
        <h1 style={{fontSize: 10}} >Now</h1>
    </div>

    {tempMapped}
  </div>
</div>

)
}

export default WeatherContainer;