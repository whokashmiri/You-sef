import React from 'react';

const HeroLu = () => {


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/fallback.jpg"
        className="absolute w-full h-full object-cover"
      >
        <source
          src="https://luvor.com/wp-content/uploads/2024/01/luvor_hero_video.mp4"
          type="video/mp4"
        />
      </video>

     

      {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 pb-16">

        <p className="text-white uppercase tracking-widest text-sm md:text-base">
        PREMIUM HOME DECOR
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mt-4">
         Saint-Louis
        </h1>
         <button className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition flex items-center gap-2">
  Discover the Collection
  <span className="animate-bounce">
    ↓
  </span>
</button>
      </div>
    </div>
  );
};

export default HeroLu;
