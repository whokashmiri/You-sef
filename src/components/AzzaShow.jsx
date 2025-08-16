import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    image: 'https://azzafahmy.com/cdn/shop/files/fesg.22-003_1.jpg?v=1709207658&width=800',
    title: "Peace & Wisdom Single Earring",
    price: 'SAR 5000',
    // description: '26 MM, MANUAL, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://azzafahmy.com/cdn/shop/products/grss14001w00614cp_image_big.jpg?v=1709203076&width=800',
    title: "Calligraphy Band For Him",
    price: 'SAR 2500', 
    // description: '18-CARAT WHITE GOLD AND DIAMONDS',
  },
  {
    image: "https://azzafahmy.com/cdn/shop/files/crsg.21-003_1.jpg?v=1706018508&width=800",
    title: "Blessings Chain Ring",
    price: 'SAR 9000',
    // description: '',
  },
  {
    image: 'https://azzafahmy.com/cdn/shop/files/p_72f61dca-8eeb-4767-b43a-b0fd7bf03c75.jpg?v=1727967292&width=800',
    title: "Eye of Horus Necklace for Him",
    price: 'SAR 4500',
    // description: '26 MM, MANUAL-WOUND, ETHICAL ROSE GOLD, DIAMONDS',
  },
  {
    image: "https://azzafahmy.com/cdn/shop/products/gcsg15001w45613n_image_big.jpg?v=1705595187&width=800",
    title: "Eternity Cufflinks",
    price: 'SAR 75000',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://azzafahmy.com/cdn/shop/files/MBS.24-002.jpg?v=1719912979&width=800',
    title: "Leather Calligraphy Bracelet",
    price: 'SAR 700',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
  //  {
  //   image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/Big-Bang-Unico-Magic-Ceramic-42-mm-Soldier.png?itok=pn_dfjXj',
  //   title: "Unico Magic Ceramic 42MM",
  //   price: 'SAR 388,000.00',
  //   // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  // },
];

const AzzaShow = () => {
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
          <Link to="/azza"
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

export default AzzaShow;
