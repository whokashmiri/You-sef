import React from 'react';

const categories = [
  {
    title: 'Watches',
    image:
      'https://www.hublot.com/sites/default/files/styles/watch_item_desktop_2x/public/2023-03/CLASSI~1.PNG?itok=UTjrF6mw', // Replace with actual Chopard image
    link: '#',
  },
  {
    title: 'Jewellery',
    image:
      'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/@829482-5800_01.png', // Replace with actual Chopard image
    link: '#',
  },
  {
    title: 'Accessories',
    image:
      'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_600,d_Placeholders:nav-catalog-placeholder.png,g_center,e_sharpen:60/ProductsAssets/Web/95201-0454_01.png', // Replace with actual Chopard image
    link: '#',
  },
];

const ExploreCreations = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide mb-12">
        Explore Chopard's Creations
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] text-white p-6 flex flex-col items-center justify-between"
          >
            <div className="h-80 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="mt-6 text-lg uppercase tracking-wider">
              {item.title}
            </h3>
            <button className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 transition uppercase text-sm tracking-widest">
              Discover
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCreations;
