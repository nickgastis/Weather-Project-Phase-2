import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";
import { useState } from "react";
import {motion} from 'framer-motion'

function Search({savedCities, isFahrenheit}) {
    const [citySearch, setCitySearch] = useState([])
    // const cities = ['dallas', "london", "vancouver", "los angeles", "new york", "tokyo", "paris"]
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
        return <WeatherContainer cityData={el} isHome={true} handleButton={addButton} savedCities={savedCities} isFahrenheit={isFahrenheit}/>    
    }
    
    const toDisplay = () => {
        if (clicked == 'no') {
            return null 
        } else {
            {return displayInfo(clicked)}
        }
    }

    // const newCitys = citySearch.map((city, index) => {
    //     return <WeatherCard key={index} newCity={city} info={info}/>
    // })
 
    const handleSearch = (e) => {
        e.preventDefault()
        const stuff = e.target.elements[0].value
      
        const run = (name) => {
          setCitySearch(citySearch.concat(<WeatherCard newCity={name} info={info} isFahrenheit={isFahrenheit} />))
        }
      
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=c05087638ec341d5a50134107232403&q=${stuff}&days=2&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(data => {run(data.location.name)})
            .catch(error => {
            alert(`"${stuff}" isn't a city dumbass.`)
        })
            e.target.reset()
      }
      
    


    return (
<motion.div className="search"
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
        <h1 className="popular-cities">Search Cities</h1>
<form className='search-bar' onSubmit={(e) => {handleSearch(e)}}>
    <div class="form__group field">
     <input required="" placeholder="Name" class="form__field" type="text"></input>
     <label class="form__label" for="name">Search</label>
    </div>
</form>
        {toDisplay()}
<div className="weather-container">
        {citySearch}
    </div>
</motion.div>
)
 }

export default Search;