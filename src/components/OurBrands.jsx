/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const OurBrands = () => {
  return (
    <div>
      <Header />
      
      {/* Brand Logos */}
      <div className="grid md:grid-cols-3 mt-20 gap-2 mb-10">
        {[
          "https://www.attarunited.com/wp-content/uploads/2020/03/lgr.jpg",
          "https://www.attarunited.com/wp-content/uploads/2025/01/new_hublot_dark_logo.jpg",
          "https://www.attarunited.com/wp-content/uploads/2020/11/gf-1.jpg",
          "https://www.attarunited.com/wp-content/uploads/2024/08/LOGO05.jpg",
          "https://www.attarunited.com/wp-content/uploads/2024/08/LOGO04-3.jpg",
          "https://www.attarunited.com/wp-content/uploads/2024/08/llg.jpg"
        ].map((img, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img}
              alt="Luxury item"
              className="w-full h-40 object-contain transform hover:scale-105 transition duration-700 filter invert brightness-0.7"
            />
          </motion.div>
        ))}
      </div>

      {/* Extra Images Below */}
      <div className="grid md:grid-cols-3 gap-4 mb-16 px-4">
        {[
          "https://www.hublot.com/sites/default/files/styles/global_medium_desktop_1x/public/2020-03/riyadh-hublot-boutique-indoor-2.jpg?itok=_IsAsg9F",
          "https://www.graff.com/on/demandware.static/-/Sites/default/dw549a6dc7/Olaya-store-finder-2.jpg",
          "https://www.dayandnightmagazine.com/wp-content/uploads/2021/04/Chopard-Boutique-Al-Basateen-0.jpg"
        ].map((img, i) => (
          <motion.div
            key={`extra-${i}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img}
              alt="Extra showcase"
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-700"
            />
          </motion.div>
        ))}
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default OurBrands
