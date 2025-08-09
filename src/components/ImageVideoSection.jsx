import React from 'react';

const ImageVideoSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[500px] flex items-center justify-center bg-black">
        <img
          src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1,w_460/Campaigns/hdd-bella-hadid-2025/photo/001A2_BellaxLHeureDuDiamant_WebMedia2_LifestylePhotography_45"
          alt="Luxury Watch"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Video Side */}
      <div className="w-full md:w-1/2 h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/11965361/11965361-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ImageVideoSection;
