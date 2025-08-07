'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    }, 3000); // 3초 간격

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full aspect-[1920/969] overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out w-[500%] h-full"
        style={{ transform: `translateX(-${currentSlide * 20}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-[20%] h-full flex-shrink-0 relative">
            <Image 
              src={slide} 
              alt={`슬라이드 ${index + 1}`} 
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2.5 sm:bottom-2.5 sm:gap-1.5">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 sm:w-2 sm:h-2 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
} 