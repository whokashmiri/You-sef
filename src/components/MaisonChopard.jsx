import React from 'react';

const maisonImages = [
  {
    src: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1,w_1228/Campaigns/artisan-of-emotions-gold-foundry-artisan-paulo/desktop-magento-images/SavoirFaire-Ep3-Gold-Founder-2018_11_bis_6d442a',
    description: 'SUSTAINABLE DEVELOPMENT',
    label: 'LA MAISON',
  },
  {
    src: 'https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/c_fill,g_auto,ar_1,w_1228/Campaigns/artisan-of-emotions-grand-complications-watchmaker-christophe/desktop-magento-images/SavoirFaire-Ep2-GrandesComplications-Watchmaker-MinuteRepeater-2018_12_6bb810',
    description: 'MEET OUR ARTISANS',
    label: 'LA MAISON',
  },
];

const MaisonChopard = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-light text-center uppercase tracking-wider mb-12">
        La Maison Chopard
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {maisonImages.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent text-white text-center p-6">
              <p className="text-xs tracking-widest uppercase opacity-70">
                {item.label}
              </p>
              <h3 className="text-lg md:text-xl mt-1 font-light uppercase">
                {item.description}
              </h3>
              <button className="mt-4 px-8 py-4 bg-gray-600 text-white text-sm uppercase tracking-wider hover:bg-slate-700 transition">
                Discover
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaisonChopard;
