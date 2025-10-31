// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/T9.jpeg'



function Site() {

  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title tertiary" >This Site!</h1>
        <p className='main-desc tertiary'>Just a site about me</p>
        <div className='btn-container'>
        <a href="https://github.com/TayCarr/TayCarr.github.io" target='_blank' className="btn btn-link">Github</a>
        <a href="https://docs.google.com/document/d/1-HpdecFSOMx4mjvop4UaAihX3Eh8uu4Im028RO4oeiM/edit?usp=sharing" target='_blank' className="btn btn-link">Report</a>
        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>Just you know making a personal site to showcase me and the things that I do! Following what I learned in my capstone I have been keeping a report of the process.</p>

    </div>
    
        
  );
}

export default Site;