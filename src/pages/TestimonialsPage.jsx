// src/pages/TestimonialsPage.jsx

import React from 'react';
// 1. Impor data dan kartu
import { testimonials } from '../data/testimonialsData';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Testimonials
      </h1>
      
      {testimonials.length > 0 ? (
        // 2. Tampilkan testimoni dalam grid
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <TestimonialCard key={testi.id} testimonial={testi} />
          ))}
        </div>
      ) : (
        // 3. Tampilkan pesan jika data kosong
        <div className="text-center">
          <p className="text-lg text-gray-400 mt-4">
            Testimonials are not available yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;