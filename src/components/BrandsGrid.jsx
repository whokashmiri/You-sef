import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BRAND_LOGOS = [
  "https://logos-world.net/wp-content/uploads/2024/10/Chopard-Logo.png",
  "https://logos-world.net/wp-content/uploads/2020/11/Hublot-Logo-700x394.png",
  "https://cdn.brandfetch.io/id7yvOb0kK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://luvor.com/wp-content/uploads//2020/10/Luvor-B-Logo-1.svg",
  "https://cdn.brandfetch.io/id4CB7EiAA/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://cdn.brandfetch.io/idJhPZ5W91/w/5760/h/1106/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
];

// Autoplay plugin (pauses on hover and while dragging)
function Autoplay(slider) {
  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 1000);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const BrandsCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: {
        perView: 4,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 3, spacing: 12 },
        },
        "(max-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(max-width: 480px)": {
          slides: { perView: 1, spacing: 8 },
        },
      },
    },
    [Autoplay]
  );

  return (
    <div className="px-4 py-8 bg-white">
      <div ref={sliderRef} className="keen-slider">
        {BRAND_LOGOS.map((url, i) => (
          <div
            key={i}
            className="keen-slider__slide flex items-center justify-center"
          >
            <div className="h-20 sm:h-24 md:h-28 w-full flex items-center justify-center">
              <img
                src={url}
                alt={`Brand ${i + 1}`}
                className="max-h-full max-w-[80%] object-contain opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
