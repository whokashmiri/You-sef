import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Spiral Watch",
    description: "DIAMOND DIAL, WHITE GOLD, BLACK SATIN STRAP, 23MM",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2b080312/sfcc-graff-staging/G/S/P/2/3/GSP23WGDD_GW10387_hero.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1e65bcb1/sfcc-graff-staging/G/S/P/2/3/GSP23WGDD_GSP23WGDD_model_2.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw66ce069e/sfcc-graff-staging/G/S/P/2/3/GSP23WGDD_GW10387_detail.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw298be094/sfcc-graff-staging/G/S/P/2/3/GSP23WGDD_GW10387_clasp.jpg?sw=2000&sh=2000"
    ]
  },
  {
    id: 2,
    title: "Graff London 36mm",
    description: "Diamond Ice blue mother-of-pearl Dial Watch",
    images: [
      "https://i.ebayimg.com/images/g/Q3QAAOSwORZiKYHt/s-l1600.webp",
      "https://i.ebayimg.com/images/g/atEAAOSwqR5iKYHu/s-l1600.webp",
      "https://i.ebayimg.com/images/g/4LEAAOSwJ9liKYHw/s-l1600.webp",
      "https://i.ebayimg.com/images/g/y4UAAOSw3DtiKYHv/s-l1600.webp"
    ]
  },
   {
    id: 3,
    title: "Tilda's Bow Diamond Watch",
    description: "diamond dial, white gold, black satin strap",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw36d31267/sfcc-graff-staging/G/B/W/1/4/GBW14WGDD_hero_1.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82a0160d/sfcc-graff-staging/G/B/W/1/4/GBW14WGDD_Model.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f314616/sfcc-graff-staging/G/B/W/1/4/GBW14WGDD_detail_1.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcc4759de/sfcc-graff-staging/G/B/W/1/4/GBW14WGDD_detail_2.jpg?sw=3000&sh=3000"
    ]
  }
  ,
   {
    id: 4,
    title: "Classic Butterfly Watch",
    description: " silvered dial, silver stainless steel, black satin strap",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5e40d8fb/sfcc-graff-staging/B/F/2/8/S/BF28SPD_GW10895_hero.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe52fd5ea/sfcc-graff-staging/B/F/2/8/S/BF28SPD_BF28SPD_model_2c0113.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwde394cbb/sfcc-graff-staging/B/F/2/8/S/BF28SPD_GW10895_Detail.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf481e48a/sfcc-graff-staging/B/F/2/8/S/BF28SPD_GW10895_Back.jpg?sw=2000&sh=2000"
    ]
  }
  ,
   {
    id: 5,
    title: "Classic Butterfly Diamond and Ruby Watch",
    description: "diamond on ruby dial, white gold, red alligator strap",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ec8f7b0/sfcc-graff-staging/B/F/3/3/W/BF33WGDR_GW10123_hero_1.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw726fae20/sfcc-graff-staging/B/F/3/3/W/BF33WGDR_GW10123_Model_7.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd9a4536d/sfcc-graff-staging/B/F/3/3/W/BF33WGDR_GW10123_side_2.jpg?sw=3000&sh=3000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6eee54b3/sfcc-graff-staging/B/F/3/3/W/BF33WGDR_GW10123_detail_3.jpg?sw=3000&sh=3000"
    ]
  }
  ,
   {
    id: 6,
    title: "Eclipse 43mm Watch",
    description: "black dial, titanium DLC.",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb6922cf6/sfcc-graff-staging/i/m/a/g/e/images_hi_res_GSU43DLCB2_GW10489_hero_1.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb2918f47/sfcc-graff-staging/U/p/d/a/t/Update_GSU43DLCB2_GW10489_Wrist_copy.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb63b65fe/sfcc-graff-staging/i/m/a/g/e/images_hi_res_GSU43DLCB2_GW10489_detail_2.jpg?sw=3000&sh=3000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd8d0556d/sfcc-graff-staging/i/m/a/g/e/images_hi_res_GSU43DLCB2_GW10489_side_3.jpg?sw=3000&sh=3000"
    ]
  }
  ,
   {
    id: 7,
    title: "Spiral Watch",
    description: "MALACHITE DIAL, WHITE GOLD, BLACK SATIN STRAP, 23MM",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb0d5cbf3/sfcc-graff-staging/G/S/P/2/3/GSP23WGMA_GW10393_hero.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw11045bbe/sfcc-graff-staging/U/p/d/a/t/Update_GSP23WGD_Model_2_copy.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3d73b5c5/sfcc-graff-staging/G/S/P/2/3/GSP23WGD_GSP23WGMA_detail.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81b2d9e5/sfcc-graff-staging/G/S/P/2/3/GSP23WGD_GSP23WGMA_clasp.jpg?sw=2000&sh=2000"
    ]
  }
  ,
   {
    id: 8,
    title: "Wild Flower Diamond Watch",
    description: "Diamond Dial, White Gold, Diamond Strap, 18mm",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb87d10ce/sfcc-graff-staging/G/F/W/1/6/GFW16WGDDD_GW12603_detail.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd08bf380/sfcc-graff-staging/G/F/W/1/6/GFW16WGDDD_GW12603_hero.jpg?sw=2000&sh=2000",
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw969f8c34/sfcc-graff-staging/G/F/W/1/6/GFW16WGDDD_GW12603_back.jpg?sw=2000&sh=2000",
      "https://img.chrono24.com/images/uhren/34306727-41phfc1xt64r3zwc07xzpuvv-ExtraLarge.jpg"
    ]
  }
  ,
   {
    id: 9,
    title: "Tilda's Bow Diamond Watch",
    description: "DIAMOND DIAL, WHITE & YELLOW GOLD, TRIPLE ROW DIAMOND STRAP.",
    images: [
      "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf764bca9/sfcc-graff-staging/G/B/W/1/4/GBW14WGYDD_GBW14WGYDD_Hero_1.jpg?sw=2000&sh=2000",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-07/Classic-Fusion-Titanium-Diamonds-33-mm-close-up-shot.jpeg?itok=WE0okgtV",
      "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2023-07/Classic-Fusion-Titanium-Diamonds-33-mm-PR-shot.jpg?itok=6y6Tr6d2",
      "https://cdn-jnbkl.nitrocdn.com/DSyXimFVbLZsDRQHgxpswYJEIlNbdghE/assets/images/optimized/rev-5c34786/luxurysouq.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/Hublot-Classic-Fusion-581.NX_.1470.RX_.1104.jpg.webp"
    ]
  }
];

export default function GraffItemsList() {
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
