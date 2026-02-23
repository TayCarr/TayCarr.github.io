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

import B1 from '../assets/projects/books/w1.png'
import B2 from '../assets/projects/books/w2.png'
import B3 from '../assets/projects/books/w3.png'
import B4 from '../assets/projects/books/w4.png'
import B5 from '../assets/projects/books/w5.png'

const LIBIMAGELIST = [
    {
        id : 1,
        src: B1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: B2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: B3,
        alt: "Image 3",
    },
    {
        id : 4,
        src: B4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: B5,
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
            <p className='project-bio'>Here you can find some examples of my projects! I hope to keep adding to the list of projects I am proud to show off, click on the project title to get a better look at each project :)</p>
            <div className='lumo-container'>
            <li className='project-link'><Link to="/Projects/LumoLearn" >LumoLearn</Link></li>
            <p className='project-text'>My capstone project that I am so proud to be show off!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='lumo-proj-car'/>
            </div>
            <div className='pixel-container'>
            <li className='project-link'><Link to="/Projects/PixelClock" >Pixel Clock</Link></li>
            <p className='project-text'>My venture into the world of pixel art!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={PIMAGELIST} className='pixel-proj-car'/>
            </div>
            <div className='diver-container'>
                <li className='project-link'><Link to="/Projects/DiverGame" >Diver Game</Link></li>
                <p className='project-text'>The project from my favourite class I ever took, Computer Graphics!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={SIMAGELIST} className='diver-proj-car'/>
            </div>
            <div className='site-container'>
                <li className='project-link'><Link to="/Projects/PersonalSite" >This Site!</Link></li>
                <p className='project-text'>My ever evolving site, check out my report I update as I go!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={WIMAGELIST} className='dog-proj-car'/>
            </div>
            <div className='read-container'>
                <li className='project-link'><Link to="/Projects/Books" >Taylor's Library</Link></li>
                <p className='project-text'>Check out the variety of books I have worked through (for fun)!</p>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={LIBIMAGELIST} className='book-proj-car'/>
            </div>
            
            
            
        </div>

    );
};

export default Projects;