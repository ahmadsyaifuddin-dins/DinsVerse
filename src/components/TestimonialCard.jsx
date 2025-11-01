// src/components/TestimonialCard.jsx
import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const { id, name, title, quote, imageUrl, projectImageUrl, typingSpeed, blinkColor } = testimonial;
  const [typedText, setTypedText] = useState(typingSpeed ? "" : quote);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!typingSpeed) return; // hanya aktif untuk AI / bot testimoni

    let i = 0;
    let interval;
    let resetTimeout;

    const startTyping = () => {
      setIsTyping(true);
      interval = setInterval(() => {
        if (i < quote.length) {
          setTypedText(quote.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);

          // jeda 3 detik sebelum mengetik ulang
          resetTimeout = setTimeout(() => {
            setTypedText("");
            i = 0;
            startTyping();
          }, 3000);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(resetTimeout);
    };
  }, [quote, typingSpeed]);

  return (
    <div className="bg-slate-800/70 backdrop-blur-md border border-gray-700/50 
                    rounded-lg shadow-lg p-6 md:p-8 flex flex-col">
      
      {/* Icon Kutipan */}
      <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
      
      {/* Isi Testimoni */}
      <p
        className={`text-gray-300 text-lg italic leading-relaxed grow ${
          typingSpeed ? 'font-mono text-[15px]' : ''
        }`}
      >
        "{typedText}"
        {typingSpeed && (
          <span
            className="cursor-blink"
            style={{
              color: blinkColor || "#7f5af0",
              visibility: isTyping ? "visible" : "hidden",
            }}
          >
            |
          </span>
        )}
      </p>

      {/* Screenshot (optional) */}
      {projectImageUrl && (
        <img
          src={projectImageUrl}
          alt={`Screenshot for ${name}`}
          className="rounded-lg mt-6 w-full object-cover"
          loading="lazy"
        />
      )}

      {/* Profil */}
      <div className="flex items-center mt-6 pt-6 border-t border-gray-700/50">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-700"
          loading="lazy"
        />
        <div className="ml-4">
          <p className="text-xl font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
