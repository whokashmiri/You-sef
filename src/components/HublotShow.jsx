import React from 'react';

const HublotShow = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        // poster="https://your-poster-image.jpg" // optional: shown before video loads
      >
        <source src="https://www.hublot.com/sites/default/files/2025-05/SUMMER%20CAMPAIGN%202025%20-%20LS%20-%20LOOP%205%20-%2016_9%20-%20WEB-original_1.mp4" type="video/mp4" />
        {/* <source src="/path/to/video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional dark layer) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-end justify-end text-center px-4 pt-16">
        <p className="text-white uppercase text-sm tracking-widest mb-2">
          New Timeless Section Revealed
        </p>
        <h1 className="text-white uppercase text-4xl md:text-6xl font-light mb-6">
          Hoblot 2025
        </h1>
        <button className="px-6 py-3 bg-slate-600 bg-opacity-20 backdrop-blur-md text-white text-sm uppercase tracking-widest hover:bg-gray-700 transition">
          Discover the Collection
        </button>
      </div>
    </section>
  );
};

export default HublotShow;
