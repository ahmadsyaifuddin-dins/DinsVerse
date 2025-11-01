// src/App.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Impor halaman-halaman
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import BestProjectsPage from './pages/BestProjectsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';

// Konfigurasi animasi transisi (tetap sama)
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};


function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-gray-200 flex flex-col">
      
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 relative z-10 grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* Rute Lama */}
            <Route 
              path="/" 
              element={<motion.div {...pageTransition}><HomePage /></motion.div>} 
            />
            <Route 
              path="/project/:id" 
              element={<motion.div {...pageTransition}><DetailPage /></motion.div>} 
            />
            
            <Route 
              path="/best-projects" 
              element={<motion.div {...pageTransition}><BestProjectsPage /></motion.div>} 
            />
            <Route 
              path="/testimonials" 
              element={<motion.div {...pageTransition}><TestimonialsPage /></motion.div>} 
            />
            <Route 
              path="/about" 
              element={<motion.div {...pageTransition}><AboutPage /></motion.div>} 
            />

          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;