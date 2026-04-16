// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'

import T1 from '../assets/T1.jpeg'
import T2 from '../assets/T2.jpeg'
import T3 from '../assets/T3.jpeg'
import T4 from '../assets/T4.jpeg'
import T5 from '../assets/T5.jpeg'
import T6 from '../assets/T6.jpeg'
import T7 from '../assets/T7.jpeg'
import T8 from '../assets/T8.jpeg'
import T9 from '../assets/T9.jpeg'

const IMAGELIST = [
    {
        id : 1,
        src: T1,
        alt: "Image 1",
    },
    {
        id : 2,
        src: T2,
        alt: "Image 2",
    },
    {
        id : 3,
        src: T3,
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
    {
        id : 6,
        src: T6,
        alt: "Image 6",
    },
    {
        id : 7,
        src: T7,
        alt: "Image 7",
    },
    {
      id : 8,
      src: T8,
      alt: "Image 8",
  },
  {
      id : 9,
      src: T9,
      alt: "Image 9",
  },
];

const OPTIONS = { loop: true }
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function HomePage() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='default'/>
      <h1>Taylor Carreiro</h1>
      <div className='bio-box'>
        <p className='bio-home'>While completing my Bachelor's I worked as a Sr. Dog Handler, but I have said farewell to the pups as I am ready to put this degree to use! Over the years I took a variety of topics in order to get a feel for what is out there and because I truly do enjoy the challenge of learning new skills. My favourites topics are graph theory, algebra and computer graphics! BUT I fell in love with the entire process of developing my capstone project (LumoLearn). Working within a larger team with a variety of specialties was so much fun, I got to teach myself web development with the MERN stack but also got to learn about the other aspects that all came together to build our app.
         </p>
         <p className='bio-home'>This site serves as a home for my personal projects but this site itself is also continually changing. It will serve as a reflection of myself.</p>
      </div>
    </div>
        
  );
}

export default HomePage;