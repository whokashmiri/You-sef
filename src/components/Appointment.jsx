import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Header from "./Header";
import Footer from "./Footer";
import NewsletterSection from "./NewsletterSection";

export default function Appointment() {
  const cities = [
    "Riyadh", "Jeddah", "AlKhobar", "Mekkah"
  ];

  const brands = ["Graff", "Hublot", "Azza Fahmy", "Gerald Charles", "Saint Louis", "Chopard"];

  const locations = {
    Graff: {
      Riyadh: ["Kingdom Centre, Olaya St", "Panorama Mall, Takhassusi St"],
      Jeddah: ["Red Sea Mall", "Boulevard, Prince Saud Al Faisal St"],
      Dammam: ["Al Rashed Mall", "Othaim Mall"],
    },
    Hublot: {
      Riyadh: ["Centria Mall", "Riyadh Park Mall"],
      Jeddah: ["Stars Avenue", "Mall of Arabia"],
      Dammam: ["Dareen Mall", "Marina Mall"],
    }
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      { ...formData, city: selectedCity, brand: selectedBrand, location: selectedLocation },
      "YOUR_USER_ID"
    )
    .then(() => alert("Appointment request sent successfully!"))
    .catch(() => alert("Error sending request."));
  };

  const LuxuryDropdown = ({ label, options, value, onChange }) => (
    <div className="relative">
      <button
        type="button"
        className="w-full px-4 py-3 bg-white/80 text-black shadow-lg hover:bg-white transition"
        onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
      >
        {value || `Select ${label}`}
      </button>
      <AnimatePresence>
        {openDropdown === label && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute w-full mt-2 bg-black shadow-xl overflow-hidden z-50"
          >
            {options.map((opt, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onChange(opt);
                  setOpenDropdown(null);
                }}
                className="px-1 py-3 hover:bg-red-500 cursor-pointer transition"
              >
                {opt}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <Header />
      <div className="relative min-h-screen  w-full overflow-hidden">
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/8331939/8331939-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex flex-col mt-30 items-center justify-center min-h-screen p-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
          >
            <h1 className="text-4xl font-bold text-center mb-8">Book an Appointment</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <LuxuryDropdown
                label="City"
                options={cities}
                value={selectedCity}
                onChange={setSelectedCity}
              />
              <LuxuryDropdown
                label="Brand"
                options={brands}
                value={selectedBrand}
                onChange={setSelectedBrand}
              />
              {selectedCity && selectedBrand && locations[selectedBrand]?.[selectedCity] && (
                <LuxuryDropdown
                  label="Location"
                  options={locations[selectedBrand][selectedCity]}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                />
              )}

              <div className="">
                <p className="mb-2 text-lg">Personal Information</p>
                <div className="flex gap-6 mb-4">
                  {["Mr", "Mrs"].map((title) => (
                    <label key={title} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="title"
                        value={title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                      {title}
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3  text-white border-1"
                    required
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 text-white border-1"
                    required
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 text-white border-1"
                    required
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3  text-white border-1"
                    required
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <textarea
                  placeholder="Message"
                  className="mt-4 p-3 w-full text-white border-1"
                  rows="4"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="text-center">
                <p>Thank You! We well contact you soon</p>
                <button
                  type="submit"
                  className="bg-red-800 hover:bg-red-700 px-8 py-3  font-semibold text-lg transition"
                >
                  Submit Appointment
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </>
  );
}
