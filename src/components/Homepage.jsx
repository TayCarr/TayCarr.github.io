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
      <EmblaCarousel slides={SLIDES} options={OPTIONS} imageList={IMAGELIST} />
      <h1>Taylor Carreiro</h1>
      <p className='bio'>For the past 7 years I worked as a Sr Dog Handler but with the completion of my Bachelors I am now ready to move on to bigger career goals (it was very hard to leave the pups). Computer Science was never my dream path but after taking one class to check off a breadth box in my degree I quickly fell in love with the idea and so in my second semester of University I declared Computer Science as my major and Mathematics as my minor. Math was not my favourite through elementary and I avoided it as best I could but when jr high came around my teachers really pushed me to take AP exams and then by highschool I kinda fell in love with it so it felt right to pick it as my minor and I LOVED getting to take all the theoretical and algebra classes (do not talk to me about calculus..). My favourite class was Computer Graphics (algebra and games !!) but I also fell in love with the entire process of building a web app for my capstone. I always say that if I was a trust fund baby I would be a career student as I truly love learning and exploring BUT I do not have a trust nor do I have the luck to win the lottery and so my goal is to find a job that enables me to continue learning and make some cool things in the process.  In my spare time I paint and play a variety of video games, typically fps. I do like to get out of the house and walk around with my best friend Delta. We used to enjoy hiking but she is getting up there in age and I am a hover parent so the walks are filled with a lot of grass sniffing.</p>
    </div>
        
  );
}

export default HomePage;