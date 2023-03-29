import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";

function SaveList({ savedCities, setSavedCities, removeCity}) {
  const [clicked, setClicked] = useState({});
 
  useEffect(() => {
    fetch("http://localhost:3001/saved")
      .then((response) => response.json())
      .then((data) =>
        setSavedCities(data.map((city) => {
          return city.cityname;
        }))
      );
  }, []);



  const deleteButton = (clicked) => {
    fetch(`http://localhost:3001/saved/${clicked.city}`, {
      method: 'DELETE'
    })
    removeCity(clicked.city)
  }

  const info = (el) => {
    setClicked(el);
  };
  const displayInfo = (el) => {
    return <WeatherContainer cityData={el} handleButton={deleteButton} />;
  };

  const toDisplay = () => {
    if (clicked.city === undefined) {
      return null;
    } else {
      return displayInfo(clicked);
    }
  };

    const newCitys = savedCities.map((city) => {
        return <WeatherCard key={city} newCity={city} info={info}/>
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
    
    <h1 className="popular-cities">Your Cities</h1>
    
    
    <div className="weather-container">
        {newCitys}
    </div>

   
</div>
)
    }


export default SaveList;