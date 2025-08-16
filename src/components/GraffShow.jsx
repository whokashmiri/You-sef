import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw01f9eda0/Landing%20Pages/High%20Jewellery%202025/Graff-White-Diamond-High-Jewellery-GE75903_Hero_BLK.jpg',
    title: "7.52-carat diamond earring",
    // price: 'SAR 127,700.00',
    // description: '26 MM, MANUAL, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwa339547b/images/_Content%20Refresh/2021.05_HJ/6_Timepieces_GW10057.jpg',
    title: "Pink diamond watch Cocktail Hour",
    // price: 'SAR 487,900.00',
    // description: '18-CARAT WHITE GOLD AND DIAMONDS',
  },
  {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw60f01ed6/Landing%20Pages/HJ%20Emerald%20Bangle/GE74636_Hero_BLK.jpg',
    title: "Colombian cushion-cut 5.80 carat and 5.35 carat cushion-cut",
    // price: 'SAR 135,000.00',
    // description: '',
  },
  {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwfc767295/images/rare-coloured-diamond-jewels/a%20pink%20and%20white%20diamond%20high%20jewellery%20brooch%20from%20Graff.jpg',
    title: "20 carats of captivating pink diamonds",
    // price: 'SAR 279,100.00',
    // description: '26 MM, MANUAL-WOUND, ETHICAL ROSE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw7041d9b6/Landing%20Pages/Galaxia/Graff_Galaxia_Sapphire_4_4x5.jpg',
    title: "the Sri Lankan pear-shaped sapphire",
    // price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw73c9b585/Landing%20Pages/High%20Jewellery%202025/GB23297_Hero_BLK_02_v2.jpg',
    title: "18.26 carats of unheat-treated pigeon's blood",
    // price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
  //  {
  //   image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/Big-Bang-Unico-Magic-Ceramic-42-mm-Soldier.png?itok=pn_dfjXj',
  //   title: "Unico Magic Ceramic 42MM",
  //   price: 'SAR 388,000.00',
  //   // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  // },
];

const GraffShow = () => {
    useEffect(() => {
                AOS.init({ duration: 1000 });
              }, []);
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 30 },
      },
    },
  });

  return (
    <div className="bg-black py-10 px-4 md:px-12">
      <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
        {products.map((product, index) => (
          <Link to={"/graff"}
            key={index}
            className="keen-slider__slide bg-[#121212] p-4 flex flex-col justify-between relative group transition-all duration-300 hover:scale-105"
          >
            {/* Heart Icon */}
            <button className="absolute top-4 right-4 text-white hover:text-red-500 transition">
              <Heart size={20} />
            </button>

            {/* Product Image */}
            <div className="h-72 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            {/* Carousel Indicators (fake dots) */}
            <div className="flex justify-center items-center gap-1 mt-4">
              <div className="h-[2px] w-10 bg-white opacity-60" />
              <div className="h-[2px] w-2 bg-white opacity-40" />
              <div className="h-[2px] w-2 bg-white opacity-40" />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-sm font-medium uppercase">{product.title}</h3>
              <p className="text-xs mt-1 opacity-70">{product.price}</p>
              <p className="text-xs mt-2 opacity-50">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GraffShow;
