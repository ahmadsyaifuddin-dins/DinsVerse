// src/pages/DetailPage.jsx

// 1. Impor hook baru dan fungsi api baru
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/api';
import ProjectDetail from '../components/ProjectDetail';

const DetailSkeleton = () => (
  <div className="max-w-4xl mx-auto animate-pulse">
    <div className="h-8 w-1/4 bg-gray-700 rounded-md mb-6"></div> {/* Tombol Back */}
    <div className="h-14 w-3/4 bg-gray-700 rounded-md mb-4"></div> {/* Judul */}
    <div className="w-full h-96 bg-gray-700 rounded-lg shadow-lg mb-8"></div> {/* Gambar */}
    <div className="h-6 w-full bg-gray-700 rounded-md mb-3"></div> {/* Deskripsi */}
    <div className="h-6 w-5/6 bg-gray-700 rounded-md mb-8"></div>
  </div>
);

const DetailPage = () => {
  const { id } = useParams(); // Ambil 'id' dari URL
  
  // 3. Buat state lokal untuk menampung project
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 4. Gunakan useEffect untuk fetch data saat komponen dimuat
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);
        // Panggil fungsi api baru kita
        const response = await getProjectById(id); 
        // Backend Anda mengembalikan project langsung di response.data
        setProject(response.data);
      } catch (err) {
        console.error("Error fetching project:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]); // Jalankan ulang jika 'id' di URL berubah

  // 5. Render logic baru
  if (loading) {
    return <DetailSkeleton />; // Tampilkan skeleton
  }

  if (error || !project) { // Jika ada error atau project tidak ditemukan
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