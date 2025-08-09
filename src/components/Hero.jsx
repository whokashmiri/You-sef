import React from 'react';

const Hero = () => {


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
          src="https://objects-prod.cdn.chopard.com/video/upload/q_auto/Campaigns/hdd-bella-hadid-2025/video/Chopard_LHDD_Bella_main_film_1080_VI_2.mov"
          type="video/mp4"
        />
      </video>

     

      {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 pb-16">

        <p className="text-white uppercase tracking-widest text-sm md:text-base">
          Diamond Watches and Jewellery
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mt-4">
          L’HEURE DU DIAMANT
        </h1>
        <button className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition">
          Discover the Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
