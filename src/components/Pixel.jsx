// src/components/Pixel.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'
import BGIMG from '../assets/projects/pixel/window.png'

import windowpic from '../assets/projects/pixel/window2.png'

import snowdrop from '../assets/projects/pixel/snowdrop.png'
import iris from '../assets/projects/pixel/iris.png'
import daisy from '../assets/projects/pixel/daisy.png'
import poppy from '../assets/projects/pixel/poppy.png'

const flowers = [
    {id: 1, src: poppy, alt: 'Poppy flower'},
    {id: 2, src: daisy, alt: 'Daisy flower'},
    {id: 3, src: iris, alt: 'Iris flower'},
    {id: 4, src: snowdrop, alt: 'Snowdrop flower'},

]

import sun from '../assets/projects/pixel/sun.png'
import rain from '../assets/projects/pixel/rain.png'
import thunder from '../assets/projects/pixel/thunder.png'
import mist from '../assets/projects/pixel/mist.png'
import cloud from '../assets/projects/pixel/cloud.png'
import snow from '../assets/projects/pixel/snow.png'

const conditions = [
    {id: 1, src: sun, alt: 'Clear Skies'},
    {id: 2, src: rain, alt: 'Rainy'},
    {id: 3, src: thunder, alt: 'Thunderstorm'},
    {id: 4, src: mist, alt: 'Misty Weather'},
    {id: 5, src: cloud, alt: 'Cloudy Skies'},
    {id: 6, src: snow, alt: 'Snow fall'},

]
import ex1 from '../assets/projects/pixel/p1.png'
import ex2 from '../assets/projects/pixel/p7.png'
import ex3 from '../assets/projects/pixel/p5.png'
import ex4 from '../assets/projects/pixel/p6.png'

const examples = [
    {id: 1, src: ex1, alt: ''},
    {id: 2, src: ex2, alt: ''},
    {id: 3, src: ex3, alt: ''},
    {id: 4, src: ex4, alt: ' '},
]


function Pixel() {
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
      <div className="showcase-container">
        <h1 className="main-title secondary" >Pixel Clock</h1>
        <p className='main-desc secondary'>Timezone clock and weather app</p>
        <div className='btn-container'>
            <a href="https://taycarr.github.io/pixel-clock/" target='_blank' className="btn btn-link">Check it out!</a>
            <a href="https://github.com/TayCarr/pixel-clock" target='_blank' className="btn btn-link">Github</a>
        </div>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>Many of my friends live in a variety of places and I often found myself asking them "What time is it there?" or googling what time is it in *blank*. So as one does trying to brainstorm projects to work on I came up with the idea to create a timezone converter, but then I was like how could I make it cute too and due to the fact I have been playing Stardew Valley again I went straight to oh I could do some pixel art. Then I thought I could make a flower to display for each season, then I saw a window reference and thought it was perfect to place the flower on and then my next idea was to pull the current weather for that city and animate it in the window. So here we are! It is my first time ever doing pixel art so be kind and I wasn't too concerned with the reactivity to different screen sizes so it may be a bit janky, I more so wanted to focus on the art side and having fun coding it into a project.</p>
      
      <div className='window-display'>
        <img src={windowpic}></img>
        <p className='project-bio'>The window I made where the flower and the weather conditions will change! This was super fun to make, I found a free app for my Ipad and kinda just got to playing around, got a few reference images to use for each component and ya just really had a lot of fun playing around! :)</p>
      </div>
      <div className='gallery'>
        {flowers.map((flower) => (
            <img 
                key={flower.id}
                src={flower.src}
                alt={flower.alt}
                />
        ))}
        <p className='project-bio'>Flowers I drew for the seasonal change, I just take the month number and assign it to a fall, winter, summer or spring flower.</p>
      </div>

      <div className='gallery-conditions'>
        {conditions.map((condition) => (
            <img 
                key={condition.id}
                src={condition.src}
                alt={condition.alt}
                />
        ))}
        <p className='project-bio'>A few weather conditions I animated, here is just a still image of them. I read the API doc to figure out what conditions it may return.</p>
      </div>

      <div className='gallery-examples'>
        {examples.map((example) => (
            <img 
                key={example.id}
                src={example.src}
                alt={example.alt}
                />
        ))}
        <p className='project-bio'>Some examples of selected cities, I see I need to get some other weather types pictured... anyways I added the text of the city and then the info from the API on current temp and condition description.</p>
      </div>

      <p className='project-bio'> I do have some potential TODOs that I may implement but ya I am pretty happy with how this went, oh it is with typescript and idk never used it before was similar to react but enough that it was making my head spin a bit. 
            You can see a little peak of the dropdown menu I did </p>

    </div>
    
        
  );
}

export default Pixel;