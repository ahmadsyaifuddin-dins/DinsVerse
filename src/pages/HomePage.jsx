// src/pages/HomePage.jsx

import React, { useEffect } from 'react';
import { useProjects } from '../context/ProjectContext';
import ProjectCard from '../components/ProjectCard';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import ProjectFilters from '../components/ProjectFilters';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  const { 
    projects, 
    loading, 
    loadingMore, 
    error, 
    loadMoreProjects, 
    hasMore,
    setFilters
  } = useProjects();

  // Efek untuk me-reset filter status (tetap ada)
  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      status: ''
    }));
  }, [setFilters]);

  // (Skeleton, Error, atau Kartu Proyek)
  const renderProjectGrid = () => {
    // 1. Tampilkan Skeleton saat loading awal
    if (loading && projects.length === 0) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      );
    }
    
    // 2. Tampilkan Error jika gagal
    if (error) {
      return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    // 3. Tampilkan "Tidak Ditemukan"
    if (!loading && projects.length === 0) {
      return (
        <p className="col-span-3 text-gray-400 text-center text-lg">
          No projects found matching your criteria.
        </p>
      );
    }

    // 4. Tampilkan Kartu Proyek
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <CallToAction />
      
      <div className="mt-16">
        <h1 className="text-4xl font-bold mb-8 text-cyan-400">All My Projects</h1>
        <ProjectFilters />
        
        {renderProjectGrid()}
        
        {/* Tombol Load More */}
        <div className="text-center mt-12">
          {hasMore && (
            <button
              onClick={loadMoreProjects}
              disabled={loadingMore} 
              className="bg-cyan-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loadingMore ? 'Loading...' : 'Load More'}
            </button>
          )}
          {!hasMore && projects.length > 0 && (
            <p className="text-gray-500">You've reached the end.</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;