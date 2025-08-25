import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Gerald Charles",
    description: "Maestro GC Sport Tennis Grass Green Color LIMITED EDITION 200 PIECES NEW UNWORN FULL SET",
    images: [
      "https://img.chrono24.com/images/uhren/41002430-0d2vl6y4k8j9hob9uf6midia-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/41002430-bzpqg3116sj4sfs1znsjuetd-ExtraLarge.jpg",
    ]
  },
  {
    id: 2,
    title: "Gerald Charles",
    description: "Maestro GC39 25th Anniversary Edition",
    images: [
"https://img.chrono24.com/images/uhren/41157251-1sisa1ao3gp0bmf680py969x-ExtraLarge.jpg",
"https://img.chrono24.com/images/uhren/41157251-es9px16u66diq69p8mrypnaz-ExtraLarge.jpg" ]
  },
   {
    id: 3,
    title: "Gerald Charles",
    description: " Gerald Charles Maestro GC2.0 Ultra-Thin UP Ugo Piccini",
    images: [
      "https://img.chrono24.com/images/uhren/40916685-49j7htc0y9rjdtyvpcu5dgeh-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/40916685-uayzfg6i8fy2l2w55bsh9jhv-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 4,
    title: "Gerald Charles",
    description: " Fine & Mint Automatic Maestro 3.0 Chronograph Green",
    images: [
      "https://img.chrono24.com/images/uhren/37995595-izc5xfbp2svsmqos5l3z9y1x-ExtraLarge.jpg",
    "https://img.chrono24.com/images/uhren/37995595-29u0l64o4ewzr8tkzcyyb5v3-ExtraLarge.jpg",

    ]
  }
  ,
   {
    id: 5,
    title: "Gerald Charles",
    description: "Maestro 2.0 Ultra-Thin",
    images: [
      "https://img.chrono24.com/images/uhren/40897887-cr18fbz4mwc13peb9b5kpr5a-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/40897887-q8cqvkhtcvwgzahk90bsboir-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 6,
    title: "Gerald Charles",
    description: " GC2.0-TX-TNSB-24GR-RSVC",
    images: [
      "https://img.chrono24.com/images/uhren/41157493-gafr2h6n5vhk9t8rrkjax75j-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/41157493-3st9eii43yd2wnq5w478ye0c-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 7,
    title: "Gerald Charles",
    description: " Maestro 2.0 Ultra-thin Green Dial",
    images: [
      "https://img.chrono24.com/images/uhren/39174518-ttshctlxso4kjazyabfi3jgy-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/39174518-xjh9015n2em1752b45bp4pdj-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 8,
    title: "Gerald Charles",
    description: "Maestro 8.0 Squelette / unworn / NEW / Full Set / Steel / 2024",
    images: [
      "https://img.chrono24.com/images/uhren/35480382-q89c9uouhindq5lbkpvobymy-ExtraLarge.jpg",
      "https://img.chrono24.com/images/uhren/35480382-m0bzyux143xibcba8g6hggqz-ExtraLarge.jpg"
    ]
  }
  
];

export default function LuvorItemsList() {
  const [currentIndexes, setCurrentIndexes] = useState(items.map(() => 0));
  const [fadeStates, setFadeStates] = useState(items.map(() => true)); // true = visible

  const changeImage = (index, direction) => {
    setFadeStates((prev) =>
      prev.map((v, i) => (i === index ? false : v))
    );

    setTimeout(() => {
      setCurrentIndexes((prev) =>
        prev.map((imgIndex, i) =>
          i === index
            ? (imgIndex + direction + items[i].images.length) %
              items[i].images.length
            : imgIndex
        )
      );
      setFadeStates((prev) =>
        prev.map((v, i) => (i === index ? true : v))
      );
    }, 300); // match fade-out duration
  };

  return (
    <div className="p-6 grid md:grid-cols-4 gap-6 bg-black/90">
      {items.map((item, idx) => (
        <div
          key={item.id + "-" + idx}
          className="relative  overflow-hidden hover:scale-105 transition duration-300 shadow-lg h-96"
        >
          {/* Smooth fading background image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              fadeStates[idx] ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${item.images[currentIndexes[idx]]})`
            }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Arrows */}
          <button
            onClick={() => changeImage(idx, -1)}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => changeImage(idx, 1)}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <ChevronRight />
          </button>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h1 className="text-sm uppercase font-semibold">{item.title}</h1>
            <p className="text-xs uppercase text-gray-200 mb-3">{item.description}</p>
            <Link
              to={`/item/${item.id}`}
              state={{ item }}
              className="inline-block bg-gray-600 text-white px-4 py-2  hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
