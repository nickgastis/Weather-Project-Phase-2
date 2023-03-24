import Header from './Components/Header';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import SaveList from './Components/SaveList';
import Search from './Components/Search';
import { useEffect } from 'react';


function App() {
  

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=dallas&days=1', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/saveList'} element={<SaveList />} />
        <Route path={'/search'} element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
