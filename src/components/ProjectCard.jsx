// src/components/ProjectCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiBox } from 'react-icons/fi'; // Icon untuk tipe

// Variasi animasi
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.98 }
};

// Helper kecil untuk memilih icon berdasarkan tipe
const getTypeIcon = (type) => {
  if (type === 'Web Application') {
    return <FiGlobe className="text-gray-400" />;
  }
  if (type === 'Mobile App') {
    return <FiSmartphone className="text-gray-400" />;
  }
  // Default icon
  return <FiBox className="text-gray-400" />;
};

const ProjectCard = ({ project }) => {
  const technologies = project.technologies || [];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <Link 
        to={`/project/${project._id}`} 
        className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-full"
      >
        {/* Thumbnail */}
        <img 
          src={project.thumbnail || 'https://via.placeholder.com/400x250?text=No+Image'} 
          alt={`${project.title} thumbnail`} 
          className="w-full h-48 object-cover" 
        />
        
        <div className="p-5">
          {/* --- Bagian Header Kartu (Icon, Judul, Tipe) --- */}
          <div className="flex items-start gap-4 mb-3">
            {/* 1. Icon Proyek */}
            {project.icon && (
              <img 
                src={project.icon} 
                alt={`${project.title} icon`} 
                className="w-12 h-12 rounded-lg object-contain shrink-0 mt-1"
              />
            )}
            
            {/* 2. Judul dan Tipe */}
            <div className="grow">
              <h3 className="text-2xl font-semibold mb-1 truncate">{project.title}</h3>
              
              {/* Menampilkan Tipe Proyek */}
              {project.type && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {getTypeIcon(project.type)}
                  <span>{project.type}</span>
                </div>
              )}
            </div>
          </div>

          {/* --- Bagian Tech Stack --- */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
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