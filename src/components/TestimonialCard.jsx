// src/components/TestimonialCard.jsx

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Icon kutipan

const TestimonialCard = ({ testimonial }) => {
  const { name, title, quote, imageUrl, projectImageUrl } = testimonial;

  return (
    <div className="bg-slate-800/70 backdrop-blur-md border border-gray-700/50 
                    rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
      
      {/* Icon Kutipan */}
      <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
      
      {/* Isi Kutipan/Testimoni */}
      <p className="text-gray-300 text-lg italic leading-relaxed grow">
        "{quote}"
      </p>

      {/* Screenshot Proyek (Opsional) */}
      {projectImageUrl && (
        <img 
          src={projectImageUrl} 
          alt={`Screenshot for ${name}`}
          className="rounded-lg mt-6 w-full object-cover"
          loading="lazy"
        />
      )}
      
      {/* Profil Klien */}
      <div className="flex items-center mt-6 pt-6 border-t border-gray-700/50">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
          loading="lazy"
        />
        <div className="ml-4">
          <p className="text-xl font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;