import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";
import { useState } from "react";
import {motion} from 'framer-motion'

function Home({savedCities, isFahrenheit}) {
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
        const container = <WeatherContainer cityData={el} isHome={true} handleButton={addButton} savedCities={savedCities} isFahrenheit={isFahrenheit}/>;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return container;
    }
    
    const toDisplay = () => {
        if (clicked == 'no') {
            return null 
        } else {
            {return displayInfo(clicked)}
        }
    }

    const newCitys = cities.map((city) => {
        return <WeatherCard key={city} newCity={city} info={info} isFahrenheit={isFahrenheit}/>
    })
 
    


    return (
<motion.div className="home"
    initial={{x: 0, opacity: 0}}
    animate={{x: 0, opacity: 1, transition: {duration: 0.6}}}
    

>
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

   
</motion.div>
)
    }

export default Home;