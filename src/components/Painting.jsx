//GlassHanded
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'

import P1 from '../assets/paint/P1.jpeg'
import P2 from '../assets/paint/P2.jpeg'
import P3 from '../assets/paint/P3.jpeg'
import P4 from '../assets/paint/P4.jpeg'
import P5 from '../assets/paint/P5.jpeg'
import P6 from '../assets/paint/P6.jpeg'
import P7 from '../assets/paint/P7.jpeg'
import P8 from '../assets/paint/P8.jpeg'
import P9 from '../assets/paint/P9.jpeg'
import P10 from '../assets/paint/P10.jpeg'
import P11 from '../assets/paint/P11.jpeg'
import P12 from '../assets/paint/P12.jpeg'
import P13 from '../assets/paint/P13.jpeg'
import P14 from '../assets/paint/P14.jpeg'

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
        src: P4,
        alt: "Image 4",
    },
    {
        id : 5,
        src: P5,
        alt: "Image 5",
    },
    {
        id : 6,
        src: P6,
        alt: "Image 6",
    },
    {
        id : 7,
        src: P7,
        alt: "Image 7",
    },
    {
        id : 8,
        src: P8,
        alt: "Image 8",
    },
    {
        id : 9,
        src: P9,
        alt: "Image 9",
    },
    {
        id : 10,
        src: P10,
        alt: "Image 10",
    },
    {
        id : 11,
        src: P11,
        alt: "Image 11",
    },
    {
        id : 12,
        src: P12,
        alt: "Image 12",
    },
    {
        id : 13,
        src: P13,
        alt: "Image 13",
    },
    {
        id : 14,
        src: P14,
        alt: "Image 14",
    },
];

const OPTIONS = { loop: true }
const SLIDE_COUNT = 14
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Painting = () => {
    return(
        <div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='default' />
        <h1>GlassHanded</h1>
        {/*can change the classname I had to add it in to get some of the 
            default page characteristics otherwise it was long and ugly */}
        <p className='bio'>When lockdown was starting to get lifted I started to look for something that wasn’t just video games. Like everyone I was feeling not the greatest mentally and needed something to do with my time that wasn’t video games. I saw a friend of mine doing anime glass paintings, she had a few postings for commissions and of course I looked at her stuff and thought “ya I can do that”. So here I am years later still doing it! I have an Etsy shop where I go by GlassHanded. I take commissions here and there from people I know but I am somewhat selective as I don’t want this to become something I have to force myself to do just for money. For the most part I do what I want, post it for sale and if it sells cool, if not I love having paintings on display in my home. I have been a bit busy this past year but I am looking to set aside more time for myself to paint. I prefer manga panels over anime, and I have been challenging myself to try out other styles I wouldn’t normally. Junji Ito is and will forever be my favourite manga panels to translate onto glass. 
</p>
        </div>
    );
};

export default Painting;