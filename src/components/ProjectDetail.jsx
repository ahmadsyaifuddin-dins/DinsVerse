// src/components/ProjectDetail.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowLeft, FiCalendar, FiCheckCircle, FiActivity } from 'react-icons/fi';
import { FaBullseye } from 'react-icons/fa'; // Icon untuk progress

// Fungsi helper untuk format tanggal
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const ProjectDetail = ({ project }) => {
  const technologies = project.technologies || [];
  const progress = project.progress || 0;

  // Tentukan warna berdasarkan kesulitan
  const difficultyColors = {
    Easy: 'text-green-400 border-green-400',
    Medium: 'text-yellow-400 border-yellow-400',
    Hard: 'text-red-400 border-red-400',
    Expert: 'text-purple-400 border-purple-400',
    default: 'text-gray-400 border-gray-400'
  };
  const difficultyClass = difficultyColors[project.difficulty] || difficultyColors.default;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tombol Back */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-cyan-400 text hover:text-cyan-300 mb-6 group"
      >
        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      {/* --- Judul & Subtitle --- */}
      <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
      {project.subtitle && (
        <h2 className="text-2xl text-gray-400 font-light mb-6">{project.subtitle}</h2>
      )}

      {/* Gambar Utama */}
      <img 
        src={project.thumbnail || 'https://placehold.co/800x450?text=Project+Image'} 
        alt={`${project.title} main`}
        className="w-full rounded-lg shadow-lg mb-8"
      />

      {/* --- Progress Bar (jika status 'In Progress') --- */}
      {project.status === 'In Progress' && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Progress</h3>
            <span className="text-xl font-bold text-white">{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div 
              className="bg-cyan-500 h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }} // Atur lebar progress bar
            ></div>
          </div>
        </div>
      )}

      {/* --- Deskripsi --- */}
      {project.description && (
        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <p>{project.description}</p>
        </div>
      )}

      {/* --- Info Box Grid --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {project.status && (
          <InfoBox 
            icon={<FiCheckCircle className="text-cyan-400" size={24} />} 
            label="Status" 
            value={project.status} 
          />
        )}
        {project.difficulty && (
          <InfoBox 
            icon={<FiActivity className="text-cyan-400" size={24} />} 
            label="Difficulty"
            // Terapkan kelas warna di sini
            value={<span className={`font-semibold ${difficultyClass}`}>{project.difficulty}</span>}
          />
        )}
        {project.startDate && (
          <InfoBox 
            icon={<FiCalendar className="text-cyan-400" size={24} />} 
            label="Started On" 
            value={formatDate(project.startDate)} 
          />
        )}
      </div>

      {/* --- Tech Stack --- */}
      {technologies.length > 0 && (
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* --- Links (Source Code & Demo) --- */}
      <div className="flex gap-4">
        {project.linkSource && (
          <a
            href={project.linkSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <FiGithub />
            Source Code
          </a>
        )}
        {project.linkDemo && (
          <a
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            <FiExternalLink />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

// Komponen helper kecil untuk Info Box agar lebih rapi
const InfoBox = ({ icon, label, value }) => (
  <div className="bg-slate-800/70 backdrop-blur-md p-4 rounded-lg shadow border border-gray-700/50">
  <div className="flex items-center gap-3 mb-2">
    {icon}
    <h4 className="text-sm text-gray-400 uppercase font-semibold">{label}</h4>
  </div>
  <p className="text-lg text-white font-medium">{value}</p>
</div>
);

export default ProjectDetail;