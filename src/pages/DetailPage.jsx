import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import ProjectDetail from '../components/ProjectDetail';

const DetailPage = () => {
  const { id } = useParams(); // Ambil 'id' dari URL
  const { projects, loading } = useProjects(); // Ambil SEMUA project dari context

  // Cari proyek yang spesifik berdasarkan 'id'
  const project = projects.find(p => p._id === id);

  if (loading) return <div className="text-center text-xl">Loading project details...</div>;

  if (!project) {
    return (
      <div className="text-center">
        <h2 className="text-2xl text-red-500">Project Not Found</h2>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  // Kirim data proyek yang ditemukan ke komponen ProjectDetail
  return <ProjectDetail project={project} />;
};

export default DetailPage;