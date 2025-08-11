import React from 'react';
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';
 import GraffItemsListJel from "./GraffItemsListJel"


const GraffJewelry = () => {


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
          src="https://videos.pexels.com/video-files/7268830/7268830-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

     

      {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-4 pb-16">

        <p className="text-white uppercase tracking-widest text-sm md:text-base">
           Marvelous Jewellery
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-light mt-4">
          Graff
        </h1>
     <button className="mt-6 px-6 py-3 bg-white text-black text-sm font-semibold tracking-wide uppercase hover:bg-gray-200 transition flex items-center gap-2">
  Discover the Collection
  <span className="animate-bounce">
    ↓
  </span>
</button>

      </div>
    </div>
    <GraffItemsListJel/>
    <NewsletterSection/>
    <Footer/>
    </>
  );
};

export default GraffJewelry;
