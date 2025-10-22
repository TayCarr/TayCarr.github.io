//header component
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import '../css/header.css'

const goHome = () => {
    navigate("/");
};
const Header = () => {
    return(
        <nav className="navbar">
      <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
          </div>
          <ul className="menu-items">
              <li><Link to="/">Home</Link></li>
              {/*<li><a href="#about">Delta</a></li>*/}
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/GlassHanded">GlassHanded</Link></li>
              {/*<li><a href="#food-menu">Gaming</a></li>*/}
              <li><a href="#contact">Contact</a></li>{/*idk do I want a page? for now just link to footer? */}
          </ul>
          <h1 className="logo">TC</h1>
      </div>
  </nav>

    );
};

export default Header;