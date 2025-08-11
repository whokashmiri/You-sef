import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Icon engagement ring set with round diamonds",
    description: " Diamond-set ring, white gold",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb7fdaa02/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR618_RGR618_GR57386_1_00_Hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd7890a6c/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR618_RGR618_GR57386_Model_2.jpg?sw=3000&sh=3000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6607b0a4/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR618_RGR618_GR57386_Side_6.jpg?sw=3000&sh=3000"
    ]
  },
  {
    id: 2,
    title: "Promise engagement ring with round diamonds",
    description: "Baguette-cut side stones, yellow gold",
    images: [
"https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1e75328/sfcc-graff-staging/R/T/Y/0/1/RTY01_GR165023_hero.jpg?sw=1000&sh=1000","https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2aad4b88/sfcc-graff-staging/R/T/Y/0/1/RTY01_GR165023_195_model.jpg?sw=1000&sh=1000",
"https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwac417122/sfcc-graff-staging/R/T/Y/0/1/RTY01_GR165023_s1.jpg?sw=1000&sh=1000" ]
  },
   {
    id: 3,
    title: "Promise engagement ring with round diamonds",
    description: "Pear-shaped side stones, platinum",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw83836c0f/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RP01ALL_RP01_GR69753_1_05_hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb6e0eeb3/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RP01ALL_RP01_GR69753_1_05_model_4.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw69c1d127/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RP01ALL_RP01ALL_GR69753_Side_5.jpg?sw=1000&sh=1000"
    ]
  }
  ,
   {
    id: 4,
    title: "Icon engagement ring set with round diamonds",
    description: " yellow gold ",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe58406df/sfcc-graff-staging/R/G/R/9/6/RGR968_GR165049_Hero_2.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe50be8cc/sfcc-graff-staging/R/G/R/9/6/RGR968_GR165049_148_model.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8a31da91/sfcc-graff-staging/R/G/R/9/6/RGR968_GR165058_S1.jpg?sw=1000&sh=1000"
    ]
  }
  ,
   {
    id: 5,
    title: "Constellation engagement ring with round diamonds",
    description: "Diamond-set ring, white gold",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw766a698e/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR237ALL_RGR240_GR51001_Hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf70bc639/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR237ALL_RGR240_Model_2.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw64b0ab3b/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR237ALL_RGR240_GR51001_Side_6.jpg?sw=3000&sh=3000"
    ]
  }
  ,
   {
    id: 6,
    title: "Flame engagement ring with round diamonds",
    description: "Pink diamond pavé ring, platinum and rose gold.",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf499280d/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RPVP01ALL_RPVP01_GR31598_Hero_1.jpg?sw=1000&sh=1000",
      "https://azzafahmy.com/cdn/shop/files/LRG.25-001_2.jpg?v=1747815065&width=700"
    ]
  }
  ,
   {
    id: 7,
    title: "Laurence Graff Signature Diamond Ring",
    description: "white gold",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0bc34f21/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR778_GR83381_Hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbbc62b43/sfcc-graff-staging/U/p/d/a/t/Update_RGR778_RGR778_model_20033_copy.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwca55cdda/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR778_GR83381_side_6.jpg?sw=1000&sh=1000"
    ]
  }
  ,
   {
    id: 8,
    title: "Laurence Graff Signature Round Diamond Engagement Ring ",
    description: "Diamond-set ring, white gold",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7b4e8a22/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR441R_RGR441_1_00_hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfdfc1bf8/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR441R_RGR441_1_00_model_4.jpg?sw=1000&sh=1000"
    ]
  }
  ,
   {
    id: 9,
    title: "Laurence Graff Signature Round Diamond Engagement Ring",
    description: "white gold.",
    images: [
       "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw838c722e/sfcc-graff-staging/i/m/a/g/e/images_hi_res_RGR439_RGR439_0_7_hero_1.jpg?sw=1000&sh=1000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f981d4e/sfcc-graff-staging/R/G/R/4/3/RGR439R_RGR439_GR78934_0_71_model_4.jpg?sw=1000&sh=1000"
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
