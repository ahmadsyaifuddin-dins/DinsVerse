// src/pages/DetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import ProjectDetail from '../components/ProjectDetail';
import DetailSkeleton from '../components/DetailSkeleton';

const DetailPage = () => {
  const { id } = useParams();
  const { projects, loading } = useProjects();

  const project = projects.find(p => p._id === id);

  if (loading && projects.length === 0) {
    return <DetailSkeleton />;
  }

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

  return <ProjectDetail project={project} />;
};

export default DetailPage;