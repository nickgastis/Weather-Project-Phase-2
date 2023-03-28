import React, {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";


function SaveList() {
    const [cities, setCities] = useState([])
    const [clicked, setClicked] = useState(['no'])


    useEffect(() => {
        fetch("http://localhost:3001/saved")
        .then(response => response.json())
        .then(data => setCities(data.map((city) => {
            return city.cityname
        })))
    }, [])
    console.log(cities)

    const info = (el) => {setClicked(el)}
    const displayInfo = (el) => {
        return <WeatherContainer cityData={el} />    
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


export default SaveList;