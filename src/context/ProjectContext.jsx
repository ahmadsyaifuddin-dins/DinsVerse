// src/context/ProjectContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getProjects } from '../services/api';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // 1. TAMBAHKAN FILTER STATE
  const [filters, setFilters] = useState({
    search: '',
    type: '', // '' berarti 'Semua Tipe'
    sortOrder: 'order' // 'order' (default), 'newest', 'oldest'
  });

  // 2. UBAH NAMA FUNGSI INI menjadi 'fetchProjectsByPage'
  // Fungsi ini akan fetch halaman 1 (untuk reset) atau halaman berikutnya
  const fetchProjectsByPage = async (pageNumber, isReset = false) => {
    // Tentukan state loading mana yang akan diaktifkan
    isReset ? setLoading(true) : setLoadingMore(true);
    
    try {
      // Gunakan 'filters' dari state saat fetch
      const response = await getProjects(pageNumber, filters);
      
      if (isReset) {
        // Jika ini reset (karena filter berubah), ganti semua data
        setProjects(response.data.projects || []);
      } else {
        // Jika ini 'load more', tambahkan data ke yang lama
        setProjects(prevProjects => [
          ...prevProjects,
          ...response.data.projects
        ]);
      }
      
      setPage(response.data.currentPage);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError(err);
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // 3. BUAT useEffect BARU untuk me-reset data saat filter berubah
  useEffect(() => {
    // Setiap kali 'filters' berubah, panggil fetch halaman 1
    fetchProjectsByPage(1, true); // true = ini adalah reset
  }, [filters]); // <-- Bergantung pada 'filters'

  // 4. MODIFIKASI loadMoreProjects
  const loadMoreProjects = async () => {
    if (loadingMore || page >= totalPages) return;
    
    const nextPage = page + 1;
    fetchProjectsByPage(nextPage, false); // false = bukan reset (append data)
  };

  return (
    <ProjectContext.Provider 
      value={{
        projects,
        loading,
        loadingMore,
        error,
        loadMoreProjects,
        hasMore: page < totalPages,
        // 5. EXPOSE filters dan setFilters ke komponen UI
        filters,
        setFilters 
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectContext);
};