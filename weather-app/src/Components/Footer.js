import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from './img/LogoMakr.png'


function Footer() {
  



  return (
   <div className="footer">
        <div class="footer-title">
    <div class="box">W</div>
    <div class="box">E</div>
    <div class="box">A</div>
    <div class="box">T</div>
    <div class="box">H</div>
    <div class="box">E</div>
    <div class="box">R</div>
</div>
        <img src='/images/logo-1.png' className='footer-logo' alt=""></img>
        <div className="footer-nav">
        <Link to={'/'}>
          <button>Home</button>
        </Link>
        <Link to={'/SaveList'}>
        <button>Save List</button>
        </Link>
        <Link to={'/Search'}>
        <button>Search</button>
        </Link>
        </div>
        <h3 id="copyright">© 2023 Weather App</h3>
   </div>
  )
}

export default Footer;