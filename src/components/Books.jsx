// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/cake-bg.jpeg'

import bookcaseIMG from '../assets/projects/books/bookshelf.jpg'



function Books() {
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title tertiary" >Taylor's Library</h1>
        <p className='main-desc tertiary'>Working through a variety of readings</p>
        <div className='btn-container'>
        <a href="https://github.com/TayCarr/FurtherLearning" target='_blank' className="btn btn-link">Github</a>

        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>I enjoy working through academic books. Hover over a book to see the cover or click on one to bring up more information.</p>
      {/*<img className='case' src={bookcaseIMG}></img>*/}

    </div>
    
        
  );
}

export default Books;