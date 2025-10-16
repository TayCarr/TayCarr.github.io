//footer component
import React from 'react';

import linkedin from '../assets/media/linkedin.svg'
import etsy from '../assets/media/etsy.svg'
import github from '../assets/media/github.svg'
import discord from '../assets/media/discord.svg'
import insta from '../assets/media/insta.svg'
import twitch from '../assets/media/twitch.svg'
import mail from '../assets/media/mail.svg'

import '../css/footer.css'

//eventually a style here
//email
//cv download??

const Footer = () => {
    return(
        <footer>
            <div className='main-container'>
                
                <p>Edmonton, Alberta</p>
                <div className='mail-container'>
                <a href="mailto:carreirotay@gmail.com.com?subject=Reaching Out">
                        <img className="em-icon" src={mail} alt="Send me an e-mail" />
                        <p className='email-address'>carreirotay@gmail</p>
                </a>
                </div>

            </div>
            
            <div className='icon-container'>
            <p className='copyright-text'>Copyright&copy; 2025 Taylor Carreiro </p>
                <a href='https://linkedin.com/in/taylor-carreiro-574309367' target='_blank'>
                    <img className="l-icon" src={linkedin} alt="Connect on LinkedIn" />
                </a>
                <a href='https://etsy.com/shop/GlassHanded' target='_blank'>
                    <img className="e-icon" src={etsy} alt="Check out my Etsy shop" />
                </a>
                <a href='https://github.com/TayCarr' target='_blank'>
                    <img className="g-icon" src={github} alt="See what I am doing on Github" />
                </a>
                {/*<a>
                    <img className="d-icon" src={discord} alt="Connect on Discord" />
                </a>
                <a>
                    <img className="i-icon" src={insta} alt="Follow me on Instagram" />
                </a>
                <a>
                    <img className="t-icon" src={twitch} alt="Watch me on Twitch" />
                </a>*/}
                
            </div>
        </footer>
    );
};

export default Footer;