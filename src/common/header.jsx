//header component
import { React, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import '../css/header.css'

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false); // close menu when link is clicked
  };

    return(
        <nav className="navbar">
      <div className="navbar-container container">
          <input type="checkbox" name="" id="menu-toggle"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)} />
          <div className="hamburger-lines" onClick={() => setIsChecked(!isChecked)}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              {/*<li><a href="#about">Delta</a></li>*/}
              <li><Link to="/Projects" onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/GlassHanded" onClick={handleLinkClick}>GlassHanded</Link></li>
              {/*<li><a href="#food-menu">Gaming</a></li>*/}
              <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>{/*idk do I want a page? for now just link to footer? */}
          </ul>
          <h1 className="logo">TC</h1>
      </div>
  </nav>

    );
};

export default Header;