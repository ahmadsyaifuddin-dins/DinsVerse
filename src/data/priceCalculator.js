// src/data/priceCalculator.js
import { projectTypes, features } from './pricingData';

/**
 * Menghitung total rentang harga berdasarkan pilihan.
 * @param {string} selectedType - ID dari tipe proyek (misal: 'pkl')
 * @param {string[]} selectedFeatures - Array ID fitur (misal: ['auth', 'api'])
 * @returns {{min: number, max: number}} - Objek rentang harga
 */
export const calculatePrice = (selectedType, selectedFeatures) => {
  let totalMin = 0;
  let totalMax = 0;

  // 1. Temukan harga dasar proyek
  const project = projectTypes.find(p => p.id === selectedType);
  if (project) {
    totalMin += project.baseMin;
    totalMax += project.baseMax;
  }

  // 2. Tambahkan harga semua fitur yang dipilih
  selectedFeatures.forEach(featureId => {
    const feature = features.find(f => f.id === featureId);
    if (feature) {
      totalMin += feature.addMin;
      totalMax += feature.addMax;
    }
  });

  return { min: totalMin, max: totalMax };
};

/**
 * Helper untuk memformat angka menjadi mata uang Rupiah (Rp)
 * @param {number} number - Angka yang akan diformat
 * @returns {string} - String berformat (misal: "Rp 1.500.000")
 */
export const formatRupiah = (number) => {
  if (number === 0) return "Rp 0";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};