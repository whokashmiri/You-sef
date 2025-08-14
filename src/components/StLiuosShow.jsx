import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    image: 'https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/1/2/12424000-1.jpg',
    title: "TOMMY TABLE TUMBLER",
    // price: 'SAR 127,700.00',
    // description: '26 MM, MANUAL, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/1/2/12408023-1.jpg',
    title: "TOMMY DARK-BLUE CHAMPAGNE FLUTE",
    // price: 'SAR 487,900.00',
    // description: '18-CARAT WHITE GOLD AND DIAMONDS',
  },
  {
    image: "https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/4/7/47038700-1.jpg",
    title: "ROYAL SMALL VASE",
    // price: 'SAR 135,000.00',
    // description: '',
  },
  {
    image: 'https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/1/2/12445325_chartreuse-green_tommy_vase_front_rvb_bd.jpg',
    title: "TOMMY CHARTREUSE-GREEN VASE",
    // price: 'SAR 279,100.00',
    // description: '26 MM, MANUAL-WOUND, ETHICAL ROSE GOLD, DIAMONDS',
  },
  {
    image: "https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/4/7/47018490-1.jpg",
    title: "LES ENDIABLES CHAMBORD",
    // price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://www.saint-louis.com/media/catalog/product/cache/0735b65f2167d08a1eb7e17712940e18/1/0/10192300_apollo_set_of_2_full-bodied_tea_tumblers_rgb_v2_bdef.jpg',
    title: "APOLLO FULL-BODIED TEA TUMBLERS SET",
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

const StLiuosShow = () => {
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
      <div ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <Link to="/st"
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

export default StLiuosShow;
