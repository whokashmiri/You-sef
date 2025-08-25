import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Happy Sport",
    description: " 30 mm, quartz, Lucent Steel™, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278590-3002_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278590-3002_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278590-3002_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278590-3002_06.png"
    ]
  },
  {
    id: 2,
    title: "Happy Sport",
    description: "25 mm, quartz, Lucent Steel™, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278620-3002_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278620-3002_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278620-3002_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278620-3002_40.png"
    ]
  },
   {
    id: 3,
    title: "Happy Sport",
    description: "30 mm, quartz, Lucent Steel™, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278590-3001_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278590-3001_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278590-3001_06.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/278590-3001_40.png"
    ]
  }
  ,
   {
    id: 4,
    title: "Happy Diamonds Icons",
    description: " 26 mm, quartz, ethical white gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/203957-1214_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/203957-1214_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/203957-1214_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/203957-1214_06.png"
    ]
  }
  ,
   {
    id: 5,
    title: "Happy Sport",
    description: "29 x 31 mm, automatic, Lucent Steel™, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278602-3004_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278602-3004_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278602-3004_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278602-3004_06.png"
    ]
  }
  ,
   {
    id: 6,
    title: "Happy Sport",
    description: "30 mm, automatic, Lucent Steel™, diamonds.",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278573-3012_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278573-3012_04.png",
      "https://luxurypromise.com/cdn/shop/files/luxury-promise-japan-chopard-happy-sport-27-8250-23-5p-diamond-white-dial-ladies-watch-90278967-1171490344.webp?v=1751785249&width=1200",
      // "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd8d0556d/sfcc-graff-staging/i/m/a/g/e/images_hi_res_GSU43DLCB2_GW10489_side_3.jpg?sw=3000&sh=3000"
    ]
  }
  ,
   {
    id: 7,
    title: "L'Heure du Diamant Round",
    description: "26 mm, manual, ethical white gold, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/10A178-1301_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/10A178-1301_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/10A178-1301_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/10A178-1301_06.png"
    ]
  }
  ,
   {
    id: 8,
    title: "Happy Sport",
    description: "30 mm, quartz, Lucent Steel™, diamonds",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/298600-3033_01.png",
       "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2,b_white/e_trim:white/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_2560,e_sharpen:100/ProductsAssets/Web/298600-3033_04.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/298600-3033_05.png",
     
    ]
  }
  ,
   {
    id: 9,
    title: "Happy Sport",
    description: "DIAMOND DIAL, WHITE & YELLOW GOLD, TRIPLE ROW DIAMOND STRAP.",
    images: [
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278620-6001_01.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278620-6001_05.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278620-6001_40.png",
      "https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/278620-6001_06.png"
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
