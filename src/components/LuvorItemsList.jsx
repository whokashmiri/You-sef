import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Gerald Charles",
    description: "Maestro GC Sport Tennis Grass Green Color LIMITED EDITION 200 PIECES NEW UNWORN FULL SET",
    images: [
      "https://cdn-images.farfetch-contents.com/19/15/28/23/19152823_42138735_2048.jpg",
      "https://cdn-images.farfetch-contents.com/19/15/28/23/19152823_42139415_2048.jpg",
    ]
  },
  {
    id: 2,
    title: "Gerald Charles",
    description: "Maestro GC39 25th Anniversary Edition",
    images: [
      "https://www.osterjewelers.com/cdn/shop/files/GeraldCharlesMaestroGC3925thAnniversaryEdition-Caseback_1050x1500.jpg?v=1743461153",
"https://cdn.shopify.com/s/files/1/0664/5760/0317/files/GC39_Soldatino_Front.png?v=1742990754",
 ]
  },
   {
    id: 3,
    title: "Gerald Charles",
    description: " Gerald Charles Maestro GC2.0 Ultra-Thin UP Ugo Piccini",
    images: [
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Gerald-Charles-GC2.0-A-00.jpg.webp",
      "https://a.storyblok.com/f/275463/800x800/3131aa82ce/maestro-collection-cover.jpg",
      "https://img.chrono24.com/images/uhren/40916685-uayzfg6i8fy2l2w55bsh9jhv-ExtraLarge.jpg",
      
    ]
  }
  ,
   {
    id: 4,
    title: "Gerald Charles",
    description: " Fine & Mint Automatic Maestro 3.0 Chronograph Green",
    images: [
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Gerald-Charles-GC2.0-WG-AJ-02.jpg.webp",
    "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Gerald-Charles-GC2.0-WG-AJ-02-0-3.jpg.webp",

    ]
  }
  ,
   {
    id: 5,
    title: "Gerald Charles",
    description: "Maestro 2.0 Ultra-Thin",
    images: [
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Gerald-Charles-Original-Time-GC20-DLC-01.jpg.webp",
      "https://luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/01/Gerald-Charles-Original-Time-GC20-DLC-01-1.jpg.webp"
    ]
  }
  ,
   {
    id: 6,
    title: "Gerald Charles",
    description: " GC2.0-TX-TNSB-24GR-RSVC",
    images: [
      "https://www.osterjewelers.com/cdn/shop/files/GeraldCharlesMaestro3.0ChronographGreen_1050x1500.png?v=1715277578",
      "https://www.osterjewelers.com/cdn/shop/files/GeraldCharlesMaestro3.0ChronographGreen-Side_1050x1500.png?v=1715277578"
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
            className={`absolute inset-0 bg-cover bg-center  transition-opacity duration-500 ${
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
