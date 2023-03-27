import React from "react";
import WeatherContainer from "./WeatherContainer";
import { useState } from "react";


function Home() {
    const cities = ["dallas", "london", "vancouver", "los angeles", "new york", "tokyo"]


 
    


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
    <h1 className="popular-cities">Popular Cities</h1>
    <WeatherContainer cities={cities}/>
</div>
)
}

export default Home;