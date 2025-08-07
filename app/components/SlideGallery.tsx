'use client';

import { useState, useEffect } from 'react';

const slides = [
  '/images/slides/slide1.png',
  '/images/slides/slide2.png',
  '/images/slides/slide3.png',
  '/images/slides/slide4.png',
  '/images/slides/slide5.png',
];

export default function SlideGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 1초 간격

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slide-container">
      <div 
        className="slide-wrapper"
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <img src={slide} alt={`슬라이드 ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <div className="slide-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 