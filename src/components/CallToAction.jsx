// src/components/CallToAction.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = () => {
  
  const userPhoneNumber = "6285849910396";
  const whatsappText = "Hallo kak, mau konsultasi Aplikasi nih boleh?";
  const encodedText = encodeURIComponent(whatsappText);
  const whatsappLink = `https://wa.me/${userPhoneNumber}?text=${encodedText}`;

  return (
    <div className="relative z-10 max-w-5xl mx-auto p-8 md:p-12
                    bg-slate-800/70 backdrop-blur-md 
                    border border-gray-700/50 
                    rounded-lg shadow-lg text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Punya Ide Project Keren?
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Jangan biarkan ide Anda mengendap. Mari diskusikan bagaimana kita bisa mewujudkannya. Klik untuk konsultasi gratis!
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        
        {/* Tombol Utama: WA */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-3 
                     bg-cyan-500 hover:bg-cyan-400 
                     text-gray-900 font-semibold 
                     rounded-lg transition-colors duration-300 shadow-lg shadow-cyan-500/20"
        >
          <FaWhatsapp size={20} />
          <span>Konsultasi Gratis</span>
        </a>

        {/* Tombol Sekunder: Lihat Projects (Best Projects) */}
        <Link 
          to="/best-projects"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 
                     text-gray-300 hover:text-white 
                     font-medium rounded-lg transition-colors duration-300"
        >
          <span>Lihat Project Terbaik</span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;