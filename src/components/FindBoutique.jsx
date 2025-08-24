import { useState } from "react";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export default function FindBoutique() {
  const brands = [
    "Graff",
    "Hublot",
    "GeraldCharles",
    "SaintLouis",
    "Chopard",
    "AzzaFahmy",
  ];

  const locations = {
    Graff: {
      Riyadh: [
        "Kingdom Centre, Al Olaya, Riyadh , Tel: (011) 2111492 ",
        "Olaya Towers, Al Olaya, Riyadh , Tel: (011) 2699593",
      ],
    },
    Hublot: {
      Riyadh: [
        "Kingdom Centre, Olaya St, Riyadh , Tel: (011) 2111391",
        "Panorama Mall, Tahlia Street, Riyadh , Tel: (011) 4821360",
        "Solitaire Mall, As Sahafah distrcit, King Abdulaziz Road , Tel: (011) 5157266",
      ],
      AlKhobar: [
        "Al-Sheikh Avenue, King Salman Bin Abdulaziz Rd Al Khobar,  Tel: (013) 8021337",
      ],
      Jeddah: [
        "21553 El Khayyat Center, Tahlia Street, Al Andalus , jeddah,  , Tel: (012) 6774125",
      ],
    },
    GeraldCharles: {
      Riyadh: [
        "Tahlia st intersection with Olaya street, Olaya Towers, Unit # 10 Riyadh 12213, Saudi Arabia",
      ],
    },
    Chopard: {
      Jeddah: [
        "Al Basateen Mall, Prince Mohammed Bin Abdulaziz St, Jeddah , Tel: (012) 6126299",
      ],
      Riyadh: [
        "Kingdom Centre, Olaya Street, Riyadh , Tel: (011) 2110017",
        "Panorama Mall, Tahlia Street, Riyadh , Tel: (011) 2815300",
        "Solitaire Mall, As Sahafah distrcit, King Abdulaziz Road , Tel: (011) 5157299",
      ],
      AlKhobar: [
        "Al Sheikh Avenue, King Salman Road, Al-Khobar , Tel: (013) 8022882",
      ],
    },
    AzzaFahmy: {
      Riyadh: [
        "Kingdom Centre Tower, King Fahd Rd, Olaya Street, Tel: (011) 2111492",
      ],
    },
    SaintLouis: {
      Riyadh: ["Al Olaya Tower, Riyadh , Tel: (012) 6039760"],
    },
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const videos = [
    "https://www.hublot.com/sites/default/files/2025-07/Classic%20Fusion%20Titanium%20Essential%20Taupe%20-%20Loop%203%20-%20Horizontal%20-%20optim.mp4",
    "https://a.storyblok.com/f/275463/x/ba35217f5a/gc-atelier-is.mp4",
    "https://objects-prod.cdn.chopard.com/video/upload/e-merchandising_push/chopard_IC_sculptedbylight_C1_bagueH_20s_1080p25.webm",
    "https://azzafahmy.com/cdn/shop/videos/c/vp/1da6fcc19aa0411bb783ca91956d27e4/1da6fcc19aa0411bb783ca91956d27e4.HD-1080p-7.2Mbps-47644428.mp4?v=0",
    "https://videos.pexels.com/video-files/8940053/8940053-uhd_2732_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/6469640/6469640-uhd_1440_2116_30fps.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length); // loop back
  };

  // ✅ Helper to add space in camel-case brand names
  const formatBrandName = (name) =>
    name.replace(/([a-z])([A-Z])/g, "$1 $2");

  return (
    <>
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white py-12 px-4">
        {/* Background Video */}
        <video
          key={currentVideo} // forces re-render when video changes
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Overlay */}
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
                  {formatBrandName(brand)}
                </button>
              ))}
            </div>
          )}

          {/* Step 2 - City Selection */}
          {selectedBrand && !selectedCity && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Choose a City for {formatBrandName(selectedBrand)}
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

              {/* Back to brand selection */}
              <button
                className="mt-6 px-6 py-3 bg-black text-white hover:bg-gray-700 transition"
                onClick={() => setSelectedBrand("")}
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 3 - Show Addresses */}
          {selectedBrand && selectedCity && (
            <div className="mt-8 max-w-lg w-full bg-white text-black rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                {formatBrandName(selectedBrand)} Boutiques in {selectedCity}
              </h3>

              {locations[selectedBrand][selectedCity] &&
              locations[selectedBrand][selectedCity].length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {locations[selectedBrand][selectedCity].map(
                    (address, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-xl bg-white shadow-lg hover:shadow-2xl border border-gray-200 hover:border-red-500 transition-all duration-300"
                      >
                        <div className="flex items-start gap-2">
                          <span className="text-red-600">📍</span>
                          <p className="text-gray-600 font-semibold text-lg">
                            {address}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-40">
                  <p className="text-black text-xl animate-pulse font-semibold">
                    Coming Soon...
                  </p>
                </div>
              )}

              {/* Back to city selection */}
              <button
                onClick={() => setSelectedCity("")}
                className="mt-6 mr-4 px-8 py-3 bg-gray-200 text-black hover:bg-gray-300 transition"
              >
                ← Back
              </button>
            </div>
          )}

          <div className="w-full flex justify-start mt-16">
            <Link
              to="home"
              className="p-3 bg-white text-black flex rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              <HomeIcon /> <span className="ml-2">Home</span>
            </Link>
          </div>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}
