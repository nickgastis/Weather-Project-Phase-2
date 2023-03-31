import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import WeatherContainer from "./WeatherContainer";
import {motion} from 'framer-motion'

function SaveList({ savedCities, setSavedCities, removeCity, isFahrenheit}) {
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
  setClicked({})
}

const info = (el) => {
  setClicked(el);
  displayInfo(el);
};

const displayInfo = (el) => {
  const container = <WeatherContainer cityData={el} handleButton={deleteButton} isFahrenheit={isFahrenheit}/>;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return container;
};


  const toDisplay = () => {
    if (clicked.city === undefined) {
      return null;
    } else {
      return displayInfo(clicked);
    }
  };

    const newCitys = savedCities.map((city) => {
        return <WeatherCard key={city} newCity={city} info={info} isFahrenheit={isFahrenheit}/>
    })
 
    


    return (
<motion.div className="SaveList"

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
    
    <h1 className="popular-cities">My Cities</h1>
    
    
    <div className="weather-container">
        {newCitys}
    </div>

   
</motion.div>
)
    }


export default SaveList;