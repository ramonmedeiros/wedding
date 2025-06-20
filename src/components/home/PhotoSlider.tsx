
import { useState, useEffect } from "react";

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const photos = [
    {
      url: "/images/kiruna.jpg",
      alt: "Freezing in Kiruna"
    },
    {
      url: "/images/football_game.jpg",
      alt: "Watching Brazil women's team lose"
    },
    {
      url: "/images/napoli.jpg",
      alt: "Dead after the walk on Vesuvius"
    },
    {
      url: "/images/venice.jpg",
      alt: "Chilling in Venice"
    },
    {
      url: "/images/paris.jpg",
      alt: "Freezing during winter in paris"
    },
    {
      url: "/images/rio2.jpg",
      alt: "Of course is raining in Rio"  
    },
    {
      url: "/images/porto.jpg",
      alt: "Douro sunshine"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[300px] md:h-full overflow-hidden bg-wedding-offwhite rounded-lg">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            className={`w-1 h-1 rounded-full transition-all ${index === currentIndex ? "bg-wedding-white scale-110" : "bg-wedding-white/50"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-wedding-white/20 backdrop-blur-sm text-wedding-darkgray hover:bg-wedding-white/40 transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-wedding-white/20 backdrop-blur-sm text-wedding-darkgray hover:bg-wedding-white/40 transition-all duration-200"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default PhotoSlider;
