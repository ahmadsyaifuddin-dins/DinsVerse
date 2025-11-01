// src/pages/DetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/api'; 
import ProjectDetail from '../components/ProjectDetail';
import DetailSkeleton from '../components/DetailSkeleton';
const DetailPage = () => {
  const { id } = useParams(); // Ambil 'id' dari URL
  
  // Buat state lokal HANYA untuk halaman ini
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gunakan useEffect untuk fetch data saat halaman dimuat
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Panggil API untuk mengambil HANYA 1 proyek
        const response = await getProjectById(id); 
        
        // Cek jika backend mengembalikan 'null' (jika ID tidak ada)
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
  }, [id]); // Bergantung pada 'id'

  if (loading) {
    // Tampilkan skeleton saat loading
    return <DetailSkeleton />;
  }

  if (error || !project) {
    // Tampilkan error jika fetch gagal ATAU project tidak ditemukan
    return (
      <div className="text-center">
        <h2 className="text-2xl text-red-500">Project Not Found</h2>
        <Link to="/" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  // Jika sukses, kirim data ke komponen ProjectDetail
  return <ProjectDetail project={project} />;
};

export default DetailPage;