import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import { HublotPage } from './components/HublotPage'
import GraffPage from './components/GraffPage'
import ChopardPage from './components/ChopardPage'
import ItemDetails from './components/ItemDetails'
import ContactUs from './components/Contact'
import ChopardJewelry from './components/ChopardJewelry'
import AzzaJewelry from './components/AzzaJewelry'
import GraffJewelry from './components/GraffJewelry'
import AboutUs from './components/AboutUs.jsx'
import StLiuosShowPage from './components/StShowPage.jsx'
import LuvorShowPage from './components/LuvorShowPage.jsx'
import FindBoutique from './components/FindBoutique.jsx'
import Appointment from "./components/Appointment.jsx"
import OurBrands from './components/OurBrands.jsx'






function App() {

  return (
   <>
   <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>

      <Route path="/home" element={<Home />} />
      <Route path="/hublot" element={<HublotPage />} />
      <Route path="/graff" element={<GraffPage />} />
      <Route path="/chopard" element={<ChopardPage/>} />
       <Route path="/item/:id" element={<ItemDetails />} />

        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/choprdjewelry" element={<ChopardJewelry/>} />
        <Route path="/azza" element={<AzzaJewelry/>} />
        <Route path="/graffjewelry" element={<GraffJewelry/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/st" element={<StLiuosShowPage/>} />
        <Route path="/gerald" element={<LuvorShowPage/>} />
        <Route path="/find" element={<FindBoutique/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/ourbrands" element={<OurBrands/>} />








      {/* <Route path="/odoo-integration" element={<OodoIntegration />} /> */} 
   </Routes>
   

   {/* <Hero/>
   <Jewellary/>
   <ImageVideoSection/>
   <PreciousTimeSection/>
  
   <Luc/>
   <ProductCarousel3/>
    <ExploreCreations/>
    <ProductCarousel4/>
    <MaisonChopard/>
    // <ServicesSection/>*/}
    
   </>
  )
}

export default App
