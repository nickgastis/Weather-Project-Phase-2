import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";


function Header({handleToggle}) {

  const {user} = useAuth0();

  const [hidden, setHidden] = useState(false);

  
  
  //On scroll Dissapear
  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 0 && !hidden) {
      setHidden(true);
    } else if (scrollPosition === 0 && hidden) {
      setHidden(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hidden]);
  
  
  //LOGGED OUT
  if(!user) {
    return (
      <div className={`header${hidden ? " hidden" : ""}`}>
      <a className="header-logo-out">
      <Link to={'/'}>
      <img src='/images/logo-2.png' className='header-logo-out' alt=""></img>
      </Link>
      </a>
      <div className="menu-logged-out">
        <Link to={'/'}>
          <button className="button-main">Home</button>
        </Link>
       
        <Link to={'/Search'}>
        <button className="button-main">Search</button>
        </Link>
       
      </div>
      
      <div className="toggle-div-out">

       <LoginButton />
        
      </div>


    </div>
      )
  }



  return (
    <div className={`header${hidden ? " hidden" : ""}`}>
      <a className="logo">
      <Link to={'/'}>
      <img src='/images/logo-2.png' className='header-logo' alt=""></img>
      </Link>
      </a>
      <div className="menu">
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
      
      <div className="toggle-div">

        <label class="toggle-button" for="toggle">
            <input id="toggle" type="checkbox" onClick={handleToggle}></input>
            <span class="slider"></span>
        </label>
        <LogoutButton />
        
      </div>


    </div>
  );
}

export default Header;
