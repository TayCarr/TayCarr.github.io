//GlassHanded
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import '../css/embla.css'

const Painting = () => {
    return(
        <div>
            {/*TODO figure out how to pass the pictures over and ummm how many pics so can reuse the carousel here... */}
        <h1>GlassHanded</h1>
        {/*can change the classname I had to add it in to get some of the 
            default page characteristics otherwise it was long and ugly */}
        <p className='bio'>I like to paint here i will show you my paintings cause painting and painting. but also ummm painting i am just trying to ya uhhhh fill some of the creen so i can see uhhh that the page is ya idk...</p>
        </div>
    );
};

export default Painting;