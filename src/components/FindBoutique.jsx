import { useState } from "react";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function FindBoutique() {
  const brands = [
    "Graff",
    "Hublot",
    "Luvor",
    "SaintLouis",
    "Chopard",
    "AzzaFahmy",
  ];

  const locations = {
    Graff: {
      // Jeddah: [
      //   "Red Sea Mall, King Abdulaziz Rd, Jeddah",
      //   "Boulevard, Prince Saud Al Faisal St, Jeddah",
      //   "Mall of Arabia, Madinah Rd, Jeddah",
      //   "Le Prestige, Tahlia St, Jeddah",
      // ],
      Riyadh: [
        "Kingdom Centre, Al Olaya, Riyadh 12213, Saudi Arabia ",
        "Attar United Address: Al Olaya St, Al Olaya, Riyadh 12213, Saudi Arabia",
     
      ],
      // Dammam: [
      //   "Al Shatea Mall, Prince Mohammed Bin Fahd Rd, Dammam",
      //   "Othaim Mall, Khaleej Rd, Dammam",
      //   "West Avenue Mall, Dammam",
      //   "Al Rashed Mall, Khobar",
      // ],
    },
    Hublot: {
      // Jeddah: [
      //   "Red Sea Mall, King Abdulaziz Rd, Jeddah",
      //   "Stars Avenue, King Abdulaziz Rd, Jeddah",
      //   "Mall of Arabia, Madinah Rd, Jeddah",
      //   "Boulevard, Prince Saud Al Faisal St, Jeddah",
      // ],
      Riyadh: [
        "Kingdom Centre, Olaya St, Riyadh 12214",
        "Panorama Mall, Takhassusi St, Riyadh",
        "4235 Al Thoumamah Rd, Ar Rabi, Riyadhh",
      ],
      AlKhobar: [
        "King Salman Bin Abdulaziz Rd, Al Yarmouk, Al Khobar 34423",
      ],

    
    },
    Chopard: {
      Jeddah: [
        "Al Basateen Mall: Prince Mohammed Bin Abdulaziz Street, Jeddah 23",
        "Alfardan Jewellery: Al Thaliya Street, Jeddah 21492",
        "Al Thobaity Jewellery: Intersection of Tahlia Street and Prince Sultan St, Jeddah 21444",
       
      ],
      Riyadh: [
        "Kingdom Centre Fashion Extension, Olaya Street, Riyadh 113",
        "Panorama Mall, Tahlia Street, Riyadh 12222",
        "King Abdul Aziz Branch Rd, As Sahafah, Riyadh 133",
        "Alfardan Tower, Olaya Main Street, Riyadh"
      ],
      AlKhobar: [
        "Al Sheikh Avenue: King Salman Road, Khobar 34423",
        "Alfardan Jewellery: Corniche Road, Khobar 31952"
      ],
    },
    AzzaFahmy: {
      Riyadh: [
        "Kingdom Centre, Olaya Street, Riyadh, Saudi Arabia",
      ],
   
    },
     Luvor: {
      Riyadh: [
        "Kingdom Centre, Olaya Street, Riyadh, Saudi Arabia",
      ],
      AlKhobar: [
        "Al Sheikh Avenue: King Salman Road, Khobar 34423",
        "Alfardan Jewellery: Corniche Road, Khobar 31952"
      ],
    },

     SaintLouis: {
      AlKhobar: [
        "Al Sheikh Avenue: King Salman Road, Khobar 34423",
        "Alfardan Jewellery: Corniche Road, Khobar 31952"
      ],
    },
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white py-12 px-4">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/9607084/9607084-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-8">Find a Boutique</h1>

          {/* Step 1 - Brand Selection */}
          {!selectedBrand && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className="px-6 py-4 bg-white text-black shadow-lg rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
                >
                  {brand}
                </button>
              ))}
            </div>
          )}

          {/* Step 2 - City Selection */}
          {/* Step 2 - City Selection */}
{selectedBrand && !selectedCity && (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">
      Choose a City for {selectedBrand}
    </h2>
    <div className="flex flex-wrap gap-4">
      {Object.keys(locations[selectedBrand]).map((city) => (
        <button
          key={city}
          onClick={() => setSelectedCity(city)}
          className="px-6 py-3 bg-white text-black shadow-lg rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          {city}
        </button>
      ))}
    </div>
  </div>
)}


          {/* Step 3 - Show Addresses */}
        {/* Step 3 - Show Addresses OR Coming Soon */}
{selectedBrand && selectedCity && (
  <div className="mt-8 max-w-lg w-full bg-white text-black rounded-lg shadow-lg p-6">
    <h3 className="text-2xl font-bold mb-4">
      {selectedBrand} Boutiques in {selectedCity}
    </h3>

    {locations[selectedBrand][selectedCity] &&
    locations[selectedBrand][selectedCity].length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {locations[selectedBrand][selectedCity].map((address, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-white shadow-lg hover:shadow-2xl border border-gray-200 hover:border-red-500 transition-all duration-300"
          >
            <p className="text-gray-600 font-semibold text-lg">{address}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className="flex items-center justify-center h-40">
        <p className="text-black text-xl animate-pulse font-semibold">
          Coming Soon...
        </p>
      </div>
    )}

    <Link
      to="/home"
      className="mt-6 inline-block px-9 py-3 bg-black text-white font-semibold hover:bg-gray-700 transition"
      onClick={() => {
        setSelectedBrand("");
        setSelectedCity("");
      }}
    >
      Home
    </Link>
  </div>
)}

        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
}
