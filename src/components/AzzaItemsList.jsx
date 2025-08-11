import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Happiness Bangle",
    description: " statement of ‘joy – فرحة’ in 18kt Gold calligraphy",
    images: [
      "https://azzafahmy.com/cdn/shop/files/FBSG.25-004.jpg?v=1751220112&width=700",
      "https://azzafahmy.com/cdn/shop/files/Wornresized-06_1.jpg?v=1751293393&width=700"
    ]
  },
  {
    id: 2,
    title: "Happiness Band",
    description: "versatile piece that brings the promise of happines",
    images: [
      "https://azzafahmy.com/cdn/shop/files/FRSG.25-002.jpg?v=1751223734&width=700",
      "hhttps://azzafahmy.com/cdn/shop/files/Wornresized-02.jpg?v=1751223761&width=700"
    ]
  },
   {
    id: 3,
    title: "Joyful button earrings",
    description: "18kt Gold geometric button earrings",
    images: [
      "https://azzafahmy.com/cdn/shop/files/p_d599aa97-0fd1-4bc4-8484-cb9e06bded1c.jpg?v=1724849005&width=700",
      "https://azzafahmy.com/cdn/shop/files/LEG.24-014.A.jpg?v=1733239261&width=700"
    ]
  }
  ,
   {
    id: 4,
    title: "Happiness Drop Earrings",
    description: " 18kt Gold drop earrings featuring our signature ",
    images: [
      "https://azzafahmy.com/cdn/shop/files/LEG.25-017.jpg?v=1751225565&width=700",
      "https://azzafahmy.com/cdn/shop/files/Wornresized-03.jpg?v=1751225603&width=700"
    ]
  }
  ,
   {
    id: 5,
    title: "Geometric Kaf Ring",
    description: "18kt Gold and Sterling Silver ring ",
    images: [
      "https://azzafahmy.com/cdn/shop/files/CRSG.25-001.jpg?v=1732032050&width=700",
      "https://azzafahmy.com/cdn/shop/files/CRSG.25-001_1.jpg?v=1747815134&width=700"
    ]
  }
  ,
   {
    id: 6,
    title: "Floral Protection Ring",
    description: "18kt Gold ring that features intricate open wirework.",
    images: [
      "https://azzafahmy.com/cdn/shop/files/LRG.25-001_1.jpg?v=1732046180&width=700",
      "https://azzafahmy.com/cdn/shop/files/LRG.25-001_2.jpg?v=1747815065&width=700"
    ]
  }
  ,
   {
    id: 7,
    title: "Lotus Bouquet Cuff",
    description: "18kt Gold and Sterling Silver cuff",
    images: [
      "https://azzafahmy.com/cdn/shop/products/cbsg.24-003.jpg?v=1709203108&width=600",
      "https://azzafahmy.com/cdn/shop/files/cbsg.24-003_1.jpg?v=1709206361&width=600"
    ]
  }
  ,
   {
    id: 8,
    title: "Gold Rosette Necklace ",
    description: "18kt Gold single strand necklace",
    images: [
      "https://azzafahmy.com/cdn/shop/files/LNG.24-001.jpg?v=1731329766&width=700",
      "https://azzafahmy.com/cdn/shop/files/Worn_resized-01-01.jpg?v=1733240165&width=700"
    ]
  }
  ,
   {
    id: 9,
    title: "Blossom Lotus Ring",
    description: "18kt Gold and Sterling Silver ring.",
    images: [
       "https://azzafahmy.com/cdn/shop/files/CRSG.24-002.jpg?v=1727426768&width=700",
      "https://azzafahmy.com/cdn/shop/files/crsg.24-002_1.jpg?v=1709209972&width=700"
    ]
  }
];

export default function ChopardItemsList() {
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
