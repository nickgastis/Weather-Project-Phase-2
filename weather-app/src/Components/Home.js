import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";
import { useState } from "react";

function Home({savedCities}) {
    const cities = ["dallas", "london", "vancouver", "los angeles", "new york", "tokyo", "paris", "brisbane"]
    const [clicked, setClicked] = useState(['no'])
   


    const addButton = (cityname) => {

       const stopDuplicate = savedCities.includes(cityname.city)
       if(!stopDuplicate) {
        const configOb = {
            cityname: cityname.city,
            id: cityname.city
        }
        fetch("http://localhost:3001/saved", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body:JSON.stringify(configOb)
        })}
    }
    

    const info = (el) => {setClicked(el)}
    const displayInfo = (el) => {
        return <WeatherContainer cityData={el} isHome={true} handleButton={addButton} savedCities={savedCities}/>    
    }
    
    const toDisplay = () => {
        if (clicked == 'no') {
            return null 
        } else {
            {return displayInfo(clicked)}
        }
    }

    const newCitys = cities.map((city, index) => {
        return <WeatherCard key={index} newCity={city} info={info}/>
    })
 
    


    return (
<div className="home">
<div class="title">
    <div class="box">W</div>
    <div class="box">E</div>
    <div class="box">A</div>
    <div class="box">T</div>
    <div class="box">H</div>
    <div class="box">E</div>
    <div class="box">R</div>
</div>
    {toDisplay()}
    
    <h1 className="popular-cities">Popular Cities</h1>
    
    
    <div className="weather-container">
        {newCitys}
    </div>

   
</div>
)
    }

export default Home;