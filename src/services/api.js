// src/services/api.js
import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://dins-sphere-backend.vercel.app/api'
});

// FUNGSI LAMA (tetap ada, tidak berubah)
export const getProjects = (page = 1, filters = {}) => {
  
  // Siapkan parameter dasar
  const params = { page };

  // Tambahkan filter HANYA JIKA ada nilainya
  if (filters.search) {
    params.search = filters.search;
  }
  if (filters.type) {
    params.type = filters.type;
  }
  
  if (filters.sortOrder === 'newest' || filters.sortOrder === 'oldest') {
    params.sortOrder = filters.sortOrder;
  }
  
  return projectApi.get('/projects', { params });
};

export const getProjectById = (id) => {
  return projectApi.get(`/projects/${id}`);
};