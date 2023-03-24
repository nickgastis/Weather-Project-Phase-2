import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hidden, setHidden] = useState(false);

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
       The Weather App 
      </a>
      <div className="menu">
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
    </div>
  );
}

export default Header;
