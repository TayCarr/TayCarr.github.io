// src/components/Homepage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom';
import EmblaCarousel from '../EmblaCarousel'

import '../css/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function HomePage() {
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <h1>Taylor Carreiro</h1>
      <p>For the past 7 years I worked as a Sr Dog Handler but with the completion of my Bachelors I am now ready to move on to bigger career goals (it was very hard to leave the pups). Computer Science was never my dream path but after taking one class to check off a breadth box in my degree I quickly fell in love with the idea and so in my second semester of University I declared Computer Science as my major and Mathematics as my minor. Math was not my favourite through elementary and I avoided it as best I could but when jr high came around my teachers really pushed me to take AP exams and then by highschool I kinda fell in love with it so it felt right to pick it as my minor and I LOVED getting to take all the theoretical and algebra classes (do not talk to me about calculus..). My favourite class was Computer Graphics (algebra and games !!) but I also fell in love with the entire process of building a web app for my capstone. I always say that if I was a trust fund baby I would be a career student as I truly love learning and exploring BUT I do not have a trust nor do I have the luck to win the lottery and so my goal is to find a job that enables me to continue learning and make some cool things in the process.  In my spare time I paint and play a variety of video games, typically fps. I do like to get out of the house and walk around with my best friend Delta. We used to enjoy hiking but she is getting up there in age and I am a hover parent so the walks are filled with a lot of grass sniffing.</p>
    </div>
        
  );
}

export default HomePage;