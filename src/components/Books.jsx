// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/lumo/bgimg.png'



function Books() {
    var lumolink = <a href="https://viewport.ca/ateam4/" target='_blank'>LumoLearn</a>;
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title" >LumoLearn</h1>
        <p className='main-desc'>Web based learning for children with Dyslexia.</p>
        <div className='btn-container'>
        <a href="https://viewport.ca/ateam4/" target='_blank' className="btn btn-link">Visit</a>
        <a href="https://github.com/ConcernedMotley/CMPT496-Dyslexia-App" target='_blank' className="btn btn-link">Github</a>
        <a href="https://drive.google.com/file/d/1T2t6gREiRYx4cKGbZu4N1l9sFqL4h-i0/view?usp=sharing" target='_blank' className="btn btn-link">Video</a>
        <a href="https://docs.google.com/document/d/19Yz3YItoCa8esZX9sJQI5_zgR7XDsVOdCFVbJ1mkwFI/edit?usp=sharing" target='_blank' className="btn btn-link">Report</a>
        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>I like to work through those coding books, usually they are from No Starch Press and they are typically filled with basic information I already know but I still enjoy doing them. </p>

    </div>
    
        
  );
}

export default Books;