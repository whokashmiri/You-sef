/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import Header from './Header';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';

const OurBrands = () => {
  return (
    <div>
        <Header/>
         <div className="grid md:grid-cols-3 mt-20 gap-2 mb-10">
            {[
              "https://www.attarunited.com/wp-content/uploads/2020/03/lgr.jpg",
  "https://www.attarunited.com/wp-content/uploads/2025/01/new_hublot_dark_logo.jpg",
  // "https://cdn.brandfetch.io/id7yvOb0kK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
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
          <NewsletterSection/>
          <Footer/>
    </div>
  )
}

export default OurBrands