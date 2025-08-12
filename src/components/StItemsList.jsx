import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "CHAMPAGNE FLUTE",
    description: "champagne flute is part of a dinner service made up of 11 piece",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/5/15008000-1.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/5/15008000-2.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/5/15008000-3.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/5/15008000-4.jpg"
    ]
  },
  {
    id: 2,
    title: "TABLE TUMBLER",
    description: "Of course, it’s a water tumbler. ",
    images: [
"https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/t/w/twist_verre_saint-louis_crystal.jpg",
"https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/t/w/twist_verre_saint-louis_crystal.jpg" ]
  },
   {
    id: 3,
    title: "AMBER HOCK",
    description: "A distinctive leg in the shape of marbles",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/7/17702028-2.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/7/17702028-3.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/7/17702028-4.jpg"
    ]
  }
  ,
   {
    id: 4,
    title: "TUMBLER LOUIS XV",
    description: " The Louis XV tumbler wears the Rocaille style  ",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/6/2/62053600_galerie_royale_louis_xv_tumbler_kings_hall_diving.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/6/2/62053600-1.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/6/2/62053600-4.jpg"
    ]
  }
  ,
   {
    id: 5,
    title: "FULL-BODIED TEA TUMBLER",
    description: "the powerful aromatic notes of full-bodied teas",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/0/10117100_apollo_n2_tumbler_front_rvb_hd.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/0/10117100_apollo_n2_tumbler_diving_rvb_hd_1.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/0/1/01_service_the_charpente_rgb_ld_72dpi_1.jpg"
    ]
  }
  ,
   {
    id: 6,
    title: "DARK WOOD SATIN-FINISHED CRYSTAL PORTABLE LAMP",
    description: "a table or desk lamp, on a terrace or a boat.",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/f/o/folia-baladeuse-satinee-face.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/5/1506e588_folia_portablelamp_dark_ash_diving_rvb_1.jpg"
    ]
  }
  ,
   {
    id: 7,
    title: "GOLDEN FINISH TABLE LAMP",
    description: "Clear crystal and diamond- and bevel-cut, Japanese paper diffuser",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/7/9/79218100-1.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/7/9/79218100-2.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/7/9/79218100-2.jpg"
    ]
  }
  ,
   {
    id: 8,
    title: "TABLE LAMP",
    description: "Diamond-set ring, white gold",
    images: [
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/2/12476500-1.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/1/2/12476500-2.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/1/2/12476500-4.jpg"
    ]
  }
  ,
   {
    id: 9,
    title: "THE SNAKE 2025",
    description: "the Snake 2025 #4, the new paperweight by Saint-Louis.",
    images: [
       "https://www.saint-louis.com/media/catalog/product/cache/e1648193c4bd079fe5e6c9e530413384/5/6/56250100_paperweight_the_snake_diving.jpg",
      "https://www.saint-louis.com/media/catalog/product/cache/62cceeb42753a576242cd613444c588c/p/r/projet_redimensionner_une_image.jpeg"
    ]
  }
];

export default function StItemsList() {
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
