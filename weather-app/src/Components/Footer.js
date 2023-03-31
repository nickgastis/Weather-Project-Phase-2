import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './img/LogoMakr.png'
import { useAuth0 } from "@auth0/auth0-react";


function Footer() {

  const {user} = useAuth0();
  
//LOGGED OUT
if(!user) {
  return (
    <div className="footer">
        <h1 id="footer-title">Weather App</h1>
        <h2>Created by: Reed, Nick & Jeff</h2>
        <img src='/images/logo-2.png' className='footer-logo' alt=""></img>
        <div className="footer-nav-out">
        <Link to={'/'}>
          <button className="button-main">Home</button>
        </Link>
        
        <Link to={'/Search'}>
        <button className="button-main">Search</button>
        </Link>
        </div>
        <h3 id="copyright">© 2023 Weather App</h3>
   </div>
    )
}


  return (
   <div className="footer">
        <h1 id="footer-title">Weather App</h1>
        <h2>Created by: Reed, Nick & Jeff</h2>
        <img src='/images/logo-2.png' className='footer-logo' alt=""></img>
        <div className="footer-nav">
        <Link to={'/'}>
          <button className="button-main">Home</button>
        </Link>
        <Link to={'/SaveList'}>
        <button className="button-main">My Cities</button>
        </Link>
        <Link to={'/Search'}>
        <button className="button-main">Search</button>
        </Link>
        </div>
        <h3 id="copyright">© 2023 Weather App</h3>
   </div>
  )
}

export default Footer;