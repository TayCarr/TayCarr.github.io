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

import P1 from '../assets/projects/pixel/p1.png'
import P2 from '../assets/projects/pixel/p2.png'
import P3 from '../assets/projects/pixel/p3.png'
import P4 from '../assets/projects/pixel/p4.png'
import P5 from '../assets/projects/pixel/p5.png'

const PIMAGELIST = [
    {
        id : 1,
        src: P1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: P2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: P3,
        alt: "Image 3",
    },
    {
        id : 4,
        src: P4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: P5,
        alt: "Image 5",
    },
   
];

import S1 from '../assets/projects/diver/s1.png'
import S2 from '../assets/projects/diver/s2.png'
import S3 from '../assets/projects/diver/s3.png'
import S4 from '../assets/projects/diver/s4.png'
import S5 from '../assets/projects/diver/s5.png'

const SIMAGELIST = [
    {
        id : 1,
        src: S1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: S2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: S3,
        alt: "Image 3",
    },
    {
        id : 4,
        src: S4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: S5,
        alt: "Image 5",
    },
   
];

import W1 from '../assets/projects/site/w1.png'
import W2 from '../assets/projects/site/w2.png'
import W3 from '../assets/projects/site/w3.png'
import W4 from '../assets/projects/site/w4.png'
import W5 from '../assets/projects/site/w5.png'

const WIMAGELIST = [
    {
        id : 1,
        src: W1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: W2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: W3,
        alt: "Image 3",
    },
    {
        id : 4,
        src: W4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: W5,
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
            <p className='project-bio'>Here you can find examples of projects that I have worked on in the past, or am currently working on. Clicking on a project will bring up further information on that project (give me a minute to do this refer to footer disclaimer). As I work on more personal projects the hope is to cycle out the school projects and build upon the things I learnt in doing those projects.</p>
            <div className='lumo-container'>
            <li><Link to="/Projects/LumoLearn" >LumoLearn</Link></li>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='lumo-proj-car'/>
            </div>
            <div className='pixel-container'>
            <li><Link to="/Projects/PixelClock" >Pixel Clock</Link></li>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={PIMAGELIST} className='pixel-proj-car'/>
            </div>
            <div className='diver-container'>
                <li><Link to="/Projects/DiverGame" >Diver Game</Link></li>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={SIMAGELIST} className='diver-proj-car'/>
            </div>
            <div className='site-container'>
                <li><Link to="/Projects/PersonalSite" >This Site!</Link></li>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={WIMAGELIST} className='dog-proj-car'/>
            </div>
            <div className='read-container'>
                <li><Link to="/Projects/Books" >Code Books</Link></li>
                <p className='project-text'>Check out the books I have worked through here and there!</p>
            </div>
            
            
            
        </div>

    );
};

export default Projects;