// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/diver/bgimg.png'



function Shark() {
    var lumolink = <a href="https://viewport.ca/ateam4/" target='_blank'>LumoLearn</a>;
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title secondary" >Diver Game</h1>
        <p className='main-desc secondary'>Simple Scroller Game</p>
        <div className='btn-container'>
        {/*<a href="" target='_blank' className="btn btn-link">Visit</a>****idk !! maybe I host the game so they can play it????*********/}
        <a href="https://github.com/TayCarr/SharkGame" target='_blank' className="btn btn-link">Github</a>
        <a href="https://drive.google.com/file/d/1asUrgJaF7KDeuJFkRgajnIh8KiFmG8bj/view?usp=sharing" target='_blank' className="btn btn-link">Video</a>
        <a href="https://drive.google.com/file/d/1OY1MHE6rtuWDHusgXxTl_UjA5zK_LKW3/view?usp=sharing" target='_blank' className="btn btn-link">Report</a>
        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>In this assignment my group was tasked to apply what we learned about basic WebGL and GLSL
      to implement a simple game. Using a local engine we succesfully implemented the following features:</p>
      <ul>
        <li>Playing Field/ Terrain</li>
        <li>Main Player</li>
        <li>Objects and Interactions</li>
        <li>Non-player Character</li>
        <li>Change of View</li>
        <li>Score Tracker</li>
        <li>Lighting Changes</li>
      </ul>

    </div>
    
        
  );
}

export default Shark;