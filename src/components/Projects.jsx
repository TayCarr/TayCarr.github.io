//Projects (library?)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'

import L1 from '../assets/projects/lumo/l1.png'
import L2 from '../assets/projects/lumo/l4.png'
import L3 from '../assets/projects/lumo/l11.png'
import L4 from '../assets/projects/lumo/l13.png'
import L5 from '../assets/projects/lumo/l15.png'

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
   
];

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Projects = () => {
    return(
        <div>
            <h1 className='project-title'>Project Showcase</h1>
            <p className='project-bio'>Here you can find examples of projects that I have worked on in the past, or am currently working on. Clicking on a project will bring up further information on that project.</p>
            <div className='lumo-container'>
                <h2>LumoLearn</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='lumo-proj-car'/>
            </div>
            <div className='shark-container'>
                <h2>Shark Game</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='shark-proj-car'/>
            </div>
            <div className='read-container'>
                <h2>Extra Readings (work on name?)</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='read-proj-car'/>
            </div>
            <div className='dog-container'>
                <h2>Dog Daycare Portal</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='dog-proj-car'/>
            </div>
            
            
            
        </div>

    );
};

export default Projects;