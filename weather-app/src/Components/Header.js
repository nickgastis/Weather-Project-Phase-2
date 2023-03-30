import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header({handleToggle}) {
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
        <button className="button-main">Save List</button>
        </Link>
        <Link to={'/Search'}>
        <button className="button-main">Search</button>
        </Link>
       

      </div>
    <label class="toggle-button" for="toggle">
        <input id="toggle" type="checkbox" onClick={handleToggle}></input>
        <span class="slider"></span>
    </label>
    </div>
  );
}

export default Header;
