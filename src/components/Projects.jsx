//Projects (library?)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import '../css/projects.css'

import P1 from '../assets/paint/P1.jpeg'
import P2 from '../assets/paint/P2.jpeg'
import P3 from '../assets/paint/P3.jpeg'
import T4 from '../assets/T4.jpeg'
import T5 from '../assets/T5.jpeg'

const IMAGELIST = [
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
        src: T4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: T5,
        alt: "Image 5",
    },
   
];

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Projects = () => {
    return(
        <div>
            <p className='project-bio'>Here will be my projects woo! This is my bio so I can fill the page and just see and fill the page and yah ummm I guess i need a bit more in the bio just to fill it ummmmm ya idk it is annoying the nav bar goes a little sill and the page a little cooky if there isnt enough content so here i am giving it content so i dont have a silly headache looking at it haha maybe here I can do little carousels and have some main images to scroll through then um they can click to go to the page of the project and look more and read more about the project, the library will have like umm a mini blurb some images??</p>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='lumo-proj-car'/>
            <h2>LumoLearn</h2>
            <h2>Shark Game</h2>
            <h2>Dog Daycare Portal</h2>
            <h2>Extra Readings (work on name?)</h2>
        </div>

    );
};

export default Projects;