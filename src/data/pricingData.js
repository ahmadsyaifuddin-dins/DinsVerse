// src/data/pricingData.js

/**
 * Daftar tipe proyek utama.
 * Harga ini adalah harga dasar.
 */
export const projectTypes = [
    { 
      id: 'mini', 
      name: 'Mini Project (1-3 Halaman)', 
      description: 'Landing page, portofolio statis, atau tugas UI sederhana.',
      baseMin: 350000, 
      baseMax: 1000000 
    },
    { 
        id: 'project_tugas', 
        name: 'Project Tugas Kuliah', 
        description: 'Aplikasi spesifik untuk tugas matakuliah (non-PKL/Skripsi), misal: web CRUD, algoritma, dll.',
        baseMin: 400000, 
        baseMax: 1500000
      },
    { 
      id: 'pkl', 
      name: 'Project PKL (Aplikasi Standar)', 
      description: 'Aplikasi CRUD (Create, Read, Update, Delete) standar, misal: sistem inventaris, web perpustakaan.',
      baseMin: 500000, 
      baseMax: 3000000 
    },
    { 
      id: 'skripsi', 
      name: 'Project Skripsi (Sistem Kompleks)', 
      description: 'Sistem yang lebih kompleks, misal: SPK (DSS), GIS, atau aplikasi dengan banyak role/fitur.',
      baseMin: 3000000, 
      baseMax: 6000000 
    },
  ];
  
  /**
   * Daftar fitur tambahan opsional.
   * Harga ini akan ditambahkan di atas harga dasar.
   */
  export const features = [
    { 
      id: 'auth', 
      name: 'Autentikasi (Login & Register)', 
      addMin: 250000, 
      addMax: 500000 
    },
    { 
      id: 'database', 
      name: 'Setup Database (MySQL/MongoDB)', 
      addMin: 300000, 
      addMax: 700000 
    },
    { 
      id: 'api', 
      name: 'Rest API (Backend Sendiri)', 
      addMin: 1000000, 
      addMax: 2000000 
    },
    { 
      id: 'design', 
      name: 'Desain UI/UX Khusus (Figma)', 
      addMin: 500000, 
      addMax: 1500000 
    },
    { 
      id: 'realtime', 
      name: 'Fitur Realtime (Chat/Notifikasi)', 
      addMin: 750000, 
      addMax: 1500000 
    },
    { 
      id: 'payment', 
      name: 'Integrasi Payment Gateway', 
      addMin: 800000, 
      addMax: 1500000 
    },
  ];