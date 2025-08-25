import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const BRAND_LOGOS = [
  "https://www.attarunited.com/wp-content/uploads/2020/03/lgr.jpg",
  "https://logos-world.net/wp-content/uploads/2020/11/Hublot-Logo-700x394.png",
  "https://cdn.brandfetch.io/id7yvOb0kK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://cdn.brandfetch.io/id4CB7EiAA/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", // scale this down
  "https://cdn.brandfetch.io/idJhPZ5W91/w/5760/h/1106/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://almajedjewellery.me/wp-content/uploads/2019/11/Gerald-Charles.png",
];

// Autoplay plugin
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
                className={`max-h-full object-contain opacity-80 scale-90 hover:opacity-100 transition ${
                  i === 3 ? "max-w-[60%]" : "max-w-[80%]"
                }`}
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
