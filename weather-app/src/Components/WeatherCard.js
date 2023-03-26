import React, { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";

function WeatherCard({newCity}) {
    

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

    const hours = () => {
        const now = new Date().getHours()
        const toTime = []

        for ( let i = now; i <= now + 12; i++){
            toTime.push(i > 23 ? i - 23: i)
        }

        return toTime
    }
    


    useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=c05087638ec341d5a50134107232403&q=${newCity}&days=1&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => setCityData({
        city: data.location.name, 
        region: data.location.region,
        temp_c: hours().map((hour) => {
            return data.forecast.forecastday[0].hour[hour].temp_c
        }),
        temp_f: hours().map((hour) => {
            return data.forecast.forecastday[0].hour[hour].temp_f
        }),
        feelslike_c: hours().map((hour) => {
            return data.forecast.forecastday[0].hour[hour].feelslike_c
        }),
        feelslike_f: hours().map((hour) => {
            return data.forecast.forecastday[0].hour[hour].feelslike_f
        })
    
    }) ) 
    
    }, [])



return (
<div className="weather-card">
    { <h1>{cityData.city}</h1>}
</div>
)
}

export default WeatherCard;