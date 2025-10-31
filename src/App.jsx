import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

// Konfigurasi animasi transisi halaman
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* AnimatePresence digunakan untuk animasi 'exit' */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <motion.div {...pageTransition}>
                  <HomePage />
                </motion.div>
              } 
            />
            <Route 
              path="/project/:id" 
              element={
                <motion.div {...pageTransition}>
                  <DetailPage />
                </motion.div>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;