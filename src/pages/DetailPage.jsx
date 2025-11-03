// src/pages/DetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/api'; 
import ProjectDetail from '../components/ProjectDetail';
import DetailSkeleton from '../components/DetailSkeleton';

const DetailPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await getProjectById(id); 
        
        if (!response.data) {
          throw new Error("Project not found in database");
        }

        setProject(response.data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  // --- Loading State ---
  if (loading) {
    return (
      <>
        <title>DinsVerse</title>
        <DetailSkeleton />
      </>
    );
  }

  // --- Error State ---
  if (error || !project) {
    return (
      <div className="text-center">      
        <title>Project Not Found - DinsVerse</title>
        <meta name="description" content="Proyek yang Anda cari tidak dapat ditemukan." />
        
        <h2 className="text-2xl text-red-500">Project Not Found</h2>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  // Pisahkan deskripsi (untuk dibaca manusia) dari keywords (untuk bot)
  const seoDescription = project.description.substring(0, 155) + '...';
  const seoKeywords = `Joki Aplikasi, Bikin Aplikasi, Beli Aplikasi, Joki Web, Joki Project Kuliah, WebGIS, GIS, SIG, DSS, SPK, ${project.title}, DinsVerse`;

  return (
    <> 
      <title>{project.title} - DinsVerse Showcase</title>
      
      {/* Deskripsi (untuk Google & Manusia) */}
      <meta name="description" content={seoDescription} />
      {/* Keywords (untuk Bot) */}
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph (Facebook, Discord) */}
      <meta property="og:title" content={project.title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={project.thumbnail} />
      <meta property="og:url" content={`https://dins-verse.vercel.app/project/${project._id}`} />
      <meta property="og:type" content="article" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={project.title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={project.thumbnail} />

      <ProjectDetail project={project} />
    </>
  );
};

export default DetailPage;