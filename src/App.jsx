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
import EstimasiHargaPage from './pages/EstimasiHargaPage';
import ShootingStars from './components/ShootingStars';
import StarsBackground from './components/StarsBackground';

// Konfigurasi animasi transisi
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-gray-200 flex flex-col relative">
      
      {/* Background Stars - Komponen Baru */}
      <ShootingStars 
        minSpeed={15}
        maxSpeed={35}
        minDelay={800}
        maxDelay={3000}
        starColor="#ffffff"
        trailColor="#60a5fa"
        starWidth={50}
        starHeight={2}
      />
      <StarsBackground 
        starDensity={0.0003}
        allStarsTwinkle={true}
        twinkleProbability={0.9}
        minTwinkleSpeed={0.3}
        maxTwinkleSpeed={1.5}
      />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10 grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
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

            <Route 
              path="/estimasi-harga" 
              element={
                <motion.div {...pageTransition}>
                  <EstimasiHargaPage />
                </motion.div>
              } 
            />

          </Routes>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;