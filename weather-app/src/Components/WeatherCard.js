import React, { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";
import WeatherContainer from "./WeatherContainer";

function WeatherCard({newCity, info, isFahrenheit}) {
  


    const [time, setTime] = useState([])

    const [cityData, setCityData] = useState({
      

    })
    


    // const hours = () => {

    //     const now = new Date().getHours()
    //     const toTime = []

    //     //  a function cuz it wont let me write the if statment in the if statment 
    //     const ifHours = (i) => { if ( i + 21 < 24) { toTime.push(i + 21)} }

    //     // if statment to check set toTime = to the hours needed
    //     if (now >= 8 && now <= 20){
    //     for (let i = 8; i <= 20; i++) {
    //         toTime.push(i)  }
    //     } else {
    //         for (let i = 0; i <= 7; i++) {
    //             toTime.push(i) && ifHours(i)
    //         } 
    //     }
    //     console.log(toTime.sort())
    //     return toTime.sort()
    //     }

    const timeConverter = (el) => {
      if (el <= 12 && el !== 0){
        return ` ${el} am`
      } else if (el > 12){
        return `${el - 12} pm `
      } else {return `12 am`}
    }



    const hours = (localtime) => {
        const now = parseInt(localtime.slice(11, 13))
        const toTime = []
      
        for ( let i = now + 1; i < now + 12; i++){
            toTime.push((i > 23 ? i - 23: i))
        }

        return toTime
    }
    


    useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=c05087638ec341d5a50134107232403&q=${newCity}&days=2&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => setCityData({
        city: data.location.name,
        current_time: data.location.localtime.slice(11, 13), 
        region: data.location.region,
        current_temp_f: data.current.temp_f,
        current_temp_c: data.current.temp_c,
        current_feel_f: data.current.feelslike_f,
        current_feel_c: data.current.feelslike_c,
        current_condition_text: data.current.condition.text,
        current_condition_icon: data.current.condition.icon,
        
        time: hours(data.location.localtime).map((hour) => {
          return data.forecast.forecastday[0].hour[hour].time
        }),
        temp_c: hours(data.location.localtime).map((hour) => {
            return data.forecast.forecastday[0].hour[hour].temp_c
        }),
        temp_f: hours(data.location.localtime).map((hour) => {
            return data.forecast.forecastday[0].hour[hour].temp_f
        }),
        feelslike_c: hours(data.location.localtime).map((hour) => {
            return data.forecast.forecastday[0].hour[hour].feelslike_c
        }),
        feelslike_f: hours(data.location.localtime).map((hour) => {
            return data.forecast.forecastday[0].hour[hour].feelslike_f
            
        }),
        forecast_condition_icon: hours(data.location.localtime).map((hour) => {
          return data.forecast.forecastday[0].hour[hour].condition.icon
        })
    
    }) ) 
    
    }, [])
    

return (
    <div className="weather-card" onClick={() => info(cityData)}>
      
<div class="card" >
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>{cityData.city}</span>
    <span>{timeConverter(cityData.current_time)}</span>
  </div>

  <span class="temp">{isFahrenheit ? cityData.current_temp_f : cityData.current_temp_c}</span>

  <div class="temp-scale">
    <span>{isFahrenheit ? 'F°' : 'C°'}</span>
  </div>
</div>
</div>
)
}

export default WeatherCard;