import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.98 }
};

const ProjectCard = ({ project }) => {
  // Ambil technologies, atau array kosong jika tidak ada
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
        <img 
          // GANTI DI SINI
          src={project.thumbnail || 'https://via.placeholder.com/400x250?text=No+Image'} 
          alt={`${project.title} thumbnail`} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold mb-2 truncate">{project.title}</h3>
          
          {/* Menampilkan Tech Stack dengan aman */}
          <div className="flex flex-wrap gap-2 mt-3">
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