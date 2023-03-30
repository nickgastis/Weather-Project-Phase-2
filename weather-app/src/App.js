import Header from './Components/Header';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import SaveList from './Components/SaveList';
import Search from './Components/Search';
import { useEffect, useState } from 'react';

//  process.env.REACT_APP_WEATHER_API_KEY
function App() {
  const [savedCities, setSavedCities] = useState([])
  
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  

  const handleToggle = () => {
    setIsFahrenheit(!isFahrenheit);
  }

  
  const removeCity = (el) => {
    const filteredCities = savedCities.filter((city) => {
      return city !== el });
      setSavedCities(filteredCities);
  }
  

  useEffect(() => {
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': "c05087638ec341d5a50134107232403",
    //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=dallas&days=1', options)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));

    // fetch(`https://api.weatherapi.com/v1/forecast.json?key=c05087638ec341d5a50134107232403&q=dallas&days=1&aqi=no&alerts=no`)
    // .then(response => response.json())
    // .then(data => console.log(data))
  },[])

  return (
    <div className="App">
      <Header handleToggle={handleToggle}/>
      <Routes>
        <Route path={'/'} element={<Home savedCities={savedCities} isFahrenheit={isFahrenheit}/>} />
        <Route path={'/saveList'} element={<SaveList savedCities={savedCities} setSavedCities={setSavedCities} removeCity={removeCity} isFahrenheit={isFahrenheit}/>} />
        <Route path={'/search'} element={<Search savedCities={savedCities} isFahrenheit={isFahrenheit}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
