import React from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";
import { useState } from "react";

function Search({savedCities}) {
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
        return <WeatherContainer cityData={el} isHome={true} handleButton={addButton} savedCities={savedCities}/>    
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
        
        setCitySearch(citySearch.concat(<WeatherCard  newCity={e.target.elements[0].value} info={info} />))

        e.target.reset()
    }

    


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
</div>
)
 }

export default Search;