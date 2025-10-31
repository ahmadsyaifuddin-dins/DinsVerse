import React from 'react';

const ProjectCardSkeleton = () => {
  return (
    <div className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
      {/* Kerangka Gambar Thumbnail */}
      <div className="w-full h-48 bg-gray-700"></div>
      
      <div className="p-5">
        {/* Kerangka Judul */}
        <div className="h-7 w-3/4 bg-gray-700 rounded-md mb-4"></div>
        
        {/* Kerangka Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          <div className="bg-gray-700 h-5 w-1/4 rounded-full"></div>
          <div className="bg-gray-700 h-5 w-2/5 rounded-full"></div>
          <div className="bg-gray-700 h-5 w-1/3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;