import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; 

const MilleMigliaBanner = () => {
      useEffect(() => {
            AOS.init({ duration: 1000 });
          }, []);
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1.78,w_2560/Homepage/2025_MM_STILL-LIFE_168638-3001_01_D4300_V2_A4_1920X1080" // replace with your own watch banner image
        alt="Mille Miglia 2025 Watch"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay (optional dark layer) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-end justify-end text-center px-4 pt-16" data-aos="fade-left">
        <p className="text-white uppercase text-sm tracking-widest mb-2">
          New Timepieces Revealed
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mb-6">
          Chopard 2025
        </h1>
        <Link to="/chopard" className="px-6 py-3 bg-slate-600 bg-opacity-20 backdrop-blur-md text-white text-sm uppercase tracking-widest hover:bg-gray-700 transition">
          Discover the Collection
        </Link>
      </div>
    </section>
  );
};

export default MilleMigliaBanner;
