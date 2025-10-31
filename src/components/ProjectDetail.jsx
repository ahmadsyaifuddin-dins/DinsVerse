import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

const ProjectDetail = ({ project }) => {
  // Ambil technologies, atau array kosong jika tidak ada
  const technologies = project.technologies || [];

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 group"
      >
        <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </Link>

      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <img 
        // GANTI DI SINI
        src={project.thumbnail || 'https://via.placeholder.com/800x450?text=Project+Image'} 
        alt={`${project.title} main`}
        className="w-full rounded-lg shadow-lg mb-8"
      />

      {/* Deskripsi */}
      {project.description && (
        <div className="prose prose-invert prose-lg max-w-none mb-8">
          <p>{project.description}</p>
        </div>
      )}

      {/* Info Tambahan (Tanggal & Status) - Cek jika ada */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {project.status && (
          <div>
            <h4 className="text-sm text-gray-400 uppercase font-semibold">Status</h4>
            <p className="text-lg capitalize">{project.status}</p>
          </div>
        )}
        {project.projectDate && (
          <div>
            <h4 className="text-sm text-gray-400 uppercase font-semibold">Date</h4>
            <p className="text-lg">
              {new Date(project.projectDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        )}
      </div>

      {/* Tech Stack - Cek jika ada */}
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

      {/* Links (Source Code & Demo) - Ganti nama properti */}
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

export default ProjectDetail;