import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const MilleMigliaBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[70vh]        /* phones */
        overflow-hidden
        sm:h-screen     /* tablet & above */
      "
    >
      {/* Background Image */}
      <img
        src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1.78,w_2560/Homepage/2025_MM_STILL-LIFE_168638-3001_01_D4300_V2_A4_1920X1080"
        alt="Mille Miglia 2025 Watch"
        className="absolute w-full h-full object-cover object-top"
      />

      <div
        className="
          relative z-20 h-full flex flex-col items-end justify-end text-center px-4 pt-16
          md:items-end md:justify-end
          sm:items-center sm:justify-center
        "
        data-aos="fade-left"
      >
        <p className="text-white uppercase text-xs sm:text-sm tracking-widest mb-2">
          New Timepieces Revealed
        </p>
        <h1 className="text-white uppercase text-4xl md:text-6xl font-light mt-4">
  Chopard<span className="mx-2"></span>2025
</h1>


        <Link
          to="/chopard"
          className="px-6 py-3 bg-slate-600 bg-opacity-20 backdrop-blur-md text-white text-xs sm:text-sm uppercase tracking-widest hover:bg-gray-700 transition"
        >
          Discover the Collection
        </Link>
      </div>
    </section>
  );
};

export default MilleMigliaBanner;
