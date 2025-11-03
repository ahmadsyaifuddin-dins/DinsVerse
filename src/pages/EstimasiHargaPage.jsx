// src/pages/EstimasiHargaPage.jsx

import React from 'react';
import PriceEstimator from '../components/PriceEstimator'; // Impor estimator kita

const EstimasiHargaPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Estimasi Biaya Project
      </h1>
      
      {/* Render komponen estimator di sini */}
      <PriceEstimator />
    </div>
  );
};

export default EstimasiHargaPage;