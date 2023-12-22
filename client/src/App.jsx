
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'  
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'



function App() {

  return (
    <>
    <Router>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>

    </>
  )
}

export default App
