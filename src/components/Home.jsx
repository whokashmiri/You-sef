import Azza from "../components/Azza"
import AzzaShow from "../components/AzzaShow"
import BrandsGrid from "../components/BrandsGrid"
import Footer from "../components/Footer"
import Graff from "../components/Graff"
import GraffShow from "../components/GraffShow"
import Header from "../components/Header"
import Hero2 from "../components/Hero2"
import Hoblot from "../components/Hublot"
import Luvor from "../components/Luvor"
import LuvorShow from "../components/LuvorShow"
import MilleMigliaBanner from "../components/MilleMigliaBanner"
import NewsletterSection from "../components/NewsletterSection"
import ProductCarousel from "../components/ProductCarousel"
import ProductCarousel2 from "../components/ProductCarousel2"

import StLiuos from "../components/StLiuos"
import StLiuosShow from "../components/StLiuosShow"
const Home = () => {
  return (
    <>
    
    <Header/>
   <Hero2/>
   <BrandsGrid/>
    <MilleMigliaBanner/>
   <ProductCarousel2/>
   <Hoblot/>
    <ProductCarousel/>
    <Graff/>
    <GraffShow/>
    <Luvor/>
    <LuvorShow/>
    <StLiuos/>
    <StLiuosShow/>
    <Azza/>
    <AzzaShow/>
    <NewsletterSection/> 
    <Footer/>
    </>
  )
}

export default Home