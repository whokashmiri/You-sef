/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Header from "./Header";

export default function AboutUs() {

  return (
    <>
      <Header />

      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="https://videos.pexels.com/video-files/856191/856191-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-20 mt-20 z-10">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6"
          >
            About <span className="text-yellow-500">AU Beta Arabia</span>
          </motion.h1>

          <motion.h5
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-3xl max-w-3xl mb-10"
          >
            Based in the heart of the Kingdom of Saudi Arabia, AU Beta Arabia
            offers a curated selection of premium timepieces and exquisite
            jewelry. Our philosophy is built on precision, elegance, and
            timeless design. We partner exclusively with the world’s most
            prestigious brands such as Graff, Hublot, and Luvor to bring you
            unmatched craftsmanship and heritage.
          </motion.h5>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-2 mb-10">
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
  transition={{ delay: 0.3 + i * 0.2, duration: 0.2 }}
  className="overflow-hidden rounded-2xl shadow-lg bg-white flex items-center justify-center"
>
  <img
    src={img}
    alt="Luxury item"
    className="w-full h-40 object-contain scale-110 transform hover:scale-105 transition duration-700"
  />
</motion.div>

            ))}
          </div>

          {/* Video Showcase */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-lg"
              src="https://videos.pexels.com/video-files/8322342/8322342-uhd_2732_1440_25fps.mp4"
              autoPlay
              loop
              muted
            ></motion.video>

            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold">
                Craftsmanship Beyond Time
              </h2>
              <h5 className="text-3xl text-white">
                Every piece in our collection reflects the dedication of master
                artisans who blend tradition with modern innovation. From the
                delicate placement of diamonds to the intricate engineering of
                Swiss movements, each creation is a masterpiece.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />
      <Footer />
    </>
  );
}
