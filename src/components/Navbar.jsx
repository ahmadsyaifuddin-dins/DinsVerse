import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-gray-950/50 backdrop-blur-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          <span className="brightness-150">DinsVerse</span> Showcase
        </Link>
        {/* Tambahkan link lain jika perlu */}
        <div className="space-x-4">
          <a href="https://github.com/ahmadsyaifuddin-dins" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <FiGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;