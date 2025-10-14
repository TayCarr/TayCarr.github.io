//footer component
import React from 'react';

import linkedin from '../assets/media/linkedin.svg'
import etsy from '../assets/media/etsy.svg'
import github from '../assets/media/github.svg'
import discord from '../assets/media/discord.svg'
import insta from '../assets/media/insta.svg'
import twitch from '../assets/media/twitch.svg'

import '../css/footer.css'

//eventually a style here
//email
//cv download??

const Footer = () => {
    return(
        <footer>
            <p className='copyright-text'>Copyright&copy; 2025 Taylor Carreiro </p>
            <div className='icon-container'>
                <img className="l-icon" src={linkedin} alt="Connect on LinkedIn" />
                <img className="e-icon" src={etsy} alt="Check out my Etsy shop" />
                <img className="g-icon" src={github} alt="See what I am doing on Github" />
                <img className="d-icon" src={discord} alt="Connect on Discord" />
                <img className="i-icon" src={insta} alt="Follow me on Instagram" />
                <img className="t-icon" src={twitch} alt="Watch me on Twitch" />
            </div>
        </footer>
    );
};

export default Footer;