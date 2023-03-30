import React from "react";
import { Routes, Route, useLocation} from "react-router-dom"
import Header from './Header';
import Home from "./Home";
import SaveList from "./SaveList";
import Search from './Search';
import {AnimatePresence} from 'framer-motion';
import { useState } from "react";

function AnimatedRoutes() {
    const [savedCities, setSavedCities] = useState([])
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    const removeCity = (el) => {
        const filteredCities = savedCities.filter((city) => {
          return city !== el });
          setSavedCities(filteredCities);
      }

      const handleToggle = () => {
        setIsFahrenheit(!isFahrenheit);
      }



    const location = useLocation();
    return (
        <>
        <Header handleToggle={handleToggle}/>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path={'/'} element={<Home savedCities={savedCities} isFahrenheit={isFahrenheit}/>} />
            <Route path={'/saveList'} element={<SaveList savedCities={savedCities} setSavedCities={setSavedCities} removeCity={removeCity} isFahrenheit={isFahrenheit}/>} />
            <Route path={'/search'} element={<Search savedCities={savedCities} isFahrenheit={isFahrenheit}/>} />
        </Routes>
      </AnimatePresence>
      </>
    )
}

export default AnimatedRoutes