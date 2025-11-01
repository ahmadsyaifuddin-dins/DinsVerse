import React from 'react';
import { useProjects } from '../context/ProjectContext';
import ProjectCard from '../components/ProjectCard';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';
import ProjectFilters from '../components/ProjectFilters';

const HomePage = () => {
  const { 
    projects, 
    loading, 
    loadingMore, 
    error, 
    loadMoreProjects, 
    hasMore 
  } = useProjects();

  // Tampilkan loading spinner HANYA saat loading awal (projects masih kosong)
  if (loading && projects.length === 0) {
    return (
      <div>
        {/* Kita tetap tampilkan judulnya agar layout tidak "melompat" */}
        <h1 className="text-xl md:text-2xl font-bold mb-8 text-cyan-400">My Projects</h1>
        <ProjectFilters />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render 6 kerangka (atau 9, sesuai selera) */}
          {[...Array(6)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-8 text-cyan-400">My Projects</h1>
      
      <ProjectFilters />
      
      {/* Grid untuk project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          // Tampilkan ini hanya jika loading selesai DAN projects tetap kosong
          !loading && <p>No projects found (Silahkan Refresh halaman!).</p>
        )}
      </div>

      {/* Tombol Load More */}
      <div className="text-center mt-12">
        {hasMore && (
          <button
            onClick={loadMoreProjects}
            disabled={loadingMore} 
            className="bg-cyan-500 cursor-pointer text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors hover:bg-cyan-400 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        )}

        {!hasMore && projects.length > 0 && (
          <p className="text-gray-500">You've reached the end.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;