//footer component
import React from 'react';

import linkedin from '../assets/media/linkedin.svg'
import etsy from '../assets/media/etsy.svg'
import github from '../assets/media/github.svg'
import discord from '../assets/media/discord.svg'
import insta from '../assets/media/insta.svg'
import twitch from '../assets/media/twitch.svg'
import mail from '../assets/media/mail.svg'
import location from '../assets/media/location.svg'

import '../css/footer.css'

//cv download??

const Footer = () => {
    return(
        <footer>
            <div className='main-container'>
                <div className='location-container'>
                    <p>Edmonton, Alberta</p>
                </div>

                <div className='mail-container'>
                    <p>Reach out:  </p>
                    <a href="mailto:carreirotay@gmail.com.com?subject=Reaching Out">
                        <p className='email-address'>carreirotay@gmail</p>
                    </a>
                </div>
                <p>This site is a WIP, don't be surprised if you refresh and it has changed.</p>

                <p className='copyright-text'>Copyright&copy; 2025 Taylor Carreiro </p>
                <div className='icon-container'>
                <a href="mailto:carreirotay@gmail.com.com?subject=Reaching Out">
                        <img className="em-icon" src={mail} alt="Send me an e-mail" />
                        
                    </a>
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
                

            </div>
            
            <div className='lower-container'>
                
               
            </div>
        </footer>
    );
};

export default Footer;