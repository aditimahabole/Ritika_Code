// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App_div'>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
    </div>
  );
}

export default App;
