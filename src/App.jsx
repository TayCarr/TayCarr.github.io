import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'

import Footer from "./common/footer";

import './App.css'

import Homepage from './components/Homepage';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
