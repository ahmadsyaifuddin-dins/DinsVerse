import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-black/10 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-900">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold hover:scale-105 transition-transform">
          <span className="shiny-text brightness-150">DinsVerse</span>
          <span className="text-cyan-400 ml-2">Showcase</span>
        </Link>
        <div className="space-x-4">
          <a href="https://github.com/ahmadsyaifuddin-dins" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <FiGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;