import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "ice cube",
    description: " ring, ethical, white gold",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@827702-1199_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@827702-1199_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@827702-1199_05.png"
    ]
  },
  {
    id: 2,
    title: "Ice Cube",
    description: "Ring, ethical white gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@827006-1010_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@827006-1010_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/@827006-1010_40.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/@827006-1010_05.png"
    ]
  },
   {
    id: 3,
    title: "Happy Hearts",
    description: "Pendant, ethical rose gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/79A075-5901_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/79A075-5901_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/79A075-5901_05.png"
    ]
  }
  ,
   {
    id: 4,
    title: "Happy Diamonds Icons",
    description: " Earrings, ethical white gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/83A054-1301_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/83A054-1301_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/83A054-1301_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/83A054-1301_06.png"
    ]
  }
  ,
   {
    id: 5,
    title: "Happy Diamonds Icons",
    description: "Earrings, ethical yellow gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/83A017-0001_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/83A017-0001_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/83A017-0001_05.png"
    ]
  }
  ,
   {
    id: 6,
    title: "Happy Hearts",
    description: "Earrings, ethical yellow gold, diamonds, mother-of-pearl.",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/837482-0310_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/837482-0310_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/837482-0310_41.png"
    ]
  }
  ,
   {
    id: 7,
    title: "Happy Hearts",
    description: "Pendant, ethical white gold, diamond, blue mother-of-pearl",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/797482-1350_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/797482-1350_06.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/797482-1350_40.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/797482-1350_06.png"
    ]
  }
  ,
   {
    id: 8,
    title: "My Happy Hearts ",
    description: "Single earring, ethical rose gold, carnelian",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@829482-5900_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@829482-5900_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/@829482-5900_04.png"
    ]
  }
  ,
   {
    id: 9,
    title: "Happy Hearts",
    description: "Earing ethical rose gold.",
    images: [
       "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/83A086-5802_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/83A086-5802_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/83A086-5802_40.png"
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
