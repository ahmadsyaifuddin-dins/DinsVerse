// src/components/PriceEstimator.jsx
import React, { useState, useEffect } from 'react';
import { projectTypes, features } from '../data/pricingData';
import { calculatePrice, formatRupiah } from '../data/priceCalculator';
import { FaWhatsapp } from 'react-icons/fa';

const PriceEstimator = () => {
  // State untuk menyimpan pilihan pengguna
  const [selectedType, setSelectedType] = useState(projectTypes[0]?.id || '');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  
  // State untuk menyimpan hasil kalkulasi
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  // Hitung ulang harga setiap kali pilihan berubah
  useEffect(() => {
    const newPrice = calculatePrice(selectedType, selectedFeatures);
    setPriceRange(newPrice);
  }, [selectedType, selectedFeatures]);

  // Handler untuk mengubah tipe proyek (Radio)
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  // Handler untuk menambah/mengurangi fitur (Checkbox)
  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFeatures(prev =>
      checked ? [...prev, value] : prev.filter(id => id !== value)
    );
  };

  const userPhoneNumber = "6285849910396";

  // 1. Dapatkan nama dari Tipe Proyek yang dipilih
  const project = projectTypes.find(p => p.id === selectedType);
  const projectTypeName = project ? project.name : '(Belum Dipilih)';

  // 2. Buat daftar nama Fitur yang dipilih
  let featuresMessage = "Fitur Tambahan: (Tidak ada)";
  if (selectedFeatures.length > 0) {
    const featureNames = selectedFeatures.map(id => {
        const feature = features.find(f => f.id === id);
        return `\n- ${feature.name}`; // '\n' = baris baru
    }).join('');
    
    featuresMessage = `Fitur Tambahan:${featureNames}`;
  }

  // 3. Dapatkan rentang harga yang sudah diformat
  const priceText = `Estimasi Harga: ${formatRupiah(priceRange.min)} - ${formatRupiah(priceRange.max)}`;

  // 4. Gabungkan semua menjadi satu pesan
  const whatsappText = `Hallo kak, saya mau konsultasi gratis.
Saya sudah hitung estimasi di DinsVerse:

Tipe Proyek: ${projectTypeName}
${featuresMessage}

${priceText}
`;

  // 5. Buat link-nya
  const encodedText = encodeURIComponent(whatsappText);
  const whatsappLink = `https://wa.me/${userPhoneNumber}?text=${encodedText}`;

  // -----------------------------------------------------------
  // ▲▲▲ AKHIR DARI BLOK LOGIKA BARU ▲▲▲
  // -----------------------------------------------------------

  // Sisa file (bagian return/JSX) tetap SAMA PERSIS
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        
        {/* Kolom Opsi (Kiri) */}
        <div className="md:col-span-2 space-y-10">
          
          {/* 1. Pilih Tipe Proyek */}
          <section>
            <h2 className="text-2xl font-semibold text-white border-b-2 border-cyan-500/30 pb-3 mb-5">
              1. Pilih Tipe Proyek
            </h2>
            <div className="space-y-4">
              {projectTypes.map((type) => (
                <label key={type.id} className="block cursor-pointer p-5 rounded-lg bg-slate-800/70 border border-gray-700/50 hover:border-cyan-400/70 transition-colors has-checked:border-cyan-400 has-checked:bg-slate-800">
                  <input 
                    type="radio" 
                    name="projectType" 
                    value={type.id}
                    checked={selectedType === type.id}
                    onChange={handleTypeChange}
                    className="form-radio text-cyan-500 bg-gray-700 border-gray-600 focus:ring-cyan-500" 
                  />
                  <span className="ml-3 text-lg text-gray-100 font-medium">{type.name}</span>
                  <p className="ml-7 text-sm text-gray-400">{type.description}</p>
                  <p className="ml-7 mt-1 text-base font-semibold text-cyan-300">
                    {formatRupiah(type.baseMin)} - {formatRupiah(type.baseMax)}
                  </p>
                </label>
              ))}
            </div>
          </section>

          {/* 2. Pilih Fitur Tambahan */}
          <section>
            <h2 className="text-2xl font-semibold text-white border-b-2 border-cyan-500/30 pb-3 mb-5">
              2. Pilih Fitur Tambahan (Opsional)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <label key={feature.id} className="flex items-center cursor-pointer p-4 rounded-lg bg-slate-800/70 border border-gray-700/50 hover:border-cyan-400/70 transition-colors has-checked:border-cyan-400/70">
                  <input 
                    type="checkbox" 
                    value={feature.id}
                    onChange={handleFeatureChange}
                    className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500"
                  />
                  <span className="ml-3 text-gray-200">{feature.name}</span>
                </label>
              ))}
            </div>
          </section>

        </div>

        {/* Kolom Hasil (Kanan) */}
        <div className="md:col-span-1">
          <div className="sticky top-28 bg-slate-800/70 backdrop-blur-md border border-cyan-500/50 rounded-lg shadow-lg shadow-cyan-500/10">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Estimasi Total Harga</h3>
              
              <div className="text-center mb-6">
                <p className="text-sm text-gray-400">Mulai dari</p>
                <p className="text-4xl font-bold text-cyan-400 my-1">{formatRupiah(priceRange.min)}</p>
                <p className="text-sm text-gray-400">sampai dengan</p>
                <p className="text-3xl font-bold text-white mt-1">{formatRupiah(priceRange.max)}</p>
              </div>

              <p className="text-xs text-gray-500 mb-6 text-center">
                *Harga ini hanya perkiraan. Biaya final akan ditentukan setelah diskusi kebutuhan proyek.
              </p>
              
              <a 
                href={whatsappLink} // <-- 'href' ini sekarang sudah dinamis
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 
                            bg-cyan-500 hover:bg-cyan-400 
                            text-gray-900 font-semibold 
                            rounded-lg transition-colors duration-300 shadow-lg shadow-cyan-500/20"
              >
                <FaWhatsapp size={18} />
                <span>Hubungi Dins (Gratis)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PriceEstimator;