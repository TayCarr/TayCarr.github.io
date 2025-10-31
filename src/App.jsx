import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from "./common/header"
import Footer from "./common/footer";
import Projects from './components/Projects';
import LumoLearn from './components/LumoLearn';
import Books from './components/Books';
import Diver from './components/Diver';
import Site from './components/Site';

import './App.css'

import Homepage from './components/Homepage';
import Painting from './components/Painting'



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/GlassHanded" element={<Painting />} />
        <Route path="/Projects/LumoLearn" element={<LumoLearn />} />
        <Route path="/Projects/Books" element={<Books />} />
        <Route path="/Projects/DiverGame" element={<Diver />} />
        <Route path="/Projects/PersonalSite" element={<Site />} />
        

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
