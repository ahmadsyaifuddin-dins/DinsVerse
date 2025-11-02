// src/components/ProjectCard.jsx (OPTIMIZED VERSION)

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiBox } from 'react-icons/fi';
import { FaDesktop, FaGamepad } from 'react-icons/fa';
import { GiPlatform } from 'react-icons/gi';

//  Animasi yang lebih ringan (hanya opacity, no scale)
const cardVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 } // Lebih cepat
  }
};

// Helper untuk icon (tidak berubah)
const getTypeIcon = (type) => {
  if (type === 'Web Application') return <GiPlatform className="text-gray-400" />;
  if (type === 'Website') return <FiGlobe className="text-gray-400" />;
  if (type === 'Mobile Application') return <FiSmartphone className="text-gray-400" />;
  if (type === 'Game') return <FaGamepad className="text-gray-400" />;
  if (type === 'Desktop Application') return <FaDesktop className="text-gray-400" />;
  return <FiBox className="text-gray-400" />;
};

const ProjectCard = ({ project }) => {
  const technologies = project.technologies || [];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      //  Hapus whileHover dan whileTap untuk performa
    >
      <Link 
        to={`/project/${project._id}`} 
        //  Gunakan transform daripada scale, hapus shadow hover
        className="block bg-slate-800/80 rounded-lg overflow-hidden shadow-lg 
                   transition-transform duration-200 ease-out h-full 
                   hover:translate-y-[-2px] active:translate-y-0"
      >
        {/* Thumbnail */}
        <img 
          src={project.thumbnail || 'https://placehold.co/600x400?text=No+Image&font=roboto'}
          alt={`${project.title} thumbnail`} 
          className="w-full h-48 object-cover" 
          loading="lazy"
          //  Tambahkan decoding async untuk performa
          decoding="async"
        />
        
        <div className="p-5">
          <div className="flex items-start gap-4 mb-3">
            {/* Icon Proyek */}
            {project.icon && (
              <img 
                src={project.icon} 
                alt={`${project.title} icon`} 
                className="w-12 h-12 rounded-lg object-contain shrink-0 mt-1"
                loading="lazy"
                decoding="async"
              />
            )}
            
            {/* Judul dan Tipe */}
            <div className="grow min-w-0">
              <h3 className="text-2xl font-semibold mb-1 truncate">{project.title}</h3>
              
              {project.type && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {getTypeIcon(project.type)}
                  <span>{project.type}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full border border-cyan-800/50"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                ...
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;