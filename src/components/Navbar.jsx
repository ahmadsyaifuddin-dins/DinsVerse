// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FiGithub } from 'react-icons/fi';
import '../styles/navbar.css'; // Import CSS untuk hamburger

const Navbar = () => {
  // State untuk toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper class untuk NavLink (Desktop)
  const navLinkClass = ({ isActive }) =>
    `pb-1 border-b-2 transition-colors duration-300 ${
      isActive
        ? 'text-cyan-400 border-cyan-400'
        : 'text-gray-300 border-transparent hover:text-white'
    }`;

  // Helper class untuk NavLink (Mobile)
  const mobileNavLinkClass = ({ isActive }) =>
    `block py-3 px-4 rounded-lg transition-colors duration-300 ${
      isActive
        ? 'text-cyan-400 bg-cyan-900/20 border-l-4 border-cyan-400'
        : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
    }`;

  // Tutup mobile menu saat link diklik
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black/10 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Brand (Logo) */}
          <Link to="/" className="text-xl md:text-2xl font-bold hover:scale-105 transition-transform">
            <span className="shiny-text brightness-150">DinsVerse</span>
            <span className="text-cyan-400 ml-2">Showcase</span>
          </Link>
          
          {/* Desktop Nav Links & GitHub */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/best-projects" className={navLinkClass}>
              Best Projects
            </NavLink>
            <NavLink to="/estimasi-harga" className={navLinkClass}>
              Estimasi Harga
            </NavLink>
            <NavLink to="/testimonials" className={navLinkClass}>
              Testimonials
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Me
            </NavLink>

            {/* Garis pemisah */}
            <div className="h-6 w-px bg-slate-700"></div>

            {/* GitHub Link */}
            <a 
              href="https://github.com/ahmadsyaifuddin-dins" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>
          </div>
          
          {/* Mobile Hamburger Button - SVG Animated */}
          <label className="hamburger md:hidden">
            <input 
              type="checkbox" 
              checked={isMobileMenuOpen}
              onChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 animate-slideDown">
            <div className="flex flex-col space-y-1 mt-4">
              <NavLink 
                to="/" 
                className={mobileNavLinkClass}
                onClick={handleLinkClick}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/best-projects" 
                className={mobileNavLinkClass}
                onClick={handleLinkClick}
              >
                Best Projects
              </NavLink>
              <NavLink 
                to="/estimasi-harga" 
                className={mobileNavLinkClass}
                onClick={handleLinkClick}
              >
                Estimasi Harga
              </NavLink>
              <NavLink 
                to="/testimonials" 
                className={mobileNavLinkClass}
                onClick={handleLinkClick}
              >
                Testimonials
              </NavLink>
              <NavLink 
                to="/about" 
                className={mobileNavLinkClass}
                onClick={handleLinkClick}
              >
                About Me
              </NavLink>

              {/* GitHub Link untuk Mobile */}
              <a 
                href="https://github.com/ahmadsyaifuddin-dins" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 py-3 px-4 text-gray-300 
                           hover:text-white hover:bg-slate-800/50 rounded-lg 
                           transition-colors mt-2 border-t border-slate-800 pt-4"
              >
                <FiGithub size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;