import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Heart } from 'lucide-react';

const products = [
  {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/161951-5001_01.png',
    title: "L.U.C Lunar One",
    price: 'SAR 412,850.00',
    // description: '43 mm, automatic, Lucent Steel',
  },
  {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/161951-1001_01.png',
    title: "L.U.C Lunar One",
    price: 'SAR 412,250.00',
    description: '40.5mm, automatic, ethical white gold',
  },
  {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/161989-0001_01.png',
    title: "L.U.C Flying T Twin Perpetual",
    // price: 'SAR 44,9800.00',
    description: '40.5 mm, automatic, ethical yellow gold™',
  },
  {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/168629-3001_01.png',
    title: "L.U.C XPS Forest Green",
    price: 'SAR 57,890.00',
    description: '40 mm, automatic, Lucent Steel™',
  },
  {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/168631-3001_01.png',
    title: "L.U.C Qualité Fleurier",
    price: 'SAR 97,000.00',
    description: '39 mm, automatic, Lucent Steel™',
  },
   {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/168860-3003_01.png',
    title: "L.U.C 1860",
    price: 'SAR 122,900.00',
    description: '36.5 mm, automatic, Lucent Steel',
  },
   {
    image: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_400,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/168619-3004_01.png',
    title: "Mille Miglia Classic Chronograph",
    price: 'SAR 344,900.00',
    description: '40.5 mm, automatic, Lucent Steel',
  },
];

const ProductCarousel2 = () => {
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
          <div
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel2;
