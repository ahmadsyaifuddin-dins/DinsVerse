// src/components/TestimonialCard.jsx
import React, { useEffect, useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const GLITCH_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*~";

const TestimonialCard = ({ testimonial }) => {
  const {
    name,
    title,
    quote,
    imageUrl,
    projectImageUrl,
    typingSpeed,
    blinkColor,
    effectType,
  } = testimonial;

  const [text, setText] = useState(
    effectType === "bot" ? "" : effectType === "alien" ? "" : quote
  );
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const intervalRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  // ✨ Efek khusus Alien (huruf acak glitch)
  useEffect(() => {
    if (effectType !== "alien") return;
    let revealed = 0;
    let frame = 0;
    const glitchSpeed = 50;
    const smoothness = 3;

    const startTyping = () => {
      setIsTyping(true);
      intervalRef.current = setInterval(() => {
        frame++;
        const visiblePart = quote.slice(0, revealed);
        const randomPart = Array.from(
          { length: quote.length - revealed },
          () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        ).join("");
        setText(visiblePart + randomPart);

        if (frame % smoothness === 0 && revealed < quote.length) revealed++;
        if (revealed >= quote.length) {
          clearInterval(intervalRef.current);
          setText(quote);
          setIsTyping(false);
          resetTimeoutRef.current = setTimeout(() => {
            revealed = 0;
            frame = 0;
            setText("");
            startTyping();
          }, testimonial.resetDelay || 3000); // default 3 detik, bisa diset 10.000
        }
      }, glitchSpeed);
    };

    startTyping();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(resetTimeoutRef.current);
    };
  }, [quote, effectType]);

  // 🤖 Efek bot (typing normal)
  useEffect(() => {
    if (effectType !== "bot") return;
    let i = 0;
    const startTyping = () => {
      setIsTyping(true);
      intervalRef.current = setInterval(() => {
        if (i < quote.length) {
          setText(quote.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalRef.current);
          setIsTyping(false);
          resetTimeoutRef.current = setTimeout(() => {
            i = 0;
            setText("");
            startTyping();
          }, testimonial.resetDelay || 3000); // default 3 detik, bisa diset 10.000
        }
      }, typingSpeed || 50);
    };
    startTyping();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(resetTimeoutRef.current);
    };
  }, [quote, typingSpeed, effectType]);

  // Cursor berkedip
  useEffect(() => {
    const blink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="backdrop-blur-xs back border border-slate-900/50 
                    rounded-lg shadow-lg p-6 md:p-8 flex flex-col overflow-hidden relative">
      <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />

      <p
        className={`text-gray-300 text-lg italic leading-relaxed grow transition-all 
                    duration-150 ease-out wrap-break-word font-mono text-[15px]`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        "{text}"
        {(effectType === "bot" || effectType === "alien") && (
          <span
            style={{
              color: blinkColor || "#7f5af0",
              opacity: showCursor ? 1 : 0.2,
              transition: "opacity 0.25s ease",
            }}
          >
            |
          </span>
        )}
      </p>

      {projectImageUrl && (
        <img
          src={projectImageUrl}
          alt={name}
          className="rounded-lg mt-6 w-full object-cover border border-gray-700"
          loading="lazy"
        />
      )}

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
