import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import { ArrowBigLeftDash } from "lucide-react";

export default function ItemDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  const [mainImage, setMainImage] = useState(item?.images?.[0] || "");

  if (!item) {
    return (
      <div className="p-6">
        <p className="text-red-500">Item not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div>
          <img
            src={mainImage}
            alt="Main"
            className="w-full h-[500px] object-cover shadow-md mb-4 transition-all duration-300"
          />

          <div className="grid grid-cols-4 gap-3">
            {item.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`h-36 w-full object-cover cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === img ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="mt-24">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 bg-gray-500 hover:bg-gray-600 text-white px-5 py-3 transition"
          >
            <ArrowBigLeftDash/>
          </button>

          <h1 className="text-2xl text-white font-bold mb-3">{item.title}</h1>
          <p className="text-gray-300 mb-6">{item.description}</p>

          {/* Availability */}
          <div className="mb-4">
            <label className="block font-medium text-white mb-2">Boutique</label>
            <select className="border px-5 py-3 w-full text-white bg-black">
              <option >Jeddah</option>
              <option>Riyadh</option>
              <option>Dammam</option>
            </select>
          </div>

         <div className="mb-4">
      {/* <label className="block font-medium mb-2">Make An Appointment</label> */}
      <button
        onClick={() => navigate("/appointment")}
        className="border  px-5 py-4 w-full  text-white bg-red-800 hover:bg-red-700 transition"
      >
        Make an Appointment
      </button>
    </div>

          {/* Price */}
          {item.price && (
            <p className="text-2xl font-semibold text-green-600 mb-6">
              ${item.price}
            </p>
          )}

          {/* Button */}
          <button
          onClick={() => navigate("/contact")}
          className="bg-red-800 hover:bg-red-700 text-white px-5 py-4  transition w-full">
            Contact Us
          </button>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}
