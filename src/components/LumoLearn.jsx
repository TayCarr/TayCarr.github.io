// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'


function LumoLearn() {
    var lumolink = <a href="https://viewport.ca/ateam4/" target='_blank'>LumoLearn</a>;
  return (
    <div>
     
      <h1 className='project-title'>LumoLearn</h1>
      <p className='project-bio'>For my capstone I partnered with two designers from Macewan's UX program and one other computer science student. Our supervisor had a project that connected us with a researcher at the UofA who does work involving dyslexia and how to aid in childrens learning. 
      For the first month while the designers did their discover phase us programmers looked into frameworks in which we could bring this application to life. 
      A few constraints were given: It must be a web application for a tablet, no downloads to access and must be touch responsive. 
      With this is mind I looked at React, React Native, Unity, and so on. Since we could only do basic work in the first month of January while the designers worked on their discovery phase the project was to be presented early April, my partner and I decided that in order to build an app with simple games
      in a short amount of time we would go with React or React Native. After looking into both React was the better option due to the task being a web app.
      The entire process of working on a project with a team taught me a lot of valuable lessons. Working with non comp sci students challenged me to speak in 
      terms they would understand, it forced me to be honest about my capabilities and what could be accomplished in a short amount of time and overall I felt my confidence grow with each team meeting or supervisor meeting. As much as I hate presenting I found myself speaking with confidence about the work I had done.
      I absolutely loved working on this project! It was my first time doing any sort of web development or doing a semi self guided project, even after all the stress I would do it again, except maybe implementing all the css in about a week that made me dizzy. Thank you to my amazing supervisors, I hope to see this project grow even more. </p>

      <p className='project-bio'>If you would like to check out {lumolink} it is still live, you can "login" with anything or sign up with anything data is not being collected and stored, the database currently only holds a word bank for the games. The pages can get a little silly if you are not on a tablet.</p>

      
    </div>
        
  );
}

export default LumoLearn;