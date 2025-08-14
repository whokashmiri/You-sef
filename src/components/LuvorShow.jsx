import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    image: 'https://luvor.com/wp-content/uploads/2020/11/Angelo-09.jpg',
    title: "ANGELO",
    // price: 'SAR 127,700.00',
    // description: '26 MM, MANUAL, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://luvor.com/wp-content/uploads/2020/11/Angelo-11.jpg',
    title: "ANGELO",
    // price: 'SAR 487,900.00',
    // description: '18-CARAT WHITE GOLD AND DIAMONDS',
  },
  {
    image: 'https://luvor.com/wp-content/uploads/2020/11/Fontana-09.jpg',
    title: "FONTANA",
    // price: 'SAR 135,000.00',
    // description: '',
  },
  {
    image: 'https://luvor.com/wp-content/uploads/2020/11/Fontana-04.jpg',
    title: "FONTANA",
    // price: 'SAR 279,100.00',
    // description: '26 MM, MANUAL-WOUND, ETHICAL ROSE GOLD, DIAMONDS',
  },
  {
    image: "https://luvor.com/wp-content/uploads/2020/11/Naif-4.jpg",
    title: "NAIF",
    // price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://luvor.com/wp-content/uploads/2020/11/Naif-5-2.jpg',
    title: "NAIF",
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

const LuvorShow = () => {
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
          <Link to="/luvor"
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

export default LuvorShow;
