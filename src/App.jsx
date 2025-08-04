import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import VolunteerForm from './components/VolunteerForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
