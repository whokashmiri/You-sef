import React from 'react';

const Hoblot = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2025-06/SUMMER-CAMPAIGN-2025---LS---09---HORIZONTAL-edited.jpg?itok=Mw3QnXe-" // replace with your own watch banner image
        alt="Hoblot"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay (optional dark layer) */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div> */}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-end justify-end text-center px-4 pt-16">
        <p className="text-white uppercase text-sm tracking-widest mb-2">
          New Timepieces Revealed
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

export default Hoblot;
