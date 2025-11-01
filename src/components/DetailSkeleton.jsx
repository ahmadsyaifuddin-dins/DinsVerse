import React from 'react';

const DetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto animate-pulse">
      {/* Tombol Back */}
      <div className="h-8 w-1/4 bg-gray-700 rounded-md mb-6"></div>
      {/* Judul */}
      <div className="h-14 w-3/4 bg-gray-700 rounded-md mb-4"></div>
      {/* Subtitle */}
      <div className="h-8 w-1/2 bg-gray-700 rounded-md mb-6"></div>
      {/* Gambar */}
      <div className="w-full h-96 bg-gray-700 rounded-lg shadow-lg mb-8"></div>
      {/* Deskripsi */}
      <div className="h-6 w-full bg-gray-700 rounded-md mb-3"></div>
      <div className="h-6 w-5/6 bg-gray-700 rounded-md mb-8"></div>
    </div>
  );
};

export default DetailSkeleton;