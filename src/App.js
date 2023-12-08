import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Login from './components/Login';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
