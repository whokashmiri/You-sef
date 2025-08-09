import React from 'react';

const services = [
  {
    title: 'OUR BOUTIQUES',
    image:
      'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg',
    link: '#',
  },
  {
    title: 'PRODUCT CARE',
    image:
      'https://images.pexels.com/photos/13590249/pexels-photo-13590249.jpeg',
    link: '#',
  },
  {
    title: 'EXTEND YOUR WARRANTY',
    image:
      'https://images.pexels.com/photos/9561403/pexels-photo-9561403.jpeg',
    link: '#',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-12 text-white">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-light uppercase tracking-wide text-center mb-12">
        Services
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Image */}
            <div className="w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Text */}
            <h3 className="mt-4 text-lg md:text-xl uppercase tracking-wide">
              {item.title}
            </h3>

            {/* Link */}
            <a
              href={item.link}
              className="mt-2 text-sm text-white underline underline-offset-4 hover:text-gray-300 flex items-center gap-1 group"
            >
              <span className="text-lg">→</span>
              <span className="group-hover:underline">Learn more</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
