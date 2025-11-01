// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;

  // Logika untuk menampilkan rentang tahun secara dinamis
  const yearRange = currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;

  return (
    // Kita buat footer ini 'relative' agar tidak menutupi bintang
    <footer className="w-full py-6 mt-12 border-t border-slate-900/50 relative z-10">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>
          &copy; 1 November 2025-{yearRange} Ahmad Syaifuddin &bull; DinsVerse Showcase. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;