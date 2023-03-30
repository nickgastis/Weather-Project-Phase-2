
import Footer from './Components/Footer';
import {useLocation} from "react-router-dom"
import './App.css';
import { useEffect, useState } from 'react';
import AnimatedRoutes from './Components/AnimatedRoutes';


//  process.env.REACT_APP_WEATHER_API_KEY
function App() {
  
 
  
  return (
    <div className="App">
      
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
