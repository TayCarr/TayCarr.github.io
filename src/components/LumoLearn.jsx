// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'

import L1 from '../assets/projects/lumo/l1.png'
import L2 from '../assets/projects/lumo/l2.png'
import L3 from '../assets/projects/lumo/l3.png'
import L4 from '../assets/projects/lumo/l4.png'
import L5 from '../assets/projects/lumo/l5.png'
import L6 from '../assets/projects/lumo/l6.png'
import L7 from '../assets/projects/lumo/l7.png'
import L8 from '../assets/projects/lumo/l8.png'
import L9 from '../assets/projects/lumo/l9.png'
import L10 from '../assets/projects/lumo/l10.png'
import L11 from '../assets/projects/lumo/l11.png'
import L12 from '../assets/projects/lumo/l12.png'
import L13 from '../assets/projects/lumo/l13.png'
import L14 from '../assets/projects/lumo/l14.png'
import L15 from '../assets/projects/lumo/l15.png'
import L16 from '../assets/projects/lumo/l16.png'
import L17 from '../assets/projects/lumo/l19.png'
import L18 from '../assets/projects/lumo/l20.png'
import L19 from '../assets/projects/lumo/l21.png'
import L20 from '../assets/projects/lumo/l22.png'


const IMAGELIST = [
    {
        id : 1,
        src: L1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: L2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: L3,
        alt: "Image 3",
    },
    {
        id : 4,
        src: L4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: L5,
        alt: "Image 5",
    },
    {
        id : 6,
        src: L6,
        alt: "Image 6",
    },
    {
        id : 7,
        src: L7,
        alt: "Image 7",
    },
    {
        id : 8,
        src: L8,
        alt: "Image 8",
    },
    {
        id : 9,
        src: L9,
        alt: "Image 9",
    },
    {
        id : 10,
        src: L10,
        alt: "Image 10",
    },
    {
        id : 11,
        src: L11,
        alt: "Image 11",
    },
    {
        id : 12,
        src: L12,
        alt: "Image 12",
    },
    {
        id : 13,
        src: L13,
        alt: "Image 13",
    },
    {
        id : 14,
        src: L14,
        alt: "Image 14",
    },
    {
        id : 15,
        src: L15,
        alt: "Image 15",
    },
    {
        id : 16,
        src: L16,
        alt: "Image 16",
    },
    {
        id : 17,
        src: L17,
        alt: "Image 17",
    },
    {
        id : 18,
        src: L18,
        alt: "Image 18",
    },
    {
        id : 19,
        src: L19,
        alt: "Image 19",
    },
    {
        id : 20,
        src: L20,
        alt: "Image 20",
    },
    
   
];

const OPTIONS = { loop: true }
const SLIDE_COUNT = 20
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



function LumoLearn() {
    var lumolink = <a href="https://viewport.ca/ateam4/" target='_blank'>LumoLearn</a>;
  return (
    
    <div>
        <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${L1})`}}>
      <div className="showcase-container">
        <h1 className="main-title" >LumoLearn</h1>
        <p className='main-desc'>Web based learning for children with Dyslexia.</p>
        <a href="https://viewport.ca/ateam4/" target='_blank' className="btn btn-link">Visit</a>
      </div>
    </div>
     
      <h1 className='project-title'></h1>
      <p className='project-bio'>For my capstone I partnered with two designers from Macewan's UX program and one other computer science student. Our supervisor had a project that connected us with a researcher at the UofA who does work involving dyslexia and how to aid in childrens learning. 
      For the first month while the designers did their discover phase us programmers looked into frameworks in which we could bring this application to life. 
      A few constraints were given: It must be a web application for a tablet, no downloads to access and must be touch responsive. 
      With this is mind I looked at React, React Native, Unity, and so on. Since we could only do basic work in the first month of January while the designers worked on their discovery phase the project was to be presented early April, my partner and I decided that in order to build an app with simple games
      in a short amount of time we would go with React or React Native. After looking into both React was the better option due to the task being a web app.
      The entire process of working on a project with a team taught me a lot of valuable lessons. Working with non comp sci students challenged me to speak in 
      terms they would understand, it forced me to be honest about my capabilities and what could be accomplished in a short amount of time and overall I felt my confidence grow with each team meeting or supervisor meeting. As much as I hate presenting I found myself speaking with confidence about the work I had done.
      I absolutely loved working on this project! It was my first time doing any sort of web development or doing a semi self guided project, even after all the stress I would do it again, except maybe implementing all the css in about a week that made me dizzy. Thank you to my amazing supervisors, I hope to see this project grow even more. </p>

      <p className='project-bio'>If you would like to check out {lumolink} it is still live, you can "login" with anything or sign up with anything data is not being collected and stored, the database currently only holds a word bank for the games. The pages can get a little silly if you are not on a tablet. If you are accessing the Odd-One-Out games there is a delay while the backend wakes up and fetches words but once it is awake it won't sleep for awhile.</p>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='inner-proj'/>
    </div>
    
        
  );
}

export default LumoLearn;