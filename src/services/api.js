import axios from 'axios';

// Buat instance axios dengan baseURL dari API Anda
const projectApi = axios.create({
  baseURL: 'https://dins-sphere-backend.vercel.app/api'
});

export const getProjects = (page = 1) => {
  return projectApi.get('/projects', {
    params: {
      page: page
    }
  });
};

// Jika nanti Anda punya endpoint by ID, tambahkan di sini
export const getProjectById = (id) => projectApi.get(`/projects/${id}`);