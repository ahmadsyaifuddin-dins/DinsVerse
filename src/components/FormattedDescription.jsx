// src/components/FormattedDescription.jsx

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const FormattedDescription = ({ description }) => {
  if (!description) return null;

  // 1. Pisahkan deskripsi berdasarkan baris baru
  //    dan hapus baris kosong jika ada
  const lines = description.split('\n').filter(line => line.trim() !== '');

  if (lines.length === 0) return null;

  // 2. Baris pertama selalu kita anggap sebagai paragraf pengantar
  const introParagraph = lines[0];

  // 3. Sisa barisnya kita anggap sebagai daftar fitur
  const features = lines.slice(1);

  return (
    <div className="text-gray-300 text-lg max-w-none mb-8 space-y-6">
      {/* 1. Render Paragraf Pengantar */}
      <p className="leading-relaxed">{introParagraph}</p>

      {/* 2. Render Daftar Fitur (jika ada) */}
      {features.length > 0 && (
        <ul className="space-y-4">
          {features.map((line, index) => {
            // Pisahkan judul fitur dari deskripsinya
            // Kita cari "—" (em-dash) atau "-" (hyphen)
            const parts = line.split(/—|-/);
            let title = '';
            let text = line; // Default-nya adalah seluruh baris

            if (parts.length > 1) {
              // Jika ada "—", bagian pertama adalah judul
              title = parts[0].trim();
              // Sisanya adalah teks (kita gabung lagi jika ada "-" lain di teks)
              text = parts.slice(1).join('-').trim();
            }

            return (
              <li key={index} className="flex gap-3">
                <FiChevronRight 
                  className="text-cyan-400 mt-1.5 shrink-0" 
                  size={20} 
                />
                <div>
                  {/* Tampilkan judul (jika ada) dengan bold */}
                  {title && (
                    <strong className="font-semibold text-white">{title}: </strong>
                  )}
                  {/* Tampilkan sisa teksnya */}
                  <span className="text-gray-400">{text}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormattedDescription;