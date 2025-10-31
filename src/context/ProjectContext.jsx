// src/context/ProjectContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProjects } from '../services/api';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true); // Untuk loading awal
  const [loadingMore, setLoadingMore] = useState(false); // Untuk loading "Load More"
  const [error, setError] = useState(null);

  // Fungsi untuk fetch data awal (halaman 1)
  const fetchInitialProjects = async () => {
    try {
      setLoading(true);
      const response = await getProjects(1); // Selalu fetch halaman 1
      setProjects(response.data.projects || []);
      setPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError(err);
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  // Jalankan fetch awal saat komponen dimuat
  useEffect(() => {
    fetchInitialProjects();
  }, []); // [] = jalankan sekali

  // Fungsi untuk memuat halaman berikutnya
  const loadMoreProjects = async () => {
    // Jangan fetch jika sedang loading atau sudah di halaman terakhir
    if (loadingMore || page >= totalPages) return;

    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const response = await getProjects(nextPage);

      // PENTING: Tambahkan data baru ke state yang lama (append)
      setProjects(prevProjects => [
        ...prevProjects,
        ...response.data.projects
      ]);
      
      setPage(response.data.currentPage); // Update halaman saat ini
    } catch (err) {
      setError(err);
      console.error("Error loading more projects:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <ProjectContext.Provider 
      value={{
        projects,
        loading, // Loading awal
        loadingMore, // Loading tambahan
        error,
        loadMoreProjects, // Fungsi untuk di-call tombol
        hasMore: page < totalPages // Boolean untuk tahu kapan harus sembunyikan tombol
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook tetap sama
export const useProjects = () => {
  return useContext(ProjectContext);
};