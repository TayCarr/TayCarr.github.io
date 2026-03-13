//GlassHanded
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'
import BGIMG from '../assets/paint/images/lemon.png'

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

import PIXEL from '../assets/paint/images/pixel.jpg'
import ROOSTER from '../assets/paint/images/rooster.png'
import FRUIT from '../assets/paint/images/fruit.png'
import PB from '../assets/paint/images/pb.png'
import KNIGHT from '../assets/paint/images/knight.png'
import MATCHA from '../assets/paint/images/matcha.png'
import EBISU from '../assets/paint/images/ebisu.png'
import SHORTBREAD from '../assets/paint/images/shortbread.png'
import WINE from '../assets/paint/images/wine.png'

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
            <div className="showcase-area" id="showcase" style={{ backgroundImage: `url(${BGIMG})`}}>
                <div className="showcase-container">
                    <h1 className="main-title" >GlassHanded</h1>
                    <p className='main-desc'>My art side</p>
                    <div className='btn-container'>
                        <a href="https://etsy.com/shop/GlassHanded" target='_blank' className="btn btn-link">Visit my Etsy shop</a>
                    </div>
                </div>
            </div>  
            <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} className='default' />
        {/*can change the classname I had to add it in to get some of the 
            default page characteristics otherwise it was long and ugly */}
        <p className='bio-paint'>
        I have always had a love for art and been fascinated with the amazing things people are able to create, but I often shied away from exploring my own creativity as I was not immediately the best and able to translate my thought to a physical form. During the oh so depressing time of COVID when video games were no longer itching my brain in a way I craved I decided to try my hand at some glass art (after seeing a friend start to sell her own pieces) and I have now been doing it for years. I prefer to just list pieces I have done for sale as to avoid that gun to your head work feeling you get with commissions (not always the case but I had a few really rough commission pieces that were torture). I have recently expanded into other crafty areas and painting on canvas too! I have hopes to refine my art skills and continually grow in this area as it really is such a special feeling having a stranger buy your artwork for display in their own home. 
        </p>

        <div className='paint-display'>
        <img src={ROOSTER}></img>
        <img src={EBISU}></img>
        <img src={KNIGHT}></img>
        <p className='bio-paint2'>My first love is manga/anime panels on glass but I am starting to branch out to other styles of art, usually in traditional tattoo territory. </p>
        
        
        <img src={PIXEL}></img>
        <img src={WINE}></img>
        <img src={FRUIT}></img>
        <p className='bio-paint2'>My branching out to new canvases, both digital and physical! I usually reach for acrylics and enamel paints maybe one day I will attempt oil... </p>

    
        <img src={MATCHA}></img>
        <img src={SHORTBREAD}></img>
        <img src={PB}></img>
        <p className='bio-paint2'>I also really enjoy baking, it is a bit dangerous sometimes as I lack complete control over my sweet treat gremlin and do not want to jump up in dress sizes... I LOVE baking lactose free cheesecake in cupcake form!! </p>
      </div>



        </div>
    );
};

export default Painting;