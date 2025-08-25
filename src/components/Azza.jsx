import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Azza = () => {
   useEffect(() => {
                    AOS.init({ duration: 1000 });
                  }, []);
  return (
    <section className=" relative
        w-full
        h-[70vh]        /* phones */
        overflow-hidden
        sm:h-screen     /* tablet & above */">
      {/* Background Image */}
      <img
        src="https://azzafahmy.com/cdn/shop/files/HJ_25_landing_page-04_1.jpg?v=1737988799&width=1800" // replace with your own watch banner image
        alt="Azza"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay (optional dark layer) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-end justify-end text-center px-4 pt-16"  data-aos="fade-left">
        <p className="text-white uppercase text-sm tracking-widest mb-2">
          New Collection Revealed
        </p>
        <h1 className="text-white uppercase text-4xl md:text-6xl font-light mb-6">
          Azza Fahmy <span className="mx-2"></span> 2025
        </h1>
        <Link to="/azza" className="px-6 py-3 bg-slate-600 bg-opacity-20 backdrop-blur-md text-white text-sm uppercase tracking-widest hover:bg-gray-700 transition">
          Discover the Collection
        </Link>
      </div>
    </section>
  );
};

export default Azza;
