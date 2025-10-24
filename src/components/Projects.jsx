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
                <h2>LumoLearn</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='lumo-proj-car'/>
            </div>
            <div className='diver-container'>
                <h2>Diver Game</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={SIMAGELIST} className='diver-proj-car'/>
            </div>
            <div className='site-container'>
                <h2>This Site!</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={WIMAGELIST} className='dog-proj-car'/>
            </div>
            <div className='dog-container'>
                <h2>Dog Daycare Portal</h2>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='dog-proj-car'/>
            </div>
            <div className='read-container'>
                <h2>Code Books</h2>
                <p className='project-text'>Not really any pictures for this as it is just me going through reading those silly little programmer books in my spare time. For the most part it is things I have done previously but I learn new things here and there and it gets me practicing projects when I don't really have an idea on what to do. I hope to one day have a repo with code from a variety of books, it is just a silly little thing I enjoy doing.</p>
            </div>
            
            
            
        </div>

    );
};

export default Projects;