// src/pages/BestProjectsPage.jsx

import React, { useState, useEffect } from 'react';
import { getProjectById } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import ProjectCardSkeleton from '../components/ProjectCardSkeleton';

const bestProjectIds = [
    "69057c6d56bf58d8b5d8f557", // SIDESA
    "67c85c4c6a88d5ade0e33f90", // OkeeDins
    "6905f85c1809a44748fea86a", // WebGIS Pangan Batola
    "69057a3d62110075b61ddd2e", // DinsWealth
    "69057b16cfe0d8cfe3f857fe", // BlackFile
    "67c85ee3f11b6c967c3d1ddd", // JokiDins
];

const BestProjectsPage = () => {
  // State lokal HANYA untuk halaman ini
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestProjects = async () => {
      try {
        setLoading(true);

        // 1. Buat array berisi semua "janji" (Promise) fetch data
        const promises = bestProjectIds.map(id => getProjectById(id));
        
        // 2. Eksekusi semua janji secara bersamaan
        const responses = await Promise.all(promises);

        // 3. Ambil data .data dari setiap response
        const fetchedProjects = responses.map(res => res.data);
        
        setProjects(fetchedProjects);

      } catch (err) {
        console.error("Error fetching best projects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestProjects();
  }, []); // [] = Hanya jalankan sekali saat halaman dimuat

  if (loading) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Best Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tampilkan skeleton sebanyak jumlah ID */}
          {[...Array(bestProjectIds.length)].map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Best Projects</h1>
        <p className="text-lg text-red-500 mt-4">Failed to load best projects.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">Best Projects</h1>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <p className="col-span-3 text-gray-400 text-center text-lg">
            No "Best Projects" have been selected.
          </p>
        )}
      </div>
    </div>
  );
};

export default BestProjectsPage;