// src/App.jsx

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Modal from './Modal';
import Contact from './components/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App relative min-h-screen overflow-hidden">
        <Navbar openModal={openModal} />
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/land.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}

export default App;
