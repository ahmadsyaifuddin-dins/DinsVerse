// src/pages/AboutPage.jsx

import React from 'react';
// Impor beberapa icon untuk tech stack
import { FaReact, FaLaravel, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb, SiFlutter, SiLivewire, SiMysql, SiAlpinedotjs } from 'react-icons/si';

const profilePicUrl = "https://avatars.githubusercontent.com/u/77381720?v=4";

// Komponen kecil untuk Skill (agar rapi)
const SkillIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-900/50 rounded-lg border border-gray-700/50 text-center">
    {icon}
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h1>
      
      <div className="max-w-5xl mx-auto">
        
        {/* Bagian Bio (Foto & Teks) */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16
                        bg-slate-800/70 backdrop-blur-md border border-gray-700/50 
                        rounded-lg p-8 md:p-12 shadow-lg">
          
          {/* Foto Profil */}
          <div className="shrink-0">
            <img 
              src={profilePicUrl} // Gunakan URL dari atas
              alt="My Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover 
                         shadow-xl shadow-cyan-500/10 border-4 border-gray-700"
              loading="lazy"
            />
          </div>
          
          {/* Teks Bio */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ahmad Syaifuddin (Dins)
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
            Halo! Saya seorang pengembang full-stack yang bersemangat dalam membangun aplikasi web dan mobile modern. Saya senang mengubah ide menjadi kenyataan, mulai dari konsep awal hingga produk yang sepenuhnya berfungsi. Portofolio ini merupakan kumpulan perjalanan saya dan proyek-proyek yang telah saya bangun sepanjang perjalanan.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Ketika tidak sedang mengoding, Anda bisa menemukan saya sedang menjelajahi teknologi baru atau berkontribusi pada proyek open-source.
            </p>
          </div>
        </div>

        {/* Bagian Tech Stack */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">My Core Tech Stack</h2>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <SkillIcon icon={<FaReact size={40} className="text-cyan-400" />} label="React" />
            <SkillIcon icon={<FaLaravel size={40} className="text-red-500" />} label="Laravel" />
            <SkillIcon icon={<SiLivewire size={40} className="text-indigo-500" />} label="Livewire" />
            <SkillIcon icon={<SiMysql size={40} className="text-amber-500" />} label="MySQL" />
            <SkillIcon icon={<SiAlpinedotjs size={40} className="text-blue-500" />} label="AlpineJS" />
            <SkillIcon icon={<FaNodeJs size={40} className="text-green-500" />} label="Node.js" />
            <SkillIcon icon={<SiFlutter size={40} className="text-blue-400" />} label="Flutter" />
            <SkillIcon icon={<FaPython size={40} className="text-blue-600" />} label="Python" />
            <SkillIcon icon={<SiTailwindcss size={40} className="text-cyan-500" />} label="Tailwind CSS" />
            <SkillIcon icon={<SiVite size={40} className="text-yellow-500" />} label="Vite" />
            <SkillIcon icon={<SiExpress size={40} className="text-gray-400" />} label="Express" />
            <SkillIcon icon={<SiMongodb size={40} className="text-green-600" />} label="MongoDB" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;