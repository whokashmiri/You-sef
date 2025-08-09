import React from 'react';

const Luc = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1.78,w_1024/Campaigns/luc-20th-anniversary/20-Years-of-Qualite-Fleurier"
        alt="Mille Miglia 2025 Watch"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Transparent Black Overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-25 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-end justify-end text-right px-6 md:px-20 pb-16">
        <p className="text-white uppercase text-sm tracking-widest mb-2">
          Celebrating the most demanding certification
        </p>
        <h1 className="text-white text-3xl md:text-6xl font-light mb-6 max-w-xl">
          20 Years of Qualité Fleurier
        </h1>
        <button className="px-6 py-3 bg-slate-600 bg-opacity-20 backdrop-blur-md text-white text-sm uppercase tracking-widest hover:bg-gray-700 transition">
          Discover the Collection
        </button>
      </div>
    </section>
  );
};

export default Luc;
