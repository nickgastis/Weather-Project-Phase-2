import React from "react";
import WeatherContainer from "./WeatherContainer";


function Home() {
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
    <WeatherContainer />
</div>
)
}

export default Home;