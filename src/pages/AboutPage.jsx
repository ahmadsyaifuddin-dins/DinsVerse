// src/pages/AboutPage.jsx

import React from 'react';
// 1. Impor icon baru
import { FaReact, FaLaravel, FaNodeJs, FaPython, FaWhatsapp } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpress, SiMongodb, SiFlutter, SiLivewire, SiMysql, SiAlpinedotjs } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const profilePicUrl = "https://avatars.githubusercontent.com/u/77381720?v=4";

// Komponen kecil untuk Skill (agar rapi)
const SkillIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-900/50 rounded-lg border border-gray-700/50 text-center">
    {icon}
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);

const AboutPage = () => {
    
  const userPhoneNumber = "6285849910396";
  const whatsappText = "hallo kak mau joki aplikasi";
  const encodedText = encodeURIComponent(whatsappText);
  const whatsappLink = `https://wa.me/${userPhoneNumber}?text=${encodedText}`;
  
  const emailAddress = "dinsdev.10@gmail.com";
  const emailLink = `mailto:${emailAddress}`;

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h1>
      
      <div className="max-w-5xl mx-auto">
        
        {/* Bagian Bio (Foto & Teks) */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16
                        backdrop-blur-none border border-slate-900/50 
                        rounded-lg p-8 md:p-12 shadow-lg">
          
          <div className="shrink-0">
            <img 
              src={profilePicUrl}
              alt="My Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover 
                         shadow-xl shadow-cyan-500/10 border-4 border-gray-700"
              loading="lazy"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ahmad Syaifuddin (Dins)
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
            Halo! Saya Ahmad Syaifuddin, seorang pengembang full-stack yang menikmati proses membangun sesuatu dari nol — mulai dari ide sederhana sampai menjadi aplikasi yang benar-benar hidup dan bisa digunakan banyak orang. 
            <span className='text-cyan-400'> DinsVerse</span> ini adalah tempat di mana saya mengarsipkan perjalanan dan karya yang telah saya bangun sejauh ini.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Di luar layar kode, saya senang bereksperimen dengan teknologi baru, menyusun konsep UI, atau sekadar ngulik hal-hal kecil yang bisa bikin aplikasi terasa lebih hidup. 
            Intinya, saya suka belajar, bikin sesuatu yang berguna, dan terus berkembang bareng teknologi.
            </p>
          </div>
        </div>

        {/* Bagian Tech Stack */}
        <div className="mb-16">
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
        
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tombol WhatsApp */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/70 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-lg hover:border-green-500/70 transition-colors duration-300"
            >
              <FaWhatsapp size={40} className="text-green-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                <p className="text-gray-400">Click to start a chat!</p>
              </div>
            </a>

            {/* Tombol Email */}
            <a 
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-800/70 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-lg hover:border-cyan-400/70 transition-colors duration-300"
            >
              <FiMail size={40} className="text-red-500 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-400">{emailAddress}</p>
              </div>
            </a>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutPage;