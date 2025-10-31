// src/services/api.js
import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://dins-sphere-backend.vercel.app/api'
});

export const getProjects = (page = 1, filters = {}) => {
  
  // Siapkan parameter dasar
  const params = { page };

  // Tambahkan filter HANYA JIKA ada nilainya
  // Ini sesuai dengan logika backend Anda: if (type) query.type = type;
  if (filters.search) {
    params.search = filters.search;
  }
  if (filters.type) {
    params.type = filters.type;
  }
  
  // Backend Anda hanya bereaksi pada 'newest' atau 'oldest'
  if (filters.sortOrder === 'newest' || filters.sortOrder === 'oldest') {
    params.sortOrder = filters.sortOrder;
  }
  
  // Kirim request dengan params yang sudah difilter
  return projectApi.get('/projects', { params });
};