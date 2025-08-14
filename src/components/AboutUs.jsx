/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import Header from "./Header";



export default function AboutUs() { 
  
return (
  <>
  <Header/>


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

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl leading-relaxed mb-10"
        >
          Based in the heart of the Kingdom of Saudi Arabia, AU Beta Arabia
          offers a curated selection of premium timepieces and exquisite
          jewelry. Our philosophy is built on **precision, elegance, and
          timeless design**. We partner exclusively with the world’s most
          prestigious brands such as Graff, Hublot, and Luvor to bring you
          unmatched craftsmanship and heritage.
        </motion.p>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            "https://www.hublot.com/sites/default/files/styles/global_laptop_1x/public/2024-04/UEFA-Euro-2024---Kylian-Mbappe-square.jpg?itok=11mFfnUe",
            "https://luvor.com/wp-content/uploads/2021/11/fa.jpg",
            "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dwf0c5622a/Homepage%20Images/July_25/Classic-Graff-Homepage-1080x1350px.jpg",
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
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-700"
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
            src="https://videos.pexels.com/video-files/2774540/2774540-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
            muted
          ></motion.video>

          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold">
              Craftsmanship Beyond Time
            </h2>
            <p className="text-lg text-gray-300">
              Every piece in our collection reflects the dedication of master
              artisans who blend tradition with modern innovation. From the
              delicate placement of diamonds to the intricate engineering of
              Swiss movements, each creation is a **masterpiece**.
            </p>
          </div>
        </div>
      </div>
    </section>
<NewsletterSection/>
<Footer/>
</>
); 
}




