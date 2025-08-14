import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LAYOUT_COUNTS = [3, 2, 1];

// Put your URLs here
const VIDEO_URLS = [
  "https://www.hublot.com/sites/default/files/2025-05/SUMMER%20CAMPAIGN%202025%20-%20LS%20-%20LOOP%203%20-%2016_9-%20WEB-original_1.mp4",
  "https://objects-prod.cdn.chopard.com/video/upload/e-merchandising_push/capsule_3_bella_alpine_eagle_mobile.webm",
  "https://videos.pexels.com/video-files/26885209/12025980_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/17213829/17213829-uhd_2560_1440_60fps.mp4",
  "https://videos.pexels.com/video-files/11965370/11965370-uhd_2560_1440_24fps.mp4",
];

const Hero2 = ({
  cycleMs = 5000,
  heading = "Crafted for the Bold",
  subtext = "Experience visuals that move with you.",
  buttonText = "Shop Now",
  onButtonClick,
}) => {
  const [layoutStep, setLayoutStep] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const timerRef = useRef(null);

  const count = LAYOUT_COUNTS[layoutStep];

  const currentVideos = useMemo(() => {
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push(VIDEO_URLS[(startIndex + i) % VIDEO_URLS.length]);
    }
    return out;
  }, [startIndex, count]);

  useEffect(() => {
    const tick = () => {
      setLayoutStep((s) => (s + 1) % LAYOUT_COUNTS.length);
      setStartIndex((idx) => (idx + count) % VIDEO_URLS.length);
    };
    timerRef.current = setInterval(tick, cycleMs);
    return () => clearInterval(timerRef.current);
  }, [cycleMs, count]);

  const gridCols =
    count === 3
      ? "grid-cols-1 md:grid-cols-3"
      : count === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1";

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Videos layer (full-cover) */}
      <div className="absolute inset-0 z-0">
        <div className={`grid ${gridCols} h-full w-full gap-0`}>
          {currentVideos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full w-full overflow-hidden"
            >
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Text/CTA layer (on top) */}
      <div className="relative z-20 pointer-events-auto h-full flex items-center">
        <div className="ml-auto w-full md:w-[28rem] p-4 md:p-8">
          <div className="mt-4 md:mt-8 rounded-2xl p-6 md:p-8 shadow-2xl bg-transparent">
            <p className="uppercase tracking-widest text-xs md:text-sm text-white mb-2">
              {subtext}
            </p>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-white mb-4">
              {heading}
            </h1>
            <Link to="/hublot"
              onClick={onButtonClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
