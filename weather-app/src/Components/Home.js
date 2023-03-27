
    const info = (el) => {setClicked(el)}
    const displayInfo = (el) => {
        return <WeatherContainer cityData={el} />    
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
    <h1 className="popular-cities">Popular Cities</h1>
    {displayInfo(clicked)}
    

    <div className="weather-container">
        {newCitys}
    </div>

   
</div>
)
}

export default Home;