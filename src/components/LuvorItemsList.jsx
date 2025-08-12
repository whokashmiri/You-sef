import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "NAIF",
    description: "OutLined by Chromatic Contrasts",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/Naif-4.jpg",
      "https://luvor.com/wp-content/uploads/2020/11/Naif-8-2.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/5/15008000-4.jpg"
    ]
  },
  {
    id: 2,
    title: "angelo",
    description: "designs inspired by Nature. ",
    images: [
"https://luvor.com/wp-content/uploads/2020/11/Angelo-10.jpg",
"https://luvor.com/wp-content/uploads/2020/11/Angelo-10.jpg" ]
  },
   {
    id: 3,
    title: "Fontana de Trevi",
    description: "A kaleidoscope of Asian tradition",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/Fontana-09.jpg",
      "https://luvor.com/wp-content/uploads/2020/11/Fontana-10.jpg)"
    ]
  }
  ,
   {
    id: 4,
    title: "Mandela",
    description: " A kaleidoscope of Asian tradition and Buddhist philosophy blossoming with colors.  ",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/Mandala-15.jpg",
    "https://luvor.com/wp-content/uploads/2020/11/Mandala-16.jpg",

    ]
  }
  ,
   {
    id: 5,
    title: "pirouette",
    description: "nature, particularly the free-flowing movement of leaves.",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/PIROUETTE-4-scaled-1.jpg",
      "https://luvor.com/wp-content/uploads/2020/11/PIROUETTE-3-scaled-1.jpg"
    ]
  }
  ,
   {
    id: 6,
    title: "sonora",
    description: " PIECES OF YOUR DREAMS",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/sonora7-scaled-1.jpg",
      "https://luvor.com/wp-content/uploads/2020/11/sonora6-scaled-1.jpg"
    ]
  }
  ,
   {
    id: 7,
    title: "vittoria",
    description: " naturally reflects the woman’s emotions, passions & her desires.",
    images: [
      "https://luvor.com/wp-content/uploads/2020/11/Vittoria-09.jpg",
      "https://luvor.com/wp-content/uploads/2020/11/Vittoria-08.jpg"
    ]
  }
  ,
   {
    id: 8,
    title: "molecole",
    description: "linear and essential design embellished with drops of diamonds",
    images: [
      "https://luvor.com/wp-content/uploads/2021/09/MOL-8.jpg",
      "https://luvor.com/wp-content/uploads/2021/09/MOL-10.jpg"
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
