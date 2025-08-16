import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2025-03/hublot-big-bang-20-titanium-ceramic-431.NM_.1337.RX_.png?itok=E5-4t5u0',
    title: "20th Anniversary Titanium Ceramic 43MM",
    price: 'SAR 127,700.00',
    // description: '26 MM, MANUAL, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/hublot-big-bang-20-king-gold-ceramic-431.OM_.1338.RX_.png?itok=HtU3ASLy',
    title: "20th Anniversary King Gold Ceramic 43MM",
    price: 'SAR 487,900.00',
    // description: '18-CARAT WHITE GOLD AND DIAMONDS',
  },
  {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/hublot-big-bang-20-all-black-431.CI_.1340.RX_.png?itok=iKjD1EYp',
    title: "20th Anniversary All Black 43MM",
    price: 'SAR 135,000.00',
    // description: 'PENDANT, ETHICAL WHITE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-05/Big-Bang-Unico-Summer-2025-42-mm.png?itok=JA0NCCXJ',
    title: "Unico Summer 2025 42MM",
    price: 'SAR 279,100.00',
    // description: '26 MM, MANUAL-WOUND, ETHICAL ROSE GOLD, DIAMONDS',
  },
  {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/hublot-big-bang-20-magic-gold-431.MX_.1330.RX_.png?itok=LRCT_Owj',
    title: "20th Anniversary Full Magic Gold 43MM",
    price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/Big-Bang-Unico-Water-Blue-Sapphire-44-mm-Soldier.png?itok=VS_BcMH4',
    title: "Unico Water Blue Sapphire 44MM",
    price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
   {
    image: 'https://www.hublot.com/sites/default/files/styles/watch_item_mobile_1x/public/2025-03/Big-Bang-Unico-Magic-Ceramic-42-mm-Soldier.png?itok=pn_dfjXj',
    title: "Unico Magic Ceramic 42MM",
    price: 'SAR 388,000.00',
    // description: '18K WHITE GOLD, DIAMONDS, SWISS MADE',
  },
];

const ProductCarousel = () => {
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
          <Link to="/hublot"
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

export default ProductCarousel;
