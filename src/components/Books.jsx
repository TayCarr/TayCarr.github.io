// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/cake-bg.jpeg'



function Books() {
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title tertiary" >Code Books</h1>
        <p className='main-desc tertiary'>Working through a variety of readings</p>
        <div className='btn-container'>
        <a href="https://github.com/TayCarr/FurtherLearning" target='_blank' className="btn btn-link">Github</a>

        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>I like to work through those coding books, usually they are from No Starch Press and they are typically filled with basic information I already know but I still enjoy doing them. You can check out the repo to see what I have been working on, one day I hope to have completed a decent size library and venture into topics I am not familiar with.</p>

    </div>
    
        
  );
}

export default Books;