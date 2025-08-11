import React from 'react';
import ChopardItemsList from './ChopardItemsListJewelry';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';


const ChopardJewelry = () => {


  return (
    <>
    <Header/>
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
          src="https://objects-prod.cdn.chopard.com/video/upload/q_auto/PLP/chopard_Bella_multicollection_3d_bagues_ice_cube_2024_10s_1080p25_vi.webm"
          type="video/mp4"
        />
      </video>

     

      {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 pb-16">

        <p className="text-white uppercase tracking-widest text-sm md:text-base">
           Execlusive Jewellery
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mt-4">
          Chopard
        </h1>
     <button className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition flex items-center gap-2">
  Discover the Collection
  <span className="animate-bounce">
    ↓
  </span>
</button>

      </div>
    </div>
    <ChopardItemsList/>
    <NewsletterSection/>
    <Footer/>
    </>
  );
};

export default ChopardJewelry;
