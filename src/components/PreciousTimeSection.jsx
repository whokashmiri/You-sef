import React from 'react';

const PreciousTimeSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-black text-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-serif uppercase leading-snug mb-6">
          Precious Time,<br />Perfectly Set
        </h2>
        <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg">
          At the heart of L'Heure du Diamant lie finely adjusted movements. Developed and produced entirely in-house at Chopard's workshops, these calibres exemplify the Manufacture's dedication to precision and technical excellence.
        </p>
        <button className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs uppercase px-6 py-3 rounded-none tracking-wider transition">
          Discover
        </button>
      </div>

      {/* Right Video */}
      <div className="w-full md:w-1/2 h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full p-2 h-full object-cover"
        >
          <source
            src="https://objects-prod.cdn.chopard.com/video/upload/q_auto/Campaigns/hdd-bella-hadid-2025/video/Chopard_LHDD_Bella_main_film_1080_VI_2.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default PreciousTimeSection;
