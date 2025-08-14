import React from 'react';

const Graff2 = () => {
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
        <source src="https://videos.pexels.com/video-files/4974440/4974440-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        {/* <source src="/path/to/video.webm" type="video/webm" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional dark layer) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}

      {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 pb-16">

        <p className="text-white uppercase tracking-widest text-sm md:text-base">
          The Master of Artistry
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mt-4">
          Graff 2025
        </h1>
         <button className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition flex items-center gap-2">
  Discover the Collection
  <span className="animate-bounce">
    ↓
  </span>
</button>
      </div>
    </section>
  );
};

export default Graff2;
