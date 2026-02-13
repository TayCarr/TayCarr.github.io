// src/components/Pixel.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/pixel/window.png'



function Pixel() {
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title secondary" >Pixel Clock</h1>
        <p className='main-desc secondary'>Timezone clock and weather app</p>
        <div className='btn-container'>
        <a href="https://github.com/TayCarr/pixel-clock" target='_blank' className="btn btn-link">Github</a>

        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>Many of my friends live in a variety of places and I often found myself asking them "What time is it there?" or googling what time is it in *blank*. So as one does trying to brainstorm projects to work on I came up with the idea to create a timezone converter, but then I was like how could I make it cute too and due to the fact I have been playing Stardew Valley again I went straight to oh I could do some pixel art. Then I thought I could make a flower to display for each season, then I saw a window reference and thought it was perfect to place the flower on and then my next idea was to pull the current weather for that city and animate it in the window. So here we are! It is my first time ever doing pixel art so be kind and I wasn't too concerned with the reactivity to different screen sizes so it may be a bit janky, I more so wanted to focus on the art side and having fun coding it into a project.</p>
      <p className='project-bio'> Potential ToDos include a nicer drop down menu (again I wanted to focus more on the window art so I did the basic), a flower for each month, custom input for city selection (I have a few cities as options but would be nice to allow user to look up a city of their choice but would need some error handling since the api is kinda picky with the city input)</p>

    </div>
    
        
  );
}

export default Pixel;